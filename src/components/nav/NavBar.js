import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (<>
        <h1>Remote Fan</h1>
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
                }        </ul>
    </>)
}
