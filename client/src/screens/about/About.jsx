import React from 'react';
import { Box, Heading, Text, VStack, Image, Stack } from '@chakra-ui/react';
import whoarewe from '../../assets/images/whoarewe.svg';

const About = () => {
    return (
        <Box>
            <Box p={["4", "16"]} bgColor={'green.600'}>
                <VStack spacing={["4", "8"]} alignItems={"center"} justifyContent={"center"} p={["4", "12"]}>
                    <Heading textAlign={"center"} size={'2xl'} children='Who we are ?' />
                    <Image src={whoarewe} boxSize={'sm'} objectFit={'contain'} />
                    <Text width={["100%", '3xl']} textAlign={"center"} fontFamily={"body"} fontSize={["2xl", "3xl"]}>
                        We are a new unicorn startups here to provide essential knowledge and tips how we can save our <b>Mother Nature</b> and make our <b>Earth</b> sweetest again for living.
                    </Text>
                </VStack>
            </Box>
            <Box p={"5"} bgColor={'white'}>
                <Stack direction={["column", "row"]} alignItems={"center"} justifyContent={["center", "space-evenly"]}>
                    <VStack alignItems={["center", "flex-start"]}>
                        <Heading size={"2xl"} fontFamily={"cursive"} fontWeight={"bold"} color={"green.800"}>1000+</Heading>
                        <Text fontSize={"xl"} color={"black"}>Planted Trees</Text>
                    </VStack>
                    <VStack alignItems={["center", "flex-start"]}>
                        <Heading size={"2xl"} fontFamily={"cursive"} fontWeight={"bold"} color={"green.800"}>1+</Heading>
                        <Text fontSize={"xl"} color={"black"}>Village Restored</Text>
                    </VStack>
                    <VStack alignItems={["center", "flex-start"]}>
                        <Heading size={"2xl"} fontFamily={"cursive"} fontWeight={"bold"} color={"green.800"}>10+</Heading>
                        <Text fontSize={"xl"} color={"black"}>Seminers Hosted</Text>
                    </VStack>
                </Stack>
            </Box>
        </Box>
    )
}

export default About