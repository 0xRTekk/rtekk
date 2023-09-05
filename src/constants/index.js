import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    category: "Web3 - Blockchain",
    gradient: "from-violet-600 from-30% via-teal-500 via-70% to-lime-500 to-90%",
    icon: web,
    technologies: [
      {
        name: "Ethereum",
        level: "50%"
      },
      {
        name: "Solidity",
        level: "75%"
      },
      {
        name: "Hardhat",
        level: "80%"
      },
      {
        name: "Truffle",
        level: "50%"
      },
      {
        name: "Web3.js",
        level: "70%"
      },
      {
        name: "Ethers.js",
        level: "35%"
      },
      {
        name: "Chainlink",
        level: "25%"
      },
      {
        name: "Thirdweb",
        level: "25%"
      },
    ]
  },
  {
    category: "Frontend",
    gradient: "from-orange-500 to-pink-500",
    icon: mobile,
    technologies: [
      {
        name: "React JS",
        level: "80%"
      },
      {
        name: "Next JS",
        level: "75%"
      },
      {
        name: "Redux",
        level: "75%"
      },
      {
        name: "Typescript",
        level: "35%"
      },
      {
        name: "Three JS",
        level: "15%"
      },
      {
        name: "Tailwind CSS",
        level: "50%"
      },
      {
        name: "Sass",
        level: "75%"
      },
      {
        name: "Figma",
        level: "50%"
      },
    ]
  },
  {
    category: "Backend",
    gradient: "from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    icon: backend,
    technologies: [
      {
        name: "Express JS",
        level: "80%"
      },
      {
        name: "MySQL",
        level: "75%"
      },
      {
        name: "PostgreSQL",
        level: "60%"
      },
      {
        name: "MongoDB",
        level: "25%"
      },
      {
        name: "Socket.io",
        level: "50%"
      },
      {
        name: "Swagger",
        level: "50%"
      },
      {
        name: "PHP",
        level: "80%"
      },
      {
        name: "Symfony",
        level: "50%"
      },
    ]
  },
  {
    category: "DevOps & Tests",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: creator,
    technologies: [
      {
        name: "Docker",
        level: "50%"
      },
      {
        name: "Circle CI",
        level: "25%"
      },
      {
        name: "GitHub actions",
        level: "25%"
      },
      {
        name: "Bash scripting",
        level: "25%"
      },
      {
        name: "Test Driven Development",
        level: "35%"
      },
      {
        name: "Unit Tests",
        level: "50%"
      },
      {
        name: "Jest",
        level: "40%"
      },
      {
        name: "Mocha & Chai",
        level: "25%"
      },
    ]
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
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

export { skills, experiences, testimonials, projects };
