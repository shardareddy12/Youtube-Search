import React, { useState } from "react";

export default function Searchbar({onSearch}){

    const [term,setTerm] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(term.trim()){
            onSearch(term)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type = 'term'
            value = {term}
            placeholder="Search videos.."
            onChange={(e)=>setTerm(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    )
}