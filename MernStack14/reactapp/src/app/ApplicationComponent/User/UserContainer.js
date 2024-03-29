import User from "./UserComponent"
import { connect } from "react-redux"
import{ addUserToStore } from "../../state/user/useractions"

//subscribing from store
let mapStateToProps = (state)=>{ //store
    return {
        User : state.userReducer
    }
}

//publishing to store
let mapDispatchToStore =(dispatch)=>{
    return{
        addUserToStore: (user)=>{
            dispatch(addUserToStore(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToStore)(User);