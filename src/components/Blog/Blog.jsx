import React, { useState, useEffect } from 'react'
import Favorite from '../Favorite/Favorite'
import Count from '../Count/Count'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';



function Blog() {


    const [favoriteCount, setFavoriteCount] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            const response = await fetch('https://dummyjson.com/posts?limit=251');
            const data = await response.json();
            setBlogs(data.posts);
            setFilteredBlogs(data.posts);
        }
        callApi();
    }, []);


    useEffect(() => {
        const callApi = async () => {
            const response = await fetch('https://dummyjson.com/users?limit=208');
            const data = await response.json();
            setUsers(data.users);
        }
        callApi();
    }, []);

    const addFavorite = () => {
        setFavoriteCount(favoriteCount => favoriteCount + 1);
    }

    const removeFavorite = () => {
        if (favoriteCount > 0) {
            setFavoriteCount((favoriteCount) => favoriteCount - 1)
        }
    }


    const handleFilterd = (blogs) => {
        setFilteredBlogs(blogs)
    }

    return (
        <>
            <Favorite favoriteCount={favoriteCount} />
            <SearchBar blogs={blogs} handleFilterd={handleFilterd}/>
            {filteredBlogs.length ?
                < CardContainer removeFavorite={removeFavorite} addFavorite={addFavorite} blogs={filteredBlogs} users={users} />
                : <h2>Loading ...</h2>
            }

            <Count />
        </>

    )
}

export default Blog