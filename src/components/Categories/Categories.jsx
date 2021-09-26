import React, { useState } from 'react';

import './categories.scss';

export default function Categories({ items, handleClick }) {

  const [activeItem, setActiveItem] = useState(null)

  return (
    <div className="categories">
      <ul className="categories__items">
        <li
          onClick={() => {
            setActiveItem(null);
            handleClick(null);
          }}
          className={`categories__item ${activeItem === null ? 'active' : ''}`}>Все</li>
        {
          items.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setActiveItem(item.num);
                  handleClick(item.type);
                }}
                key={item.type}
                className={`categories__item ${activeItem === index ? 'active' : ''}`}
              >{item.name}</li>)
          })
        }
      </ul>
    </div>
  )
}
