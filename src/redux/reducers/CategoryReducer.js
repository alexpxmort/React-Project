import {CategoryActionTypes} from '../actions/types'
const INITIAL_STATE = {
    categories:[]
}

export default   (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CategoryActionTypes.GET_CATEGORIES:
            return {...state,categories:action.payload}
            break;
        default:
            return state;
            break;
    }
}