//creation of action object essentially to add user to store when it is invoked on ui

import * as ActionTypes from "../actionTypes";

//action is the object that we'll dispatch from user component to store/reducer
let addUserToStore = (user)=>{
    return {
        type : ActionTypes.USER_ADDUSER,
        payload : user
    }
}