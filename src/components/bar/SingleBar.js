import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, deleteBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const SingleBar = (props) => {
    const navigate = useNavigate()
    const [ bar, setBar ] = useState({})
    const { barId } = useParams()
    //const { gameId } = useParams()

    useEffect(() => {
        getBarById(barId).then(data => setBar(data))
    }, [])

    return (
        <article className="bar">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`bar--${bar.id}`} className="bar">
                <div className="bar__label">{bar.name}</div>
            </section>
            <button type="button" onClick={() => (deleteBar(bar.id).then(() => {
                    navigate({ pathname: "/bars" })
                }))}>Delete</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/update` })}>Update</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/addTeams` })}>Add a Team</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/removeTeams` })}>Remove a Team</button>
        </article>
    )
}