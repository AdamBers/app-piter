import React from 'react'

function Search() {
    return (
        <div className="input-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="..."
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Filter</button>
            </div>
        </div>
    )
}

export default Search