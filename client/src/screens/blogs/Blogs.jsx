import React from 'react';
import { Box, Heading, Button, VStack, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Blogs = () => {


    const blogData = [
        {
            id: 1,
            title: 'Blog1',
            desc: 'This is the description of Blog 1. It is for testing purpose.',
            createdAt: '21/04/23',
            createdBy: 'Bishnudev Khutia'
        },
        {
            id: 2,
            title: 'Blog2',
            desc: 'This is the description of Blog 2. It is for testing purpose.',
            createdAt: '12/04/23',
            createdBy: 'Arnab Metya'
        },
        {
            id: 3,
            title: 'Blog3',
            desc: 'This is the description of Blog 3. It is for testing purpose.',
            createdAt: '10/03/23',
            createdBy: 'Sudip Kar'
        },
    ];

    return (
        <Box bgColor={'green.300'} py={["4", "16"]} px={["4", "56"]} minH={"100vh"}>
            <VStack spacing={"6"} alignItems={["center", "flex-start"]}>
                {
                    blogData.map((item, index) => {
                        return <VStack key={index} p={["2", "4"]} borderRadius={"xl"} bgColor={'whiteAlpha.600'} w={"100%"} spacing={"4"} alignItems={["center", "flex-start"]}>
                            <Heading color={'green'} size={"xl"}>{item.title}</Heading>
                            <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.800'} fontSize={"xl"} textAlign={["center", "left"]}>{item.desc}</Text>
                            <HStack alignItems={"center"} justifyContent={"space-evenly"}>
                                <Text textAlign={["center","left"]} color={'green.600'} fontFamily={"inherit"}>- {item.createdBy}</Text>
                            </HStack>
                            <Link to={`blog/${item.id}`}><Button variant={'link'} color={'green'} size={'lg'}>Read Now</Button></Link>
                        </VStack>
                    })
                }
            </VStack>
        </Box>
    )
}

export default Blogs