

module.exports = app => {
  class PageController extends app.Controller {
        // 获取页面组件构成
    * get() {
      const url = this.ctx.request.path;

      const params = this.ctx.request.query;

      // 页面打开统计
      var record = {
        path: url,
        query: params,
        type: 'pageopen',
        ctime: (new Date()).getTime(),
      }
      yield this.ctx.service.sta.savePageOpen(record);

      const res = yield this.ctx.service.page.get(url);

      if (!res.success) {
        this.ctx.response.status = 404;
        this.ctx.body = res;
        return;
      }

            // 连接页面title动态数据
      if (res.repository.head.title.apiTitle) {
        const resTitle = yield this.ctx.service[res.repository.head.title.apiTitle.service][res.repository.head.title.apiTitle.function](params);
        if (resTitle.success) {
          res.repository.head.title.titleText = resTitle.title;
        }
      }

            // 连接node动态数据
      for (let i = 0; i < res.repository.body.node.length; i++) {
        if (!res.repository.body.node[i].apiData) {
          continue;
        }
        const apiRes = yield this.ctx.service[res.repository.body.node[i].apiData.service][res.repository.body.node[i].apiData.function](params);
        if (apiRes.success) {
          res.repository.body.node[i].apiData.dataSet = apiRes.data;
        }
      }

      this.ctx.body = res;
    }
    }
  return PageController;
};
