import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import img1 from "../assets/projects/img1.png"
import img2 from "../assets/projects/img2.png"
import img3 from "../assets/projects/img3.png"
import img4 from "../assets/projects/img4.png"


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Trac|carT",
    image: img2,
    description:
      "A fully functional expense trancker  website with features like expense listing, plans and credit/debit options, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "m-overflow",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Node.js", "Express.js", "Firebase"],
  },
  {
    title: "Vanayana",
    image: img1,
    description:
      "A Community website showcasing campaigns, skills, and contact information.",
    technologies: ["React", "Node.js", "MongoDb"],
  },
  {
    title: "Tadatam",
    image: img3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React.js", "Express", "MongoDB"],
  },
  {
    title: "Derrik's Computer Service",
    image: project4,
    description:
      "A platform for issuing tickets that help users track their current hardware/software problem submitted as well as tracking every update ",
    technologies: ["DrizzleORM", "Next.js", "PostgreSql"],
  },
  {
    title: "FileHand",
    image: img4,
    description:
      "A website that helps parses .xlsx files, extract information while maintaing the pagination and help export the updated file to .xlsx",
    technologies: ["React.js", "Express.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "31st street, Fifth Avenue, Kolkata, KOL-52 ",
  phoneNo: "+91 629-636-4908 ",
  email: "indradeepmandal18@gmail.com",
};
