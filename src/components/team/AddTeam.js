import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createTeam } from "../../managers/TeamManager.js"
import { getSports } from "../../managers/SportManager.js"
import { getCities } from "../../managers/CityManager.js"

export const AddTeam = () => {
    const navigate = useNavigate()
    const [ sports, setSports ] = useState([])
    const [ cities, setCities ] = useState([])
    const [ currentTeam, setCurrentTeam ] = useState({
        name: "",
        city: 0,
        sport: 0,
        logo: ""
    })

    useEffect(() => {
        getSports().then((res) => setSports(res))
    }, [])
    
    useEffect(() => {
        getCities().then((res) => setCities(res))
    }, [])
    
    const changeTeamState = (domEvent) => {
        const copy = {...currentTeam}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentTeam(copy)
    }

    return (
        <form className="teamForm">
            <h2 className="teamForm__title">Add New Team</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Team: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentTeam.name}
                        onChange={changeTeamState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="City">City: </label>
                    <select name="city" value={currentTeam.city}
                    onChange={changeTeamState}>
                        <option>Choose a city:</option>
                            {
                                cities.map(
                                    city => {
                                        return <option value={city.id}>{city.name}</option>
                                    }
                                )
                            }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sport">Sport: </label>
                    <select name="sport" value={currentTeam.sport}
                    onChange={changeTeamState}>
                        <option>Choose a sport:</option>
                            {
                                sports.map(
                                    sport => {
                                        return <option value={sport.id}>{sport.label}</option>
                                    }
                                )
                            }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="logo">Logo: </label>
                    <input type="text" name="logo" value={currentTeam.logo}
                        onChange={changeTeamState} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const team = {
                        name: currentTeam.name,
                        city: parseInt(currentTeam.city),
                        sport: parseInt(currentTeam.sport),
                        logo: currentTeam.logo
                    }

                    // Send POST request to your API
                    createTeam(team)
                        .then(() => navigate("/teams"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    )
}