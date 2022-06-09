import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPosts } from '../store/asyncAction/posts'

function Search() {
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleClick = () => {
        dispatch(filterPosts(userInput))
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(filterPosts(userInput))
        }
    }

    return (
        <div className="input-group m-5">
            <input
                type="text"
                className="form-control"
                placeholder="..."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleClick}
                >
                    Filter
                </button>
            </div>
        </div>
    )
}

export default Search