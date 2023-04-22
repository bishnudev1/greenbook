import React from 'react'
import { Box, Heading, Button, VStack, Text, HStack, Avatar, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Box color={'black'} bgColor={'green.700'} minH={"70vh"} p={["4", "20"]}>
      <Stack color={"white"} justifyContent={"center"} alignItems={["center", "flex-start"]} spacing={"6"} direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]}>
          <Avatar size={'2xl'} />
          <Button variant={'ghost'} colorScheme='white' size={'sm'}>Update Picture</Button>
        </VStack>
        <VStack alignItems={["center", "flex-start"]} spacing={"5"}>
          <Heading textAlign={["center", "left"]} size={'lg'}>Bishnudev Khutia</Heading>
          <Text textAlign={["center", "left"]}>Bishnudevkhutia20@gmail.com</Text>
          <HStack justifyContent={"space-evenly"}>
            <Button variant={'outline'} colorScheme='green'>Edit Profile</Button>
            <Button variant={'outline'} colorScheme='red'>Logout</Button>
          </HStack>
          <Stack p={"2"} spacing={"4"} direction={["column", "row"]}>
            <VStack spacing={"3"} alignItems={["center", "flex-start"]}>
              <Heading textAlign={["center", "left"]} fontFamily={"serif"} size={'md'}>Total Trees Planted</Heading>
              <Text fontFamily={"body"} fontSize={"2xl"} textAlign={["center", "left"]}>0+</Text>
            </VStack>
            <VStack alignItems={["center", "flex-start"]}>
              <Heading textAlign={["center", "left"]} fontFamily={"serif"} size={'md'}>Total Events Hosted</Heading>
              <Text fontFamily={"body"} fontSize={"2xl"} textAlign={["center", "left"]}>0+</Text>
            </VStack>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Profile