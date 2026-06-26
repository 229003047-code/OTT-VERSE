import "./style.css";

import { safeMovies as movies, rows } from "./data";

import Row from "./Row";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import { useState, useEffect } from "react";

export default function App() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");

  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem("myList")) || []
  );

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);


  // ✅ HERO MOVIES (from all movies)
  const heroMovies = movies.filter(
    m => m.backdrop
  );


  const [heroIndex, setHeroIndex] = useState(0);


  // AUTO SLIDER
  useEffect(() => {

    if (!heroMovies.length) return;

    const interval = setInterval(() => {

      setHeroIndex(prev =>
        prev + 1 >= heroMovies.length
          ? 0
          : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [heroMovies.length]);


  const heroMovie =
    heroMovies.length > 0
      ? heroMovies[heroIndex]
      : movies[0];


  // SEARCH FILTER
  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase()
        .includes(search.toLowerCase())
  );
<div className="nav-right">

  <div className="search-box">

```
<input
  className="nav-search"
  type="text"
  placeholder="Search movies..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

{/* 🔍 SEARCH RESULTS */}
{search.length > 0 && (
  <div className="search-dropdown">

    {movies
      .filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 6)
      .map(movie => (

        <div
          key={movie.id}
          className="search-item"
          onClick={() => {
            navigate(`/movie/${encodeURIComponent(movie.title)}`);
            setSearch("");
          }}
        >

          <img src={movie.poster} alt="" />

          <span>{movie.title}</span>

        </div>

      ))}

  </div>
)}
```

  </div>

<span onClick={() => navigate("/")}>Home</span>
<span onClick={() => navigate("/mylist")}>My List</span>

</div>


  return (

    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={

          <div className="home">

            {/* NAVBAR */}
            <nav className="navbar">

              <div className="nav-left">
                <h2 className="logo">OTT Verse</h2>
              </div>

              <div className="nav-right">

                <input
                  className="nav-search"
                  type="text"
                  placeholder="Search movies..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

                <span onClick={() => navigate("/")}>
                  Home
                </span>

                <span onClick={() => navigate("/mylist")}>
                  My List
                </span>

              </div>

            </nav>


            {/* HERO */}
            {heroMovie && (
              <div
                className="hero"
                style={{
                  backgroundImage:
                    `url(${heroMovie.backdrop})`
                }}
              >

                <div className="hero-content">

                  <h1>{heroMovie.title}</h1>

                  <p>
                    {heroMovie.description}
                  </p>

                  <div className="hero-buttons">

                    <button
                      className="play-btn"
                      onClick={() =>
                        navigate(`/movie/${heroMovie.title}`)
                      }
                    >
                      ▶ Play
                    </button>

                    <button
                      className="info-btn"
                      onClick={() =>
                        navigate(`/movie/${heroMovie.title}`)
                      }
                    >
                      More Info
                    </button>

                  </div>

                </div>

              </div>
            )}
{/* 🔥 TOP 10 TRENDING */}
<Row
  title="🔥 Top 10 Trending"
  movies={[...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10)}
  isTop10={true}
/>

            {/* ALL ROWS (AUTO FROM data.js) */}
            {rows.map(row => {

              const rowMovies =
                search.length > 0
                  ? filteredMovies.filter(row.filter)
                  : movies.filter(row.filter);

              if (!rowMovies.length) return null;

              return (
          <Row
  key={row.title}
  title={row.title}
  movies={rowMovies}
  myList={myList}
  setMyList={setMyList}
/>
              );

            })}

          </div>

        }
      />


      {/* DETAILS */}
      <Route
        path="/movie/:title"
        element={
          <MovieDetails
            myList={myList}
            setMyList={setMyList}
          />
        }
      />


      {/* MY LIST */}
      <Route
        path="/mylist"
        element={
          <MyList
            myList={myList}
            setMyList={setMyList}
          />
        }
      />

    </Routes>

  );

}
