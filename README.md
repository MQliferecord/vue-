# components
放置非路由组件
## Footer
## Header

# API
## request.js
对axios进行二次封装
引入nprogress库添加进度条样式
## index.js
对api的接口进行集体的管理
并且原始接口存在跨域问题，目前解决跨域问题的集中主流方法分别是：JSONP，CORS，代理。
项目使用的解决跨域办法是利用webpack的代理服务器进行跨域。

# store
放置vuex相关配置
## index.js
vuex进行模块是开发，该js进行整体相关数据的管理注册


# pages
文件夹放置路由组件
## Home
### index.vue
整体的Home页面的布局
完成Home页面的相关组件的整体摆放
当项目很小的时候完全可以在组件的生命周期函数中发请求
当项目很大的时候，往往使用axios.get('XXX')会导致更换接口时很麻烦，所以往往将接口进行统一管理


# router
给pages内的路由组件的页面进行整体登记

# app.vue
给components注册和router-view布局

# main.js
给app.vue和pages内的全局组件注册

