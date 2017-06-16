'use strict';

module.exports = app => {
    class PageController extends app.Controller {
        // 获取页面组件构成
        * get() {
            const pageId = this.ctx.params.pageId;
            // 更具pageId查找page
            var urlmaps = yield this.ctx.model.Urlmaps.find({pageId: pageId});
            // 筛选日期
            urlmaps = urlmaps.filter(urlMap => {
                const now = (new Date()).getTime();
                if (urlMap.onlineDate && parseInt(urlMap.onlineDate) > 0 && parseInt(urlMap.onlineDate) > now) {
                    return false;
                }
                if (urlMap.offlineDate && parseInt(urlMap.offlineDate) > 0 && parseInt(urlMap.offlineDate) < now) {
                    return false;
                }
                return true;
            })

            // 判断页面pageId时候有效
            if (urlmaps.length === 0) {
                this.ctx.response.status = 404;
                return;
            }
            var pages = yield this.ctx.model.Pages.find({id: pageId});
            // 判断页面pages时候有效
            if (pages.length === 0) {
                this.ctx.response.status = 404;
                return;
            }

            var html = pages[0].repository.sort((r1, r2) => {
                return parseInt(r1.createdTime) < parseInt(r2.createdTime);
            });

            this.ctx.body = html;
        }
    }
    return PageController;
};
