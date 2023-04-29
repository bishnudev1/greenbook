import React from 'react'
import { Box, Heading, VStack, Text, HStack, Image, Container } from '@chakra-ui/react';
import { SiFacebook, SiLinkedin, SiStackoverflow } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const Blog = () => {

    const location = useLocation();

    const blogData = location.state ? location.state : null;

    return (
        <Container minH={"100vh"} maxW={"container.xl"} p={["4", "16"]}>
            {
                blogData === null ? <Heading textAlign={"center"} size={"lg"}>Loading...</Heading>
                    :
                    <VStack spacing={"10"} px={["4", "8"]} alignItems={"flex-start"}>
                        <Image objectFit={'contain'} src={blogData.image.url} />
                        <Heading textAlign={"left"} color={'green.600'} size={"2xl"}>{blogData.title}</Heading>
                        <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.500'} fontSize={["xl","2xl"]}>{blogData.desc}</Text>
                        <HStack pt={["4", "6"]} spacing={["4", "8"]} justifyContent={"space-evenly"} alignItems={["center", "flex-end"]}>
                            <Text fontWeight={"bold"} color={'green.400'} fontFamily={"inherit"}>{`Published on ${blogData.createdAt}`}</Text>
                            <Text fontWeight={"bold"} color={'green.400'} fontFamily={"inherit"}>{`Written by ${blogData.createdBy}`}</Text>
                        </HStack>
                        <HStack width={["100%", "unset"]} spacing={["4", "8"]} justifyContent={"space-evenly"}>
                            <a href='www.google.co.in'><SiFacebook size={'40'} color='skyblue' /></a>
                            <a href='www.google.co.in'><SiStackoverflow size={'40'} color='orange' /></a>
                            <a href='www.google.co.in'><SiLinkedin size={'40'} color='blue' /></a>
                        </HStack>
                    </VStack>
            }
        </Container>
    )
}

export default Blog