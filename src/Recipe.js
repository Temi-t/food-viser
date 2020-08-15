import React from 'react';
import style from './recipe.module.css';



function Recipe ({title, calories, image, ingredients, cholesterol }){
    return(
        <div className={style.recipe}>
            <h1 className={style.foodHead}>{title}</h1>
            <strong>Ingredients</strong>
            <ul>
                {ingredients.map((ingredient, i)=>{
                    return <li key={'ingredient_'+i}>{ingredient.text}</li>
                })}
            </ul>
            <img src={image} alt={image.title}  />
            <p className={style.chol} >Calory estimate: {calories.toFixed(2)}</p>
            <p className={style.chol} >{cholesterol.toFixed(2)}% of your daily cholesterol(300mg/day)</p>
        </div>
    );
};


export default Recipe;