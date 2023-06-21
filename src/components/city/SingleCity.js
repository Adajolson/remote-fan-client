import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { deleteCity, getCityById } from "../../managers/CityManager"
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
        getTeams().then(data => {
            const filteredTeams = data.filter(team => team.city === city.id)
            setTeams(filteredTeams)
        })
    }, [city])

    useEffect(() =>{
        getBars().then(data => {
            const filteredBars = data.filter(bar => bar.city === city.id)
            setBars(filteredBars)
        });
    }, [city])

    return (
        <article className="city flex flex-col items-center justify-center pt-10">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            <section key={`city--${city.id}`} className="city mx-auto flex bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
                <div className="city__label">{city.name}</div>
            </section>
            <div className="mx-auto">
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full" onClick={() => (deleteCity(city.id).then(() => {
                    navigate({ pathname: "/cities" })
                }))}>Delete City</button>
            </div>
            <section>
                <h2 className=" items-center text-4xl text-white font-semibold m-8 py-10 px-8">Teams:</h2>
                <ul>
                    {teams.map(team => (
                        <li key={team.id} className="items-center justify-center pt-25 bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
                            <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="items-center text-4xl text-white font-semibold m-8 py-8 px-8">Bars:</h2>
                <ul>
                    {bars.map(bar => (
                        <li key={bar.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
            </section>
        </article>
    )
}
