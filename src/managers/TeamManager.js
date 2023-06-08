export const getTeams = () => {
    return fetch("http://localhost:8000/teams", {
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getTeamById = (id) => {
    return fetch(`http://localhost:8000/teams/${id}`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
    })
    .then(res => res.json())
}