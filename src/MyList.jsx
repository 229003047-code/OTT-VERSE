import { useNavigate } from "react-router-dom";

export default function MyList({ myList, setMyList }) {

  const navigate = useNavigate();


  // REMOVE FUNCTION
  const removeFromList = (movie) => {

    setMyList(
      myList.filter(
        (m) => m.id !== movie.id
      )
    );

  };


  return (

    <div className="mylist-page">

      {/* HEADER */}
      <h1 className="mylist-title">
        My List
      </h1>


      {/* EMPTY STATE */}
      {myList.length === 0 ? (

        <div className="mylist-empty">

          <p>Your list is empty</p>

          <button
            onClick={() => navigate("/")}
            className="browse-btn"
          >
            Browse Movies
          </button>

        </div>

      ) : (

        <div className="mylist-grid">

          {myList.map((movie) => (

            <div
              key={movie.id}
              className="mylist-card"
            >

              {/* POSTER */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="mylist-poster"
                onClick={() =>
                  navigate(
                    `/movie/${encodeURIComponent(movie.title)}`
                  )
                }
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Image")
                }
              />


              {/* INFO */}
              <div className="mylist-info">

                <h3>{movie.title}</h3>

                <div className="mylist-meta">

                  <span>⭐ {movie.rating}</span>
                  <span>{movie.year}</span>
                  <span>{movie.genre}</span>

                </div>


                {/* PLATFORM BADGES */}
                <div className="mylist-platforms">

                  {movie.platforms?.map(
                    (p, i) => (

                      <span
                        key={i}
                        className="platform-tag"
                      >
                        {p.name}
                      </span>

                    )
                  )}

                </div>


                {/* REMOVE BUTTON */}
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromList(movie)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}