import "../index.css";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="airbnb-nav">
      <ul className="airbnb-nav__list">
        <li className="airbnb-nav__logo">
          <img src='./images/airbnb-logo.svg' alt="airbnb logo"></img>
        </li>
      </ul>
    </nav>
  );
}
