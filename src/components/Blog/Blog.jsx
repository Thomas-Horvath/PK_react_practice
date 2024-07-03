import React, { useState } from 'react'
import Favorite from '../Favorite/Favorite'
import Card from '../Card/Card'
import Count from '../Count/Count'

function Blog(props) {
    const { blogs } = props;

    const [favoriteCount, setFavoriteCount] = useState(0);

    const addFavorite = () => {
        setFavoriteCount(favoriteCount => favoriteCount + 1);
    }

    const removeFavorite = () => {
        if (favoriteCount > 0) {
        setFavoriteCount((favoriteCount) =>  favoriteCount - 1 )
        }
    }

    return (
        <>
            <Favorite favoriteCount={favoriteCount} />
            <div className="card-container">
                <Card title={blogs[0].title} body={blogs[0].body} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
                <Card title={blogs[1].title} body={blogs[1].body} addFavorite={addFavorite} removeFavorite={removeFavorite} />
            </div>
            <Count />
        </>

    )
}

export default Blog