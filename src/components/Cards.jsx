import React, { useEffect, useState } from "react";
import "../assets/Card.css"

const Cards = ({info}) => {

    const [ghibli,setGhibli] = useState([]);
    const KEY = "5a745b43";

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=${info.title}&apikey=${KEY}`)
        .then(response => response.json())
        .then(data => setGhibli(data))

        
    },[])
    
    
    return(
        
        <div className="card mb-3">
                <div className="row g-0">
                        <div className="col-sm-12 col-md-4 image-container">
                            <img src={ghibli.Poster} alt="..." className="img-thumbnail movie-image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{info.title}</h5>
                                <p className="card-text box-text">{info.description}</p>
                                <p className="card-text"><small className="text-muted">{`Duration: ${info.running_time}min`}</small></p>
                            </div>
                        </div>
                </div>
        </div>
       
    );
}

export default Cards;