
var urlmap_Table = {
    url:'/album/1',
    pageId: "1",
    onlineDate: 1497585454178,
    offlineDate: 1497585454178 
},

var page_Model = {
    id:'1',
    repository: 
    [
        {
            version: '1',
            message: '变更提交注释',
            createdTime: 1497585454178,
            head: {
                title: {
                    titleText:'静态标题',
                    apiTitle: {
                        // 动态数据部分
                        service:'album',
                        function: 'getTitlep',
                        params: {
                            userName: 'username',
                        }
                    }
                },
                meta: [],
            },
            body: {
                node:[
                    {
                        sort: 1,
                        templateId: 'nid123',
                        data: {
                            /*静态数据*/
                        },
                        apiData: {
                            // 动态数据部分
                            service:'album',
                            function: 'getAlbum',
                            params: {
                                userName: 'username',
                                albumName: 'albumname',
                            }
                        }
                    },
                ]
            }
        }
    ]
    
}

var template_model = {
    id: 'nid123',
}