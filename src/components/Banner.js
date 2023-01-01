import { Component } from "react";
import axios from "axios";
import '../App.css';

class Banner extends Component{
    constructor(){
        super();
        this.state = {
            movie : ""
        }
    }
    async componentDidMount(){
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8d302a045fa568f205f37bfcca20d870');
        this.setState({
            movie : res.data.results[0]
        })
    }
    render(){
        let backdrop_path = this.state.movie.backdrop_path;
        return(
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                        <h1 className="card-title banner-title">{this.state.movie.title}</h1>
                        <p className="card-text banner-text">{this.state.movie.overview}</p>
            </div>
        )
    }
}

export default Banner;