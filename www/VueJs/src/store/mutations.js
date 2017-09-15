import * as types from './types';

const actions={
  [types.SHOWLOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDELOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.SHOWNAV]:(state)=>{
    state.bNav=true;
  },
  [types.HIDENAV]:(state)=>{
    state.bNav=false;
  },
  [types.SHOWFOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDEFOOT]:(state)=>{
    state.bFoot=false;
  }
};
export  default actions;