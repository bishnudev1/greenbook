import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, VStack, Stack } from '@chakra-ui/react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import WeatherBG from '../../assets/images/weatherbg.jpg';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const API_KEY = 'e6f82c63fa27e8cf3ee1b9aa3513618a';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
                axios.get(url)
                    .then(response => {
                        setWeatherData(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    if (!weatherData) {
        return <Box minH={"70vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <div id='loader'></div>
        </Box>
    }

    const { name, weather, main } = weatherData;

    return (
        <Box backgroundImage={WeatherBG} backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover" minH={"70vh"} py={["8", "16"]} px={["10","0"]}>
            <Heading
            mb={["0","20"]}
            textAlign={"center"} fontFamily={"serif"} size={"2xl"}>Weather at {name}</Heading>
            <Stack m={["unset","auto"]} maxW={["100%","container.lg"]} bg="linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 10%)"
                backdropFilter="blur(5px)"
                _before={{
                    content: '""',
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: "transparent",
                    borderRadius: "inherit",
                }} py={"4"} direction={["column", "row"]} mt={"10"} justifyContent={["center"]} alignItems={"center"}>
                <TiWeatherPartlySunny size={"100"} />
                <VStack pl={["0", "4"]} alignItems={["center", "flex-start"]}>
                    <Heading textAlign={["center", "left"]} size={"xl"}>{Math.floor(main.temp)} °C</Heading>
                    <Text textAlign={["center", "left"]} fontSize={"lg"}>Feels like: {Math.floor(main.feels_like)} °C</Text>
                </VStack>
                <VStack pl={["0", "24"]} alignItems={["center", "flex-start"]}>
                    <Text textAlign={["center", "left"]} fontWeight={"bold"} fontSize={"lg"}>{new Date().toLocaleString('en-US', { weekday: 'long' })}</Text>
                    <Text textAlign={["center", "left"]} fontWeight={"bold"} fontSize={"lg"}>{weather[0].description.toUpperCase()}</Text>
                    <Text textAlign={["center", "left"]} fontWeight={"bold"} fontSize={"md"}>{new Date().toLocaleString().slice(0, -3)}</Text>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Weather;
