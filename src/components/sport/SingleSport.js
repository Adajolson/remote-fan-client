import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getSportById } from "../../managers/SportManager"
import { getTeams } from "../../managers/TeamManager"

export const SingleSport = (props) => {
    const navigate = useNavigate()
    const [ sport, setSport ] = useState({})
    const { sportId } = useParams()
    const [ teams, setTeams ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getSportById(sportId).then(data => setSport(data))
    }, [])

    useEffect(() =>{
        getTeams().then(data => {
            const filteredTeams = data.filter(team => team.sport === sport.id)
            setTeams(filteredTeams)
        });
    }, [sport])

    const filteredTeams = teams.filter(team => team.sport === sport.id)

    return (
        <article className="sport pt-10">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`sport--${sport.id}`} className="sport">
                <div className="text-3xl sport__label flex items-center justify-center pt-25">{sport.label}</div>
                
            </section>
            <section>
                <h2 className="flex items-center justify-center">Teams:</h2>
                <ul>
                    {filteredTeams.map(team => (
                        <li key={team.id} className="flex items-center justify-center">
                            <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                    ))}
                </ul>
            </section>
        </article>
    )
}