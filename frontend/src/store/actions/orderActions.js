import axios from 'axios';

// TODO: zavrsiti ovaj deo
export const placeOrder = (order) => {
  console.log('here');
  return async (dispatch, getState) => {
    dispatch({
      type: 'PLACE_ORDER_REQUEST',
    });

    console.log(order);

    const {
      userLogin: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post('/api/orders', order, config);

      console.log('order data =>', data);

      dispatch({
        type: 'PLACE_ORDER_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'PLACE_ORDER_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'ORDER_DETAILS_REQUEST',
  });
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({
      type: 'ORDER_DETAILS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ORDER_DETAILS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  dispatch({
    type: 'ORDER_PAY_REQUEST',
  });
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type':'application/json'
      },
    };
    const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult, config);

    dispatch({
      type: 'ORDER_PAY_SUCCESS',
    });
  } catch (error) {
    dispatch({
      type: 'ORDER_PAY_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch({
    type: 'USER_ORDERS_REQUEST',
  });
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/orders/user-orders`, config);

    dispatch({
      type: 'USER_ORDERS_SUCCESS',
      payload: data
    });
    
  } catch (error) {
    dispatch({
      type: 'USER_ORDERS_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};