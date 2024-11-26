import React, { Component } from 'react'

export default class Count extends Component {// class component
    constructor(){
        super()//to execute super class constructor
        this.state={
            count:0
        } //initialize the state 

    }
    incrementCount=() =>
    {
        this.setState({count:this.state.count+1})
    }
    decrementCount=() =>
        {
            this.setState({count:this.state.count-1})
        }
    multCount=() =>
            {
                this.setState({count:this.state.count*2})
            }
    divtCount=() =>
                {
                    this.setState({count:this.state.count/2})
                }
       
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button><br></br><br></br>
        <button onClick={this.decrementCount}>decrement</button><br></br><br></br>
        <button onClick={this.multCount}>Multiplication</button><br></br><br></br>
        <button onClick={this.divtCount}>Division</button><br></br><br></br>
        
      </div>
    )
  }
}
