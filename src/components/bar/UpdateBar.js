import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getBarById, updateBar } from "../../managers/BarManager"
import { getCities } from "../../managers/CityManager.js"

export const UpdateBar = () => {
    const navigate = useNavigate()
    const [ cities, setCities ] = useState([])
    const [ currentBar, setCurrentBar ] = useState({
        name: "",
        city: 0,
        address: "",
        teams: [0]
    })
    const { barId } = useParams()
    
    useEffect(() => {
        getCities().then((res) => setCities(res))
    }, [])

    useEffect(() => {
        getBarById(barId).then((res) => setCurrentBar(res))
    }, [])
    
    const changeBarState = (domEvent) => {
        const copy = {...currentBar}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentBar(copy)
    }

    return (
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

                    const updatedBar = {
                        id: currentBar.id,
                        name: currentBar.name,
                        city: parseInt(currentBar.city),
                        address: currentBar.address,
                    }

                    // Send POST request to your API
                    updateBar(updatedBar)
                        .then(() => navigate("/bars"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    )
}