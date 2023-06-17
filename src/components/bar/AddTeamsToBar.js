// import { useState, useEffect } from "react"
// import { useNavigate, useParams } from 'react-router-dom'
// import { getBarById, addTeamToBar } from "../../managers/BarManager"
// import { getTeams } from "../../managers/TeamManager"

// export const AddTeamsToBar = () => {
//     const navigate = useNavigate()
//     const [ teams, setTeams ] = useState([])
//     const { barId } = useParams()
//     const [ currentBar, setCurrentBar ] = useState({
//         name: "",
//         city: 0,
//         address: "",
//         teams: [0]
//     })

//     useEffect(() => {
//         getTeams().then((res) => setTeams(res))
//     }, [])

//     useEffect(() => {
//         getBarById(barId).then((res) => setCurrentBar(res))
//     }, [])
    
//     const changeBarState = (domEvent) => {
//         const copy = {...currentBar}
//         copy[domEvent.target.name] = domEvent.target.value
//         setCurrentBar(copy)
//     }
//     return (
//         <article>
//             <section key={`bar--${currentBar.id}`} className="bar">
//                 <div className="bar__label">{currentBar.name}</div>
//             </section>
//             <section>
//             <label htmlFor="Teams">City: </label>
//                     <select name="teams" multiple={true} value={currentBar.teams}
//                     onChange={changeBarState}>
//                         <option>Choose a team:</option>
//                             {
//                                 teams.map(
//                                     team => {
//                                         return <option value={team.id}>{team.name}</option>
//                                     }
//                                 )
//                             }
//                     </select>
//             </section>

//             <button type="submit"
//                 onClick={evt => {
//                     // Prevent form from being submitted
//                     evt.preventDefault()

//                     const updatedBar = {
//                         id: parseInt(currentBar.id),
//                         teams: currentBar.teams
//                     }

//                     // Send POST request to your API
//                     addTeamToBar(updatedBar)
//                         .then(() => navigate("/bars"))
//                 }}
//                 className="btn btn-primary">Submit</button>
//         </article>
//         )
// }