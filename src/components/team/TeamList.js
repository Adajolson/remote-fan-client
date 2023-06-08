import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { getTeams } from "../../managers/TeamManager"

export const TeamList = (props) => {
    const navigate = useNavigate()
    const [ teams, setTeams ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getTeams().then(data => setTeams(data))
    }, [])

    return (
        <article className="teams">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            {
                teams.map(team => {
                    return <section key={`team--${team.id}`} className="team">
                        <div className="team__label">{team.name}</div>
                    </section>
                })
            }
        </article>
    )
}