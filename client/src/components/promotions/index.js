import { Box } from "@mui/system";
import { Slide } from "@mui/material";
import { PromotionsContainer, MessageText } from "../../styles/promotions";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const messages = [
  
  <Link className="link" to="/about-us">
    Aprende sobre ayni
  </Link>,
  "Busca lo que necesitas",
  "Intercambia conocimientos",
  "Envia Solicitud y comienza con el truque",

];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"Flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
