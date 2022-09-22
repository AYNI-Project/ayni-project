import { Box } from "@mui/system";
import {Slide } from "@mui/material";
import {PromotionsContainer, 
MessageText } from "../../styles/promotions";
//import { Colors } from "../../styles/theme";
import { useEffect, useState, useRef } from "react";


const messages = [
    "Busca lo que necesitas",
    "Aprende sobre AYNI",
    "Intercambia conocimientos"
];

export default function Promotions() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow]   = useState(true)
    const containerRef = useRef();
    useEffect (() => {
        setTimeout(() => {
        setShow(false)
    }, 3000);

        const intervalId= setInterval(() =>{
            setMessageIndex ((i) => (i + 1) % messages.length);
            setShow(true);

            setTimeout(() => {
                setShow(false);
              }, 3000);
        }, 4000);
        return () => {
            clearInterval(intervalId) 
    };
}, []);

    return (
        <PromotionsContainer ref={containerRef}>
            <Slide
            direction={show ? "left" : "right"}
            in = {show}
            container={containerRef.current}
            timeout={{
                enter: 500,
                exit: 100,
              }}>
            
            <Box display={"Flex"} justifyContent="center" alignItems={"center"}>
            <MessageText>
                {messages[messageIndex]}

            </MessageText>
            </Box>
            </Slide>
   
       </PromotionsContainer>
    );
}