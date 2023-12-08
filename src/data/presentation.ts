type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "gxanshu@yahoo.com",
  title: "Hi, I’m Anshu 👋",
  description:
    "Howdy, i'm a *indian software programmer* with over *5 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/gxanshu",
    },
    {
      label: "Bento",
      link: "https://bento.me/gxanshu",
    },
    {
      label: "Github",
      link: "https://github.com/gxanshu",
    },
  ],
};

export default presentation;
