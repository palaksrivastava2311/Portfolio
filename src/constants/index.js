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
    // {
    //     title: "Backend Developer",
    //     organization: "Freelance Project",
    //     project: "Restro",
    //     icon: github,
    //     iconBg: "#dbeafe",
    //     date: "2026 - Present",
    //     points: [
    //         "Developed a daily sales report feature for Restro, a restaurant management application.",
    //         "Implemented automated generation of sales reports after each 24-hour sales cycle for daily revenue analysis.",
    //         "Used a cron job to automatically delete generated reports after 24 hours, ensuring temporary report data is cleaned up automatically.",
    //         "Worked on backend logic for processing sales data and managing the report generation and cleanup lifecycle.",
    //     ],
    // },
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
            "A full-stack travel and property listing platform built on MVC architecture. Features secure authentication, dynamic CRUD listing management, Cloudinary image hosting, interactive Leaflet maps, and Geoapify geocoding.",
        link: "https://github.com/palaksrivastava2311/Wanderlust",
    },
    {
        iconUrl: react,
        theme: "btn-back-blue",
        name: "3D Portfolio",
        description:
            "An interactive web portfolio featuring real-time 3D graphics, dynamic camera movements, and modern animations built with React, Three.js, and Tailwind CSS.",
        link: "https://github.com/palaksrivastava2311/Portfolio",
    },
    {
        iconUrl: threads,
        theme: "btn-back-pink",
        name: "Nova",
        description:
            "A full-stack AI conversational platform powered by the OpenAI API, featuring real-time streaming responses, persistent chat history, and secure backend integration.",
        link: "https://github.com/palaksrivastava2311/Nova",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-yellow",
        name: "Weather App",
        description:
            "A responsive weather web app delivering real-time forecasts, temperature metrics, and location-based meteorological data using external weather APIs.",
        link: "https://github.com/palaksrivastava2311/Weather-App",
    },
];