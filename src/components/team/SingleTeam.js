import React, { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getTeamById, deleteTeam } from "../../managers/TeamManager"
import { getBars } from "../../managers/BarManager"
import "./Team.css"

export const SingleTeam = (props) => {
    const navigate = useNavigate()
    const [ team, setTeam ] = useState({})
    const { teamId } = useParams()
    const [ bars, setBars ] = useState([])

    useEffect(() => {
        getTeamById(teamId).then(data => setTeam(data))
    }, [])

    useEffect(() => {
        getBars().then(data => {
        const filteredBars = data.filter(bar => bar.teams?.includes(team.id));
        setBars(filteredBars);
        });
    }, [team]);

//     return (
//         <article className="team flex flex-col items-center justify-center pt-10">
//             <div className="mx-auto flex flex-wrap">
//             <section key={`team--${team.id}`} className="team mx-auto ">
//                 <img className="team_logo w-96 items-center mx-auto rounded-full" src={team.logo} alt=""/>
//             </section>
//             </div>
//                 <div className="team__label text-lg text-white font-semibold mx-auto m-2">{team.name}</div>
//             <div className="mx-auto">
//             <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => (deleteTeam(team.id).then(() => {
//             navigate({ pathname: "/teams" })
//             }))}>Delete Team</button>
//             </div>
//             <section>
//                 <h2 className="items-center text-4xl text-white font-semibold m-8 py-8 px-8">Bars:</h2>
//                 <ul>
//                     {bars.map(bar => (
//                         <li key={bar.id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
//                             <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
//                     ))}
//                 </ul>
//             </section>
            
//         </article>
        
//     )
// }
return (
<div className="flex flex-col justify-center bg-transparent mt-[15%]">
    <div className="group h-96 w-96 [perspective:1000px] mx-auto">
        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0" key={`team--${team.id}`}>
                <img className="w-96 rounded xl object-cover shadow-black/80" src={team.logo} alt=""/>
                <h1 className="text-center text-3xl text-white font-bold m-4">{team.name}</h1>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => (deleteTeam(team.id).then(() => {
                    navigate({ pathname: "/teams" })
                        }))}>Delete Team</button>
                    <h1 className="text-3xl font-bold m-4">Bars</h1>
                    <ul>
                    {bars.map(bar => (
                        <li key={bar.id} className="text-lg">
                            <Link className="bar__link" to={`/bars/${bar.id}`}>{bar.name}</Link></li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
                    }