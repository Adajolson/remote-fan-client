import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Auth.css"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("lu_token", res.token)
                    navigate("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (<div className="flex w-[25%] mx-auto bg-transparent rounded-lg mt-[20%] mt-10 opacity-90 p-4">
        <main className="container--login items-center w-full max-w-sm">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section className="">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="text-center text-white text-3xl text-bold">Remote Fan</h1>
                    <h2 className="text-center text-white text-lg text-bold">Please sign in</h2>
                    <fieldset>
                        <div className="form-group flex items-center border-b border-white m-1">
                            <input ref={username} type="username" id="username" className="form-control appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none" placeholder="Username" required autoFocus />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group flex items-center border-b border-white m-1">
                            <input ref={password} type="password" id="password" className="form-control appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none" placeholder="Password" required />
                        </div>
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <div className="flex items-center m-1">
                        <button className="btn btn-1 btn-sep icon-send text-white hover:bg-white hover:text-black w-full" type="submit">Sign In</button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <div className="flex items-center m-1">
            <section className="link--register text-white hover:bg-white hover:text-black w-full">
                <Link to="/register">Not a member yet?</Link>
            </section>
            </div>
        </main>
        </div>
    )
}
