import React from 'react'
import Card from '../Card/Card'

const Cards = (props) => {
    const { blogs, addFavorite, removeFavorite, handleSelecElement } = props;
    return (
        <>
            {blogs.map((blog) => (
                <Card
                    key={blog.id}
                    title={blog.title}
                    blog={blog}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    handleSelecElement={handleSelecElement}
                />))
            }
        </>
    )
}

export default Cards