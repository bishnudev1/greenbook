import React, { useState } from 'react';
import { Box, Button, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profileAction';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { loading, error, message } = useSelector(state => state.profile);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const updateProfileHandler = e => {
        e.preventDefault();

        dispatch(updateProfile(name, email));

        if (error) {
            toast.error(error);
        }
        if (message) {
            toast.success(message);
            navigate('/me');
        }
    }

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"80vh"} p={["4", '20']}>
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>New Name</FormLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type='email' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>New Email</FormLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' />
                </VStack>
                <VStack width={"100%"} alignItems={"center"} spacing={'4'}>
                    <Button isLoading={loading} onClick={updateProfileHandler} variant={'ghost'} size={'lg'} colorScheme='white'>Update</Button>
                    <Button onClick={() => navigate('/me')} variant={'link'} colorScheme='green' size={'lg'}>Cancel</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default UpdateProfile