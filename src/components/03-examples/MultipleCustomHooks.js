import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFecth } from '../../hooks/useFecth'

import '../02-useEffect/effects.css'

//https://www.breakingbadapi.com/api/quotes/2

export const MultipleCustomHooks = () => {

    const { state, increment, decrement } = useCounter(1)
    const { loading, data } = useFecth(`https://www.breakingbadapi.com/api/quotes/${state}`)
    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
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

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

        </>
    )
}
