module.exports = app => {

  app.get('/page/:pageId', 'page.get');

  app.get('/album/:userName/:albumName', 'album.getAlbum');
};
