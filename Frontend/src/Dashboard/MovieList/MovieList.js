import React, { Component } from 'react'
import './MovieList.css'
import MovieCard from './movieCard/movieCard';
import { getAllMovies } from '../service/movieService'
import { connect } from "react-redux";


const mapStateToProps = state => {
    return { ...state.SearchReducer };
};


class MovieList extends Component {
    constructor(props) {
        super(props)

        this.state = { movies: [] }

    }

    componentDidMount() {
        this.getAllMovies()
       
    }

    getAllMovies() {


        getAllMovies().then(res => {
            this.setState({ movies: res.data.results })

        })
            .catch(err => {
                console.error(err);
            })


    }


    render() {
        return (
            <div className="movie-list-container">
                {this.state.movies.filter(el => this.props.searchedMovieTitle === "" ? el : el.original_title.toLowerCase().startsWith(this.props.searchedMovieTitle.toLowerCase()))
                                  .map((el, index) => <MovieCard movie={el} key={index} />)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MovieList);


