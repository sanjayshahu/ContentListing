import React, {  useState } from "react";


function InputSearch({searchQuery,setSearchQuery}) {
    
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <div style={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
        <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ padding: '10px', 
                  width: '100%',
                 paddingRight: '40px',
                 backgroundImage: 'url(/images/nav_bar.png)', // Use the imported image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: 'none', 
                outline: 'none',
                color: 'white', 
                fontSize: '16px' 

             }} 
        />
        <img
            src="/images/search.png"
            alt="search icon"
            style={{
                position: 'absolute',
                right: '10px',
                top: '25%',
                height: '20px', 
                pointerEvents: 'none' 
            }}
        />
    </div>
    )
}
export default InputSearch;