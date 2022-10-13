import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeFavorite  } from "../../actions/index";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        {this.props.favourite &&
            this.props.favourite.map(movie => (
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                <button onClick={() => this.props.removeFavorite(movie.imdbID)}>X</button>
              </div>
          ))}
         
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
   favourite: state.moviesFavourites
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeFavorite: id => dispatch(removeFavorite(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
