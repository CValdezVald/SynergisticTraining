//the centralized state, or collection of reducers
//receives dispatched actions, reads actionj type and sends data to be generated on resspective reducers
//one application is allowed to have one store and one reducer
// but we need many reducers we neeed to combine them using hooks

import {combineReducers, applyMiddleware} from "redux";
import {configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk"; //used to pipeline the dispatched objects and give us a feeling of sync execution

import userReducer from "./user/userreducer";

const logger = ()=>(next)=>(action)=>{

    console.log("action logger store ",action)
    next(action);

}

// const rootReducer = userReducer;
const rootReducer = combineReducers({
    userReducer// userReducer : userReducer
})

export default configureStore(
    {reducer : rootReducer},
    {},//initial state if we want to set from sotre instead of reducer 
    applyMiddleware(logger,thunk)
)