const INCREMENT = "INCREMENT"

export function increment(amount) {
    return {
        type: INCREMENT,
        amount: amount
    }
}

const initialState = {
    currentValue: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            const newCurrentValue = state.currentValue + action.amount
            const newState = Object.assign({}, state, { currentValue: newCurrentValue })
            return newState
        }
    }

    return state
}