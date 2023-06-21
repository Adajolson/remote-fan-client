import React, { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { getCities } from "../../managers/CityManager"

export const CityList = (props) => {
    const navigate = useNavigate()
    const [ cities, setCities ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getCities().then(data => setCities(data))
    }, [])

    return (
        <article className="cities flex flex-col text-white pt-10 mt-[15%]">
            <div className="mx-auto">
            <button className="btn btn-2 btn-sep icon-create items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text"
                onClick={() => {
                    navigate({ pathname: "/cities/new" })
                }}
            >Add New City</button>
            </div>
            <div className="flex flex-wrap mx-auto mt-[10%]">
            {
                cities.map(city => {
                    return <section key={`city--${city.id}`} className="city items-center m-8 py-8 px-8 max-w-sm bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text">
                        <div className="city__label">
                            <Link className="city__link" to={`/cities/${city.id}`}>{city.name}</Link>
                        </div>
                    </section>
                })
            }
            </div>
        </article>
    )
}