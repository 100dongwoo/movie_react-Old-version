import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Movie'
import Movie from "./Movie";


const moives = [
    {

        title: "Matrix",
        poster: "https://lh3.googleusercontent.com/proxy/dkz_Nc0PtpFAJNxctxBHQHAvthlizmHTALU_W7e-PmsrWR_If906BtFBBjyNZqFl7XgVzba6yoOtagJbjFhIg9bmW7GpZM9Vr8wr-1WrobKm_vUwwEEP0EFW" },
    {
        title: "Full metal Jack",
        poster: "https://i.pinimg.com/originals/2f/69/68/2f696807a1f9f478fa82cc5faa69899e.jpg",
    },
    {
        title: "Oldboy",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGh_DpO67G53MVL67jG7370u6P_X5AG5lhow&usqp=CAU"
    },
    {
        title: "Star wars",
        poster: "https://image.ytn.co.kr/general/jpg/2019/0705/201907051328313641_d.jpg"
    }
]

class App extends Component {

    state={
        greeting:'hello'
    }
componentDidMount() {
        setTimeout(()=>{
            this.setState({
                greeting:'Hello again'
            })
        },5000)
}

    render() {
        return (
            <div className="App">
                {this.state.greeting}
                {moives.map((movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index}/>
                })}
            </div>
        )
    }

}

export default App;
