import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getCityById } from "../../managers/CityManager"
import { getTeams } from "../../managers/TeamManager"
import { getBars } from "../../managers/BarManager" 


export const SingleCity = (props) => {
    const navigate = useNavigate()
    const [ city, setCity ] = useState({})
    const { cityId } = useParams()
    const [ teams, setTeams ] = useState([])
    const [ bars, setBars ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getCityById(cityId).then(data => setCity(data))
    }, [])

    useEffect(() =>{
        getTeams().then(data => setTeams(data))
    }, [])

    useEffect(() =>{
        getBars().then(data => setBars(data))
    }, [])

    const filteredTeams = teams.filter(team => team.city === city.id)

    const filteredBars = bars.filter(bar => bar.city === city.id)

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
            <section>
                <h2>Teams:</h2>
                <ul>
                {filteredTeams.map(team => (
                    <li key={team.id}>
                        <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                ))}
                </ul>
            </section>
            <section>
                <h2>Bars:</h2>
                <ul>
                    {filteredBars.map(bar => (
                        <li key={bar.id}>
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
            </section>
        </article>
    )
}
