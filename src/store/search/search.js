import { reqSearchInfo } from "@/api";
const state = {
    searchlist:{}
};

const mutations = {
    GETREQSEARCH(state,searchlist){
        state.searchlist = searchlist;
    }
};

const actions = {
    async getReqSearch({commit},params={}){
        //result是一个promise对象
        let result = await reqSearchInfo(params);
        if(result.code ===200){
            commit("GETREQSEARCH",result.data);
        }
    },
};

const getters = {
    goodsList(state){
        return state.searchlist.goodsList||[];
    },
    trademarkList(state){
        return state.searchlist.trademarkList||[];
    },
    attrsList(state){
        return state.searchlist.attrsList||[];
    },
};

export default{
    state,
    mutations,
    actions,
    getters
}