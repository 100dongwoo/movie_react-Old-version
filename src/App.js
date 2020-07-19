//15강 한번더봐보기
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './Movie'
import Movie from "./Movie";

class App extends Component {
    state = {

    }
// componentDidMount() {
// setTimeout(function (){
//     console.log("hello:")
// },1000 )
// }
    componentDidMount() {
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        //fetch url 에이젝스로 바꿀수있다 쉽게
            .then(response=>response.json())
            .then(json=>console.log(json))
            .catch(err=>console.log(err))
        // console.log(fetch('anime_api'))
//respone으로체크로 하고 제이슨으로 변환하고 콘솔로 보는방식으로 한다 ,ㄴ
    }

    _renderMovies=()=>{
      // const movies=[<Movie props/>,<Movie props/>]
        const movies= this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
        return movies;
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.movies ? this._renderMovies():'Loading'
                }
            </div>
        )
    }

}

export default App;
