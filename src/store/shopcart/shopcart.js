import { reqShopCartAddress,reqDeleteCartList,reqCheckedCon } from "@/api";

const state = {
    shopCartList:[]
};

const mutations = {
    GETREQSEARCH(state,shopCartList){
        state.shopCartList =  shopCartList;
    },
};

const actions = {
    async getReqShopCart(commit){
        //result是一个promise对象
        let result = await reqShopCartAddress();
        if(result.code ===200){
            commit("GETREQSEARCH",result.data);
        }
    },
    async getReqDelCart({commit},skuId){
        //result是一个promise对象
        let result = await reqDeleteCartList({skuId});
        if(result.code ===200){
            return "成功";
        }else{
            return Promise.reject(new Error("failed"));
        }
    },
    async changeCheckedCon({commit},{skuId,isChecked}){
        let result = await reqCheckedCon(skuId,isChecked);
        if(result.code ===200){
            return "成功";
        }else{
            return Promise.reject(new Error("failed"));
        }
    },
    delAllCheckedCart({dispatch,getters}){
        let list = getters.shopCartList.cartInfoList;
        let PromiseAll = [];
        list.forEach(element => {
            if(element.isChecked==1){
                let proExg = dispatch('getReqDelCart',element.skuId);
                PromiseAll.push(proExg);
            }
        });
        return Promise.all(PromiseAll);
    },
    changeAllCheckedCart({dispatch,getters},eveIsChecked){
        let list = getters.shopCartList[0].cartInfoList;
        let PromiseAll = [];
        list.forEach(element => {
            if(element.isChecked!=eveIsChecked){
                let proExg = dispatch('changeCheckedCon',{skuId:element.skuId,isChecked:element.isChecked});
                PromiseAll.push(proExg);
            }
        });
        return Promise.all(PromiseAll);
    }
};

const getters = {
    shopCartList(state){
        return state.shopCartList[0]||{};
    },
}

export default{
    state,
    mutations,
    actions,
    getters
}