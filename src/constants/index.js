import project1 from "../assets/projects/stanleyCupAgent.jpg";
import project2 from "../assets/projects/yapMap.jpg";
import project3 from "../assets/projects/upTrend.jpg";
import project4 from "../assets/projects/delayDetective.jpg";
import project5 from "../assets/projects/portfolioWebsite.jpg";

export const HERO_CONTENT = `Welcome to my portfolio website!`;

export const ABOUT_TEXT = `Hi, my name is Hardhik! I’m a double major in Computer Science and Data Science at Rutgers University - New Brunswick Honors College. I'm passionate about leveraging computing to make a difference and am actively seeking software engineering opportunities. In my free time, I enjoy cooking, playing basketball, playing video games, and chilling with my friends. Feel free to connect with me on any platform!`;

export const EXPERIENCES = [
  {
    year: "January 2026 - Present",
    role: "Student Researcher/Participant",
  company: "National Space and Aeronautics Administration (NASA) L'SPACE Program",
    description: `Selected from hundreds of applicants for the NASA L’SPACE NPWEE Academy (Spring 2026 Cohort) to evaluate and develop technical proposals on agentic AI, autonomous, and adaptive software for space missions, preparing teams to compete for $10,000 in funding.`,
    technologies: ["Python", "Agentic AI", "Natural Language Processing (NLP)", "Machine Learning"], 
  },
  {
    year: "October 2025 - Present",
    role: "Agentic AI Research Assistant",
  company: "Rutgers University Edward J. Bloustein School of Planning and Public Policy ",
    description: `Undergraduate Research Assistant for Dr. Jim Samuel, contributing to academic research on agentic AI systems and applications.`,
    technologies: ["Python", "Agentic AI", "Natural Language Processing (NLP)", "Machine Learning"], 
  },
  {
    year: "September 2025 - Present",
    role: "Lead Software Extern",
  company: "Colgate-Palmolive via Rutgers MBS Externship Exchange",
    description: `Led the software team in building an LLM-powered RAG-based Q&A system with Python, LangChain, PostgreSQL (pgvector), Gemini API, and Kubernetes to parse complex regulations and reduce manual review, within an Agile team environment.
    Designed and built an automated alert agent using Python, scripting, webhooks, and GitHub Actions to monitor regulatory updates, generate actionable notifications, and deliver AI-driven insights to teams, minimizing oversight effort and enabling timely responses.`,
    technologies: ["Python", "PyTorch", "Kubernetes", "NLP", "Machine Learning"], 
  },
  {
    year: "September 2025 - Present",
    role: "Learning Assistant (CS111)",
    company: "Rutgers University - New Brunswick",
    description: `Supported professors in facilitating introductory programming courses by mentoring 30+ students in Java.
    Guided debugging sessions, reinforced object-oriented programming principles, and promoted collaborative problem-solving through weekly recitations.`,
    technologies: ["Java", "VSCode", "OOP", "Communication", "Mentorship"], 
  },
  {
    year: "June 2025 - August 2025",
    role: "Full Stack Software Engineering Intern",
    company: "Innojc Technologies",
    description: `Built and deployed full-stack applications, designed modular APIs, configured CI/CD pipelines with Docker and GitHub Actions, and collaborated in Agile sprints.`,
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
      "I designed and built ScrollLess, a cross-platform mobile app using React Native to reduce excessive Instagram/TikTok scrolling by letting users track screen tme and compete in custom weekly leagues that reward lower usage and task completion with points-based rankings.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Agile", "CI/CD"],
  },
  {
    title: "LoungeSense/Yap-Map",
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


