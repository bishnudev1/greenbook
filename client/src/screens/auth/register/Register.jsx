import React from 'react'
import { Container, Heading, Button, VStack, Input, Text, FormLabel, HStack, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


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

  return (
    <Container minH={"90vh"} maxW={"container.lg"} p={["4", '12']}>
      <Heading textAlign={"center"} size={'2xl'} children='Create Account...' />
      <VStack px={["2", "60"]} justifyContent={"center"} mt={["20","10"]} spacing={'5'}>
        <Avatar size={'xl'}/>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Name</FormLabel>
          <Input width={'100%'} type='text' placeholder='Bishnudev Khutia' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Email</FormLabel>
          <Input type='email' placeholder='bishnudev@greenbook.com' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Password</FormLabel>
          <Input type='text' placeholder='*******' />
        </VStack>
        <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
          <FormLabel textAlign={["left"]}>Profile Image</FormLabel>
          <Input css={fileUploaderStyle} required accept='image/*' type='file' />
        </VStack>
        
        <VStack width={"100%"} alignItems={"center"} spacing={'2'}>
          <Text fontSize={'md'} textAlign={"center"} fontFamily={'sans-serif'}>By signing up, you're agreeing with our T & C</Text>
          <Button variant={'ghost'} size={'md'} colorScheme='white'>Create Account</Button>
        </VStack>
        <HStack justifyContent={"space-evenly"} alignItems={"center"} spacing={'4'}>
          <Text fontFamily={'sans-serif'} fontSize={'md'}>Already have an account ?</Text>
          <Link to={'/login'}><Button variant={'outline'}>Login</Button></Link>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Register