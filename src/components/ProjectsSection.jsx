import { Box, Heading, Stack } from "@chakra-ui/react";
import Project from "./ProjectCard";
import { project } from "../data/projects";

const ProjectsSection = () => {
  return (
    <>
      <Box as={"section"} id={"projects"} height={"auto"} pt={"10"}>
        <Heading fontSize={{ base: "4xl", md: "5xl" }}>
          Featured Projects
        </Heading>
        <Box mt={"16"}>
          <Stack>
            {project.map((project) => (
              <Project key={project.id} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
