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
                        checked={currentBar.teams.has(team.id)}
                        onChange={() => handleCheckboxChange(team.id)}
                    />
                    {team.name}
                    </label>
                ))}
                </div>
            </section>
            <div className="flex items-center">
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
                className="btn btn-primary text-white hover:bg-white hover:text-black w-full"
            >
                Submit
            </button>
            </div>
        </article>
        </div>
    )
}