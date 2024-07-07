import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = (props) => {
    const { blogs, handleFilterd } = props;
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const filteredBlogs = blogs.filter((blog) => {
            const inputValue = input.toLocaleLowerCase().trim();
            return blog.title.toLocaleLowerCase().includes(inputValue)
        })

        handleFilterd(filteredBlogs);
    }

    return (
        <form onSubmit={handleOnSubmit} className='form'>
            <input type="search" value={input} placeholder='Search..' onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default SearchBar