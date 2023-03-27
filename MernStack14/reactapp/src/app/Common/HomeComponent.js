import React, { Component, PureComponent,CreateRef, createRef } from "react";
import DefaultApp from "./DefaultComponent";
import { useNavigate } from "react-router-dom";


export default class HomeComponent extends Component{

    constructor(props){
        super();
        //state object allows for manipulation of the dom 
        this.state ={
        title:"Home component Title",
        counter: 20,
        address: "somewhere on Earth",
        session: "react interesting session"
        }
    //ref- keyword
    // for creating and accessing html out of react flow
    // as we dont have any html selectors available in react  so this provides a reference to html
    this.address = createRef();
    this.session = createRef();

    // views is not ready so cant be accessed
    }
   

    componentDidMount(){
    //view is ready, state changes and api call can be made
    }

    //update lifecycle method
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState)
        console.log(nextProps)


        //created a check depending on counter returns false if statement is true
        //prevents update during this count 
        if(nextState.counter >25 && nextState.counter < 30){
            return false;
        }
        return true;
    }






    // titleChange = setInterval(()=>{
    //     this.setState({
    //         title:"New title after 10 seconds"
    //     })
    //     console.log(this.state.title)
    // },10000)

    //passing function through parent 

    //event handlers in react
updateCounter = (counter)=>{
      
    this.setState({
        counter: this.state.counter+counter
    })
    // evt.preventDefault();
    }

// changeHandler =(evt) =>{
//     console.log("changed value ", evt.target.value)
//     evt.preventDefault();
//     // this.state.address = evt.target.value // changing the state of one component value

//     this.setState({
//         address: evt.target.value
//     })
// }
changeHandler_session =(evt) =>{
    console.log("changed value ", evt.target.value)

    let classList = evt.target.classList;

    //using if else with classList names to find specific value being updated
    if(classList.contains("session")){
        this.setState({
            session: evt.target.value
        })
    }else{
        this.setState({
            address: evt.target.value
        })
    }
   
    // this.state.address = evt.target.value // changing the state of one component value
    evt.preventDefault();
}

//stopping default behaviour on button Submit
submitHandler = (evt)=>{
   this.setState({
    address: this.address.current.value,
    session: this.session.current.value
   })
    evt.preventDefault()
}
    
render(){
    return(
       <div>
         <h1>Home Component</h1>

        {/* controlled component div based structure using fluid model*/}
         <div className="cold-md-12 form">
            <div className="col-md-7">
                <label>Address :</label>
                <input type={"text"} value={this.state.address} placeholder="type address" 
                className="col-md-8 address" onChange={this.changeHandler_session}></input>
            </div>
            <div className="col-md-7">
                <label>Session :</label>
                <input type={"text"}  value={this.state.session} placeholder="type session" 
                className="col-md-8 session" onChange={this.changeHandler_session}></input>

            </div>
         </div>
         {/* un-controlled component using forms */}
         <form className="form col-md-12" action="user/saveinfo" onSubmit={this.submitHandler}>
            <section className="col-mid-7">
            <label>Address :</label>
                <input type={"text"} placeholder="type address" 
                className="col-md-8 address" ref={this.address}></input>
            </section>
            <section>
            <label>Session :</label>
                <input type={"text"}   placeholder="type session" 
                className="col-md-8 session" ref={this.session}></input>
            </section>
            <input type={"submit"} value="Submit"></input>
         </form>


        {/* <label>From Home Class Component</label>
            <h4>{this.state.title}</h4>
            sending props to child defaultComponent receives title counter and function updateCounter
            <DefaultApp parentTitle ={this.state.title} counter = {this.state.counter}
            clickCounter ={this.updateCounter}>
            <h1>Child HTML 1 element</h1>
            <h1>Child HTML 2nd element</h1>
          
            </DefaultApp>
             */} 
            </div> 
   

    )
}
}

//component types
// class => component, pure component
// functuional => normal functions/ arrow functions

// creation  lifecylce - /about -> /home
    //a. constructor -> view is not ready render method not called
    //b. render -> first time it creates the v-dom/view
    //b. componentDidMount = view is ready, we can change state and make api calls

//update life cycle - editing state of the component
    //a.shouldComponentUpdate -> lets you decide to show the change state or not on the UI
    //b. render- to show update virtual dom

// destruction life cycle