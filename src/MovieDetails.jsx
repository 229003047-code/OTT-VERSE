import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { movies } from "./data";

export default function MovieDetails({ myList, setMyList }) {

  const { title } = useParams();
  const navigate = useNavigate();

  const [showTrailer, setShowTrailer] = useState(false);

  // ALL MOVIES
  const allMovies = movies;

  const decodedTitle = decodeURIComponent(title);

const movie = allMovies.find(
  (m) => m.title === decodedTitle
);

  // SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie)
    return <h1>Movie Not Found</h1>;


  // MY LIST CHECK
  const isInList =
    myList.some(
      (m) => m.title === movie.title
    );


  const handleMyList = () => {

    if (isInList) {

      setMyList(
        myList.filter(
          (m) =>
            m.title !== movie.title
        )
      );

    } else {

      setMyList([
        ...myList,
        movie
      ]);

    }

  };


  return (

    <>

      {/* HERO */}
      <div
        className="details-hero"
        style={{
          backgroundImage:
            `url(${movie.backdrop})`,
        }}
      >

        <div className="details-overlay"></div>


        <div className="details-top">


          {/* POSTER */}
          
            <img
  src={movie.poster}
  onError={(e) =>
    (e.target.src =
      "https://via.placeholder.com/300x450")
  }
/>
            
        


          {/* INFO */}
          <div className="details-info">

            <h1>
              {movie.title}
            </h1>


            {/* BADGES */}
            <div className="badges">

              <span className="badge">
                ⭐ {movie.rating}
              </span>

              <span className="badge">
                {movie.genre}
              </span>

              <span className="badge">
                {movie.year}
              </span>

            </div>


            {/* ACTION BUTTONS */}
            <div className="details-actions">

              <button
                className="play-btn-main"
                onClick={() =>
                  setShowTrailer(true)
                }
              >
                ▶ Play Trailer
              </button>


              <button
                className="mylist-btn"
                onClick={handleMyList}
              >
                {
                  isInList
                    ? "✔ In My List"
                    : "+ Add to My List"
                }
              </button>

            </div>


            {/* OTT PLATFORM BUTTONS */}
           

{/* WATCH ON */}
<div style={{ marginTop: "20px" }}>

  <h3>Watch on:</h3>

  <div
    style={{
      display: "flex",
      gap: "12px",
      marginTop: "10px",
      flexWrap: "wrap"
    }}
  >

    {movie.platforms?.map((platform, i) => (

      <a
        key={i}
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
      >

        <button
          style={{
            background: "#e50914",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {platform.name}
        </button>

      </a>

    ))}

  </div>

</div>




            {/* DESCRIPTION */}
            <p className="details-description">
              {movie.description}
            </p>


            <p>
              <b>Director:</b>
              {" "}
              {movie.director}
            </p>

            <p>
              <b>Actors:</b>
              {" "}
              {movie.actors}
            </p>


          </div>

        </div>

      </div>



      {/* TRAILER SECTION */}
      <div className="trailer-section">

        <h2>
          Watch Trailer
        </h2>

        <iframe
  src={movie.trailer}
  title="Trailer"
  allowFullScreen
/>

      </div>



      {/* SIMILAR MOVIES */}
      <div className="similar-section">

        <h2>
          You may also like
        </h2>


        <div className="row-posters">

          {allMovies
            .filter(
              (m) =>
                m.genre === movie.genre &&
                m.title !== movie.title
            )
            .slice(0, 10)
            .map((m) => (

              <img
                key={m.id}
                src={m.poster}
                className="poster"
                onClick={() =>
                  navigate(`/movie/${encodeURIComponent(m.title)}`)
                  
                }
              />

            ))}

        </div>

      </div>



      {/* TRAILER MODAL */}
      {showTrailer && (

        <div className="trailer-modal">

          <div
            className="modal-overlay"
            onClick={() =>
              setShowTrailer(false)
            }
          />

          <div className="modal-content">

            <button
              className="close-btn"
              onClick={() =>
                setShowTrailer(false)
              }
            >
              ✖
            </button>

            <iframe
              src={movie.trailer}
              allowFullScreen
            />

          </div>

        </div>

      )}

    </>

  );

}
