import React from 'react'
import { Box, Heading, VStack, Text, HStack, Image } from '@chakra-ui/react';
import { SiFacebook, SiLinkedin, SiStackoverflow } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const Blog = () => {

    const location = useLocation();

    const blogData = location.state ? location.state : null;

    return (
        <Box bgColor={'white'} minH={"100vh"} p={["4", "16"]}>
            {
                blogData === null ? <Heading textAlign={"center"} size={"lg"}>Loading...</Heading>
                    :
                    <VStack spacing={"10"} px={["4", "8"]} alignItems={"flex-start"}>
                        <Heading textAlign={"left"} color={'green'} size={"3xl"}>{blogData.title}</Heading>
                        <Image objectFit={'contain'} boxSize={["unset", "80"]} src={blogData.image.url} />
                        <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.800'} fontSize={"2xl"}>{blogData.desc}</Text>
                        <HStack pt={["4", "6"]} spacing={["4", "8"]} justifyContent={"space-evenly"} alignItems={["center", "flex-end"]}>
                            <Text fontWeight={"bold"} color={'green.600'} fontFamily={"inherit"}>{`Published on ${blogData.createdAt}`}</Text>
                            <Text fontWeight={"bold"} color={'green.600'} fontFamily={"inherit"}>{`Written by ${blogData.createdBy}`}</Text>
                        </HStack>
                        <HStack width={["100%", "unset"]} spacing={["4", "8"]} justifyContent={"space-evenly"}>
                            <a href='www.google.co.in'><SiFacebook size={'40'} color='skyblue' /></a>
                            <a href='www.google.co.in'><SiStackoverflow size={'40'} color='orange' /></a>
                            <a href='www.google.co.in'><SiLinkedin size={'40'} color='blue' /></a>
                        </HStack>
                    </VStack>
            }
        </Box>
    )
}

export default Blog