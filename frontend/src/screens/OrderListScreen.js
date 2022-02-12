import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { getAllOrders } from '../store/actions/orderActions';
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const OrderListScreen = ({history}) => {
  const { loading, orders, error } = useSelector((state) => state.orders);
  const { userInfo } = useSelector(state => state.userLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
        dispatch(getAllOrders());
      } else {
        history.push('/login');
      }
  }, [dispatch, userInfo, history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1>Orders</h1>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                  <LinkContainer to={`/orders/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default OrderListScreen;
