import React, { useEffect, useState } from "react";
import { MovieApi } from "../API/MovieApi";
import Loading from "../Components/Loading";
import MovieCard from "../Components/MovieCard";

const Movie = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const GetMovieAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setMovies(null);
    setLoading(true);
    const MovieResponse = await MovieApi.Get_Movie("")
      .then((response) => {
        // console.log("movie", response.data.data.movies);
        setMovies(response.data.data.movies);
      })
      .catch((e) => {
        setError(e);
      });
    setLoading(false);
    return MovieResponse;
  };

  useEffect(() => {
    GetMovieAPI();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <>
        <div>API 에러가 발생했습니다</div>
      </>
    );
  if (!movies) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-flow-row gap-3 bg-gray-100 px-6">
      {movies.map((value) => (
        <MovieCard key={value.id} data={value} />
      ))}
    </div>
  );
};

export default Movie;
