import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const OrderSuccessful = () => {

    const searchQuery = useSearchParams()[0];
    const orderReferenceNumber = searchQuery.get('reference');

    return (
        <div>
            <Heading>Order Successfull</Heading>
            <Text>Reference No. ${orderReferenceNumber}</Text>
        </div>
    )
}

export default OrderSuccessful