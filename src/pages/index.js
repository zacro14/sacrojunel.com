import PageContainer from "../components/PageContainer";

import Seo from "../components/Seo";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Hero from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import TechnologiesSection from "../components/TechnologiesSection";

export default function Home() {
  return (
    <>
      <Seo
        title={"Junel Sacro | - Porfolio"}
        description={"This is the portfolio of Junel Sacro"}
      />
      <PageContainer>
        <Box mx={{ base: "5", md: "20", lg: "20" }} zIndex={1}>
          <Hero />
          <ProjectsSection />
          <TechnologiesSection />
        </Box>
      </PageContainer>
    </>
  );
}
