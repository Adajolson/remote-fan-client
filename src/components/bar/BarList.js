import React, { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { getBars } from "../../managers/BarManager"

export const BarList = (props) => {
    const navigate = useNavigate()
    const [ bars, setBars ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getBars().then(data => setBars(data))
    }, [])

    return (
        <article className="flex flex-col justify-center bg-transparent mt-[15%]">
            <div className="mx-auto text-center text-4xl text-white hover:text-black hover:bg-white font-bold my-4 py-2 px-4 rounded-full">
            <button className="items-center justify-items-center"
                onClick={() => {
                    navigate({ pathname: "/bars/new" })
                }}
            >Add Bar</button>
            </div>
            <div className="mx-auto text-center my-4">
            {
                bars.sort((a,b) => a.name.localeCompare(b.name))
                .map(bar => {
                    return <section key={`bar--${bar.id}`} className="text-lg text-white hover:text-black hover:bg-white rounded-full my-1">
                        <div className="bar__label">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link>
                        </div>
                    </section>
                })
            }
            </div>
        </article>
        
    )
}