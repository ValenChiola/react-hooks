import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}


            <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide
            </button>
        </>
    )
}
