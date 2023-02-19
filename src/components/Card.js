import React from 'react';

const Card = ({ meal }) => {
    return (
        <div className='meal-card'>
            <h2>{meal.strMeal}</h2>
            <p>Origin : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <p>{meal.strInstructions}</p>
            <a href={meal.strYoutube}> Voir la recette</a>
        </div>
    );
};

export default Card;