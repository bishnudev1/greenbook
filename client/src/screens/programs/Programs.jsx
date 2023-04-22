import React from 'react'
import { Box, Heading, Text, Button, VStack, Image, Stack } from '@chakra-ui/react';
import Tree from '../../assets/images/tree.svg'
import Articles from '../../assets/images/articles.svg';
import Events from '../../assets/images/events.svg';
import { Link } from 'react-router-dom';


const WhatYouCanDo = ({ image, title, desc, linkAddress, buttonTitle }) => {
    return <VStack mb={"8"}  maxW={["100%", "60"]} bgColor={'green.300'} className='whatyoucando' spacing={'6'}>
        <Image src={image} boxSize={"28"} objectFit={'contain'} />
        <Text fontWeight={'bold'} color={'white'} textAlign={"center"} fontFamily={'body'} fontSize={'2xl'}>{title}</Text>
        <Text color={'white'} textAlign={"center"} fontFamily={'initial'} fontSize={'lg'}>{desc}</Text>
        <Box p={'2'} display={"flex"} justifyContent={"center"} alignItems={"center"} bgColor={'green.600'} w={'100%'}>
            <Link to={`/${linkAddress}`}><Button variant={'link'} color={'white'} colorScheme='black' size={'md'}>{buttonTitle}</Button></Link>
        </Box>
    </VStack>
}

const Programs = () => {
    return (
        <Box p={["4", "16"]} bgColor={'green.600'}>
            <Heading textAlign={"center"} size={'2xl'} children='What you can do here ?' />
            <Stack mt={'20'} display={"flex"} flexWrap={"wrap"} justifyContent={["center", "space-evenly"]} alignItems={["center", "flex-start"]} direction={["column", "row"]}>
                <WhatYouCanDo image={Tree} title={'Plant Trees'} desc={"Plant trees by yourself and tag us the picture of it in our social or donate us to buy plants for the world's health."} linkAddress={''} buttonTitle={"Coming Soon"} />
                <WhatYouCanDo image={Events} title={'Manage Events'} desc={'Held nature awareness events through us at your local society, school, college, office to aware peoples.'} linkAddress={''} buttonTitle={"Coming Soon"} />
                <WhatYouCanDo image={Articles} title={'Write Articles'} desc={'Write about nature articles so that every human can understand why it is so important to save the nature.'} linkAddress={'create-an-article'} buttonTitle={"Write Now"} />

            </Stack>
        </Box>
    )
}

export default Programs