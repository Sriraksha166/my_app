import React, { Component } from 'react';

export default class Class_component extends Component {
  constructor() {
    super(); // Always call super() in the constructor
    this.str = "Good Luckk!!!"; // Declare as an instance property
  }

  render() {
    return (
      <div>
        <h1>{this.str}</h1>
      </div>
    );
  }
}
