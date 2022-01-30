import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../store/actions/orderActions';

const OrderScreen = ({match}) => {
  const { order, loading, error } = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
      if(!order){
          dispatch(getOrderDetails(match.params.id));
      }
  }, [order, match]);

  return <>

  {order &&  (
      <h1>Order ID: { order._id }</h1>
  )}
    
  </>;
};

export default OrderScreen;
