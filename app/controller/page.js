

module.exports = app => {
    class PageController extends app.Controller {
        // 获取页面组件构成
        * get() {
            const url = this.ctx.request.path;

            const params = this.ctx.request.query;

            const res = yield this.ctx.service.page.get(url);

            if (!res.success) {
                this.ctx.response.status = 404;
                this.ctx.body = res;
                return;
            }

            // 连接动态数据
            for (let i=0; i< res.repository.body.node.length; i++) {
                if (!res.repository.body.node[i].apiData) {
                    console.info('continue');
                    continue;
                }
                var apiRes = yield this.ctx.service[res.repository.body.node[i].apiData.service][res.repository.body.node[i].apiData.function](params);
                console.info(apiRes);
                if (apiRes.success) {
                    res.repository.body.node[i].apiData = apiRes.data;
                }
            }

            this.ctx.body = res;
        }
    }
    return PageController;
};
