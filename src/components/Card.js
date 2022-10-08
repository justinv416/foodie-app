import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({recipieData}) => {
  return (
    <div className='card-container'>
      {recipieData.map((recipie, index) => {
        return (
          <div key={index} className='card'>
            <p className='recipe-title'>{recipie.recipe.label}</p>
            <img src={recipie.recipe.images.REGULAR.url} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Card