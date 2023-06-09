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
        <article className="flex flex-col teams items-center pt-10 mt-[15%]">
            <div className="mx-auto text-center text-4xl text-white hover:text-black hover:bg-white font-bold my-4 py-2 px-4 rounded-full">
            <button className="items-center justify-items-center"
                onClick={() => {
                    navigate({ pathname: "/teams/new" })
                }}
            >Add New Team</button>
            </div>
            <div className="flex flex-wrap mt-[10%]">
            {
                teams.sort((a,b) => a.name.localeCompare(b.name))
                .map(team => {
                    return <section key={`team--${team.id}`} className="team flex flex-col m-8 rounded-xl bg-transparent ">
                        <img className="block mx-auto w-36 h-36 rounded-lg" src={team.logo} alt=""/>
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