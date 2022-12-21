import axios from "axios";
import sAlert from '@sweetalert/with-react';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List(props) {

  console.log(props)

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=d51fd3aba5af7a721358cba414697969&language=es-ES&page=1";
    axios
    .get(endpoint)
    .then((response) => {
      const apiData = response.data;
      setMoviesList(apiData.results);
    })
    .catch(error => {
      sAlert("Hubo Errores de sistema", "Intenta mas tarde", "error")
    })
    ;
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
      <div className="row text-white">
        {moviesList.map((movie, i) => {
          return (
            <div className="col-3" key={i}>
              <div className="card my-4">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <button className="fav-btn">
                🤍
                </button>
                <div className="card-body text-dark">
                  <h5 className="card-title fs-4">{movie.title}</h5>
                  <p className="card-text">
                    {movie.overview.substring(0, 95)}...
                  </p>
                  <Link to={`/detail?movID=${movie.id}`} className="btn btn-primary bg-dark border border-dark">
                    More About
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
