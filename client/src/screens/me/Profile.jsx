import React, { useEffect } from 'react'
import { Box, Heading, Button, VStack, Text, HStack, Avatar, Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logout } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {

  const dispatch = useDispatch();

  const { loading, error, message } = useSelector(state => state.profile);

  const logoutHandler = e => {
    e.preventDefault();
    dispatch(logout());
  }

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch, loading, error, message]);


  return (
    <Box color={'black'} bgColor={'green.700'} minH={"70vh"} p={["4", "20"]}>
      <Stack color={"white"} justifyContent={"center"} alignItems={["center", "flex-start"]} spacing={"6"} direction={["column", "row"]}>
        <VStack mt={["10", "0"]} alignItems={["center", "flex-start"]}>
          <Avatar src={user.user.avatar.url} size={'2xl'} />
          <Link to={'/update-dp'}><Button variant={'ghost'} colorScheme='white' size={'sm'}>Update Picture</Button></Link>
        </VStack>
        <VStack alignItems={["center", "flex-start"]} spacing={"5"}>
          <Heading textAlign={["center", "left"]} size={'lg'}>{user.user.name}</Heading>
          <Text textAlign={["center", "left"]}>{user.user.email}</Text>
          <Text textAlign={["center", "left"]}>{`Joined on ${user.user.createdAt}`}</Text>
          <HStack justifyContent={"space-evenly"}>
            <Link to={'/update-profile'}><Button variant={'outline'} color={"white"} colorScheme='green'>Edit Profile</Button></Link>
            <Button onClick={logoutHandler} variant={'outline'} color={"red"} colorScheme='red'>Logout</Button>
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