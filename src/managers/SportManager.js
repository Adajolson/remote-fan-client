export const getSports = () => {
    return fetch("http://localhost:8000/sports", {
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getSportById = (id) => {
    return fetch(`http://localhost:8000/sports/${id}`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
    })
    .then(res => res.json())
}