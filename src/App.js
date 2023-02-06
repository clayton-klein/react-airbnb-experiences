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
        // instead of passing all of these arguments bellow...
        
        // img={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}

        // I'm passing the whole object with all the properties
        // and refering it in the Card component :)
        card={card}

        // Another option would be to spread the card object
        // like so {...card}, then I could access the props
        // directly in the component like "props.title" instead of
        // "props.card.title", but apart from being more verbose
        // I think it's clearer to specify the object.
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
