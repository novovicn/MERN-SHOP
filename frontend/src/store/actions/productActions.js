import axios from 'axios';
import { logout } from './userActions';

export const listProducts = (keyword = '', page = '') => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' });
    const { data } = await axios.get(`/api/products?keyword=${keyword}&page=${page}`);

    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTopRatedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'TOP_PRODUCTS_REQUEST' });
    const { data } = await axios.get(`/api/products/top`);

    dispatch({ type: 'TOP_PRODUCTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'TOP_PRODUCTS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAILS_REQUEST' });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_DELETE_REQUEST' });

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers:{
        Authorization: `Bearer ${userInfo.token}`        
      }
    }

    await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: 'PRODUCT_DELETE_SUCCESS' });

  } catch (error) {
    dispatch({
      type: 'PRODUCT_DELETE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'CREATE_PRODUCT_REQUEST' });

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers:{
        Authorization: `Bearer ${userInfo.token}`        
      }
    }

    await axios.post(`/api/products`, {}, config);

    dispatch({ type: 'CREATE_PRODUCT_SUCCESS' });

  } catch (error) {
    dispatch({
      type: 'CREATE_PRODUCT_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'PRODUCT_UPDATE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    )

    dispatch({
      type: 'PRODUCT_UPDATE_SUCCESS',
      payload: data,
    })
    dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'PRODUCT_UPDATE_FAIL',
      payload: message,
    })
  }
}

export const createReview = (id, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'CREATE_PRODUCT_REVIEW_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/products/${id}/reviews`,
      review,
      config
    )

    dispatch({
      type: 'CREATE_PRODUCT_REVIEW_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'CREATE_PRODUCT_REVIEW_FAIL',
      payload: message,
    })
  }
}