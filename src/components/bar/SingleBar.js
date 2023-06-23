import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getBarById, deleteBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const SingleBar = (props) => {
    const navigate = useNavigate()
    const [ bar, setBar ] = useState({})
    const { barId } = useParams()
    const [ teams, setTeams ] = useState([])
    //const { gameId } = useParams()

    useEffect(() => {
        getBarById(barId).then(data => setBar(data))
    }, [])

    useEffect(() =>{
        getTeams().then(data => {
            const filteredTeams =  data.filter(team => bar.teams?.includes(team.id))
            setTeams(filteredTeams)
        })
    }, [bar]);

    

//     return (
//         <article className="bar flex flex-col items-center justify-center pt-10">
//             {/*<button className="btn btn-2 btn-sep icon-create"
//                 onClick={() => {
//                     navigate({ pathname: "/games/new" })
//                 }}
//             >Register New Game</button>
//             */}
//             <section key={`bar--${bar.id}`} className="bar mx-auto flex bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
//                 <div className="bar__label">{bar.name}</div>
//             </section>
//             <h2 className=" items-center text-4xl text-white font-semibold mt-4 py-10 px-8">Address:</h2>
//             <section key={"bar--address"} className="barAddress mx-auto flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 mr-4 ml-4 py-8 px-8 rounded-full">
//                 <div className="address">{bar.address}</div>
//             </section>
            
//             <div className="mx-auto">
//             <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => (deleteBar(bar.id).then(() => {
//                     navigate({ pathname: "/bars" })
//                 }))}>Delete</button></div>
//             <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/update` })}>Update</button>
//             <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/addTeams` })}>Add Teams</button>
//             <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/editTeams` })}>Edit Teams</button>
//             <section>
//                 <h2 className=" items-center text-4xl text-white font-semibold m-8 py-10 px-8">Teams:</h2>
//                 <ul>
//                     {teams.map(team => (
//                         <li key={team.id} className="items-center justify-center pt-25 bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-8 px-8 rounded-full">
//                             <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
//                     ))}
//                 </ul>
//             </section>
//             </article>
//     )
// }

    return (
    <div className="flex flex-col justify-center bg-transparent mt-[15%]">
        <div className="group h-96 w-96 [perspective:1000px] mx-auto">
            <div className=" relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0" key={`bar--${bar.id}`}>
                    <h1 className="text-center text-3xl text-white font-bold m-4">{bar.name}</h1>
                    <p className="text-center text-lg text-white">{bar.address}</p>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                    <div className="flex items-center">
                    <button type="button" className="justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" onClick={() => (deleteBar(bar.id).then(() => {
                        navigate({ pathname: "/bars" })
                            }))}>Delete Bar</button>
                    <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/update` })}>Update Bar</button>
                </div>
                        <h1 className="text-3xl font-bold m-4">Teams</h1>
                        <ul>
                    {teams.map(team => (
                        <li key={team.id} className="text-lg">
                            <Link className="team__link" to={`/teams/${team.id}`}>{team.name}</Link></li>
                    ))}
                </ul>
                <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/addTeams` })}>Add Teams</button>
                    <button type="button" className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-4 px-8 rounded-full" onClick={() => navigate({ pathname: `/bars/${bar.id}/editTeams` })}>Edit Teams</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
                    }