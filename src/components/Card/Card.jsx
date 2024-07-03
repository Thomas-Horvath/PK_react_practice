import { useState } from "react";
import Button from "../Button/Button";
import "./card.css";

const Card = (props) => {
  const { title, body, addFavorite, removeFavorite } = props;

  const [isAdded, setIsAdded] = useState(false);

  const handleaddFavorite = () => {
    setIsAdded(true)
    addFavorite()
  };
  const handleremoveFavorite = () => {
    setIsAdded(false)
    removeFavorite()
  }


  return (
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      {isAdded ? <Button children="Remove favorite" handleOnClick={handleremoveFavorite} styleClass={'red'}/>
        : <Button children="Add favorite" handleOnClick={handleaddFavorite}  styleClass={'blue'} />

      }

    </div>
  )
}

export default Card;