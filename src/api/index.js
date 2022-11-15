//API统一管理模块
import request from '@/api/request';
import requestMock from '@/api/requestMock';


//三级联动接口

export const reqCategryList = ()=>request({url:'/product/getBaseCategoryList',method:'get'});

export const reqbannerMock = ()=>requestMock({url:'/banner',method:'get'});
export const reqfloorMock = ()=>requestMock({url:'/floor',method:'get'});

export const reqSearchInfo = (params)=>request({url:'/list',method:'post',data:params});
export const reqGoodsInfo = (skuId)=>request({url:`/item/${skuId}`,method:'get'});
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});
export const reqShopCartAddress=()=>request({url:'/cart/cartList',method:'get'});
export const reqDeleteCartList=(skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'delete'});
export const reqCheckedCon=(skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
export const reqPassportCode=(phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'get'});
export const reUserRegister=(data)=>request({url:'/user/passport/register',method:'post',data});
export const reqUserLogin=(data)=>request({url:'/user/passport/login',method:'post',data});
export const reqUserInfo=()=>request({url:'/user/passport/auth/getUserInfo',method:'get'});
export const reqUserLogout=()=>request({url:'/user/passport/logout',method:'get'});
export const reqAddressInfo=()=>request({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
export const reqTradeInfo=()=>request({url:'/order/auth/trade',method:'get'});
export const reqPayInfo=(data,tradeNo)=>request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});
export const reqOrderPayInfo=(orderId)=>request({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
export const reqPayStatusInfo=(orderId)=>request({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});