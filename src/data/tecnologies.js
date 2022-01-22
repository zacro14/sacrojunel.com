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
      { icon: FaReact, color: "#1788AD" },
      { icon: SiNextdotjs, color: "gray.100" },
    ],
  },
  {
    title: "Library",
    icon: [
      { icon: SiChakraui, color: "#65CACC" },
      { icon: SiStyledcomponents, color: "#9B653D" },
    ],
  },
  {
    title: "Tools",
    icon: [
      { icon: SiGit, color: "#E64A19" },
      { icon: SiVisualstudiocode, color: "#22A5F1" },
      { icon: SiGithub, color: "gray.100" },
    ],
  },
];
