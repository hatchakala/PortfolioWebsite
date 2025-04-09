import project1 from "../assets/projects/stanleyCupAgent.jpg";
import project2 from "../assets/projects/yapMap.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/delayDetective.jpg";
import project5 from "../assets/projects/portfolioWebsite.jpg";

export const HERO_CONTENT = `Welcome to my portfolio website!`;

export const ABOUT_TEXT = `Hi, my name is Hardhik! I’m a computer science student at Rutgers University. I'm interested in leveraging computing to create a difference. I'm a passionate coder from New Jersey looking for software engineering job opportunities. In my free time, I enjoy cooking, playing basketball, playing video games, video editing, and chilling with my friends. Feel free to connect with me on any platform!`;

export const EXPERIENCES = [
  {
    year: "June 2023 - August 2023",
    role: "Frontend Developer",
    company: "INNOJC TECHNOLOGIES Pvt Ltd",
    description: `Worked with teams to develop and deploy websites for 25+ underprivileged clients, using HTML, CSS, JavaScript, and React
      Collaborated on building and integrating RESTful APIs to improve functionality between the front and back end, contributing to a more efficient user experience
      Wrote automated scripts for testing website reliability using Postman to help reduce the need for manual testing
      Worked within an Agile framework to ensure continuous delivery and coordinated with the team using Git for version control`,
    technologies: ["Javascript", "React.js", "HTML", "CSS", "Postman", "Agile"],
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
    title: "Stanley Cup Checkout Agent",
    image: project1,
    description:
      "This web automation agent allows a user to complete the entire checkout process on the Stanley Cup website without requiring any direct user interaction. I identified key HTML elements and tracked unique attributes through browser inspection to pinpoint the elements needed for automation.",
    technologies: ["Node.js", "Puppeteer.js"],
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
      "A comprehensive stock market analysis tool that integrates real-time data from the Yahoo Finance API, featuring paper trading, machine learning-driven stock price predictions, and live earnings/news updates for actionable insights.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "C++"],
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

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "ha636@scarletmail.rutgers.edu",
};
