interface ITechnology {
  [key: string]: string;
}
export interface IProject {
  id: number;
  title: string;
  desc: string;
  image?: string;
  githubLink: string;
  websiteLink: string;
  technology: ITechnology[];
}
