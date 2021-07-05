# electron-serialport

> electron-vue串口实例圣墟

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build
# 如果build报错task已存在，那么修改.electron-vue里面的build.js，const tasks = new Listr 改为
# const tasks2 = new Listr 同时将 await tasks 改为await tasks2，如果仍然报错，那么将npm -i multispinner同时
# 在build.js中添加const Multispinner = require('multispinner')即可


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8d4ed60](https://github.com/SimulatedGREG/electron-vue/tree/8d4ed607d65300381a8f47d97923eb07832b1a9a) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
