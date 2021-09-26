import React from 'react';

import './categories.scss';

export default function Categories({ items, handleClick }) {

  return (
    <div className="categories">
      <ul className="categories__items">
        <li
          onClick={() => {
            return handleClick(null)
          }}
          className="categories__item">Все</li>
        {
          items.map(item => {
            return (
              <li
                onClick={() => {
                  return handleClick(item.num)
                }}
                key={item.type}
                className="categories__item"
              >{item.name}</li>)
          })
        }
      </ul>
    </div>
  )
}
