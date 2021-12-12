import "./App.css";
import { useEffect, useState } from "react";
import { MovieApi } from "./API/MovieApi";

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
    <div>
      {movies.map((value) => (
        <div>{value.title}</div>
      ))}
    </div>
  );
}

export default App;
