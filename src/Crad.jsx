function Card({ title, image, releaseDate, genre, rating, trailerUrl }) {
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
