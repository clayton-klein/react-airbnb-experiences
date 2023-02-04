import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import cardsData from "./data.js";

function App() {
  const cardsArray = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-container">
        {cardsArray}
      </section>
    </div>
  );
}

export default App;
