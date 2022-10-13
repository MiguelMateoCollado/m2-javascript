export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";
export const REMOVE_MOVIES_FAVORITE = "REMOVE_MOVIES_FAVORITE";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=6ac6d8e1&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, json });
      });
  };
}
export function getMovieDetail(movieToshow) {
  return { type: GET_MOVIES_DETAIL, movieToshow };
}
export function removeMovieFavorite(idToDelete) {
  return {type: REMOVE_MOVIES_FAVORITE, idToDelete }
}
