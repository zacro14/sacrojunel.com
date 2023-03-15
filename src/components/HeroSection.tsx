import { GiSharpCrown } from "react-icons/gi";
import { Box, Divider, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Hero = () => {
  return (
    <>
      <Box id={" herosection"} pb={"28"} mt="36">
        <Stack alignItems={"start"} justifyContent={"start"}>
          <Heading
            fontWeight={{ base: "normal", md: "medium" }}
            letterSpacing={"widest"}
            fontSize={{ base: "lg" }}
          >
            <Icon color={"cyan.100"} as={GiSharpCrown}></Icon> Welcome to my
            Domain <Icon color={"cyan.100"} as={GiSharpCrown}></Icon>
          </Heading>

          <Heading
            display={"flex"}
            flexDir={"column"}
            as={"h1"}
            fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
            letterSpacing={"tight"}
            fontWeight={"bold"}
          >
            <Text
              as={"span"}
              textTransform={"capitalize"}
              fontSize={{ base: "6xl", md: "9xl", lg: "9xl" }}
            >
              Junel Sacro
            </Text>
            <Divider border={"1px"} />
            <Box display={"flex"} gap={"4"}>
              <MotionText
                as={"span"}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                _hover={{
                  bgGradient: "linear(to-b, orange.100, purple.300)",
                }}
                bgClip="text"
                whileHover={{ scale: 1.1 }}
                f
              >
                <Text fontSize={"5xl"}>A Front-End</Text>
              </MotionText>
              <Text
                as={"span"}
                fontSize={"5xl"}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                bgClip={"text"}
              >
                Web Developer
              </Text>
            </Box>
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default Hero;
