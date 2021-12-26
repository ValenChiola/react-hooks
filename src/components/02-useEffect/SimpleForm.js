import React, { useEffect, useState } from 'react'
import { Message } from './Message'

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {

    }, [])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter a name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control "
                    placeholder="Enter a email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary"> Submit </button>

            { (name === 'valen') && <Message /> }
        </>
    )
}
