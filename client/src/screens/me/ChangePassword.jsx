import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { loading, error, message } = useSelector(state => state.profile);

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" })
            navigate('/me');
        }
    }, [dispatch, error, message])

    const ChangePasswordHandler = e => {
        e.preventDefault();
        dispatch(changePassword(password, newPassword));
    }

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"80vh"} p={["4", '20']}>
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Current Password</FormLabel>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type='text' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>New Password</FormLabel>
                    <Input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type='text' />
                </VStack>
                <VStack width={"100%"} alignItems={"center"} spacing={'4'}>
                    <Button isLoading={loading} onClick={ChangePasswordHandler} variant={'ghost'} size={'lg'} colorScheme='white'>Change</Button>
                    <Button onClick={() => navigate('/me')} variant={'link'} colorScheme='green' size={'lg'}>Cancel</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default ChangePassword