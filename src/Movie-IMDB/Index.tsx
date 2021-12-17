import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMovies, FETCH_MOVIES } from "./Action";
import MovieCard from "./MovieCard";
import watchFetchMovie from "./saga";

function Index() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState<any>([]);

  const _handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setName(value);
  };

  const myState = useSelector((state: any) => state.Fetch_Movie);
  const dispatch = useDispatch();
  const { movies, totalRecords } = myState.response;
  console.log(movies);

  return (
    <>
      <div className="input-btn-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Movie Name"
          value={name}
          onChange={_handleInputChange}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            dispatch(FetchMovies(name));
          }}
        >
          Search
        </button>
      </div>
      <MovieCard data={movie} />
    </>
  );
}

export default Index;
