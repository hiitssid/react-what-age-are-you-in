import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const card = (props) => {
  return (
    <div className="card">
      <section className="display-image">
        <img src={`../images/${props.image}`} alt="pp" />
      </section>
      <div className="descriptions">
        <section className="items">
          <p className="name">{props.name}</p>
        </section>
        <section className="items">
          <FontAwesomeIcon icon={faPizzaSlice} />
          <p>{props.favfood}</p>
        </section>
        <section className="items">
          <FontAwesomeIcon icon={faFaceGrinStars} />
          <p>{props.hobbey}</p>
        </section>
        <section className="items">
          <FontAwesomeIcon icon={faHeart} style={{color:"red"}} />
          <p>{props.age} Years</p>
        </section>
        <section className="items">
          <FontAwesomeIcon icon={faFlagCheckered} />
          <p>{props.monthdays}</p>
        </section>
      </div>
    </div>
  );
};

export default card;
