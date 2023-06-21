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

    return (<div className="w-[30%] bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black mt-10 opacity-90 p-4">
        <form className="teamForm flex flex-col bg-gray">
            <h2 className="teamForm__title mx-auto text-black pt-10 bg-blue font-bold m-8 py-8 px-8 rounded-full">Add New Team</h2>
            <fieldset>
                <div className="form-group ">
                    <label htmlFor="name">Team: </label>
                    <input type="text" name="name" required autoFocus className="form-control w-[250px]"
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
                    <input type="text" name="logo" value={currentTeam.logo} placeholder="Put logo URL here"
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
        </div>
    )
}