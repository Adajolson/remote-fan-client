import React, { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { getSports } from "../../managers/SportManager.js"

export const SportList = (props) => {
    const navigate = useNavigate()
    const [ sports, setSports ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getSports().then(data => setSports(data))
    }, [])

    return (
        <article className="sport flex flex-wrap p-10 mt-[25%] space-y-3">
            {/*<button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            */}
            {
                sports.map(sport => {
                    return <section key={`sport--${sport.id}`} className="sport py-8 px-8 max-w-sm mx-auto rounded-xl bg-transparent space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <Link className="sport__link" to={`/sports/${sport.id}`}><img className="gearImage block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src={sport.logo} alt=""/></Link>
                            </div>
                    </section>
                })
            }
        </article>
    )
}