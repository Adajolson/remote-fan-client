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
        <div className="flex flex-col justify-center bg-transparent mt-[15%]">
        <article className="mx-auto">
            <section key={`sport--${sport.id}`} className="">
                <div className="text-center text-3xl text-white font-bold m-4">{sport.label}</div>
            </section>
                <h2 className="text-center text-3xl text-white font-bold m-4">Teams</h2>
            <section className="flex flex-wrap mt-[10%]">
                {
                teams.map(team => {
                    return <section key={`team--${team.id}`} className="team flex flex-col m-8 rounded-xl bg-transparent ">
                        <img className="block mx-auto h-36 w-36 rounded-lg" src={team.logo} alt=""/>
                        <div className="team__label text-center space-y-2 sm:text-left text-white">
                        <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link>
                        </div>
                    </section>
                })
            }
            </section>
        </article>
        </div>
    )
}