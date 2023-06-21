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

    return (
        <article className="sport flex flex-col items-center justify-center mt-[10%]">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`sport--${sport.id}`} className="sport mx-auto">
                <div className="text-3xl sport__label flex items-center justify-center pt-25 bg-transparent text-white font-bold m-8 rounded-full">{sport.label}</div>
                
            </section>
            <section>
                <h2 className="justify-center items-center text-4xl text-white font-semibold m-8 py-10 px-10">Teams</h2>
                <ul>
                    {teams.map(team => (
                        <li key={team.id} className="items-center justify-center pt-25 bg-transparent text-white font-bold w-72 m-8 py-4 px-8 rounded-full">
                            <Link className="team__link" to={`/teams/${team.id}`}><img className="gearImage block mx-auto rounded-lg sm:mx-0 sm:shrink-0" src={team.logo} alt=""/></Link></li>
                    ))}
                </ul>
            </section>
        </article>
    )
}