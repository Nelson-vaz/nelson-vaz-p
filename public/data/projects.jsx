import { FaReact, FaNode, FaHtml5, FaCss3, FaLaravel } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFlask, SiPython, SiDocker, SiTensorflow } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Engineering Resource Management System",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343387/eng_doufvw.jpg",
    description:
      "A full-stack MERN application with microservices to manage engineering resources, track project allocations, and monitor team capacities. Includes dashboards and AI tool integrations for task automation and analytics.",
    technologies: [FaReact, FaNode, SiMongodb, SiDocker, FaCss3, FaHtml5],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/Engineering-Resource-Management-System",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 2,
    name: "AI Job Agent",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/ai-agent_vzocoi.jpg",
    description:
      "An AI-powered job application agent that customizes resumes based on job descriptions. Built with Python Flask backend, React frontend, MongoDB, and Selenium for automation.",
    technologies: [FaReact, SiFlask, SiPython, SiMongodb, SiDocker],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/AI-Job-Agent",
      },
    ],
    liveDemoLinks: [],
  },
  {
    id: 3,
    name: "Attendance Management System",
    image: "https://res.cloudinary.com/diazxuntv/image/upload/v1760343388/attentance_aj2csl.jpg",
    description:
      "A face, fingerprint, and RFID-based attendance management system using Raspberry Pi and Python for secure and automated employee tracking.",
    technologies: [SiPython, SiFlask, FaNode, SiMongodb],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/ajayduraisamy/Attendance-Management-System-Face-Fingerprint-RFID-Raspberry-Pi",
      },
    ],
    liveDemoLinks: [],
  }
  
];

export default projects;
