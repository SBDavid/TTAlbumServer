'use strict';

module.exports = app => {
  app.get('/album/:id', 'album.album');
  app.get('/page/:pageId', 'page.get');
};
