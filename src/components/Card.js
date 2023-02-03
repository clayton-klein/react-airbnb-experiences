import "../styles/Card.css";
import katiePhoto from "../images/katie-zaferes.png";
import starIcon from "../images/star-icon.svg";

export default function Card() {
  return (
    <section className="card-container">
      <div className="card">
        <img
            className="card__img"
            src={katiePhoto}
            alt="katie zaferes usando maiô em uma compretição"
        />
        <p className="card__tag">SOLD OUT</p>
        <p className="card__reviews">
            <img className="card__reviews__star-icon" src={starIcon} alt="ícone de uma estrela vermelha" />
            5.0
            <span> (6) · USA</span>
        </p>
        <h2 className="card__title">Life lessons with Katie Zaferes</h2>
        <p className="card__price">
            <em>From $136</em> / person
        </p>
      </div>
    </section>
  );
}
