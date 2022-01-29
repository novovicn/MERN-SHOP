


export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case 'ADD_ITEM':

      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);

      if (existingItem) {
        console.log('Existing item');
        const newCartItems = state.cartItems.map((x) =>
          x._id === item.id ? item : x
        );
        return { ...state, cartItems: newCartItems };
      } else {
        console.log('Non-existing item');
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case 'REMOVE_ITEM':
      const productId = action.payload;
      const filteredItems = state.cartItems.filter(item => item._id !== productId);
      return{
        ...state,
        cartItems: filteredItems
      }
    case 'CART_SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        shippingAddress: action.payload
      }
    case 'CART_SAVE_PAYMENT_METHOD':
      return{
        ...state,
        paymentMethod: action.payload
      }
    default:
      return state;
  }
};
