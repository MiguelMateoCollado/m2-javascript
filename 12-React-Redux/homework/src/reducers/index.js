const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
    return {
      ...state,
      moviesFavourites: [...state,moviesFavourites, action.movie],
    };
  }
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === "REMOVE_MOVIES_FAVORITE") {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter((movie) => movie.imdbID !== action.idToDelete)
    }
  }
  if (action.type === "GET_MOVIES_DETAILS") {
    return {
      ...state,
      movieDetail: state.movies.props
    }    
  }
  return state;
}

export default rootReducer;
