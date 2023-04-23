import React, { useState } from 'react'
import { Box, Heading, Button, VStack, Input, Text, FormLabel, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/userAction';


const Login = () => {

  const { loading } = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  }


  return (
    <Box color={'black'} bgColor={'green.700'} minH={"80vh"} p={["4", '20']}>
      <Heading mt={["10","0"]} color={'white'}  textAlign={"center"} size={'2xl'} children='Welcome back...' />
      <VStack color={'white'}  px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='bishnudev@greenbook.com' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Password</FormLabel>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='*******' />
        </VStack>
        <VStack width={"100%"} alignItems={"center"} spacing={'2'}>
          <Button variant={'link'} colorScheme='green' size={'lg'}>Forget Password ?</Button>
          <Button isLoading={loading} onClick={submitHandler} variant={'ghost'} size={'lg'} colorScheme='white'>Login</Button>
        </VStack>
        <HStack justifyContent={"space-evenly"} alignItems={"center"} spacing={'4'}>
          <Text fontFamily={'sans-serif'} fontSize={'md'}>Doesn't have an account ?</Text>
          <Link to={'/register'}><Button variant={'outline'}>Register</Button></Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Login