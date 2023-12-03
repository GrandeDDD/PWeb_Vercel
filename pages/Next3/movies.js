import { useState, useEffect } from "react";

export default function Movies({ initialData }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState(initialData);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://www.omdbapi.com/?apikey=ca98445&s=${searchTerm}`);
            const searchData = await res.json();
            setData(searchData);
        }

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <input
                    type="text"
                    placeholder="Digite a palavra-chave"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div >
                {data && data.Search && data.Search.map((movie) => (
                    <div key={movie.imdbID}>
                        <img src={movie.Poster} width="180px" alt={movie.Title} />
                        <h2>
                            {movie.Title} --- {movie.Year} --- {movie.Type}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
