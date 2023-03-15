import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer, Navbar } from "@/components/index";
import { MainGradient } from "./gradient";

interface PageProps {
  children?: React.ReactNode;
  gradient?: string;
}
export const PageContainer: React.FC<PageProps> = ({ children, gradient }) => {
  return (
    <>
      <Box mx={{ base: "5", md: "20", lg: "56" }}>
        <Navbar />
        <MainGradient />
        {gradient}
        <Box as="main" id="content" position="relative" zIndex={1}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
