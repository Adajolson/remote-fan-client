import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, editTeamsInBar } from "../../managers/BarManager"
import { getTeams } from "../../managers/TeamManager"

export const EditTeams = () => {
    const navigate = useNavigate()

    const { barId } = useParams()
    const [ currentBar, setCurrentBar ] = useState({ 
        name: "",
        city: 0,
        address: "",
        teams: new Set() })
    const [ teams, setTeams ] = useState([])

    useEffect(() => {
        getBarById(barId).then((res) => {
            res.teams = new Set(res.teams)
            setCurrentBar(res)       
        })
    }, [barId])

    useEffect(() => {
        getTeams().then((res) => setTeams(res))
    }, [])

    const handleCheckboxChange = (teamId) => {
        setCurrentBar((prevBar) => {
        const updatedTeams = new Set(prevBar.teams);
        if (updatedTeams.has(teamId)) {
            updatedTeams.delete(teamId);
        } else {
            updatedTeams.add(teamId);
        }
        return { ...prevBar, teams: updatedTeams };
        });
    };

    return (<div className="w-[30%] bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black mt-10 opacity-90 p-4">
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
                        checked={currentBar.teams.has(team.id)}
                        onChange={() => handleCheckboxChange(team.id)}
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

                    const updatedBar = {
                        id: parseInt(currentBar.id),
                        name: currentBar.name,
                        city: currentBar.city,
                        address: currentBar.address,
                        teams: Array.from(currentBar.teams)
                    }
                    editTeamsInBar(updatedBar).then(() =>
                        navigate("/bars")
                    )
                }}
                className="btn btn-primary"
            >
                Submit
            </button>
        </article>
        </div>
    )
}