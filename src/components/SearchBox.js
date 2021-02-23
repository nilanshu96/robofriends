import React from 'react';

const SearchBox = ({searchChange}) => {
    
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                aria-label="search robots"
                type="search"
                placeholder="search robots"
                onChange={searchChange} />
        </div>
    )
}

export default SearchBox;