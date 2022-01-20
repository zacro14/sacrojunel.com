import { Box } from "@chakra-ui/react";
import { FooterGradient } from "./gradient";
const Footer = () => {
  return (
    <>
      <FooterGradient />
      <Box p={"10"} textAlign={"center"}>
        Junel Sacro &copy; 2022
      </Box>
    </>
  );
};

export default Footer;
