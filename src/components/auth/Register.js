import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value,
                "email": email.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (<div className="flex w-[25%] bg-transparent rounded-lg mx-auto mt-[18%] mt-10opacity-90 p-4">
        <main className="items-center w-full max-w-sm">

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="text-center text-white text-3xl text-bold">Register an account</h1>
                <fieldset>
                    <div className="m-1 form-group flex items-center border-b border-white">
                        <input ref={firstName} type="text" name="firstName" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="First name" required autoFocus />
                    </div>
                </fieldset>
                <fieldset>
                <div className="m-1 form-group flex items-center border-b border-white">
                    <input ref={lastName} type="text" name="lastName" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Last name" required />
                    </div>
                </fieldset>
                <fieldset>
                <div className="m-1 form-group flex items-center border-b border-white">
                    <input ref={email} type="email" name="email" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email" required />
                    </div>
                </fieldset>
                <fieldset>
                <div className="m-1 form-group flex items-center border-b border-white">
                    <input ref={username} type="text" name="username" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Username" required />
                    </div>
                </fieldset>
                <fieldset>
                <div className="m-1 form-group flex items-center border-b border-white">
                    <input ref={password} type="password" name="password" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Password" required />
                    </div>
                </fieldset>
                <fieldset>
                <div className="m-1 form-group flex items-center border-b border-white">
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Verify password" required />
                    </div>
                </fieldset>
                <div className="m-1 flex items-center">
                    <button className="btn btn-1 btn-sep icon-send text-white hover:bg-white hover:text-black w-full" type="submit">Register</button>
                </div>
            </form>
            <div className="m-1 flex items-center">
            <section className="link--register mt-2 text-white hover:bg-white hover:text-black w-full">
                Already registered? <Link to="/login">Login</Link>
            </section>
            </div>
        </main>
        </div>
    )
}
