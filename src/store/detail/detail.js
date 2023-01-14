import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token'
const state={
    goodsInfo:{},
    uuid_token:getUUID(),
};
const mutations={
    REQGOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo;
    },
};
const actions={
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code === 200){
            commit("REQFLOORMOCK",result.data);
        }
    },
    async addorUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code==200){
            return "成功";
        }else{
            return Promise.reject(new Error('failed'));
        }
    }
};
const getters={
    categoryView(state){
        return state.goodsInfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||{};
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}