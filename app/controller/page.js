'use strict';

module.exports = app => {
    class PageController extends app.Controller {
        // 获取页面组件构成
        * get() {
            const url = this.ctx.request.url;
            
            const res = yield this.ctx.service.page.get(url);

            if(!res.success) {
                this.ctx.response.status = 404;
            }
            this.ctx.body = res;
        }
    }
    return PageController;
};
