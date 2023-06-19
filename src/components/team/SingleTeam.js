import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import { getTeamById } from "../../managers/TeamManager"
import { getBars } from "../../managers/BarManager"

export const SingleTeam = (props) => {
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
        <article className="team">
            <section key={`team--${team.id}`} className="team">
                <div className="team__label">{team.name}</div>
            </section>
            <section>
                <h2>Bars:</h2>
                <ul>
                    {bars.map(bar => (
                        <li key={bar.id}>
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
            </section>
        </article>
    )
}