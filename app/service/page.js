
module.exports = app => {
  class page extends app.Service {
    * get(url) {
            // 更具pageId查找page
      let urlmaps = yield this.ctx.model.Urlmaps.find({ url });
            // 筛选日期
      urlmaps = urlmaps.filter(urlMap => {
        const now = (new Date()).getTime();
        if (urlMap.onlineDate && urlMap.onlineDate > 0 && urlMap.onlineDate > now) {
          return false;
        }
        if (urlMap.offlineDate && urlMap.offlineDate > 0 && urlMap.offlineDate < now) {
          return false;
        }
        return true;
      });

            // 判断页面url时候有效
      if (urlmaps.length === 0) {
        return {
          success: false,
          message: `Url not found, url: ${url}`,
        };
      }
      const pages = yield this.ctx.model.Pages.find({ id: urlmaps[0].pageId });
            // 判断页面pages时候有效
      if (pages.length === 0) {
        return {
          success: false,
          message: 'Page not found',
        };
      }

      const repositories = pages[0].repository.sort((r1, r2) => {
        return r1.createdTime < r2.createdTime;
      });

            // 判断页面repository时候有效
      if (repositories.length === 0) {
        return {
          success: false,
          message: 'Repository not found',
        };
      }

      return {
        success: true,
        repository: repositories[0],
      };
    }
    }
  return page;
};
