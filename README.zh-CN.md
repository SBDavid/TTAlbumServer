# TTAlbumServer

本系统是一个基于阿里egg框架的cms系统的后台。使用mongodb作为数据管理。

目前完成的功能：
- page接口：前端传入URL，系统从数据库中查找当前日期对应的页面。
- page版本管理：记录每一次page的编辑过程，在必要的时候可以回退到过去的版本。

待开发的功能：
- 定时上线功能：urlmap模型加入日期和page的绑定，做到在制定的时间更新返回的page数据。
- 项目管理功能：多个页面已项目的形式组织在一起，方便后期页面查找。
- 子页面碎片：增加碎片数据模型，使得多个page能共享一个碎片。

### 本地开发
```bash
$ npm install
$ npm run dev
$ open http://localhost:7001/news
```

### 部署

线上正式环境用 `EGG_SERVER_ENV=prod` 来启动。

```bash
$ EGG_SERVER_ENV=prod npm start
$ sudo EGG_SERVER_ENV=prod nohup node dispatch.js > stdout.log 2> stderr.log &
```

### 单元测试
- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 -单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org