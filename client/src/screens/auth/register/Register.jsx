import React, { useState } from 'react'
import { Box, Heading, Button, VStack, Input, Text, FormLabel, HStack, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/actions/userAction';


export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "blue",
  backgroundColor: "white"
};

const Register = () => {

  const fileUploaderStyle = {
    "&::file-selector-button": fileUploadCss
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }


  return (
    <Box color={'black'} bgColor={'green.700'} minH={"90vh"} p={["4", '20']}>
      <Heading color={'white'} textAlign={"center"} size={'2xl'} children='Create Account...' />
      <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
        <Avatar size={'xl'} />
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} width={'100%'} type='text' placeholder='Bishnudev Khutia' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='bishnudev@greenbook.com' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Password</FormLabel>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='*******' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Profile Image</FormLabel>
          <Input css={fileUploaderStyle} required accept='image/*' type='file' />
        </VStack>

        <VStack width={"100%"} alignItems={"center"} spacing={'2'}>
          <Text fontSize={'md'} textAlign={"center"} fontFamily={'sans-serif'}>By signing up, you're agreeing with our T & C</Text>
          <Button onClick={submitHandler} variant={'ghost'} size={'md'} colorScheme='white'>Create Account</Button>
        </VStack>
        <HStack justifyContent={"space-evenly"} alignItems={"center"} spacing={'4'}>
          <Text fontFamily={'sans-serif'} fontSize={'md'}>Already have an account ?</Text>
          <Link to={'/login'}><Button variant={'outline'}>Login</Button></Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Register