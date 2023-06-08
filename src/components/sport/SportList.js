import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { getSports } from "../../managers/SportManager.js"

export const SportList = (props) => {
    const navigate = useNavigate()
    const [ sports, setSports ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getSports().then(data => setSports(data))
    }, [])

    return (
        <article className="sports">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            {
                sports.map(sport => {
                    return <section key={`sport--${sport.id}`} className="sport">
                        <div className="sport__label">{sport.label}</div>
                    </section>
                })
            }
        </article>
    )
}