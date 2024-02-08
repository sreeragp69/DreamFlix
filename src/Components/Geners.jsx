import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";

function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres, // This is supposed to be a function
  setPage,
  type,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
    
      {selectedGenres.map((genre) => (
        <Chip
          key={genre.id}
          style={{ margin: "2px", color: "yellow" }}
          label={genre.name}
          size="small"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}

      {genres && 
        genres.map((genre) => (
          <Chip
            key={genre.id}
            style={{ margin: "2px", color: "white" }}
            label={genre.name}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
}

export default Genres;