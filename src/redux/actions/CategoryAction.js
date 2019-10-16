import {getCategories} from '../../firebase/firebase.utils'
import {CategoryActionTypes, CardActionTypes} from './types'
import _ from 'lodash';

export const getAllCategories =()=>{
    return dispatch =>{
        getCategories().then(res=>{
            const data = _.map(res.data());

            getCategoriesSucess(dispatch,data);

        }).catch(err=> getCategoriesErr(dispatch,err))
    }
}

const getCategoriesSucess = (dispatch,payload) =>{
    dispatch({
        type:CategoryActionTypes.GET_CATEGORIES,
        payload
    })
}


const getCategoriesErr = (dispatch,err) =>{
    dispatch({
        type:CategoryActionTypes.GET_CATEGORIES_ERR,
        payload:err
    })
}