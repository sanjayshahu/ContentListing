import React, {  useState } from "react";


function InputSearch({searchQuery,setSearchQuery}) {
    
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };


    return (
        <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        />)
}
export default InputSearch;