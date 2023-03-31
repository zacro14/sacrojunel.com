import { Box } from "@chakra-ui/react";
import ProjectsSection from "@/components/section/project";
import { PageContainer } from "@/components/index";
import Hero from "@/components/section/hero";
import Seo from "@/components/seo";
import TechnologiesSection from "@/components/section/technologies";

export default function Home() {
  const envi = {
    env: process.env.GA_ID,
  };

  return (
    <>
      <Seo
        title={"Junel Sacro | Porfolio"}
        description={"This is the portfolio of Junel Sacro"}
      />
      <PageContainer>
        <Box zIndex={1} mt={"36"} px={"5"} pt={"10"}>
          <Hero />
          <ProjectsSection />
          <TechnologiesSection />
        </Box>
      </PageContainer>
    </>
  );
}
