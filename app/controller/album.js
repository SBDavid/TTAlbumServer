'use strict';

var res2 = 
    {
        document: {
            title: '透透的相册',
        },
        components: 
        [
            {
                template: 'SimpleTitle',
                id: 1,
                data: {
                    title: '透透的相册',
                }
            },
            {
                template: 'SimpleList',
                id: 2,
                data: [
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com:81/static1/img/david/1.jpg',
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com:81/static1/img/david/2.jpg',
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com:81/static1/img/david/3.jpg',
                ]
            }
        ]
    };

var res1 = 
    {
        document: {
            title: '我的相册',
        },
        components: 
        [
            {
                template: 'SimpleTitle',
                id: 1,
                data: {
                    title: '我的相册',
                }
            },
            {
                template: 'SimpleList',
                id: 2,
                data: [
                    'http://img.zcool.cn/community/01033456f114f932f875a94467912f.jpg@900w_1l_2o_100sh.jpg',
                ]
            }
        ]
    };

var resErr = 
    {
        document: {
            title: 'Api访问错误',
        },
        components: 
        [
            {
                template: 'Error',
                id: 1,
                data: {
                    title: '没有找到相关的Album页面',
                }
            }
        ]
    };

module.exports = app => {
  class AlbumController extends app.Controller {
    * album() {
        if (this.ctx.params.id == 1 || this.ctx.params.id === 'undefined') {
            this.ctx.body = res1;
        }
        else if (this.ctx.params.id == 2) {
            this.ctx.body = res2;
        }
        else if (this.ctx.params.id == 3) {
            this.ctx.body = yield this.ctx.model.Urlmaps.find({});
        }
        else {
            resErr.components[0].data.message = `id: ${this.ctx.params.id}`
            resErr.components[0].data.detail = JSON.stringify(this.ctx.request);
            this.ctx.body = resErr;
        }
    }
  }
  return AlbumController;
};
