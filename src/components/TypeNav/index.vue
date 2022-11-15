<!--登记为全局组件-->
<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch" >
            <!--一级分类-->
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryID"
              :class="{ cur: currentIndex === index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a :data-categoryName="c1.categoryName" :category1ID = "c1.categoryID">{{ c1.categoryName }}</a>
              </h3>
              <div class="item-list clearfix" :style="{display:currentIndex===index}">
                <!--二级分类-->
                <div
                  class="subitem"
                  v-for="(c2) in c1.categoryChild"
                  :key="c2.categoryID"
                >
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName" :category2ID = "c2.categoryID">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <!--三级分类-->
                      <em
                        v-for="(c3) in c2.categoryChild"
                        :key="c3.categoryID"
                      >
                        <a :data-categoryName="c3.categoryName" :category3ID = "c3.categoryID">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapstate } from "vuex";
import throttle from 'node_modules/lodash';

export default {
  name: "TypeNav",
  data: {
    currentIndex: -1,
    show:true,
  },
  mounted() {
    //通知vuex发请求，获取数据，存储在仓库中
    if(this.$route.path!='/home'){
      this.show = false;
    }
  },
  computed: {
    ...mapstate({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    /** 
    *一级分类索引,添加节流
    */
    changeIndex:throttle(function(index) {
      this.currentIndex = index;
    }),
    leaveIndex(){
      this.currentIndex = -1;
      if(this.$route.path!='/home'){
        this.show = false;
      }
    },
    /**
     * 页面路由跳转，传参
     */
    goSearch(event){
      let element = event.target;
      let {categoryname,category1ID,category2ID,category3ID} = element.dataset;
      if(categoryname){
        let location = {
          name:'search',
          query,
          params,
        };
        let query = {
          categoryName:categoryname,
          category1ID,
          category2ID,
          category3ID,
          };
        if(category1ID){
          query.category1ID = category1ID;
        }
        else if(category2ID){
          query.category2ID = category2ID;
        }
        else if(category3ID){
          query.category3ID = category3ID;
        }
        if(this.$route.params){
          location.params = params;
        }
        location.query = query;
        this.$router.push(location);
      }
    },
    enterShow(){
      this.show = true;
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    //过渡动画开始
    .sort-enter{
      height:0px;
    }
    //过渡动画结束
    .sort-enter-to{
      height:461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>