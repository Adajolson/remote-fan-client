import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, removeTeamFromBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const RemoveTeamsFromBar = () => {
    const navigate = useNavigate()

    const { barId } = useParams()
    const [ currentBar, setCurrentBar ] = useState({ teams: new Set() })
    const [ teams, setTeams ] = useState([])
    const [teamId, setTeamId] = useState("")

    useEffect(() => {
        getBarById(barId).then((res) => {
            res.teams = new Set(res.teams)
            setCurrentBar(res)
        
        
        })
    }, [])

    useEffect(() => {
        getTeams().then((res) => setTeams(res))
    }, [])

    // const changeBarState = (domEvent) => {
    //     const copy = {...currentBar}
    //     copy[domEvent.target.name] = domEvent.target.value
    //     setCurrentBar(copy)
    // }

    return (
        <article>
            <section key={`bar--${currentBar.id}`} className="bar">
                <div className="bar__label">{currentBar.name}</div>
            </section>
            <section>
            <label htmlFor="Teams">Team: </label>
                    <select name="teams" multiple={true} value={currentBar.teams}
                    onChange={(evt) => currentBar.teams.has(evt.target.value)?currentBar.teams.delete(evt.target.value):currentBar.teams.add(evt.target.value)}>
                        <option>Choose a team:</option>
                            {
                                teams.map(
                                    team => {
                                        return <option value={team.id}>{team.name}</option>
                                    }
                                )
                            }
                    </select>
            </section>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Send POST request to your API
                    removeTeamFromBar(teamId, barId)
                        .then(() => navigate("/bars"))
                }}
                className="btn btn-primary">Submit</button>
        </article>
    )
}