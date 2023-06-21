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
        <article className="bars flex flex-col pt-10 mt-[15%]">
            <div className="mx-auto">
            <button className="items-center justify-items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                    navigate({ pathname: "/bars/new" })
                }}
            >Add Bar</button>
            </div>
            <div className="flex flex-wrap mx-auto mt-[10%]">
            {
                bars.map(bar => {
                    return <section key={`bar--${bar.id}`} className="bar items-center m-8 py-8 px-8 max-w-sm bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text">
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