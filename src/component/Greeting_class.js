import React, { Component } from 'react'

export default class Greeting_class extends Component {
  render() {
    return (
      <div>
       <h1>Hey!! {this.props.name}</h1> 
       <h1>age {this.props.age}</h1> 
      </div>
    )
  }
}
