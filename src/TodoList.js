import React, { Component, Fragment } from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";

class TodoList extends Component {


  render() {
    return (
      <Fragment>
            <MDBBtn outline color='primary' onClick={this.props.addItem}>
              <MDBIcon icon="plus-square" className="fa-lg mr-2 green-text"/> Add
            </MDBBtn>
            <MDBBtn outline color='orange' onClick={this.props.removeItem}>
            <MDBIcon icon="minus-square" className="fa-lg mr-2 pink-text"/> Remove
            </MDBBtn>
            <MDBBtn outline color='danger' onClick={this.props.clearAll}>
            <MDBIcon icon="trash-alt" className="fa-lg mr-2 red-text"/> Clear
            </MDBBtn>
      </Fragment>
    )
  }
}

export default TodoList