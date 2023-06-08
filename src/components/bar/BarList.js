import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { getBars } from "../../managers/BarManager"

export const BarList = (props) => {
    const navigate = useNavigate()
    const [ bars, setBars ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getBars().then(data => setBars(data))
    }, [])

    return (
        <article className="bars">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            {
                bars.map(bar => {
                    return <section key={`bar--${bar.id}`} className="bar">
                        <div className="bar__label">{bar.name}</div>
                    </section>
                })
            }
        </article>
    )
}