import axios from "axios"

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key: "af5445f431817889e1f72fdaf0327a3c",
        language: "en-US"
    }
})

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    details: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`,{
            params:{
                append_to_response: "videos"
            }
        })
    ,
    searchMovie: name => api.get("search/movie",{
        params:{
            query: encodeURIComponent(name)
        }
    })
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () =>  api.get("tv/popular"),
    airingToday: () =>  api.get("tv/airing_today"),
    showDetail: tv_id => api.get(`tv/${tv_id}`,{
            params:{
                append_to_response: "videos"
            }
        }
    ),
    searchTv: name => api.get("search/tv",{
        params:{
            query: encodeURIComponent(name)
        }
    })
}