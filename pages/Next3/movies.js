import { useState } from "react";

function Movie({ movie }) {
  return (
    <div key={movie.imdbID}>
      <h2>
        {movie.Title} ({movie.Year}) --- {movie.Type}
      </h2>
      <img src={movie.Poster} width="180px" alt={movie.Title} />
    </div>
  );
}

function MoviesList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default function Movies({ initialData }) {
  const [searchTerm, setSearchTerm] = useState("bagdad");
  const [data, setData] = useState(initialData);

  const fetchData = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=ee5ef93d&s=${searchTerm}`
    );
    const searchData = await res.json();
    setData(searchData);
  };

  // Chamada inicial
  fetchData();

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="text"
          placeholder="Digite a palavra-chave"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {data && data.Search && <MoviesList movies={data.Search} />}
      </div>
    </div>
  );
}
