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