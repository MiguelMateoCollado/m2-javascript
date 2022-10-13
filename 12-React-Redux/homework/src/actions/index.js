export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=6ac6d8e1&s=${titulo}`)
      .then((response) => response.json())
      .then((movie) => {
        dispatch({ type: "GET_MOVIES", payload: movie });
      });
  };
}
export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=6ac6d8e1&i=${id}`)
            .then(response => response.json())
            .then(detail => {dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})})
  }
}

export function addMovieFavorite(movie) {
  return {
    type: 'ADD_FAVORITE',
    payload: movie
  }
}
export function removeFavorite(id) {
  return {
    type: 'REMOVE_FAVORITE',
    payload: id
  }
}