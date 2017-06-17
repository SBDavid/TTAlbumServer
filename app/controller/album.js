'use strict';

module.exports = app => {
  class AlbumController extends app.Controller {
    // 获取单个相册
    * getAlbum() {
      const userName = this.ctx.params.userName;
      const albumName = this.ctx.params.albumName;

      const res = yield this.ctx.service.album.getAlbum(userName, albumName);

      if (!res.success) {
        this.ctx.response.status = 404;
      }
      this.ctx.body = res;
    }
  }
  return AlbumController;
};
