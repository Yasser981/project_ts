// @ts-ignore
import {createStore} from "vuex";
import * as PosService from "../service/post"


const store = createStore({
    state:{
        title: "Vuex Store",
        data: '',
    },
    getters:{
        SavePost(state) {
            return state.data;
        }
    },
    mutations:{
        GET_POST(state,data) {
            state.data.push(data);
        }
    },
    actions:{
        async GetPost({commit}, title) {
            const {data} = await PosService.getPots();
            commit('GET_POST', data);
        }
    }
});

export default store;
