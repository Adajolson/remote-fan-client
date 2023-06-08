import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getTeamById } from "../../managers/TeamManager"

export const SingleTeam = (props) => {
    const navigate = useNavigate()
    const [ team, setTeam ] = useState({})
    const { teamId } = useParams()
    //const { gameId } = useParams()

    useEffect(() => {
        getTeamById(teamId).then(data => setTeam(data))
    }, [])

    return (
        <article className="team">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`team--${team.id}`} className="team">
                <div className="team__label">{team.name}</div>
            </section>
        </article>
    )
}