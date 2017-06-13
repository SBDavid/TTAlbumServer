'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497146302358_9478';

  // add your config here

  // 跨域设置
  config.security = {
    domainWhiteList: ['http://localhost:3000']
  }
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }

  return config;
};
