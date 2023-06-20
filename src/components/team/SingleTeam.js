import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getTeamById, deleteTeam } from "../../managers/TeamManager"
import { getBars } from "../../managers/BarManager"
import "./Team.css"

export const SingleTeam = (props) => {
    const navigate = useNavigate()
    const [ team, setTeam ] = useState({})
    const { teamId } = useParams()
    const [ bars, setBars ] = useState([])

    useEffect(() => {
        getTeamById(teamId).then(data => setTeam(data))
    }, [])

    useEffect(() => {
        getBars().then(data => {
        const filteredBars = data.filter(bar => bar.teams?.includes(team.id));
        setBars(filteredBars);
        });
    }, [team]);

    return (
        <article className="team flex flex-wrap items-center justify-center">
            <section key={`team--${team.id}`} className="team w-screen">
                <img className="team_logo w-96 items-center" src={team.logo} alt=""/>
                <div className="team__label text-lg text-black font-semibold">{team.name}</div>
            </section>
            <button type="button" onClick={() => (deleteTeam(team.id).then(() => {
            navigate({ pathname: "/teams" })
            }))}>Delete Team</button>
            <section>
                <h2 className="items-center text-4xl text-black font-semibold">Bars:</h2>
                <ul>
                    {bars.map(bar => (
                        <li key={bar.id} className="items-center text-lg hover:text-4xl text-black font-semibold">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
            </section>
            
        </article>
        
    )
}