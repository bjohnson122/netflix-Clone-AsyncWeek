// Typically, this key would be stored in {process.env.API_KEY}

const API_KEY = '6950d5bdc7db0d49ee44031578e352be'

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests

// https://api.themoviedb.org/3/movie/popular?api_key=6950d5bdc7db0d49ee44031578e352be&language=en-US&page=1

//https://api.themoviedb.org/3/trending/all/week?api_key=6950d5bdc7db0d49ee44031578e352be&language=en-US
