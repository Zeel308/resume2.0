// Resume Configuration
// Edit this file to customize your resume

// Basic Information
export const personalInfo = {
  firstName: "Madhusoodhanan",
  lastName: "KM",
  title: "Full Stack Developer",
  avatar: "avatar3.jpeg", // Place this file in src/assets
  summary:
    "Tech aficionado with 5+ years of experience embracing the full-stack frenzy of " +
    new Date().getFullYear() +
    "—conceptualizing, R&D, coding, testing, and cloud deployment. A one-person IT army, reveling in the end-to-end adventure.",
  pdfFilename: "madhu-km-resume.pdf", // This will be used for both download and generation
};

// Contact Information
export const contactInfo = [
  { icon: "mdi-phone", title: "+91-9738575801", link: "tel:+919738575801" },
  {
    icon: "mdi-github",
    title: "gammaSpeck",
    link: "https://github.com/gammaSpeck",
  },
  {
    icon: "mdi-linkedin",
    title: "madhusoodhanan-km",
    link: "https://www.linkedin.com/in/madhusoodhanan-km",
  },
  {
    icon: "mdi-email",
    title: "tech@madhukm.com",
    link: "mailto:tech@madhukm.com",
  },
  { icon: "mdi-home", title: "Bengaluru, Karnataka, India" },
];

// Experience
export const experience = {
  sections: [
    {
      company: "Ollion",
      summary:
        "Worked extensively on DataPipes which is a cloud native Data Management Platform.",
      positions: [
        {
          id: 1,
          title: "Lead Product Developer",
          timeline: "Apr 2023 - Present",
          desc: "Orchestrated the end-to-end management of code and infrastructure for all front-end microservices, led a team of two skilled developers, completed the entire project migration from Vue 2 to Vue 3, and represented the product at international tech events to drive market visibility and engagement.",
        },
        {
          id: 2,
          title: "Senior Developer",
          timeline: "Apr 2022 - Apr 2023",
          desc: "Owned multiple critical components, executed a comprehensive migration from Webpack to Vite, and collaborated closely with UX teams to enhance user experience and streamline front-end performance.",
        },
        {
          id: 3,
          title: "Developer",
          timeline: "May 2021 - Apr 2022",
          desc: "Contributed to the migration from JavaScript to TypeScript, optimized containerization processes, developed multiple web pages, and authored numerous REST APIs for the backend.",
        },
      ],
    },
    {
      company: "Cardinal Health",
      summary:
        "Healthcare providers in the US use our software to communicate digitally with patients about their health.",
      positions: [
        {
          title: "Associate Software Engineer",
          timeline: "Jun 2019 - May 2021",
          desc: "Built architectural frameworks in NodeJS and React.js, architected and deployed a project to Kubernetes while mentoring the team through the SDLC, designed and launched the MVP for an Admin Console used by clients and support teams, owned multiple components, and served as a technical interviewer for campus recruitment.",
        },
        {
          title: "Software Engineering Intern",
          timeline: "Jan 2019 - Jun 2021",
          desc: "Developed microservices using the Serverless Framework and created a shared repository of reusable modules.",
        },
      ],
    },
  ],
};

// Languages
export const languages = [
  {
    name: "English",
    proficiency: "Advanced",
  },
  {
    name: "Hindi",
    proficiency: "Proficient",
  },
  {
    name: "Tamil",
    proficiency: "Intermediate",
  },
  {
    name: "Malayalam",
    proficiency: "Intermediate",
  },
];

// Skills
export const skills = {
  codingLanguages: [
    { title: "Javascript", icon: "mdi-language-javascript" },
    { title: "Typescript", icon: "mdi-language-typescript" },
    { title: "Python", icon: "mdi-language-python" },
    { title: "Shell", icon: "mdi-powershell" },
  ],
  frontend: [
    "Vue",
    "Vite",
    "React",
    "NextJS",
    "Nuxt",
    "MUI",
    "Cypress",
    "Playwright",
    "Web Components",
  ],
  backend: [
    "NodeJS",
    "Express",
    "NestJS",
    "FastAPI",
    "OpenAPI Spec",
    "WebSockets",
    "Serverless",
    "RDBMS",
    "Neo4j",
    "MongoDB",
    "NATS",
  ],
  devops: [
    "AWS",
    "CICD",
    "Docker",
    "Kubernetes",
    "HELM",
    "Terraform",
    "Jenkins",
    "k6",
    "Grafana",
  ],
};

// Education
export const education = [
  {
    degree: "Bachelors in CS Engineering",
    grade: "CGPA 7.3/10",
    school: "CMRIT",
    from: "2015",
    to: "2019",
  },
  {
    degree: "PUC - PCMB",
    grade: "84%",
    school: "Christ Junior College",
    from: "2013",
    to: "2015",
  },
  {
    degree: "Secondary Education",
    grade: "92%",
    school: "St Thomas Public School",
    from: "",
    to: "2013",
  },
];

// Theme settings
export const themeSettings = {
  primaryColor: "#1867C0", // Default Vuetify primary color
  backgroundColor: "#fff",
  textColor: "#000",
  accentColor: "#1867C0",
};
