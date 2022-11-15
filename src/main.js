import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/component/TypeNav'
import store from './store'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import {Button,MessageBox} from 'element-ui';

Vue.component(Carousel.name,Carousel);
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination);
Vue.component(Button.name,Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import 'swiper/css'
import '@/mock/mockServe';
import * as API from '@/api';
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  //注册vuex仓库
  store
}).$mount('#app')
