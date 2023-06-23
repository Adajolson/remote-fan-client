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

    return (<div className="flex w-[25%] bg-transparent rounded-lg mx-auto mt-[20%]  mt-10 opacity-90 p-4">
        <form className="teamForm w-full max-w-sm">
            <h2 className="teamForm__title text-center text-white text-3xl text-bold my-4">Add New Team</h2>
            <fieldset>
                <div className="form-group flex items-center border-b border-white">
                    <input type="text" name="name" required autoFocus className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Team Name"
                        value={currentTeam.name}
                        onChange={changeTeamState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="">
                    <select name="city" value={currentTeam.city} className="my-4 py-1 px-0 w-full text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
                    <select name="sport" value={currentTeam.sport} className="my-4 py-1 px-0 w-full text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
                <div className="form-group flex items-center border-b border-white">
                    <input type="text" name="logo" value={currentTeam.logo} className="my-2 form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Put logo URL here"
                        onChange={changeTeamState} />
                </div>
            </fieldset>
            <div className="flex items-center my-4">
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
                className="btn btn-primary text-white hover:bg-white hover:text-black w-full">Submit</button>
                </div>
        </form>
        </div>
    )
}