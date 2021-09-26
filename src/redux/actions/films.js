import axios from 'axios';

//чтобы actions могли быть асинхронными - используем redux-thunk

// получаем наши данные с сервака. fetchFilms - асинхронный экшен, который возвращает функцию
export const fetchFilms = () => (dispatch) => {
  axios.get('http://localhost:3001/films/')
    .then(({ data }) => {
      dispatch(setFilms(data));
    })
}

//action на запосление фильмами. Получает items и возвращает объект
export const setFilms = (items) => ({
  type: 'SET_FILMS',
  payload: items,
});

