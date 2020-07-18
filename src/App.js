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
        setTimeout(() => {
            this.setState({
                movies: [
                    {
                        title: "Matrix",
                        poster: "https://lh3.googleusercontent.com/proxy/dkz_Nc0PtpFAJNxctxBHQHAvthlizmHTALU_W7e-PmsrWR_If906BtFBBjyNZqFl7XgVzba6yoOtagJbjFhIg9bmW7GpZM9Vr8wr-1WrobKm_vUwwEEP0EFW"
                    },
                    {
                        title: "Full metal Jack",
                        poster: "https://i.pinimg.com/originals/2f/69/68/2f696807a1f9f478fa82cc5faa69899e.jpg",
                    },
                    {
                        title: "total_name",
                        poster: "https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg",
                    },
                    {
                        title: "Star wars",
                        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeXDkqMrFAg7I28ejQGw6dn3QwN8kTa1bEFw&usqp=CAU"
                    },
                    {
                        title: "transingpoiong",
                        poster: "https://image.ytn.co.kr/general/jpg/2019/0705/201907051328313641_d.jpg"

                    }
                ]

            })
        }, 5000)
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
