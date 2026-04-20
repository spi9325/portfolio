import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import turborepoLogo from './assets/tech_logo/turborepo.webp';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import nestjsLogo from './assets/tech_logo/nestjs.svg';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import ZodLogo from './assets/tech_logo/zod.webp';
import prismaLogo from './assets/tech_logo/prisma.png';
import RedisLogo from './assets/tech_logo/redis.png';
import CloudnaryLogo from './assets/tech_logo/cloudinary.png';
import GithubLogo from './assets/tech_logo/github-logo.webp';
import vercelLogo from './assets/tech_logo/vercel.webp';
import RenderLogo from './assets/tech_logo/render.jpg';
import awsLogo from './assets/tech_logo/aws.webp';
import dockerLogo from './assets/tech_logo/docker.webp';
import cicdLogo from './assets/tech_logo/ci-cd.avif';
import kubernetesLogo from './assets/tech_logo/kubernetes.webp';
import ArgocdLogo from './assets/tech_logo/argocd.jpg';
import S3Logo from './assets/tech_logo/s3.png';
import GrafanaLogo from './assets/tech_logo/grafana.jpg';
import NewrelicLogo from './assets/tech_logo/Newrelic.png';
import ResendLogo from './assets/tech_logo/resend.webp';
import razerpayLogo from './assets/tech_logo/razerpay.jpeg';
import BetterAuthLogo from './assets/tech_logo/betterauth.png';
import AuthLogo from './assets/tech_logo/auth.webp';
import NeonLogo from './assets/tech_logo/neon.jpeg';
import ImagekitLogo from './assets/tech_logo/imagekit.png';
import PrometheusLOgo from './assets/tech_logo/prometheus.webp'

import CodeAlphaLogo from './assets/company_logo/codeAlpha.png';

import SvpmLogo from './assets/education_logo/svpm.webp';

import VirajHallLogo from './assets/work_logo/viraj.png';
import minLogo from './assets/work_logo/10min.png';
import SplytLogo from './assets/work_logo/splyt.png';
import ToteLogo from './assets/work_logo/Tote.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'TS', logo: typescriptLogo },      
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Turborepo', logo: turborepoLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJS', logo: nodejsLogo },
      { name: 'Express', logo: expressjsLogo },
      { name: 'Nestjs', logo: nestjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      {name: 'Zod', logo:ZodLogo},
      {name: 'Prisma', logo:prismaLogo},
      {name:'Redis', logo:RedisLogo},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      {name: 'Nodejs(RTE)', logo: nodejsLogo},
    ],
  },
   {
    title: 'Devops',
    skills: [
      { name: 'Aws', logo: awsLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'CI-CD', logo: cicdLogo },
      { name: 'Kubernete', logo: kubernetesLogo },
      { name: 'Argocd', logo: ArgocdLogo },
      { name: 'S3', logo: S3Logo },
      { name: 'Grafana', logo: GrafanaLogo },
      { name: 'Newrelic', logo: NewrelicLogo },
      {name: 'Prometheus', logo: PrometheusLOgo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: GithubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: RenderLogo },
    ],
  },
   {
    title: 'Services',
    skills: [
      { name: 'Cloudnary', logo: CloudnaryLogo },
      { name: 'Resend', logo: ResendLogo },
      { name: 'Razerpay', logo: razerpayLogo },
      { name: 'BetterAuth', logo: BetterAuthLogo },
      { name: 'AuthJs', logo: AuthLogo },
      { name: 'NeonDB', logo: NeonLogo },
      { name: 'Imagekit', logo: ImagekitLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
 
];



  export const experiences = [
    {
      id: 0,
      img: CodeAlphaLogo,
      role: "Fullstack Developer (INTERN)",
      company: "Code Alpha",
      date: "sep 2025 - present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "PostgreSQL",
        "zustand",
        "Next Js",
        "BetterAuth"
      ],
    },
    
   
  ];
  
  export const education = [
    {
      id: 1,
      img: SvpmLogo,
      school: "SVPM College, Malegaon, baramati",
      date: "Sept 2022 - june 2024",
      grade: "75.2%",
      desc: "I completed my Bachelor's degree in Computer Application (BCA.) from SVPM College, malegaon. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BCA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of computer Application",
    },
    {
      id: 2,
      img: SvpmLogo,
      school: "SVPM College, Malegaon, baramati",
      date: "Apr 2020 - March 2022",
      grade: "65%",
      desc: "I completed my class 12 education from SVPM School and College, baramati, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HSC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: SvpmLogo,
      school: "SVPM School, Malegaon, baramati",
      date: "Apr 2019 - March 2020",
      grade: "69.5%",
      desc: "I completed my class 10 education from svpm Public School, baramati, under the SSC board, where I studied Science with Computer.",
      degree: "SSC(X), Science with Computer Application",
    },
  ];
  


  export const projects = [
    {
      id: 0,
      title: "Viraj Multipurpose Hall",
      description:
        "Viraj Multipurpose Hall is a full-stack web application designed to manage event hall bookings secure, and user-friendly way.",
      image: VirajHallLogo,
      tags: ["Turborepo", "TailwindCSS", "Express js", "Postgres","Cloudnary","FireBase","Zustand","Resend", "AWS", "Docker", "Kubernetes","Authjs","TS","Zod","GSAP"],
      github: "https://github.com/sj8687/viraj-hall-docker-aws",
      webapp: "https://www.virajmultipurposehall.site",
    },
    {
      id: 1,
      title: "10MinDesign",
      description:
        "Built a dynamic event-template platform that automated design generation, enabling users to create templates 50× faster than manual editing..",
      image: minLogo,
      tags: ["Turborepo", "Express js", "Postgres", "Prisma", "ImageKit", "Tailwind CSS", "Redis", "NeonDB", "Resend", "Razerpay", "AWS", "Docker", "Kubernetes","Authjs","TS","Zod","GSAP"],
      github: "https://github.com/spi9325/10MinDesignProd",
      webapp: "https://www.10mindesigns.shop",
    },
    {
      id: 2,
      title: "Ecomm Tote Site",
      description:
        "An efficient Ecommerence site where user can shop and order that tote's.",
      image: ToteLogo,
      tags: ["React JS", "Nest.js", "Typescript","GSAP", "Validation","cloudnary"],
      github: "https://github.com/sj8687/nest-react-assignment",
      webapp: "https://",
    },
    {
      id: 3,
      title: "Splyt Energy Drink",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: SplytLogo,
      tags: ["REACT JS", "GSAP","Tailwind-CSS", "JavaScript"],
      github: "https://github.com/sj8687/Splyt",
      webapp: "https://splyt-three.vercel.app",
    },
    
    
   
  ];  