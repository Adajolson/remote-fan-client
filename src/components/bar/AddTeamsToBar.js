import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, addTeamToBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const AddTeamsToBar = () => {
    const navigate = useNavigate()
    const [ teams, setTeams ] = useState([])
    const { barId } = useParams()
    const [ currentBar, setCurrentBar ] = useState({
        name: "",
        city: 0,
        address: "",
        teams: new Set()
    })

    useEffect(() => {
        getTeams().then((res) => setTeams(res))
    }, [])

    useEffect(() => {
        getBarById(barId).then((res) => {
            res.teams = new Set(res.teams)
            setCurrentBar(res)
        })
    }, [])
    
    const changeBarState = (domEvent) => {
        const copy = {...currentBar}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentBar(copy)
    }
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
                                    currentBar.teams.add(evt.target.value)
                                }}
                            />
                            {team.name}
                        </label>
                    ))}
                </div>
            </section>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const updatedBar = {
                        id: parseInt(currentBar.id),
                        teams: Array.from(currentBar.teams)
                    }
                    console.log(updatedBar)
                    // Send POST request to your API
                    addTeamToBar(updatedBar)
                        .then(() => navigate("/bars"))
                }}
                className="btn btn-primary">Submit</button>
        </article>
        )
}