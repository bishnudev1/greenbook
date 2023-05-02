import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { resetPassword } from '../../../redux/actions/userAction';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const { token } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [password, setPassword] = useState('');

    const { loading, message, error } = useSelector(state => state.user);

    const resetPassHandler = e => {
        e.preventDefault();
        dispatch(resetPassword(token, password));
    }

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

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"80vh"} p={["4", '20']}>
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>New Password</FormLabel>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type='text' />
                </VStack>
                <VStack width={"100%"} alignItems={"center"} spacing={'4'}>
                    <Button isLoading={loading} onClick={resetPassHandler} variant={'solid'} size={'lg'} colorScheme='green'>Change Password</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default ResetPassword