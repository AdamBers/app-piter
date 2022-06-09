import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPosts } from '../../store/asyncAction/posts'

function Search() {

    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log(e.currentTarget.value)
        setUserInput(e.currentTarget.value)
    }

    const handleClick = () => {
        console.log(userInput)
        dispatch(filterPosts(userInput))
    }
    return (
        <div className="input-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="..."
                onChange={handleChange}
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