import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getSportById } from "../../managers/SportManager"

export const SingleSport = (props) => {
    const navigate = useNavigate()
    const [ sport, setSport ] = useState({})
    const { sportId } = useParams()
    //const { gameId } = useParams()

    useEffect(() => {
        getSportById(sportId).then(data => setSport(data))
    }, [])

    return (
        <article className="sport">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`sport--${sport.id}`} className="sport">
                <div className="sport__label">{sport.label}</div>
            </section>
        </article>
    )
}