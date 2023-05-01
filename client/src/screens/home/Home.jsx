import React from 'react'
import { Box, Image, Text, Button, Stack, VStack } from '@chakra-ui/react';
import './home.css';
import About from '../about/About';
import Programs from '../programs/Programs';
import PartnerWithUs from '../partner/PartnerWithUs';
import Founder from '../team/Founder';
import Contact from '../contact/Contact';
import HomeLogo from '../../assets/images/homeLogo.png';


const Home = () => {

    return (
        <Box>
            <Box
                minHeight={"80vh"}
                py={["4", "20"]}
                px={["4","50"]}
                bg={"white"}
            >
                <Stack p={["2","20"]} justifyContent={["center","space-between"]} alignItems={"center"} direction={["column", "row"]} width={"100%"} color={'green'} spacing={'6'}>
                    <VStack
                    spacing={"6"} width={"100%"} justifyContent={["center", "space-between"]} alignItems={["center", "flex-start"]}>
                        <Text  width={["100%","xl"]} textAlign={["center","left"]} fontWeight={"bold"} fontFamily={'body'} fontSize={'xl'} children="This is a community which provides free hands-on knowledge how to contribute in our mother nature to make it more green and makes it livable again." />
                        <Button color={'green.800'} variant={'solid'} colorScheme='green' size={'lg'} children='Contributions' />
                    </VStack>
                    <Image id='founder' src={HomeLogo} objectFit={"contain"} boxSize={"sm"}/>
                </Stack>
            </Box>
            <About />
            <Programs />
            <PartnerWithUs />
            <Founder />
            <Contact />
        </Box>
    )
}

export default Home