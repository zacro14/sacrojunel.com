import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiVisualstudiocode,
  SiChakraui,
  SiGit,
  SiStyledcomponents,
  SiGithub,
  SiYarn,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
export const items = [
  {
    title: "Technologies and Programming Language",
    icon: [
      { icon: SiNextdotjs, color: "gray.900", link: "https://nextjs.org/" },
      { icon: SiTypescript, color: "blue.500" },
      { icon: SiJavascript, color: "yellow.500" },
    ],
  },
  {
    title: "Library",
    icon: [
      { icon: SiChakraui, color: "#65CACC", link: "https://chakra-ui.com/" },
      { icon: SiTailwindcss, color: "rgb(56, 189, 248)" },
      { icon: FaReact, color: "#1788AD", link: "https://reactjs.org/" },
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
      { icon: SiYarn, color: "#2C8EBB", link: "https://yarnpkg.com/" },
    ],
  },
];
