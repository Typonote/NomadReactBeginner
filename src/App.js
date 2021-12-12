import "./App.css";
import { useEffect, useState } from "react";
import { MovieApi } from "./API/MovieApi";
import MovieCard from "./Components/MovieCard";

function App() {
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
        console.log("movie", response.data.data.movies);
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

  if (loading) return <div>잠시만 기다려 주세요</div>;
  if (error)
    return (
      <>
        <div>API 에러가 발생했습니다</div>
      </>
    );
  if (!movies) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-3 bg-gray-100 px-6">
      {movies.map((value) => (
        <MovieCard data={value} key={value.id} />
      ))}
    </div>
  );
}

export default App;
