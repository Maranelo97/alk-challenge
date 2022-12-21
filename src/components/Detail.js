import { React, useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movID");
  const [movDetails, setMovDetails] = useState(null);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=d51fd3aba5af7a721358cba414697969&language=es-ES`;
    axios
      .get(endpoint)
      .then((response) => {
        const movieData = response.data;
        setMovDetails(movieData);
      })
      .catch((error) => {
        console.log("An error has ocurred");
      });
  }, [movieID]);

  return (
    <>
      {!movDetails && (
        <div className="text-center text-white">
        <div className="spinner-border" role="status">
        </div>
      </div>
      )}

      {movDetails && (
        <div className="row">
          <h2 className="text-white">Film Details</h2>
          <div className="row text-white">
            <div className="col-4">
              <img src={`https://image.tmdb.org/t/p/w500/${movDetails.poster_path}`} className="img-fluid" alt="movPoster" />
            </div>
            <div className="col-8">
              <h5>Title: {movDetails.title}</h5>
              <h5>Overview:</h5>
              <p>{movDetails.overview}</p>
              <h5>Release date: {movDetails.release_date}</h5>
              <h5>Rating: {movDetails.vote_average}</h5>
              <h5>Genres:</h5>
              <ul>
                {movDetails.genres.map(oneG => <li key={oneG.id}>{oneG.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
