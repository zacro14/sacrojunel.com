import { Box, Heading, Stack } from "@chakra-ui/react";
import { SpanGradient } from "../../gradient";
import Project from "../../card/projectcard";
import { project } from "../../../data/projects";

const ProjectsSection = () => {
  return (
    <>
      <SpanGradient />
      <Box as={"section"} id={"projects"} height={"auto"} pt={"10"}>
        <Heading fontSize={{ base: "4xl", md: "5xl" }}>
          Featured Projects
        </Heading>
        <Box mt={"16"}>
          <Stack direction={"column-reverse"}>
            {project.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
