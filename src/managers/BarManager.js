export const getBars = () => {
    return fetch("http://localhost:8000/bars", {
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getBarById = (id) => {
    return fetch(`http://localhost:8000/bars/${id}`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
    })
    .then(res => res.json())
}