import { Box } from "@chakra-ui/react";

export function FooterGradient() {
  return (
    <Box
      zIndex={0}
      position="absolute"
      pointerEvents={"none"}
      width="full"
      height="680px"
      left="0px"
      bottom="0px"
      opacity={0.5}
      bg="linear-gradient(180deg, rgba(56, 32, 19, 0) 0%, rgb(8, 111, 131, 0.4) 100%)"
    />
  );
}

export function MainGradient() {
  return (
    <Box
      zIndex={0}
      width="100%"
      position="absolute"
      top="0"
      left="0"
      height="680px"
      pointerEvents="none"
      bg="radial-gradient(53.09% 53.09% at 50% 37.57%, rgb(8, 111, 131, 0.3) 0%, rgb(45, 55, 72, 0) 100%);"
    />
  );
}

export function SpanGradient() {
  return (
    <Box
      zIndex={0}
      width="100%"
      height="1400px"
      position="absolute"
      left="0"
      top="700px"
      pointerEvents="none"
      bg="linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgb(8, 111, 131, 0.3) 45.31%, rgba(19, 19, 19, 0) 100%)"
    />
  );
}
