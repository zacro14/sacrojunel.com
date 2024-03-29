import { GiSharpCrown } from "react-icons/gi";
import { Box, Divider, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const Hero = () => {
  return (
    <>
      <Box id="home" pb={"28"} mt={{ base: "20", lg: "36" }}>
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
            fontSize={{ base: "5xl", md: "6xl", lg: "6xl" }}
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
            <Box
              display={"flex"}
              flexDir={{ base: "column", md: "row", lg: "row" }}
              gap={{ base: "2", md: "4", lg: "4" }}
            >
              <MotionText
                as={"span"}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                _hover={{
                  bgGradient: "linear(to-b, orange.100, purple.300)",
                }}
                bgClip="text"
                whileHover={{ scale: 1.1 }}
              >
                <Text fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}>
                  A Front-End
                </Text>
              </MotionText>
              <Text
                as={"span"}
                fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                bgClip={"text"}
              >
                Web Developer
              </Text>
            </Box>
          </Heading>
          <Box
            pt={"10"}
            textColor={"whiteAlpha.700"}
            fontSize={"lg"}
            fontWeight={"medium"}
            fontFamily={"body"}
          >
            <Text>Hi welcome to my site, How are you today?</Text>
            <Text>
              Ooh wait!, I would like to introduced my self, My name is Junel
              Sacro
            </Text>
            <Text>
              A Web Developer learning typescript and discovering the world of
              the web.
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Hero;
