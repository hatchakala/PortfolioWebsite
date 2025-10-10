import project1 from "../assets/projects/stanleyCupAgent.jpg";
import project2 from "../assets/projects/yapMap.jpg";
import project3 from "../assets/projects/upTrend.jpg";
import project4 from "../assets/projects/delayDetective.jpg";
import project5 from "../assets/projects/portfolioWebsite.jpg";

export const HERO_CONTENT = `Welcome to my portfolio website!`;

export const ABOUT_TEXT = `Hi, my name is Hardhik! I’m a double major in Computer Science and Data Science at Rutgers University - New Brunswick Honors College. I'm passionate about leveraging computing to make a difference and am actively seeking software engineering opportunities. In my free time, I enjoy cooking, playing basketball, playing video games, and chilling with my friends. Feel free to connect with me on any platform!`;

export const EXPERIENCES = [
  {
    year: "September 2025 - Present",
    role: "Lead Software Extern",
  company: "Colgate-Palmolive via Rutgers MBS Externship Exchange",
    description: `Building a prototype large language model–based solution to streamline regulatory document analysis, aiming to reduce manual review and improve compliance workflows by applying NLP and enterprise-scale ML techniques with Python, PyTorch, and Kubernetes (expected completion Dec 2025).
    Collaborating with Colgate-Palmolive mentors and project members to design and test AI/ML approaches for parsing complex regulations, demonstrating practical enterprise applications of LLMs.`,
    technologies: ["Python", "PyTorch", "Kubernetes", "NLP", "Machine Learning"], 
  },
  {
    year: "September 2025 - Present",
    role: "Learning Assistant (CS111)",
    company: "Rutgers University - New Brunswick",
    description: `Supported professors in facilitating introductory programming courses by mentoring 25+ students in Java.
    Guided debugging sessions, reinforced object-oriented programming principles, and promoted collaborative problem-solving through weekly recitations.`,
    technologies: ["Java", "VSCode", "OOP", "Communication", "Mentorship"], 
  },
  {
    year: "June 2025 - August 2025",
    role: "Software Engineering Intern",
    company: "INNOJC TECHNOLOGIES Pvt Ltd",
    description: `Built 25+ websites using React, Node.js, HTML, CSS, and JavaScript for underprivileged clients.
    Deployed secure and scalable apps on AWS cloud, integrating APIs with authentication and monitoring features.
    Automated development tasks using Bash scripts and applied CI/CD pipelines for rapid deployments.
    Collaborated in Agile sprints, peer reviews, and troubleshooting to resolve cross-functional technical challenges.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS", "Postman", "Agile", "AWS", "CI/CD", "Pipelines", "Node.js"],
  },
  {
    year: "December 2022 - July 2023",
    role: "Computer Science Lead Manager",
    company: "Princeton Learning Experience International School",
    description: `Ran a hybrid summer camp directing 100+ volunteers and managers
      Created a curriculum for teaching Java and AI with a team of managers, tailoring content to suit beginner and advanced students
      Built internal tools using web technologies (HTML, CSS, JavaScript) to manage registration and track progress, simplifying the management of 170+ students`,
    technologies: ["Java", "Python", "Github", "VSCode"],
  },
  {
    year: "August 2023",
    role: "Project-Based Java Instructor",
    company: "Steel City Codes",
    description: `Reviewed Java skills 
      Instructed elementary and middle school students in applying Java
      Devised project guidelines
      Aided students in developing a complex Hangman program`,
    technologies: ["Java", "Eclipse", "GitHub"],
  },
  {
    year: "March 2024 - June 2024",
    role: "Teaching Assistant",
    company: "Kumon",
    description: `Graded classwork and homework
      Taught young students different types of math 
      Pulled homework sheets for the students
      Entered students' grades into the Kumon database`,
      technologies: ["Mathematics", "Communication", "Phonics"],
  },
];


export const PROJECTS = [
  {
    title: "ScrollLess",
    image: project1,
    description:
      "I designed and built ScrollLess, a cross-platform mobile app using React Native, Expo, and TypeScript, incorporating authentication, user dashboards, social leagues, and leaderboards to help reduce excessive screen time. I integrated cloud-based APIs and PostgreSQL RLS policies to ensure secure, scalable data storage and enable real-time synchronization of user metrics across leagues. Throughout development, I applied Agile methodologies and CI/CD pipelines to deliver iterative feature improvements, enhance app reliability, and support rapid prototyping.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Agile", "CI/CD"],
  },
  {
    title: "Yap-Map",
    image: project2,
    description:
      "An app that provides real-time noise levels and occupancy data for study lounges in Rutgers University’s Honors College. This app implemented a system using Python scripts on main computers and Raspberry Pi devices with cameras and microphones to track occupancy (every 20 seconds) and noise levels (every 10 seconds). I designed an intuitive floor plan-based UI that displays lounge conditions using color-coded indicators, powered by a MongoDB-backend API for real-time updates.",
    technologies: ["React Native", "Python", "YOLO", "MongoDB", "Raspberry Pi"],
  },
  {
    title: "UpTrend",
    image: project3,
    description:
      "A comprehensive stock prediction system for decision science applications, leveraging machine learning regression and time-series forecasting to generate actionable insights. The platform integrates real-time data from the Yahoo Finance API and features paper trading, live earnings and news updates, and ML-driven stock price predictions. I deployed the full-stack architecture in Docker containers on AWS, implementing cloud monitoring and troubleshooting tools, while applying data engineering pipelines to ingest, clean, and analyze time-series data efficiently.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Python (ML)", "AWS", "Docker"],
  },
  {
    title: "Stanley Cup Checkout Agent",
    image: project1,
    description:
      "This web automation agent allows a user to complete the entire checkout process on the Stanley Cup website without requiring any direct user interaction. I identified key HTML elements and tracked unique attributes through browser inspection to pinpoint the elements needed for automation.",
    technologies: ["Node.js", "Puppeteer.js"],
  },
  {
    title: "Delay Detective",
    image: project4,
    description:
      "A web application that utilizes NJTransit data to predict train delays. This tool reads .csv files provided by NJTransit, processes the data to train a RandomForestRegression model, and presents the results in an interactive and visually engaging React interface. It informs the user of the number of delayed trains, allowing users to gain insights into transit patterns and anticipate service disruptions.",
    technologies: ["Python", "Flask", "React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "Created a dynamic web application to showcase personal experiences, projects, educational background, and provide streamlined contact options, enhancing user engagement and accessibility",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind"],
  },
];


