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
    return (<div className="flex w-[25%] bg-transparent rounded-lg mx-auto mt-[18%]  mt-10 opacity-90 p-4">
        <article className="teamForm w-full max-w-sm">
            <section key={`bar--${currentBar.id}`} className="bar">
                <div className="bar__label text-center text-white text-3xl text-bold">{currentBar.name}</div>
            </section>
            <section>
            <h2 className="teamForm__title text-center text-white text-xl text-bold my-2">Teams</h2>
                <div>
                    {teams.map((team) => (
                        <label key={team.id} className="text-white m-2 flex flex-wrap items-center mx-auto">
                            <input
                                name="teams"
                                type="checkbox"
                                value={team.id} className="m-1"
                                onChange={(evt) => {
                                    currentBar.teams.add(evt.target.value)
                                }}
                            />
                            {team.name}
                        </label>
                    ))}
                </div>
            </section>
            <div className="flex items-center">
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
                className="btn btn-primary text-white hover:bg-white hover:text-black w-full">Submit</button>
                </div>
        </article>
        </div>
        )
}