import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { orderPlant } from '../../redux/actions/orderAction';
import toast from 'react-hot-toast';
import Axios from 'axios';
import { backendUrl } from '../../redux/store';

const OrderPlant = () => {

    const { loading, error, message } = useSelector(state => state.order);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            console.log(error);
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            console.log(message);
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