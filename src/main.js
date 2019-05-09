// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
/*import '../static/iconfont/iconfont.css'*/
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import axios from 'axios'
import VueAxios from 'vue-axios'

import url from '@/api/api'
import "babel-polyfill"


Vue.config.productionTip = false

Vue.use(VueI18n)

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
}) //兼容i18n 7.x 版本设置

Vue.use(VueAxios,axios)

Vue.prototype.URL = url

require('./mock.js')

require('./assets/css/el-icon.css')

require('./assets/css/font-awesome.css')

const i18n = new VueI18n({
	locale:'zh-CN',//语言标识，通过切换locale的值来实现语言切换，this.$18n.locale
	messages:{
        'zh-CN':Object.assign(
            require('./assets/i18n/cn/common.js'),
            require('./assets/i18n/cn/manage.js'),
            require('./assets/i18n/cn/purchase_order.js'),
            zhLocale,
            require('./assets/i18n/cn/table_exp.js'),
            require('./assets/i18n/cn/need_deal_task.js'),
            require('./assets/i18n/cn/already_done_task.js'),
            require('./assets/i18n/cn/master_slave_table.js')
        ),
        'en-US':Object.assign(
            require('./assets/i18n/en/common.js'),
            require('./assets/i18n/en/manage.js'),
            require('./assets/i18n/en/purchase_order.js'),
            enLocale,
            require('./assets/i18n/en/table_exp.js'),
            require('./assets/i18n/en/need_deal_task.js'),
            require('./assets/i18n/en/already_done_task.js'),
            require('./assets/i18n/en/master_slave_table.js')
        ),
	}
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  data:{
    COLLAPSE:false
  },
  components: { App },
  template: '<App/>'
})
