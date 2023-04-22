import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Input, Textarea, FormLabel } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { contact } from '../../redux/actions/otherAction';
import toast from 'react-hot-toast';

const Contact = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitMessage = (e) => {
        e.preventDefault();
        dispatch(contact(name, email, message));
        toast.success(`Hi ${name}. Your feedback has been sent to us. Thanks.`)
    }

    return (
        <Box py={["4", "16"]} px={["4", "56"]} bgColor={'green.600'}>
            <Heading textAlign={"center"} size={'2xl'} children='Have Queries ?' />
            <VStack mt={"20"} justifyContent={"center"}
                alignItems={["flex-start"]}
                spacing={"6"}
                px={["0", '20']}
                color={'white'}
            >
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='name'>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} size={'lg'} placeholder='Example: John Smith' />
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='email' >Email</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} size={'lg'} placeholder='Example: smith@john.com' />
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='message'>Message</FormLabel>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} resize="false" placeholder='Your question, query, message or complain if any...' />
                <Button onClick={submitMessage} variant={'outline'} size={'lg'} colorScheme='black'>Submit</Button>
            </VStack>
        </Box>
    )
}

export default Contact