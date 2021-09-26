const initialState = {
  items: [],
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILMS':
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state;
  }

  // if (action.type === 'SET_FILMS') {
  //   return {
  //     ...state,
  //     items: action.payload,
  //   }
  // }
  // return state;
}

export default films;