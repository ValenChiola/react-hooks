import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFecth'

import './layout.css'

//https://www.breakingbadapi.com/api/quotes/2

export const Layout = () => {

    const { state, increment, decrement } = useCounter(1)
    const { data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${state}`)
    const { quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <button
                className="btn btn-primary m-2"
                onClick={decrement}
            >
                Anterior Quote
            </button>

            <button
                className="btn btn-primary my-3"
                onClick={increment}
            >
                Siguiente Quote
            </button>

            <blockquote className="blockquote">
                <p
                    className="mb-3"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>

        </>
    )
}
