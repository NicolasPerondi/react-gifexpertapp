
import React, { useState } from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = () => {

    //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

    const [categories, setCategories] = useState(["One Punch"]);

    // const handleAdd = () => {

    //     setCategories([...categories, "Nico"]);

    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        //<li key={category}> {category} </li>

                        <GifGrid 
                        key={category}
                        category = { category} 
                        />
                    
                        ))
                }

            </ol>
        </>
    )
}
