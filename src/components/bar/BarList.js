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
        <article className="bars">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/bars/new" })
                }}
            >Add Bar</button>
            {
                bars.map(bar => {
                    return <section key={`bar--${bar.id}`} className="bar">
                        <div className="bar__label">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link>
                        </div>
                    </section>
                })
            }
        </article>
    )
}