import axios from 'axios';


// TODO: zavrsiti ovaj deo 
export const placeOrder = () => {
    console.log('here');
    return async (dispatch) => {
        dispatch({
            type:'PLACE_ORDER_REQUEST'
        })
    }
}
