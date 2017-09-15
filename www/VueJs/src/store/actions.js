import * as types from './types';

const actions={
  showLoading:({commit,state})=>{
    commit(types.SHOWLOADING);
  },
  hideLoading:({commit,state})=>{
    commit(types.HIDELOADING);
  },
  showNav:({commit,state})=>{
    commit(types.SHOWNAV);
  },
  hideNav:({commit,state})=>{
    commit(types.HIDENAV);
  },
  showFoot:({commit,state})=>{
    commit(types.SHOWFOOT);
  },
  hideFoot:({commit,state})=>{
    commit(types.HIDEFOOT);
  },

};
export  default actions;