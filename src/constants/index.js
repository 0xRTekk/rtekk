import {
  mobile,
  backend,
  creator,
  web,
  logo,
  carrent,
  jobit,
  tripguide,
  oclock,
  alyra,
  soledis,
  prefpolice
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
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

const experiences = [
  {
    title: "Blockchain Developer Freelance",
    company_name: "RTekk",
    icon: logo,
    iconBg: "#040816",
    date: "Present",
    points: [
      "Concepting, developing and maintaining frontend and Smart Contract of Decentralized Apps.",
      "Collaborating with other teams to givehigh-quality dApps.",
      "Active monitoring and learning of new technologies around the blockchain ecosystem.",
      "Participating in blockchain developers communities.",
    ],
  },
  {
    title: "Teacher Web Developer",
    company_name: "Ecole O'clock",
    icon: oclock,
    iconBg: "#0CC3A7",
    date: "Jun 2021 - Present",
    points: [
      "Concepting, developing and maintaining learning ressources for students.",
      "Collaborating with other teachers, educational tutors & managers to give intense & high-quality courses in addition to personalized learner follow-up.",
      "Active monitoring and learning of new technologies to create and teach courses.",
      "Introduction, training and follow-up of new teachers.",
      "Active participation in collective intelligence to improve the school's structure through ambitious projects.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Alyra Scholl",
    icon: alyra,
    iconBg: "#211B59",
    date: "May 2022 - Aug 2022",
    points: [
      "Concepting and developing Decentralized Apps using Truffle, Solidity and other related technologies.",
      "Learning all the stuff concerning the Ethereum blockchain development like Smart Contracts, NFTs marketplace, DeFi protocol, DAO Voting System with strong security implementation.",
      "Collaborating developers shipp a DeFi Decentralized Apps for staking fake tokens and earn rewards.",
      "Design and presentation of a decentralized identity blockchain project in front of a jury.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Soledis",
    icon: soledis,
    iconBg: "#ffffff",
    date: "Jan 2020 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrating of large volumes of data from ERP customers to e-commerce platforms using Talend.",
      "Implementing responsive design, ensuring cross-browser compatibility and performance.",
      "Conception of CI/CD processes for the developers team using GitFlow & Bitbucket.",
      "Active participation in code reviews and tickets resolution.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Préfecture de police de Paris",
    icon: prefpolice,
    iconBg: "#FFFFFF",
    date: "Feb 2018 - Jul 2019",
    points: [
      "Developing and maintaining e-commerce platforms using PHP/MySQL, Wordpress, Prestashop and other related technologies.",
      "Configuring raspberyPi to display information to prefecture customers",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in docker training and implementation to improve CI/CD processes.",
    ],
  },
];

export { skills, experiences, projects };
