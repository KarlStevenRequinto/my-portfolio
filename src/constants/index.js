import {
    mobile,
    nextjs,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tonghsing,
    ubiquity,
    pointwest,
    toshiba,
    collins,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React JS Developer",
        icon: mobile,
    },
    {
        title: "Nextjs Developer",
        icon: nextjs,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Ubiquity Global Services",
        icon: ubiquity,
        iconBg: "#383E56",
        date: "April 2023 - Oct 2023",
        points: [
            " I am an integral member of the team entrusted with the development of a comprehensive web based application designed to record agent calls, capture screen activity, monitor time logs, and track performance metrics.",
            "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Engaged in code reviews, and code assessments. Contributed to the creation of robust, maintainable software solutions.",
            "Troubleshoot and resolved issues related to the web-based applications utilized by agents, team leads, and  employees on the production floor.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Pointwest Innovations Corporation",
        icon: pointwest,
        iconBg: "#E6DEDD",
        date: "Sept 2021 - April 2023",
        points: [
            "Developed mobile and web responsive applications that meet customer requirements, with a focus on creating user-friendly and intuitive interfaces.",
            "Developed and helped maintained projects using Angular and Ionic, gained experience in these frameworks while focusing on creating well-organized and maintainable code.",
            "Participated in code reviews and providing constructive feedback to other developers.",
            "Completed 3 month comprehensive fullstack bootcamp with ecommerce app capstone project",
        ],
    },
    {
        title: "Process / Failure Analysis Engineer",
        company_name: "Toshiba Information Equipment",
        icon: toshiba,
        iconBg: "#383E56",
        date: "Aug 2018 - Jan 2019",
        points: [
            "Sustained and developed activities in process engineering including process optimization and effective process development.",
            "Handled failure analysis of HDD, analyzes design-related issues and provides necessary countermeasure.",
            "Led process-related evaluation, verification of issues and pass-rate monitoring.",
            "Experienced in analyzing data from machines and equipment, identifying trends and patterns to optimize production processes and improve overall efficiency.",
        ],
    },
    {
        title: "Project Engineer",
        company_name: "Tong Hsing Electronics Inc",
        icon: tonghsing,
        iconBg: "#E6DEDD",
        date: "Jun 2017 - Dec 2017",
        points: [
            "Supervised daily tasks to a team of engineers and technicians, ensuring timely and successful completion of projects.",
            "Managed the entire process from generating purchase orders to meeting shipment deadlines.",
            " Coordinated and planned project activities, maintained files and documents, and provided information to the Senior Manager or Director.",
            "Led Advanced Product Quality Planning (APQP) meetings and ensured that project milestones were met.",
            "Maintained effective communication channels with cross-functional teams and stakeholders to ensure project success",
        ],
    },
    {
        title: "Product Configuration Engineer",
        company_name: "Rockwell Collins (B/E Aerospace)",
        icon: collins,
        iconBg: "#E6DEDD",
        date: "Apr 2016 - Jun 2017",
        points: [
            "Daily creation of Electronic Work Instruction based on EBOM/CBOM analysis due to ECN.",
            "Collaborated with Engineering, Manufacturing group and other cross-functional areas to generate details on BOM, assembly drawings, Bill of Process, and other pertinent information.",
            "Created solutions to rectify design errors and to incorporate design improvements.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
