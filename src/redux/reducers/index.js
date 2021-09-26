import { combineReducers } from 'redux';

import filmsRefucer from './films';
import filtersRefucer from './filters';

const rootReducer = combineReducers({
  films: filmsRefucer,
  filters: filtersRefucer,
});

export default rootReducer;
