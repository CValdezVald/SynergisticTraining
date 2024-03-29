import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {connect} from "react-redux";


let Header = (props)=>{

    console.log(props.user)
    let userName = props.user.userName;

    let navigate = useNavigate();

    let func = ()=>{
        navigate('/about/2500');
    }

    return(
        <>
            Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink> 


                <button className="button" onClick={func} >Go To About</button>
            </div>
        </>
    )
}

//subscribe - mapStateToProps same as mapStoreToProps
//publisher - mapDispatchToProps same as send new state to store

let mapStateToProps = (state)=>{
    return{
        user: state.userReducer
    }
}

export default connect(mapStateToProps,null)(Header);

// export default r