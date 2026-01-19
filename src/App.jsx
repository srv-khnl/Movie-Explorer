import Card from './Crad.jsx';
import './index.css';

import doomsday from './assets/Doomsday.jpg';
import inception from './assets/Inception.jpg';
import oddyssey from './assets/Oddyssey.jpg';
import thedarkknight from './assets/thedarkknight.jpg';
import interstellar from './assets/interstellar.jpg';
import parasite from './assets/parasite.jpg';
import joker from './assets/joker.jpg';
import thematrix from './assets/thematrix.jpg';
import fightclub from './assets/fightclub.jpg';
import avengersinfinitywar from './assets/avengersinfinitywar.jpg';
import theshawshankredemption from './assets/theshawshankredemption.jpg';

function App() {
  return (
    <>
      <div className="cards-container">
          <Card/>
          <Card title="Avengers: Secret Wars"
          genre ="Sci-Fi, Action" />
          <Card
            title="Avengers: Doomsday"
            image={doomsday}
            releaseDate="2026-12-18"
            genre="Action, Sci-Fi"
            trailerUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
          <Card
            title="Oddyssey"
            image={oddyssey}
            releaseDate="2026-07-17"
            genre="Action"
            trailerUrl="https://www.youtube.com/watch?v=Z12d0wGOWEk"
          />
          <Card
            title="Inception"
            image={inception}
            releaseDate="2010-07-16"
            genre="Sci-Fi, Thriller"
            rating="8.8"
            trailerUrl="https://www.youtube.com/watch?v=YoHD9XEInc0"
      />
      <Card
        title="The Dark Knight"
        image={thedarkknight}
        releaseDate="2008-07-18"
        genre="Action, Crime"
        rating="9.0"
        trailerUrl="https://www.youtube.com/watch?v=EXeTwQWrcwY"
      />
      <Card
        title="Interstellar"
        image={interstellar}
        releaseDate="2014-11-07"
        genre="Sci-Fi, Drama"
        rating="8.6"
        trailerUrl="https://www.youtube.com/watch?v=zSWdZVtXT7E"
      />
      <Card
        title="Parasite"
        image={parasite}
        releaseDate="2019-05-30"
        genre="Thriller, Drama"
        rating="8.6"
        trailerUrl="https://www.youtube.com/watch?v=5xH0HfJHsaY"
      />
      <Card
        title="Joker"
        image={joker}
        releaseDate="2019-10-04"
        genre="Drama, Crime"
        rating="8.5"
        trailerUrl="https://www.youtube.com/watch?v=t433PEQGErc"
      />
      <Card
        title="The Matrix"
        image={thematrix}
        releaseDate="1999-03-31"
        genre="Sci-Fi, Action"
        rating="8.7"
        trailerUrl="https://www.youtube.com/watch?v=vKQi3bBA1y8"
      />
      <Card
        title="Fight Club"
        image={fightclub}
        releaseDate="1999-10-15"
        genre="Drama"
        rating="8.8"
        trailerUrl="https://www.youtube.com/watch?v=SUXWAEX2jlg"
      />
      <Card
        title="Avengers: Infinity War"
        image={avengersinfinitywar}
        releaseDate="2018-04-27"
        genre="Action, Sci-Fi"
        rating="8.4"
        trailerUrl="https://www.youtube.com/watch?v=6ZfuNTqbHE8"
      />
      <Card
        title="The Shawshank Redemption"
        image={theshawshankredemption}
        releaseDate="1994-09-22"
        genre="Drama"
        rating="9.3"
        trailerUrl="https://www.youtube.com/watch?v=6hB3S9bIaco"
      />
      </div>
    </>
  );
}

export default App;
