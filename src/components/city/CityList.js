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
        <article className="flex flex-col justify-center bg-transparent mt-[15%]">
            <div className="mx-auto text-center text-4xl text-white hover:text-black hover:bg-white font-bold my-4 py-2 px-4 rounded-full">
            <button className="items-center justify-items-center"
                onClick={() => {
                    navigate({ pathname: "/cities/new" })
                }}
            >Add New City</button>
            </div>
            <div className="mx-auto text-center my-4">
            {
                cities.map(city => {
                    return <section key={`city--${city.id}`} className="text-lg text-white hover:text-black hover:bg-white rounded-full my-1">
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