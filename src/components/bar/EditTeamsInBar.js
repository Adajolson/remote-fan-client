import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, editTeamsInBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const EditTeams = () => {
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

    // const editTeamArrayState = (domEvent) => {
    //     const copies = {...currentBar.teams}
    //     Array.from(copies)
    //     copies.includes(domEvent.target.value)
    //         ? setTeamId(domEvent.target.value)
        
    // }

    return (
        <article>
            <section key={`bar--${currentBar.id}`} className="bar">
                <div className="bar__label">{currentBar.name}</div>
            </section>
            <section>
                <label htmlFor="Teams">Team: </label>
                <div>
                    {teams.map((team) => (
                        <label key={team.id}>
                            <input
                                name="teams"
                                type="checkbox"
                                value={team.id}
                                onChange={(evt) => {
                                    currentBar.teams.has(evt.target.value)
                                    ? currentBar.teams.delete(evt.target.value)
                                    : currentBar.teams.add(evt.target.value)
                                }}
                            />
                            {team.name}
                        </label>
                    ))}
                </div>
            </section>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault()
                    
                    editTeamsInBar(currentBar.teams, barId, ).then(() =>
                        navigate("/bars")
                    )
                }}
                className="btn btn-primary"
            >
                Submit
            </button>
        </article>
    )
}