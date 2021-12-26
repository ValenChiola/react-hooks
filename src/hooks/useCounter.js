import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState)

    const increment = () => setState(state + 1)
    const decrement = () => {
        if (state > 1) setState(state - 1)
    }

    const reset = () => {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}
