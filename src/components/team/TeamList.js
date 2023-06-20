import React, { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { getTeams } from "../../managers/TeamManager"

export const TeamList = (props) => {
    const navigate = useNavigate()
    const [ teams, setTeams ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getTeams().then(data => setTeams(data))
    }, [])

    return (
        <article className="teams items-center">
            <button className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text"
                onClick={() => {
                    navigate({ pathname: "/teams/new" })
                }}
            >Add New Team</button>
            
            {
                teams.map(team => {
                    return <section key={`team--${team.id}`} className="team flex py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg shadow-black space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={team.logo} alt=""/>
                        <div className="team__label text-center space-y-2 sm:text-left">
                        <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link>
                        </div>
                    </section>
                })
            }
        </article>
    )
}