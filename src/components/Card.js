import "../styles/Card.css";

export default function Card(props) {
  let tagText;

  if (props.openSpots === 0) {
    tagText = "SOLD OUT";
  } else if (props.location === "Online") {
    tagText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        className="card__img"
        src={`./images/${props.img}`}
        alt="alt description here"
      />
      {tagText && <p className="card__tag">{tagText}</p>}
      <p className="card__reviews">
        <img
          className="card__reviews__star-icon"
          src="./images/star-icon.svg"
          alt="ícone de uma estrela vermelha"
        />
        {props.rating}
        <span>
          {" "}
          ({props.reviewCount}) · {props.country}
        </span>
      </p>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__price">
        <em>From ${props.price}</em> / person
      </p>
    </div>
  );
}
