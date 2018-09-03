import React, { Component } from 'react';

import {connect} from "react-redux"
import {increment} from "./ducks/counter"

class Counter extends Component {
  render() {
    const {currentValue, message, increment} = this.props
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{message}</h1>
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => null}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => null}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props.state, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

function getDataFromAppState(appState) {
  return {
    message: "sup",
    currentValue: appState.currentValue,
    state: appState
  }
}

const actionOutputs = {
  increment: increment
}

const connected = connect(getDataFromAppState, actionOutputs)



export default connected(Counter);