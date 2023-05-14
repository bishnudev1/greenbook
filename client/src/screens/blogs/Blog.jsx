import React from 'react'
import { Heading, VStack, Text, HStack, Image, Container, useDisclosure, Button } from '@chakra-ui/react';
import { SiLinkedin, SiTwitter, SiWhatsapp } from 'react-icons/si';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { deleteBlog } from '../../redux/actions/blogAction';

const Blog = () => {

    const location = useLocation();

    const { user } = useSelector(state => state.user);
    const blogData = location.state ? location.state : null;
    const currentUser = user ? user : null;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const currentUrl = window.location.href;

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id));

        setTimeout(() => {
            navigate('/create-an-article')
        }, 1000);

    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    const shareApi = {
        whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`,
        linkedin: `https://www.linkedin.com/share?text=${currentUrl}`,
        twitter: `https://twitter.com/intent/tweet?text=${currentUrl}`
    }


    return (
        <>
            <Modal
                isOpen={isOpen} onClose={onClose}
            >        <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Warning !</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={"4"}>Are you sure want to delete your blog ? It can't be undone.</Text>
                        <Button variant={"link"} colorScheme='red' onClick={() => deleteBlogHandler(blogData._id)}>Delete</Button>
                    </ModalBody>
                </ModalContent></Modal>
            <Container bg={"white"} minH={"100vh"} maxW={"100%"} p={["4", "16"]}>
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
                                {

                                    currentUser === null ? null : blogData.user === currentUser.user._id ? <Button
                                        onClick={onOpen}
                                        size={'lg'} variant={'link'} color={'red'}>Delete</Button> : null
                                }
                            </HStack>
                            <HStack width={["100%", "unset"]} spacing={["4", "8"]} justifyContent={"space-evenly"}>
                                <a href={shareApi.whatsapp}><SiWhatsapp size={'40'} color='green' /></a>
                                <a href={shareApi.linkedin}><SiLinkedin size={'40'} color='blue' /></a>
                                <a href={shareApi.twitter}><SiTwitter size={'40'} color='skyblue' /></a>
                            </HStack>
                        </VStack>
                }
            </Container>
        </>
    )
}

export default Blog