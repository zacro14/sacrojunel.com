import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import { MainGradient } from "./gradient";
import Navbar from "./Navbar";

interface PageProps {
  children?: React.ReactNode;
  gradient?: string;
}
const PageContainer: React.FC<PageProps> = ({ children, gradient }) => {
  return (
    <>
      <Box>
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

export default PageContainer;
