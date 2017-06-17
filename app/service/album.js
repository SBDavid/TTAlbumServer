module.exports = app => {
    class album extends app.Service {
        * getAlbum(userName, albumName) {
            // 更具pageId查找page
            var Albums = yield this.ctx.model.Albums.find({username: userName});

            if (Albums.length === 0) {
                return {
                    success: false,
                    message: 'Username not found'
                }
            }

            var album = Albums[0].albums.filter(album => {
                return album.name.toLowerCase() === albumName;
            })

            if (album.length === 0) {
                return {
                    success: false,
                    message: 'AlbumName not found'
                }
            }

            return {
                success: true,
                data: album[0]
            }
        }
    }
    return album;
};