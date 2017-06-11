'use strict';

var res = 
    {
        document: {
            title: '投投的相册',
        },
        components: 
        [
            {
                template: 'SimpleTitle',
                id: 1,
                data: {
                    title: '透透美美',
                }
            },
            {
                template: 'SimpleList',
                id: 2,
                data: [
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/1.jpg',
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/2.jpg',
                    'http://ec2-52-15-52-128.us-east-2.compute.amazonaws.com/static1/img/david/3.jpg',
                ]
            }
        ]
    };

module.exports = app => {
  class AlbumController extends app.Controller {
    * album() {
        if (this.ctx.params.id == 1) {
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
