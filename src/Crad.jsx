import PropTypes from "prop-types";
function Card(props) {
  const { title, image, releaseDate, genre, rating, trailerUrl } = {
    title: "Unannounced",
    image: "https://placehold.co/300x450?text=No+Image",
    releaseDate: "TBD",
    genre: "Unknown",
    rating: "N/A",
    trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ...props
  };
  const openTrailer = () => {
    window.open(trailerUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="imgClass" />
      <h2 className="cardTitle">{title}</h2>
      <div className="cardMeta">
        <p>Release: {releaseDate}</p>
        <p>Genre: {genre}</p>
        <p>Rating: {rating}</p>
      </div>
      <button className="button" onClick={openTrailer}>
        Watch Trailer
      </button>
    </div>
  );
}

export default Card;



Card.defaultProps = {
  title: "Unannounced",
  image: "https://placehold.co/300x450?text=No+Image",
  titleUrl: "#",
  releaseDate: "TBD",
  genre: "Unknown",
  rating: "N/A",
  trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};
