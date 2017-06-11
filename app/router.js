'use strict';

module.exports = app => {
  app.get('/album/:id', 'album.album');
};
