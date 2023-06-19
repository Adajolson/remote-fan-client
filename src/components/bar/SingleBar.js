import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getBarById, deleteBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const SingleBar = (props) => {
    const navigate = useNavigate()
    const [ bar, setBar ] = useState({})
    const { barId } = useParams()
    const [ teams, setTeams ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getBarById(barId).then(data => setBar(data))
    }, [])

    useEffect(() =>{
        getTeams().then(data => {
            const filteredTeams =  data.filter(team => bar.teams?.includes(team.id))
            setTeams(filteredTeams)
        })
    }, [bar]);

    

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
            <section key={"bar--address"} className="barAddress">
                <div className="address">{bar.address}</div>
            </section>
            <section>
                <h2>Teams:</h2>
                <ul>
                {teams.map(team => (
                    <li key={team.id}>
                        <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                ))}
                </ul>
            </section>
            <button type="button" onClick={() => (deleteBar(bar.id).then(() => {
                    navigate({ pathname: "/bars" })
                }))}>Delete</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/update` })}>Update</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/addTeams` })}>Add Teams</button>
            <button type="button" onClick={() => navigate({ pathname: `/bars/${bar.id}/editTeams` })}>Edit Teams</button>
        </article>
    )
}