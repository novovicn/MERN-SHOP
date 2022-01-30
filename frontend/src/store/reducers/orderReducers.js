


export const placeOrderReducer = (state = { order: {}, success: false }, action) => {
  switch (action.type) {
    case 'PLACE_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PLACE_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        success:true,
        order: action.payload,
      };
    case 'PLACE_ORDER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
        return state;
  }
};
