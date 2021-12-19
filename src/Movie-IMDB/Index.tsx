import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchMovies } from "./Action";
import "./Homepage.css";

function Index() {
  const [name, setName] = useState("");

  const _handleInputChange = (e: any) => {
    const { value } = e.target;
    setName(value);
  };

  const Movies = useSelector((state: any) => state.Fetch_Movie);
  const dispatch = useDispatch();
  const { response } = Movies;

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
      <div className="container">
        {response.map((item: any) => {
          return (
            <div key={item.imdbID} className="card-container">
              <img src={item.Poster} width="150px" height="150px" alt="" />
              <p>Title : {item.Title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Index;
