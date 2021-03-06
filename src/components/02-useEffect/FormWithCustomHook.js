import React from 'react'
import { useForm } from '../../hooks/useForm'

import './effects.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form')
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1>FormWithCustomHook</h1>
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
            <div className="form-group mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control "
                    placeholder="Enter a password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary"> Registrar </button>
        </form>
    )
}
