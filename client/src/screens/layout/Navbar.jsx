import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Stack, HStack } from '@chakra-ui/react';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user }) => {


    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box className={isScrolled ? 'navbar-blur' : 'navbar'} style={{
            "position": "sticky",
            "zIndex": 11,
            "top": 0
        }} color={"green.800"} p={'4'}>
            <Stack spacing={'8'} direction={["column", "row"]} justifyContent={["center", "space-around"]} alignItems={'center'}>
                <Link to={'/'}>
                    <HStack>
                        <GiPlantsAndAnimals size={'30'} />
                        <Heading size={'lg'} fontFamily={"serif"}>Greenbook</Heading>
                    </HStack></Link>
                <HStack width={["100%", "unset"]} justifyContent={["space-evenly", "unset"]} spacing={['3', '6']}>
                    <Link to={'/check-weather'}>                    <Button _hover={{ "color": "green" }} fontFamily={"heading"} size={["sm", "md"]} variant={'link'} fontSize={["sm", "md"]} colorScheme='white'>Weather</Button></Link>
                    {
                        isAuthenticated ? <Link to={'/me'}><Button variant={'link'} colorScheme='white'>Profile</Button></Link> : <Link to={'/register'}>                    <Button _hover={{ "color": "green" }} fontFamily={"heading"} fontSize={["sm", "md"]} size={["sm", "md"]} variant={'link'} colorScheme='white'>Create Account</Button></Link>
                    }
                    <Link to='/greenblogs'>
                        <Button className='profile-btn' fontFamily={"heading"} size={["sm", "md"]} variant={["ghost", "solid"]} fontSize={["sm", "md"]} colorScheme='blue'>Read Article<ArrowForwardIcon className='arrow-btn' /></Button></Link>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Navbar