import React from "react";
import PropTypes from 'prop-types'
import "./Movie.css"

// class Movie extends Component {
//

//
//     render() {
//
//         return (
//             // <div>
//             //     <MoviePoster poster={this.props.poster}/>
//             //     <h1>{this.props.title}</h1>
//             // </div>
//         )
//     }
// }

//
// class MoviePoster extends Component {
//
//     render() {
//         console.log(this.props)
//         return(
//             <img src={this.props.poster} />)
//
//     }
//
// }

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movies Poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;