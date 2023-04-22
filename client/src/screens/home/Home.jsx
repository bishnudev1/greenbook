import React from 'react'
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import bg from '../../assets/images/bg.jpg';
import './home.css';
import About from '../about/About';
import Programs from '../programs/Programs';
import PartnerWithUs from '../partner/PartnerWithUs';
import Founder from '../team/Founder';
import Contact from '../contact/Contact';


const Home = () => {
    
    return (
        <Box>
            <Box
            className='home-bg'
                backgroundImage={bg}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                minHeight={["80vh", "60vh"]}
                display={"flex"}
                justifyContent={'center'}
                alignItems={'center'}
                p={["4","60"]}
            >
                <VStack color={'white'} spacing={'6'}>
                    <Heading size={"4xl"} textAlign={["center", "left"]}>
                        #Nature. #Us.
                    </Heading>
                    <Heading size={"4xl"} textAlign={["center", "left"]}>
                        #Living
                    </Heading>
                    <Text textAlign={["center"]} fontWeight={"bold"} fontFamily={'body'} fontSize={'lg'} children="This is a community which provides free hands-on training in various fields of computer science and have an inclusive community focusing on a learn by doing approach." />
                    <Button color={'white'} variant={'outline'} colorScheme='white' size={'lg'} children='Contributions' />
                </VStack>
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