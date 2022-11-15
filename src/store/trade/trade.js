import { reqAddressInfo,reqTradeInfo } from "@/api";

const state={
    address:[],
    orderInfo:{}
};
const mutations={
    GETADDRESSINFO(state,address){
        state.address = address;
    },
    GETTRADEINFO(state,addrInfo){
        state.orderInfo = orderInfo;
    }
};
const actions={
    async getAddressInfo({commit}){
        let result = await reqAddressInfo();
        if(result.code ==200){
            commit('GETADDRESSINFO',result.data);
        }
    },
    async getTradeInfo({commit}){
        let result = await reqTradeInfo();
        if(result.code == 200){
            commit('GETTRADEINFO',result.data);
        }
    }
};
const getters={};
export default{
    state,
    mutations,
    actions,
    getters
}