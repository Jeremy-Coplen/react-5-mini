const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const UNDO = "UNDO"
const REDO = "REDO"

export function increment(amount) {
    return {
        type: INCREMENT,
        amount: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount: amount
    }
}

export function undo() {
    return {
        type: UNDO
    }
}

export function redo() {
    return {
        type: REDO
    }
}

const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            const newValue = state.currentValue + action.amount
            const newState = Object.assign({}, state, {currentValue: newValue, previousValues: [state.currentValue, ...state.previousValues]})
            return newState
        }
        case DECREMENT: {
            const newValue = state.currentValue - action.amount
            const newState = Object.assign({}, state, {currentValue: newValue, previousValues: [state.currentValue, ...state.previousValues]})
            return newState
        }
        case UNDO: {
            const newValue = state.previousValues[0]
            const newPreviousValues = state.previousValues.slice(1)
            const newState = Object.assign({}, state, {currentValue: newValue, previousValues: newPreviousValues, futureValues: [state.currentValue, ...state.futureValues]})
            return newState
        }
        case REDO: {
            const newValue = state.futureValues[0]
            const newFutureValues = state.futureValues.slice(1)
            const newState = Object.assign({}, state, {currentValue: newValue, futureValues: newFutureValues, previousValues: [state.currentValue, ...state.previousValues]})
            return newState
        }
        default: return state
    }
}