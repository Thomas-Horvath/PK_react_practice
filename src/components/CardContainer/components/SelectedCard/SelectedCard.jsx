import React from 'react'
import Button from '../../../Button/Button'
import './selectedCard.css'
import { FindUser } from '../../../../utils/findUser';

const SelectedCard = (props) => {
    const { users, selectedElement, handleSelectElement } = props;

    const handleBack = () => {
        handleSelectElement(null)
    }

    const user = FindUser(selectedElement.id, users)
  

    return (
        <div className='selected-container'>
            <div className="card-title">
                <h2>{selectedElement.title}</h2>
            </div>
            <div className="card-body">
                <p>{selectedElement.body}</p>
            </div>
            <div>
                <h3>{user.firstName} {user.lastName}</h3>
            </div>
            <Button
                children="Back"
                handleOnClick={handleBack}
                styleClass={'gray'} />
        </div>
    )
}

export default SelectedCard