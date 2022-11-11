import { Box, Heading, Stack } from "@chakra-ui/react";
import { project } from "../data/projects";
import { SpanGradient } from "./gradient";
import { AnimatePresence } from "framer-motion";
import Project from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <SpanGradient />
      <Box as={"section"} id={"projects"} height={"auto"} pt={"10"}>
        <Heading fontSize={{ base: "4xl", md: "5xl" }}>
          Featured Projects
        </Heading>
        <Box mt={"16"}>
          <Stack>
            {project.map((project: any) => (
              <Project key={project.id} {...project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
