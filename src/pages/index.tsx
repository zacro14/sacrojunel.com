import { Box } from "@chakra-ui/react";
import Hero from "@/components/HeroSection";
import Seo from "@/components/Seo";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import { PageContainer } from "@/components/index";

export default function Home() {
  const envi = {
    env: process.env.GA_ID,
  };

  console.log(envi);
  return (
    <>
      <Seo
        title={"Junel Sacro | Porfolio"}
        description={"This is the portfolio of Junel Sacro"}
      />
      <PageContainer>
        <Box mx={{ base: "5", md: "20", lg: "20" }} zIndex={1} mt={"36"}>
          <Hero />
          <ProjectsSection />
          <TechnologiesSection />
        </Box>
      </PageContainer>
    </>
  );
}