import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (<>
        {/* <h1 className="title">Remote Fan</h1>
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/sports">Sports</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/bars">Bars</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/cities">Cities</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/teams">Teams</Link>
                </li>
                {
                    (localStorage.getItem("lu_token") !== null) ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    navigate('/login')
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }        </ul> */}
                <div className="flex flex-wrap place-items-center">
                    <section className="relative mx-auto">

                    <nav className="flex justify-between bg-gray-900 text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                        <a className="text-3xl font-bold font-heading">Remote Fan</a>
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/sports">Sports</Link></li>
                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/bars">Bars</Link></li>
                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/cities">Cities</Link></li>
                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/teams">Teams</Link></li>
                            {
                                (localStorage.getItem("lu_token") !== null) ?
                                    <li className="hover:text-gray-200">
                                        <button className="nav-link fakeLink"
                                            onClick={() => {
                                                localStorage.removeItem("lu_token")
                                                navigate('/login')
                                            }}
                                        >Logout</button>
                                    </li> :
                                        <>
                                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/login">Login</Link></li>
                                            <li className="hover:text-gray-200"><Link className="navbar__link" to="/register">Register</Link></li>
                                        </>
                                }        
                            </ul>
                            </div>
                    </nav>
                    </section>
                </div>
        </>)
}

{/* <div class="flex flex-wrap place-items-center h-screen">
    <section class="relative mx-auto">

    <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading">Remote Fan</a>
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li class="hover:text-gray-200"><Link className="navbar__link" to="/sports">Sports</Link></li>
            <li class="hover:text-gray-200"><Link className="navbar__link" to="/bars">Bars</Link></li>
            <li class="hover:text-gray-200"><Link className="navbar__link" to="/cities">Cities</Link></li>
            <li class="hover:text-gray-200"><Link className="navbar__link" to="/teams">Teams</Link></li>
            <li class="hover:text-gray-200"><Link className="navbar__link" to="/teams">Teams</Link></li>
            {
                    (localStorage.getItem("lu_token") !== null) ?
                        <li className="hover:text-gray-200">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("lu_token")
                                    navigate('/login')
                                }}
                            >Logout</button>
                        </li> :
                        <>
                            <li class="hover:text-gray-200"><Link className="navbar__link" to="/login">Login</Link></li>
                            <li class="hover:text-gray-200"><Link className="navbar__link" to="/register">Register</Link></li>
                        </>
                }        </ul> */}