import React, { Component } from "react";

class CounterClass extends Component{
    constructor(){
        super();
        this.increment=this.increment.bind(this);
        this.state={
            number:0
        }
    }

    increment(){
        this.setState({
            number:this.state.number + 1
        })
    }
  

    render(){
        return(
            <div>
                <h1>Counter from Class Component= {this.state.number}</h1>
                <button onClick={this.increment}>Increament</button>
            </div>
        )
    }

}
export default CounterClass;

