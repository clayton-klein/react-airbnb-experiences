import "../styles/Card.css";

// Now props receive the "card" object as argument from
// the Card instance in App.js, then I can access the
// arguments through it...
export default function Card(props) {
  // console.log(props)
  let tagText;
  // like so...
  if (props.card.openSpots === 0) {
    tagText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    tagText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        className="card__img"
        src={`./images/${props.card.coverImg}`}
        alt="alt description here"
      />
      {tagText && <p className="card__tag">{tagText}</p>}
      <p className="card__reviews">
        <img
          className="card__reviews__star-icon"
          src="./images/star-icon.svg"
          alt="ícone de uma estrela vermelha"
        />
        {props.card.stats.rating}
        <span>
          {" "}
          ({props.card.stats.reviewCount}) · {props.card.location}
        </span>
      </p>
      <h2 className="card__title">{props.card.title}</h2>
      <p className="card__price">
        <em>From ${props.card.price}</em> / person
      </p>
    </div>
  );
}
