import { CHANGE_USER_NAME, GET_ALL_USERS } from "./actionTypes";


export const changeMyName = ()=>{
    console.log('inside getUserAllData');
    return (dispatch, getState)=>{
        //Async actions
       setTimeout(function(){
           dispatch({type:CHANGE_USER_NAME});
       }
       ,1000)

    }
}