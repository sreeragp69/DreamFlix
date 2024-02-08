import React, { useEffect, useState } from "react";
import useGenres from "../../hooks/useGenre";
import axios from "axios";
import Geners from "../../Components/Geners";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";

function Series() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState();
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    // console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
    // console.log(data);
  };

  useEffect(() => {
    fetchMovies(); // eslint-disable-next-line 
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle">Series</span>
      <Geners
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              c={c}
              id={c.id}
              poster={c.poster_path}
             
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}

export default Series;
