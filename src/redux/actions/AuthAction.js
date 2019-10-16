import{AuthActionsTypes} from './types';

export const changeEmail = (email) =>{
    return({
        type:'Teste',
        payload:email
    });
}

export const setCurrentUser = user =>(
    {
        type:AuthActionsTypes.SET_CURRENT_USER,
        payload:user
    }
)