import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import "../assets/Home.css";

const Home = () => {
    const [movie,setMovie] = useState([]);
    

    useEffect(()=> {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(response => response.json())
        .then(data => setMovie(data)) 
    },[])
      
    return(
        <>
            <div className="container cards-container">
            {movie.map(item => (
              
              <Cards info={item}/>
        
            ))

            }
            </div>
          
        </>
    )
}

export default Home;