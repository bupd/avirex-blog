export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Arch Linux Package",
    techs: ["bash"],
    link: "https://codenanshu.in/projects/ttf-apple-fonts/",
  },
  {
    title: "Firstly",
    techs: ["React Native", "JavaScript"],
    link: "https://codenanshu.in/projects/firstly/",
  },
  {
    title: "Astro / Template",
    techs: ["Astro"],
    link: "/"
  },
];

export default projects;
