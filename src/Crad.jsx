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
        <p className="ratingColor" style={rating !== "N/A" ? { backgroundColor: ratingColor(rating), color: rating >= 9 ? "#ffffff" : "#000000" } : {}}>Rating: {rating}</p>
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

function ratingColor(rating) {
  if (rating <= 4) {
  return "#800080";
} 
if (rating > 4 && rating <= 5) {
  return "#ff8c00";
}
if (rating > 5 && rating <= 6) {
  return "#ffb347";
} 
if (rating > 6 && rating <= 7.9) {
  return "#ffd700";
} 
if (rating >= 8 && rating < 9) {
  return "#00ce56";
} 
if (rating >= 9 && rating < 9.7) {
  return "#006400";
} 
return "#1e90ff";
}
