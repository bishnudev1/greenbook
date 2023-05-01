import React from 'react'
import { Heading, VStack, Text, HStack, Image, Container } from '@chakra-ui/react';
import { SiLinkedin, SiTwitter, SiWhatsapp } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const Blog = () => {

    const currentUrl = window.location.href;

    const location = useLocation();

    const shareApi = {
        whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`,
        linkedin: `https://www.linkedin.com/share?text=${currentUrl}`,
        twitter: `https://twitter.com/intent/tweet?text=${currentUrl}`
    }

    const blogData = location.state ? location.state : null;

    return (
        <Container minH={"100vh"} maxW={"container.xl"} p={["4", "16"]}>
            {
                blogData === null ? <Heading textAlign={"center"} size={"lg"}>Loading...</Heading>
                    :
                    <VStack spacing={"10"} px={["4", "8"]} alignItems={"flex-start"}>
                        <Image objectFit={'contain'} src={blogData.image.url} />
                        <Heading textAlign={"left"} color={'green.600'} size={"2xl"}>{blogData.title}</Heading>
                        <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.500'} fontSize={["xl", "2xl"]}>{blogData.desc}</Text>
                        <HStack pt={["4", "6"]} spacing={["4", "8"]} justifyContent={"space-evenly"} alignItems={["center", "flex-end"]}>
                            <Text fontWeight={"bold"} color={'green.400'} fontFamily={"inherit"}>{`Published on ${blogData.createdAt}`}</Text>
                            <Text fontWeight={"bold"} color={'green.400'} fontFamily={"inherit"}>{`Written by ${blogData.createdBy}`}</Text>
                        </HStack>
                        <HStack width={["100%", "unset"]} spacing={["4", "8"]} justifyContent={"space-evenly"}>
                            <a href={shareApi.whatsapp}><SiWhatsapp size={'40'} color='green' /></a>
                            <a href={shareApi.linkedin}><SiLinkedin size={'40'} color='blue' /></a>
                            <a href={shareApi.twitter}><SiTwitter size={'40'} color='skyblue' /></a>
                        </HStack>
                    </VStack>
            }
        </Container>
    )
}

export default Blog