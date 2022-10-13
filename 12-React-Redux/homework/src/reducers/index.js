const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
   case 'GET_MOVIE_DETAIL':
    return {
      ...state, movieDetail: action.payload
    }
  case "ADD_FAVORITE":
    return {
      ...state, moviesFavourites: state.moviesFavourites.concat(action.payload)
    }
  case "REMOVE_FAVORITE":
    return {
      ...state, moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload )
    }
    default:
      return {...state}
   
  }
}

export default rootReducer;
