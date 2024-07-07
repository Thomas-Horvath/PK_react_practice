
import { useState } from "react";
import Cards from "./components/Cards/Cards";
import SelectedCard from "./components/SelectedCard/SelectedCard";


const CardContainer = (props) => {
    const { users, blogs, addFavorite, removeFavorite } = props;
   
    const [selectedElement, setSelectedElement] = useState(null);

    const handleSelecElement = (element) => {
        setSelectedElement(element);
    };

    return (
        <div className="card-container">
            {!selectedElement
                ?
                <Cards blogs={blogs} addFavorite={addFavorite} removeFavorite={removeFavorite} handleSelecElement={handleSelecElement} />
                :
                <SelectedCard selectedElement={selectedElement} handleSelectElement={handleSelecElement} users={users}/>
            }
        </div>
    )
}

export default CardContainer;