import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiVisualstudiocode,
  SiChakraui,
  SiGit,
  SiStyledcomponents,
  SiGithub,
} from "react-icons/si";
export const items = [
  {
    title: "Front End",
    icon: [
      { icon: FaReact, color: "#1788AD", link: "https://reactjs.org/" },
      { icon: SiNextdotjs, color: "gray.900", link: "https://nextjs.org/" },
    ],
  },
  {
    title: "Library",
    icon: [
      { icon: SiChakraui, color: "#65CACC", link: "https://chakra-ui.com/" },
      {
        icon: SiStyledcomponents,
        color: "#9B653D",
        link: "https://styled-components.com/",
      },
    ],
  },
  {
    title: "Tools",
    icon: [
      { icon: SiGit, color: "#E64A19", link: "https://git-scm.com/" },
      {
        icon: SiVisualstudiocode,
        color: "#22A5F1",
        link: "https://code.visualstudio.com/",
      },
      { icon: SiGithub, color: "gray.900", link: "https://github.com/" },
    ],
  },
];
