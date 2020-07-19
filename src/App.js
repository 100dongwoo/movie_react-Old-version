//15 17강 한번더봐보기
import React, {Component} from 'react';
import "./App.css";
import "./index.css"
import Movie from "./Movie";

class App extends Component {
    state = {}
// componentDidMount() {
// setTimeout(function (){
//     console.log("hello:")
// },1000 )
// }
    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {

        const movies = this.state.movies.map((movie) => {
            console.log(movie)
            return <Movie title={movie.title_english}
                          poster={movie.medium_cover_image}
                          key={movie.id}
                          genres={movie.genres}
                          synopsis={movie.synopsis}
            />
        })
        return movies
    }


    _getMovies = async () => {  //비동기 이전작업끝나기전에 다음작업도하는거
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

//awaiㅅ callapi가 끝나기를 기달리는거 just기달리기 성공x


    _callApi = () => {
        return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    render() {
        const {movies}=this.state;          //???
        return (
            <div><h1>영화 다운로드 수   </h1>
            <div className={movies ? "App" : "App--loading"}>
                {/*//있나없나 하는거*/}

                {
                    this.state.movies ? this._renderMovies() : '  Loading'
                }
            </div></div>
        )
    }

}

export default App;
