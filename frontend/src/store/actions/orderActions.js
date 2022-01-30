import axios from 'axios';


// TODO: zavrsiti ovaj deo 
export const placeOrder = (order) => {
    console.log('here');
    return async (dispatch, getState) => {
        dispatch({
            type:'PLACE_ORDER_REQUEST'
        })

        console.log(order);
        
        const {
            userLogin: { userInfo },
          } = getState();

        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                     Authorization: `Bearer ${userInfo.token}`,
                }
            }

            const { data } = await axios.post('/api/orders', order, config );

            console.log('order data =>', data);

            dispatch({
                type:'PLACE_ORDER_SUCCESS',
                payload: data
            })
        }catch(error){
            dispatch({
                type:'PLACE_ORDER_FAIL',
                payload: error
            })
        }
    }
}
