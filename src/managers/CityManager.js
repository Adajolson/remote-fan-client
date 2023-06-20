export const getCities = () => {
    return fetch("http://localhost:8000/cities", {
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getCityById = (id) => {
    return fetch(`http://localhost:8000/cities/${id}`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
    })
    .then(res => res.json())
}

export const createCity = (city) => {
    return fetch("http://localhost:8000/cities", {
        method: "Post",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(city) 
        })
        .then(res => res.json())
}

export const deleteCity = (id) => {
    return fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    )
}