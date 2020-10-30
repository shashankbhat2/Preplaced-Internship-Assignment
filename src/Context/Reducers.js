 const Reducers = (state, action) => {
    switch (action.type) {
      case "ADD_INTEGRATION_TO_FAVOURITES":
        return {
          ...state,
          favourites: [...state.favourites, action.payload],
        };
      case "REMOVE_INTEGRATION_FROM_FAVOURITES":
        return {
          ...state,
          favourites: state.favourites.filter(
            (integration) => integration.id !== action.payload
          ),
        };
      default: 
        return state;
    }
}

export default Reducers;