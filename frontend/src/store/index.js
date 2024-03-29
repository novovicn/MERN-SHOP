import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderDetailsReducer, placeOrderReducer, orderPayReducer, userOrdersReducer, ordersReducer, orderDeliverReducer } from './reducers/orderReducers';

import { createProductReducer, createProductReviewReducer, deleteProductReducer, productListReducer, productReducer, topRatedProductsReducer, updateProductReducer } from './reducers/productReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  updateUserProfileReducer,
  usersReducer,
  deleteUserReducer,
  updateUserReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: updateUserProfileReducer,
  placeOrder: placeOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  userOrders: userOrdersReducer,
  users: usersReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
  deleteProduct: deleteProductReducer,
  createProduct: createProductReducer,
  updateProduct: updateProductReducer,
  orders: ordersReducer,
  createProductReview: createProductReviewReducer,
  topRatedProducts: topRatedProductsReducer
});

const cartItemsFromLS = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromLS = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromLS = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: { cartItems: cartItemsFromLS, shippingAddress: shippingAddressFromLS },
  userLogin: { userInfo: userInfoFromLS },
};

const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
