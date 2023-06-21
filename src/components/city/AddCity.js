import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createCity } from "../../managers/CityManager.js"

export const AddCity = () => {
    const navigate = useNavigate()
    const [currentCity, setCurrentCity ] = useState({
        name: "",
        state: ""
    })

    const changeCityState = (domEvent) => {
        const copy = {...currentCity}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentCity(copy)
    }

    return (<div className="w-[30%] bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black mt-10 opacity-90 p-4">
        <form className="cityForm">
            <h2 className="cityForm__title">Add New City</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">City: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentCity.name}
                        onChange={changeCityState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" required autoFocus className="form-control"
                        value={currentCity.state}
                        onChange={changeCityState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const city = {
                        name: currentCity.name,
                        state: currentCity.state,
                    }

                    // Send POST request to your API
                    createCity(city)
                        .then(() => navigate("/cities"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
