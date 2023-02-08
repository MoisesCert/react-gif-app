// desde la versión 17 de react no es necesario realizar la importación en cada fichero. Además en vite.config.js ya se carga el plugin react para toda la aplicación
// import React from 'react'
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory)) return;
        
        // categories.push('Valorant');
        console.log(newCategory);
        setCategories([ newCategory, ...categories ]);
        // otra forma de hacerlo sería
        //setCategories( cat => [ ...cat, 'Valorant']);

    }

  return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ value => onAddCategory( value ) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category } />
                )) 
            }

        </>
  )
}


