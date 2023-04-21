import React from 'react';
import { Box, Heading, Button, VStack, Input, Textarea, FormLabel } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box py={["4","16"]} px={["4", "56"]} bgColor={'green.600'}>
            <Heading textAlign={"center"} size={'2xl'} children='Have Queries ?' />
            <VStack mt={"20"} justifyContent={"center"}
            alignItems={["flex-start"]}
                spacing={"6"}
                px={["0", '20']}
            >
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='name'>Name</FormLabel>
                <Input size={'lg'} placeholder='Example: John Smith' />
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='email' >Email</FormLabel>
                <Input size={'lg'} placeholder='Example: smith@john.com' />
                <FormLabel fontFamily={'heading'} fontSize={'lg'} htmlFor='message'>Message</FormLabel>
                <Textarea resize="false" placeholder='Your question, query, message or complain if any...' />
                <Button variant={'outline'} size={'lg'} colorScheme='black'>Submit</Button>
            </VStack>
        </Box>
    )
}

export default Contact