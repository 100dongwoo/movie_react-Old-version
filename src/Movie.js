import React from "react";
import PropTypes from 'prop-types'
import "./Movie.css"
import LinesEllipsis from 'react-lines-ellipsis'
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
//

function Movie({title, poster,genres,synopsis}) {
    return (
        //css에서 수정할꺼


        <div classname="Movie">

            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div classNmae="Movie_Colums">
                <h1>{title}</h1>

                <div className="Movie_Genres">
                    {/*//장르*/}
                    {genres.map((genres,index)=> <MovieGenre genre={genres} key={index}/>)}
                </div>
                <div className="Movie_Synopsis">
                    {
                        <LinesEllipsis
                            text={synopsis}
                            maxLine='3'
                            ellipsis=' ...'
                            trimRight
                            basedOn='letters'
                        />
                    }

                </div>
            </div>

        </div>
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genres">{genre} </span>
    )
}

function MoviePoster({poster,alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie.Poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
MovieGenre.propTypes={
    genres:PropTypes.string.isRequired
}

export default Movie;