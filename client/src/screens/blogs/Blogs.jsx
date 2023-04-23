import React, { useEffect } from 'react';
import { Box, Heading, Button, VStack, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { loadBlogs } from '../../redux/actions/blogAction';
import { useDispatch, useSelector } from 'react-redux';


const Blogs = () => {

    const { blogs } = useSelector(state => state.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogs())
    }, [])

    return (
        <Box bgColor={'green.300'} py={["4", "16"]} px={["4", "56"]} minH={"100vh"}>
            <VStack spacing={"6"} alignItems={["center", "flex-start"]}>
                {
                    blogs.map((item, index) => {
                        return <VStack key={index} p={["3", "4"]} borderRadius={"xl"} bgColor={'whiteAlpha.600'} w={"100%"} spacing={"4"} alignItems={"flex-start"}>
                            <Heading color={'green'} size={["lg", "xl"]}>{item.title}</Heading>
                            <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.800'} fontSize={["lg", "xl"]} textAlign={"left"}>{item.desc}</Text>
                            <HStack alignItems={"center"} justifyContent={"space-evenly"}>
                                <Text textAlign={["center", "left"]} color={'green.600'} fontFamily={"inherit"}>- {item.createdBy}</Text>
                            </HStack>
                            <Link to={`blog/${item._id}`}><Button variant={'link'} color={'green'} size={'lg'}>Read Now</Button></Link>
                        </VStack>
                    })
                }
            </VStack>
        </Box>
    )
}

export default Blogs