import "../styles/Card.css";
// import starIcon from ".  ./images/star-icon.svg";
// import photo from '../images/katie-zaferes.png'

export default function Card(props) {
  console.log(props)
  return (
    <section className="card-container">
      <div className="card">
        <img
          className="card__img"
          // according to the course the solution bellow should work,
          // but idk why it's not, so I went back to the hard coded 
          // image for now
          src={`./${props.img}`}
          // src={photo}
          alt="katie zaferes usando maiô em uma competição"
        />
        <p className="card__tag">SOLD OUT</p>
        <p className="card__reviews">
          <img
            className="card__reviews__star-icon"
            src='./images/star-icon.svg'
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
    </section>
  );
}
