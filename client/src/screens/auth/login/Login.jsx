import React from 'react'
import { Container, Heading, Button, VStack, Input, Text, FormLabel, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Login = () => {


  return (
    <Container minH={"80vh"} maxW={"container.lg"} p={["4", '12']}>
      <Heading textAlign={"center"} size={'2xl'} children='Welcome back...' />
      <VStack px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Email</FormLabel>
          <Input type='email' placeholder='bishnudev@greenbook.com' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Password</FormLabel>
          <Input type='text' placeholder='*******' />
        </VStack>
        <VStack width={"100%"} alignItems={"center"} spacing={'2'}>
          <Button variant={'link'} colorScheme='green' size={'lg'}>Forget Password ?</Button>
          <Button variant={'ghost'} size={'lg'} colorScheme='white'>Login</Button>
        </VStack>
        <HStack justifyContent={"space-evenly"} alignItems={"center"} spacing={'4'}>
          <Text fontFamily={'sans-serif'} fontSize={'md'}>Doesn't have an account ?</Text>
          <Link to={'/register'}><Button variant={'outline'}>Register</Button></Link>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Login