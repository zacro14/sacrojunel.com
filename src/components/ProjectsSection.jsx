import { Box, Heading, Stack } from "@chakra-ui/react";
import Project from "./ProjectCard";
import { project } from "../data/projects";
import { AboveTheFoldGradient, SpanGradient } from "./gradient";
import { AnimatePresence } from "framer-motion";

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
            <AnimatePresence>
              {project.map((project) => (
                <Project key={project.id} data={project} />
              ))}
            </AnimatePresence>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
