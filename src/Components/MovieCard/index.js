import React from "react";

const MovieCard = (props) => {
  const movies = props.data;

  // 장르 렌더링 함수
  const rendering = () => {
    const result = [];
    for (let i = 0; i < movies.genres.length; i++) {
      result.push(<span key={i}>{movies.genres[i]} </span>);
    }
    return result;
  };

  return (
    <div className="py-3 sm:max-w-xl sm:mx-auto my-20">
      <div className="bg-white shadow-lg border-gray-100 max-h-80	 border rounded-3xl p-8 flex space-x-8">
        <div className="h-48 overflow-visible w-1/2">
          <img
            className="rounded-3xl shadow-lg"
            src={movies.large_cover_image}
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{movies.title_english}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">
              {movies.rating}
            </div>
          </div>
          <div>
            <div className="flex-auto flex-row text-sm text-gray-400">
              {rendering()}
            </div>
            <div className="text-lg text-gray-800">{movies.year}</div>
          </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden">
            {movies.summary}
          </p>
          <div className="flex text-2xl font-bold text-a">
            {movies.runtime} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
