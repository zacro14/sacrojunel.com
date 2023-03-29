import { IconType } from "react-icons";
interface ITechnology {
  [key: string]: string;
}

interface ILinks {
  name: string;
  link: string;
  icon: IconType;
}
export interface IProject {
  id: number;
  title: string;
  desc: string;
  image?: string;
  technology: ITechnology[];
  links: ILinks[];
}
