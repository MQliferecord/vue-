import { reqPassportCode,reqUserLogin,reUserRegister,reqUserInfo, reqUserLogout } from "@/api";
import { setToken,getToken,removeToken } from "@/utils/token";
const state = {
    code:"",
    token:getToken(),
    userInfo:{}
};

const mutations = {
    GETREQCODE(state,code){
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    CLEARUSERINFO(state){
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
};

const actions = {
    async getReqCode({commit},phone){
        //result是一个promise对象
        let result = await reqPassportCode(phone);
        if(result.code ===200){
            commit("GETREQCODE",result.data);
        }else{
            return Promise.reject(new Error("failed"));
        }
    },
    async UserRegister({commit},userInfo){
        let result = await reUserRegister(userInfo);  
        if(result.code === 200){
            return "成功";
        }else{
            return Promise.reject(new Error("failed"));
        } 
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code === 200){
            commit("USERLOGIN",result.data.token);
            setToken(result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error("failed"));
        }
    },
    async userInfo({commit}){
        let result = await reqUserInfo(data);
        if(result.code === 200){
            commit("USERINFO",result.data);
            return "成功";
        }else{
            return Promise.reject(new Error("failed"));
        }
    },
    async userLogout({commit}){
        let result = await reqUserLogout();
        if(result.code===200){
            commit("CLEARUSERINFO");
            return "成功";
        }else{
            return Promise.reject(new Error('failed'));
        }
    }
};

const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
}