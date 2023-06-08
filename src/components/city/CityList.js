import React, { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { getCities } from "../../managers/CityManager"

export const CityList = (props) => {
    const navigate = useNavigate()
    const [ cities, setCities ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getCities().then(data => setCities(data))
    }, [])

    return (
        <article className="cities">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            {
                cities.map(city => {
                    return <section key={`city--${city.id}`} className="city">
                        <div className="city__label">
                            <Link className="city__link" to={`/cities/${city.id}`}>{city.name}</Link>
                        </div>
                    </section>
                })
            }
        </article>
    )
}