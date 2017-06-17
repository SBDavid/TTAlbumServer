
module.exports = app => {
  class album extends app.Service {
    * getAlbum({username, albumname}) {
            // 更具pageId查找page
      const Albums = yield this.ctx.model.Albums.find({ username: username });

      if (Albums.length === 0) {
        return {
          success: false,
          message: 'Username not found',
        };
      }

      const album = Albums[0].albums.filter(album => {
        return album.name.toLowerCase() === albumname;
      });

      if (album.length === 0) {
        return {
          success: false,
          message: 'AlbumName not found',
        };
      }

      return {
        success: true,
        data: album[0],
      };
    }
    }
  return album;
};
