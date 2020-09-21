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
            <p className={style.chol} >Estimate: ≈ {calories.toFixed(2)} cal</p>
            <p className={style.chol} >≈{cholesterol.toFixed(2)}% of your daily cholesterol(300mg/day)</p>
        </div>
    );
};


// Recipe.propTypes ={
//     title: React.PropTypes.string.isRequired,
//     calories: React.PropTypes.number.isRequired,
//     ingredients: React.PropTypes.string.isRequired,
//     cholesterol: React.PropTypes.number
// }

export default Recipe;