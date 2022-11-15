import Mock from 'mockjs';
//json文件默认对外暴露
import banner from './banner.json';
import floor from './floor.json';

//mock函数第一个对象：请求地址；第二个参数：请求数据。
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});