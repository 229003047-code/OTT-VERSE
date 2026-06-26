import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {

  const navigate = useNavigate();

  if (!movie) return null;

  return (

    <div
      className="movie-card"
      onClick={() =>
        navigate(
          `/movie/${encodeURIComponent(movie.title)}`
        )
      }
    >

      <img
        src={movie.poster}
        alt={movie.title}
        className="poster"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x450?text=No+Image";
        }}
      />

    </div>

  );

}