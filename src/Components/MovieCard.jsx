import "../Components/MovieCard.css"
import {Link} from "react-router-dom"

export function MovieCard({movie}){

    const imageUrl = "https://image.tmdb.org/t/p/w500"+movie.poster_path

    return(
        <li className="movieCard">

            <Link to={"movies/"+movie.id}>
                <img width={230} 
                height={245} 
                src={imageUrl}  
                alt={movie.title} 
                className="movieImage" />

            </Link>
                <div>{movie.title}</div>
        </li>
    )
}