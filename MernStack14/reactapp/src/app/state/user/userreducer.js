//store: combination of reducers 
// reducers : we'll have reduce functions to create new state 
//initialize the state 

import * as ActionTypes from "../actionTypes";

let initialState = {
    UserName: "Default User Name",
    password:"password",
    Address:"default address",
    Mobile:""
}
//store : upon looking into all dispatched actions will match given action types
//defined in each reducer will return new state on the basis of changes done in switch statement\

let userReducer = (state= initialState, action)=>{
        console.log("UserReducer",action);
        switch (action.type) {
            case ActionTypes.USER_ADDUSER:
                return action.payload
        
            default:
                state
                break;
        }
}