'use strict';

var res = 
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

module.exports = app => {
  class AlbumController extends app.Controller {
    * album() {
        if (this.ctx.params.id == 1) {
            this.ctx.body = res1;
        }
        else if (this.ctx.params.id == 2) {
            this.ctx.body = res;
        }
        else {
            this.ctx.status = 404;
            this.ctx.body = {
                error: "id not found",
            };
        }
    }
  }
  return AlbumController;
};
