import React from 'react';
import style from './recipe.module.css';



function Recipe ({title, calories, image, ingredients}){
    return(
        <div className={style.recipe}>
            <h1 className={style.foodHead}>{title}</h1>
            <p className={style.cal} >Calory estimate: {calories.toFixed(2)}</p>
            <strong>Ingredients</strong>
            <ul>
                {ingredients.map((ingredient)=>{
                    return <li>{ingredient.text}</li>
                })}
            </ul>
            <img src={image} alt={image.title}  />
        </div>
    );
};


export default Recipe;