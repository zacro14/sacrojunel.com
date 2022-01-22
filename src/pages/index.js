import PageContainer from "../components/PageContainer";
import Project from "../components/Project";
import { project } from "../data/projects";
import Seo from "../components/Seo";
import { motion } from "framer-motion";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

const MotionText = motion(Text);

export default function Home() {
  return (
    <>
      <Seo title={"Junel Sacro | - Porfolio"} description={"This is a"} />
      <PageContainer>
        <Box mx={{ base: "5", md: "20", lg: "20" }} zIndex={1}>
          <Box minH={"100vh"}>
            <Heading
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              as={"h1"}
              fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
              letterSpacing={"tight"}
              fontWeight={"bold"}
              textAlign={"center"}
              minH={{
                base: "container.sm",
                md: "container.sm",
                lg: "container.sm",
              }}
            >
              <Text
                as={"span"}
                textTransform={"capitalize"}
                fontSize={{ base: "6xl", md: "9xl", lg: "9xl" }}
              >
                Junel Sacro
              </Text>
              <Divider border={"1px"} borderColor={"beige"} />
              <MotionText
                as={"span"}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                _hover={{
                  bgGradient: "linear(to-b, orange.100, purple.300)",
                }}
                bgClip="text"
                pt={"5"}
                whileHover={{ scale: 1.1 }}
              >
                a Front-End
              </MotionText>
              <Text
                as={"span"}
                bgGradient="linear(to-l, cyan.100, cyan.800)"
                bgClip={"text"}
              >
                Web developer
              </Text>
            </Heading>
          </Box>
          <Box as={"section"} id={"projects"} height={"auto"}>
            <Heading fontSize={{ base: "4xl", md: "5xl" }}>
              Featured Projects
            </Heading>
            <Box mt={"20"}>
              <Stack>
                {project.map((project) => (
                  <Project key={project.id} data={project} />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </PageContainer>
    </>
  );
}
