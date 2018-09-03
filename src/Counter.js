import React, { Component } from 'react';

import {connect} from "react-redux"
import {increment, decrement, undo, redo} from "./ducks/counter"

class Counter extends Component {
  render() {
    const {currentValue, message, increment, decrement, undo, state, redo} = this.props
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
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={state.previousValues.length === 0
              ?
                true
              :
                false}
              onClick={() => undo()}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={state.futureValues.length === 0
              ?
                true
              :
                false}
              onClick={() => redo()}
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
  increment: increment,
  decrement: decrement,
  undo: undo,
  redo: redo
}

const connected = connect(getDataFromAppState, actionOutputs)



export default connected(Counter);