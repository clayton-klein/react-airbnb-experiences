import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src='./images/photo-grid.png'
        alt="um conjunto de várias imagens"
      />
      <h1 className="hero__title">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
