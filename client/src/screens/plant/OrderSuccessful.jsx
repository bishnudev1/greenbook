import React from 'react';
import { Text, Heading, Box, VStack, Button } from '@chakra-ui/react';
import { useSearchParams, Link } from 'react-router-dom';

const OrderSuccessful = () => {

    const searchQuery = useSearchParams()[0];
    const orderReferenceNumber = searchQuery.get('reference');

    return (
        <Box display={"flex"} justifyContent={"center"} alignContent={"center"} bg={'white'} p={["4", "10"]} minH={"90vh"}>
            <VStack spacing={"5"} justifyContent={["center"]} alignItems={"center"}>
                <Heading color={"black"}>Your Order Successfull</Heading>
                <Text color={"black"}>Reference No. ${orderReferenceNumber}</Text>
                <Link to={'/order-plant'}><Button size={"lg"} variant={'ghost'} colorScheme='blue'>Order Now</Button></Link>
            </VStack>
        </Box>
    )
}

export default OrderSuccessful