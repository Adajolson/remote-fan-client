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
        <article className="flex flex-col teams items-center pt-10 mt-[10%]">
            <div className="mx-auto">
            <button className="items-center justify-items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                    navigate({ pathname: "/teams/new" })
                }}
            >Add New Team</button>
            </div>
            <div className="flex flex-wrap mt-[10%]">
            {
                teams.map(team => {
                    return <section key={`team--${team.id}`} className="team flex m-8 py-8 px-8 max-w-sm mx-auto rounded-xl bg-blue-500 hover:bg-blue-700 shadow-lg shadow-black space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 pb-10">
                        <img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={team.logo} alt=""/>
                        <div className="team__label text-center space-y-2 sm:text-left text-white">
                        <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link>
                        </div>
                    </section>
                })
            }
            </div>
        </article>
    )
}