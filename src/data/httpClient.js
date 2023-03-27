const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path,{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmJkNWQxNWIxODA3MTliOTkyNDVjMDM0YTNmYjEzOSIsInN1YiI6IjY0MWU5MDNiMjUzZmFiMDBmM2NjNzBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRbARvMoDjKsgNQpm69OjrbIkpM82XDKiMPv9BnJFD4",
            "Content-Type":"application/json;charset=utf-8"
        }
    }).then((result)=>result.json())
}
