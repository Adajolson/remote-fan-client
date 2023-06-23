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

    return (<div className="flex w-[25%] bg-transparent rounded-lg mx-auto mt-[25%]  mt-10 opacity-90 p-4">
        <form className="teamForm w-full max-w-sm">
            <h2 className="teamForm__title text-center text-white text-3xl text-bold">Update Bar</h2>
            <fieldset>
                <div className="form-group flex items-center border-b border-white">
                    <input type="text" name="name" required autoFocus className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        value={currentBar.name}
                        onChange={changeBarState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group flex items-center border-b border-white">
                    <input type="text" name="address" required autoFocus className="form-control appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        value={currentBar.address}
                        onChange={changeBarState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <select name="city" value={currentBar.city} className="py-1 px-0 w-full text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
            <div className="flex items-center">
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
                className="btn btn-primary text-white hover:bg-white hover:text-black w-full">Submit</button>
                </div>
        </form>
        </div>
    )
}