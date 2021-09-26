import React from 'react';
import { useSelector } from 'react-redux';

import './filmsBlock.scss';

export default function FilmsBlock() {

  const films = useSelector(({ films }) => {
    return films
  })


  return (
    <div>
      <ul className="films">
        {
          films.items.map(item => {
            return (
              <li key={item.id} className="film" >
                <img className="film__img" src={item.medium_cover_image} alt={item.title}></img>
                <h2 className="film__title">{item.title}</h2>
                <div className="film__description">
                  <p>Rating: {item.rating}</p>
                </div>
                <ul className="film__quality">
                  {/* {
                    item.torrents.map((item, index) => {
                      return (
                        <li
                          onClick={(e) => {
                            e.target.classList.toggle('active')
                          }}
                          key={item.url}
                        >{item.quality}</li>
                      )
                    }) */}
                  {/* } */}
                </ul>
                <button>Добавить</button>
              </li>
            )
          })
        }
      </ul>
    </div >
  )
}
