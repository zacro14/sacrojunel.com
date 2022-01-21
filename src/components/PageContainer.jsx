import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import { MainGradient } from "./gradient";
import Navbar from "./Navbar";
import Seo from "./Seo";

const PageContainer = ({ children, gradient }) => {
  return (
    <>
      <Seo />
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
