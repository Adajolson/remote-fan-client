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

export const createBar = (bar) => {
    return fetch("http://localhost:8000/bars", {
        method: "Post",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(bar) 
        })
        .then(res => res.json())
}

export const updateBar = (bar) => {
    return fetch(`http://localhost:8000/bars/${bar.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    },
    body: JSON.stringify(bar)
    })
}

export const deleteBar = (id) => {
    return fetch(`http://localhost:8000/bars/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    )
}

export const editTeamsInBar = (teamId, barId, method) => {
    return fetch(`http://localhost:8000/bars/${barId}/edit_teams_in_bar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify({ teams: teamId })
    })
    .then(res => res.json())
}

export const getBarByIdForTeams = (id) => {
    return fetch(`http://localhost:8000/bars/${id}/addteams`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
    })
    .then(res => res.json())
}