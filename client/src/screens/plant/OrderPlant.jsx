import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { orderPlant } from '../../redux/actions/orderAction';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderPlant = () => {

    const { loading, error, message } = useSelector(state => state.order);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            dispatch({ type: "clearError" })
          }
          if (message) {
            toast.success(message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            dispatch({ type: "clearMessage" });
          }
    }, [dispatch, error, message])

    const orderPlantHandler = async (e) => {
        e.preventDefault();
        dispatch(orderPlant(500));
    }

    return (
        <div>
            <Button isLoading={loading} variant={'solid'} colorScheme='blue' onClick={orderPlantHandler}>Order Plant</Button>
        </div>
    )
}

export default OrderPlant