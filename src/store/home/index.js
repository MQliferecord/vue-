import { reqCategryList,reqbannerMock,reqfloorMock } from "@/api";

const state = {
    categoryList:[],
    bannerMock:[],
    floorMock:[],
};

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    REQBANNERMOCK(state,bannerMock){
        state.bannerMock = bannerMock;
    },
    REQFLOORMOCK(state,floorMock){
        state.floorMock = floorMock;
    }
};

const actions = {
    async categoryList(commit){
        //result是一个promise对象
        let result = await reqCategryList();
        if(result.code ===200){
            commit("CATEGORYLIST",result.data);
        }
    },
    async bannerMock(commit){
        let result = await reqbannerMock();
        if(result.code === 200){
            commit("REQBANNERMOCK",result.data);
        }
    },
    async floorMock(commit){
        let result = await reqfloorMock();
        if(result.code === 200){
            commit("REQFLOORMOCK",result.data);
        }
    }

};

const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}