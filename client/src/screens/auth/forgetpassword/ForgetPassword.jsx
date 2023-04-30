import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { forgetPassword } from '../../../redux/actions/userAction';

const ForgetPassword = () => {


    const { loading, message, error } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const forgetPassHandler = e => {
        e.preventDefault();
        dispatch(forgetPassword(email));
    }

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, error, message])

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"80vh"} p={["4", '20']}>
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Email</FormLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' />
                </VStack>
                <VStack width={"100%"} alignItems={"center"} spacing={'4'}>
                    <Button isLoading={loading} onClick={forgetPassHandler} variant={'solid'} size={'lg'} colorScheme='green'>Request Token</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default ForgetPassword