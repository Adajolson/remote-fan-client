import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getCityById } from "../../managers/CityManager"

export const SingleCity = (props) => {
    const navigate = useNavigate()
    const [ city, setCity ] = useState({})
    const { cityId } = useParams()
    //const { gameId } = useParams()

    useEffect(() => {
        getCityById(cityId).then(data => setCity(data))
    }, [])

    return (
        <article className="city">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`city--${city.id}`} className="city">
                <div className="city__label">{city.name}</div>
            </section>
        </article>
    )
}