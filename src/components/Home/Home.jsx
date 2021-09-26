import React from 'react';
import Categories from '../Categories/Categories';
import FilmsBlock from '../FilmsBlock/FilmsBlock';
import { useSelector } from 'react-redux';
import { setCategory } from '../../redux/actions/filters';
import { useDispatch } from 'react-redux';

const categoryName = [
  { name: 'Боевики', type: 'action', num: 0 },
  { name: 'Комедии', type: 'comedy', num: 1 },
  { name: 'Мелодрамы', type: 'romance', num: 2 },
  { name: 'Драмы', type: 'drama', num: 3 },
  { name: 'Приключения', type: 'adventure', num: 4 },
]

export default function Home() {

  const dispatch = useDispatch();

  const { category } = useSelector(({ filters }) => {
    return filters;
  });

  console.log(category)

  const onClickCategory = (item) => {
    dispatch(setCategory(item))
  }

  return (
    <div>
      <Categories items={categoryName} handleClick={onClickCategory} />
      <FilmsBlock />
    </div>
  )
}
