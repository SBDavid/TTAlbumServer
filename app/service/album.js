
module.exports = app => {
  class album extends app.Service {

    // 获取页面的标题
    * getTitle({username}) {
      return {
        success: true, 
        title:`${username}的相册`
      };
    }

    * getAlbum({ username, albumname }) {
      // 更具pageId查找page
      const Albums = yield this.ctx.model.Albums.find({ username: username });

      if (Albums.length === 0) {
        return {
          success: false,
          message: `Username not found, username: ${username}`,
        };
      }

      const album = Albums[0].albums.filter(album => {
        return album.name.toLowerCase() === albumname;
      });

      if (album.length === 0) {
        return {
          success: false,
          message: `AlbumName not found, albumname: ${albumname}`,
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
