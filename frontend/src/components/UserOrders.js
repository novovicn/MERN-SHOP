import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import  { getUserOrders } from '../store/actions/orderActions';
import { Table, Button } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';

const UserOrders = () => {

    const {loading, error, orders} = useSelector(state => state.userOrders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch])
    return (
        <>
            {loading ? <Loader /> : error ? <Message variant='danger'> {error}</Message> : (
                   <Table striped bordered hover responsive className='table-sm'>
                   <thead>
                     <tr>
                       <th>ID</th>
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
                         <td>{`${order._id.substring(0,10)}...`}</td>
                         <td>{order.createdAt.substring(0, 10)}</td>
                         <td>{order.totalPrice}</td>
                         <td>
                           {order.isPaid ? (
                             order.paidAt.substring(0, 10)
                           ) : (
                             <i className='fas fa-times' style={{ color: 'red' }}></i>
                           )}
                         </td>
                         <td>
                           {order.isDelivered ? (
                             order.deliveredAt.substring(0, 10)
                           ) : (
                             <i className='fas fa-times' style={{ color: 'red' }}></i>
                           )}
                         </td>
                         <td>
                           <LinkContainer to={`/orders/${order._id}`}>
                             <Button className='btn-sm' variant='light'>
                               Details
                             </Button>
                           </LinkContainer>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </Table>
            )}
        </>
    )
}

export default UserOrders
