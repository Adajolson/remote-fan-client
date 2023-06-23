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

    return (<div className="flex flex-col justify-center bg-transparent mt-[15%]">
        <article className="mx-auto">
            <section key={`city--${city.id}`} className="city">
                <div className="city__label text-center text-4xl text-white font-bold">{city.name}</div>
            </section>
            <div className="mx-auto text-center text-xl text-white hover:text-black hover:bg-white font-bold my-4 py-2 px-4 rounded-full">
            <button type="button" className="" onClick={() => (deleteCity(city.id).then(() => {
                    navigate({ pathname: "/cities" })
                }))}>Delete City</button>
            </div>
                <h2 className="mx-auto text-center text-xl text-white font-bold my-4">Teams:</h2>
            <section className="mx-auto text-center my-4">
                <ul>
                    {teams.map(team => (
                        <li key={team.id} className="text-lg text-white hover:text-black hover:bg-white rounded-full my-1">
                            <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                    ))}
                </ul>
            </section>
                <h2 className="mx-auto text-center text-xl text-white font-bold my-4">Bars:</h2>
            <section className="mx-auto text-center my-4">
                <ul>
                    {bars.map(bar => (
                        <li key={bar.id} className="text-lg text-white hover:text-black hover:bg-white rounded-full my-1">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
            </section>
        </article>
        </div>
    )
}
