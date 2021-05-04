import React, { Component } from "react";
import { Cancel as X } from "@styled-icons/material-rounded/Cancel";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteBox(this.props.id);
  }
  render() {
    return (
      <div
        className="Box"
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
          backgroundColor: `${this.props.backgroundColor}`,
        }}
      >
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}

export default Box;
