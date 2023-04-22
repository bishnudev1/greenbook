import React from 'react'
import { Box, Heading, Button, VStack, Text, HStack, Avatar, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAction';

const Profile = ({user}) => {

  const dispatch = useDispatch();

  const logoutHandler = e => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <Box color={'black'} bgColor={'green.700'} minH={"70vh"} p={["4", "20"]}>
      <Stack color={"white"} justifyContent={"center"} alignItems={["center", "flex-start"]} spacing={"6"} direction={["column", "row"]}>
        <VStack mt={["10","0"]} alignItems={["center", "flex-start"]}>
          <Avatar src={user.user.avatar.url} size={'2xl'} />
          <Button variant={'ghost'} colorScheme='white' size={'sm'}>Update Picture</Button>
        </VStack>
        <VStack alignItems={["center", "flex-start"]} spacing={"5"}>
          <Heading textAlign={["center", "left"]} size={'lg'}>{user.user.name}</Heading>
          <Text textAlign={["center", "left"]}>{user.user.email}</Text>
          <HStack justifyContent={"space-evenly"}>
            <Button variant={'outline'} colorScheme='green'>Edit Profile</Button>
            <Button onClick={logoutHandler} variant={'outline'} colorScheme='red'>Logout</Button>
          </HStack>
          <Stack p={"2"} spacing={"4"} direction={["column", "row"]}>
            <VStack spacing={"3"} alignItems={["center", "flex-start"]}>
              <Heading textAlign={["center", "left"]} fontFamily={"serif"} size={'md'}>Total Trees Planted</Heading>
              <Text fontFamily={"body"} fontSize={"2xl"} textAlign={["center", "left"]}>{user.user.noOfTreesPlanted}</Text>
            </VStack>
            <VStack alignItems={["center", "flex-start"]}>
              <Heading textAlign={["center", "left"]} fontFamily={"serif"} size={'md'}>Total Events Hosted</Heading>
              <Text fontFamily={"body"} fontSize={"2xl"} textAlign={["center", "left"]}>{user.user.noOfEventsHosted}</Text>
            </VStack>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Profile