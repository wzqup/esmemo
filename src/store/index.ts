import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        title:'title',
        editShow: false, // 是否显示编辑框
        transMemo: null, // 用来传递数据
        helper: new ActionHelper(),
        filterCateId: -1, // 筛选分类ID
    },
    mutations: {
        showEditMemo(state: any, editMemo: any){
            // 将传递来的 editMemo 设置给 transMemo
            state.transMemo = editMemo;
            state.isShow = true;
        }
    }
})

export default store;