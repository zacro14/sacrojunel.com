import PageContainer from "../components/PageContainer";
import Project from "../components/Project";
import { project } from "../data/projects";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <PageContainer>
        <Box mx={{ base: "10", md: "20", lg: "20" }} zIndex={1}>
          <Heading
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            as={"h1"}
            textTransform={"lowercase"}
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
            <Text
              as={"span"}
              bgGradient="linear(to-l, cyan.100, cyan.800)"
              bgClip="text"
              pt={"5"}
            >
              a Front-End
            </Text>
            <Text
              as={"span"}
              bgGradient="linear(to-l, cyan.100, cyan.800)"
              bgClip={"text"}
            >
              Web developer
            </Text>
          </Heading>
          <Box as={"section"} id={"projects"} height={"auto"}>
            <Heading fontSize={"5xl"}>Featured Projects</Heading>
            <Box mt={"10"}>
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
