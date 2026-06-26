import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function Row({ title, movies = [],myList,setMyList, isTop10 = false }) {

  const rowRef = useRef(null);


  // SCROLL LEFT
  const scrollLeft = () => {

    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: -rowRef.current.clientWidth * 0.9,
      behavior: "smooth",
    });

  };


  // SCROLL RIGHT
  const scrollRight = () => {

    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: rowRef.current.clientWidth * 0.9,
      behavior: "smooth",
    });

  };


  // SAFETY
  if (!movies || movies.length === 0) return null;


  return (

    <div className="row-wrapper">

      {/* TITLE */}
      <h2 className="row-title">
        {title}
      </h2>


      <div className="row-container">

        {/* LEFT */}
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
        >
          ❮
        </button>


        {/* MOVIES */}
        <div
          className="row-posters"
          ref={rowRef}
        >

          {movies.map((movie, index) => (

            <div
              key={movie.id || index}
              movie={movie}
              className="row-item"
            >

              {/* TOP 10 NUMBER */}
              {isTop10 && (
                <span className="top10-number">
                  {index + 1}
                </span>
              )}

              <MovieCard
  movie={movie}
  myList={myList}
  setMyList={setMyList}
/>

            </div>

          ))}

        </div>


        {/* RIGHT */}
        <button
          className="scroll-btn right"
          onClick={scrollRight}
        >
          ❯
        </button>

      </div>

    </div>

  );

}