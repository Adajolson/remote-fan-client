import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createBar } from "../../managers/BarManager"
import { getCities } from "../../managers/CityManager.js"

export const AddBar = () => {
    const navigate = useNavigate()
    const [ cities, setCities ] = useState([])
    const [ currentBar, setCurrentBar ] = useState({
        name: "",
        city: 0,
        address: "",
        teams: [0]
    })
    
    useEffect(() => {
        getCities().then((res) => setCities(res))
    }, [])
    
    const changeBarState = (domEvent) => {
        const copy = {...currentBar}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentBar(copy)
    }

    return (<div className="w-[30%] bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black mt-10 opacity-90 p-4">
        <form className="teamForm">
            <h2 className="teamForm__title">Add New Bar</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Bar Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentBar.name}
                        onChange={changeBarState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" required autoFocus className="form-control"
                        value={currentBar.address}
                        onChange={changeBarState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="City">City: </label>
                    <select name="city" value={currentBar.city}
                    onChange={changeBarState}>
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
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const bar = {
                        name: currentBar.name,
                        city: parseInt(currentBar.city),
                        address: currentBar.address,
                    }

                    // Send POST request to your API
                    createBar(bar)
                        .then(() => navigate("/bars"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}