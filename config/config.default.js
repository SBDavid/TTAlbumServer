'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497146302358_9478';

  // add your config here

  // 跨域设置
  config.security = {
    domainWhiteList: [ 'http://localhost:3000', 'http://ec2-13-59-42-252.us-east-2.compute.amazonaws.com', 'http://blog.tangjiawei.cr.cx' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mongoose = {
    url: 'mongodb://ec2-13-59-42-252.us-east-2.compute.amazonaws.com/TTAlbum',
    options: {},
  };

  return config;
};
