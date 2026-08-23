import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Backend Developer",
        organization: "Freelance Project",
        project: "Restro",
        icon: github,
        iconBg: "#dbeafe",
        date: "2026 - Present",
        points: [
            "Developed a daily sales report feature for Restro, a restaurant management application.",
            "Implemented automated generation of sales reports after each 24-hour sales cycle for daily revenue analysis.",
            "Used a cron job to automatically delete generated reports after 24 hours, ensuring temporary report data is cleaned up automatically.",
            "Worked on backend logic for processing sales data and managing the report generation and cleanup lifecycle.",
        ],
    },
    {
        title: "Event Coordinator",
        organization: "KNIT Startup Council — IISF",
        date: "2025 - Present",
        icon: github,
        iconBg: "#fef3c7",
        points: [
            "Coordinating and supporting technical and entrepreneurial events at KNIT.",
            "Collaborating with team members to plan and execute events and activities.",
            "Managing event-related communication and coordinating tasks across different teams.",
            "Contributing to the planning and execution of council activities.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/palaksrivastava2311',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/palak-srivastava-282057336/',
    }
];


export const projects = [
    {
        iconUrl: estate,
        theme: "btn-back-green",
        name: "Wanderlust",
        description:
            "An Airbnb-inspired full-stack travel listing platform built with Node.js, Express.js, MongoDB and EJS. Features authentication, CRUD operations, reviews, image uploads, geocoding and interactive maps.",
        link: "https://github.com/palaksrivastava2311/Wanderlust",
    },
    {
        iconUrl: react,
        theme: "btn-back-blue",
        name: "3D Portfolio",
        description:
            "A modern 3D developer portfolio built with React and Three.js to showcase my skills, projects and experience through interactive 3D elements and responsive design.",
        link: "https://github.com/palaksrivastava2311/Portfolio",
    },
    {
        iconUrl: threads,
        theme: "btn-back-pink",
        name: "Spotify Clone",
        description:
            "A Spotify-inspired music streaming interface built to practice responsive frontend development, modern UI design and interactive web experiences.",
        link: "YOUR_SPOTIFY_GITHUB_URL",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-yellow",
        name: "Photography Website",
        description:
            "A responsive photography website focused on visual presentation, clean layouts and modern frontend design.",
        link: "https://github.com/palaksrivastava2311/photography-site",
    },
];