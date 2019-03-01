import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        key: '',
      },
    }
  }

  clearAll = e => {
    e.preventDefault();
    this.setState({
      items: [],
    })
  }

  removeItem = e => {
    e.preventDefault();

    this.state.items.pop();
    const currentArray = this.state.items

    this.setState({
      items: currentArray,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem;

    this.state.items.push(newItem);
    const newArray = this.state.items

    this.setState({
      items: newArray,
      currentItem: {key: Date.now()}
    })
  }

  render() {
    return (
      <MDBContainer fluid className="App heavy-rain-gradient">
        <MDBRow center >
          <MDBCol size="4" className="mt-5">
            <TodoList
              addItem={this.addItem}
              removeItem={this.removeItem}
              clearAll={this.clearAll}

            />
            </MDBCol>
          </MDBRow>
        <MDBRow center className="mt-5">
          <MDBCol size="4" className=" mb-5">
            <TodoItems entries={this.state.items} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default App