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

    return (<div className="flex w-[25%] bg-transparent rounded-lg mx-auto mt-[20%]  mt-10 opacity-90 p-4">
        <form className="cityForm w-full max-w-sm">
            <h2 className="cityForm__title text-center text-white text-3xl text-bold">Add New City</h2>
            <fieldset>
                <div className="form-group  flex items-center border-b border-white my-4">
                    <input type="text" name="name" required autoFocus className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="City"
                        value={currentCity.name}
                        onChange={changeCityState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group  flex items-center border-b border-white my-4">
                    <input type="text" name="state" required autoFocus className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="State"
                        value={currentCity.state}
                        onChange={changeCityState}
                    />
                </div>
            </fieldset>
            <div className="flex items-center">
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
                className="btn btn-primary text-white hover:bg-white hover:text-black w-full my-4">Submit</button>
                </div>
        </form>
        </div>
    )
}
