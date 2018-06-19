// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 设置false 以阻止 Vue在启动时生成生产提示
Vue.config.productionTip = false

//  eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
  // el：一个在页面上已存在的 DOM 元素，作为 Vue 实例的挂载元素，这里是 '#app'，
  // 我们可以从 index.html 找到该元素；
  el: '#app',
  // components：包含用到组件的对象，这里是 { App }，App 是从 App.vue 引入的默认值；
  // { App } 是 { App: App } 的缩写
  // ES6（ECMAScript 6）允许在对象中直接写变量，此时的属性名为变量名，属性值为变量的值。
  components: { App },
  //  template：一个会替换挂载元素的字符串模板，
  // 因为我们在 components 定义过 App 组件，所以可以在这里使用 '<App/>'
  template: '<App/>'
})
