import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import "./BoxList.css";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          width: "180",
          height: "190",
          backgroundColor: "purple",
          id: uuid(),
        },
        {
          width: "215",
          height: "205",
          backgroundColor: "darkblue",
          id: uuid(),
        },
      ],
    };
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }
  create(box) {
    this.setState((state) => ({
      boxes: [...state.boxes, box],
    }));
  }
  delete(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        id={box.id}
        deleteBox={this.delete}
      />
    ));
    return (
      <div className="BoxList">
        <NewBoxForm createBox={this.create} />
        <div className="Boxes">{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
