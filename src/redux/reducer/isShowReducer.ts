import deepcopy from "../deepcopy";

interface Iaction{
  type:string,
  [key:string] : any;
}

interface IpverState{
  isShow:boolean
}

const isShowReducer = (pverState:IpverState = {
  isShow : true
}, action:Iaction) => {

  let newState = deepcopy(pverState)

  switch(action.type){
    case 'close' :
    return  newState.isShow = false
    case 'open' :
    return  newState.isShow = true
    default :
    return pverState
  }
}



export default isShowReducer