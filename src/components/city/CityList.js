import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
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
                        <div className="city__label">{city.name}</div>
                    </section>
                })
            }
        </article>
    )
}