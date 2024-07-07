import { useState } from "react";
import Button from "../../../Button/Button";
import "./card.css";
import { v4 as uuidv4 } from 'uuid';

const Card = (props) => {
  const { blog, addFavorite, removeFavorite, handleSelecElement } = props;

  const [isAdded, setIsAdded] = useState(false);

  const handleaddFavorite = () => {
    setIsAdded(true)
    addFavorite()
  };
  const handleremoveFavorite = () => {
    setIsAdded(false)
    removeFavorite()
  }

  const FavoriteButton = () => {
    if (isAdded) {
      return <Button children="Remove favorite" handleOnClick={handleremoveFavorite} styleClass={'red'} />
    }

    return <Button children="Add favorite" handleOnClick={handleaddFavorite} styleClass={'blue'} />
  }

  const handleOpenCard = () => {
    handleSelecElement(blog)
  }

  return (
    <div className="card">
      <div className="card-title">
        <h2>{blog.title}</h2>
      </div>
  <div className="tags">
    {blog.tags.map(tag =><p key={uuidv4()}>{tag}</p>)}
  </div>
      <FavoriteButton />
      <Button
        children="Opne"
        handleOnClick={handleOpenCard}
        styleClass={'gray'} />
    </div>
  )
}

export default Card;