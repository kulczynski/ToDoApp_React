import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem } from "mdbreact";

class TodoItems extends Component {

  render() {
    const todoEntries = this.props.entries;

    let i = 0;

    const listItems = todoEntries.map((item, index) => {
      return (
        <MDBListGroupItem key={item.key} index={index} className="mb-1">
          Task number {i++}
        </MDBListGroupItem>
      )
    })

    return <MDBListGroup className="theList">{listItems}</MDBListGroup>
  }
}

export default TodoItems