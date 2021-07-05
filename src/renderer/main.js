import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import SerialPortUtils from './components/Utils/SerialPortUtils'
import ElementUI from 'element-ui';
//引入elementui
import 'element-ui/lib/theme-chalk/index.css';

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
// 导入Element-UI 语言包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.serialport = Vue.prototype.$serialport = SerialPortUtils


const i18n = new VueI18n({
    locale: "zh-CN",
    fallbackLocale: 'zh-CN', //没有英文的时候默认中文语言
    silentFallbackWarn: true, //抑制警告
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': Object.assign(require('./components/locale/zh'), zhLocale),
        'en-US': Object.assign(require('./components/locale/en'), enLocale)
    }
})
Vue.use(ElementUI, { //use element-ui
    size: 'large',
    i18n: (key, value) => i18n.t(key, value)
});

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    i18n,
    store,
    template: '<App/>'
}).$mount('#app')