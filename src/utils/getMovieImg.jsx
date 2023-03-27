import moviesPodcast from '../img/moviesPodcast.png'

export function getMovieImg(path, width){
    return ( 
        path ? `https://image.tmdb.org/t/p/w${width}${path}` : moviesPodcast
    )
}