import { CHANGE_SURNAME, CHANGE_USER_NAME, GET_ALL_USERS, GET_SOMETHING_ELSE } from "./actionTypes";

let rootReducer = (prevState={ user:'anil' },action)=>{
    let newState = prevState

    switch(action.type){
        case CHANGE_USER_NAME:
            newState = {
                ...prevState,
                user:'Rahul'
            }
            break;
        case CHANGE_SURNAME:
                newState = {
                    ...prevState,
                    surname:'Shashtri1'
                }
                break;
        case GET_SOMETHING_ELSE:
            newState = {
                ...prevState,
                surname:'Shashtri2'
            }
            break;
        case GET_ALL_USERS:
            newState = {
                ...prevState,
                userData:action.payload
            }
            break;
        default:

    }
    return newState;
}

export default rootReducer;