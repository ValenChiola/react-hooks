import React, { useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Your name"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={() => inputRef.current.select()}
            >
                Focus
            </button>
        </>
    )
}
