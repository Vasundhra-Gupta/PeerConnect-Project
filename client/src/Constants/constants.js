import LOGO from '/images/logo.jpg';

const LIMIT = 10;
const DEFAULT_RTE_TEXT = 'Welcome to Post Manager ⭐';
const EMAIL = 'peerconnect@gmail.com';
const CONTACTNUMBER = 'xxxxxxxxxx';
const MAX_FILE_SIZE = 5;
const BASE_BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL + '/api';
const SERVER_ERROR = 500;
const BAD_REQUEST = 400;

const TAILWIND_COLORS = [
    'text-blue-600',
    'text-teal-600',
    'text-indigo-600',
    'text-purple-600',
    'text-pink-600',
    'text-rose-600',
    'text-yellow-600',
    'text-green-600',
    'text-emerald-600',
    'text-cyan-600',
];

const IMAGES = {
    contributors: {
        sania: '/images/sania.jpg',
        vasundhra: '/images/vasundhra.jpg',
        seerat: '/images/seerat.jpg',
    },
    companies: [
        '/images/companies/adobe.png',
        '/images/companies/amazon.png',
        '/images/companies/facebook.png',
        '/images/companies/hostinger.png',
        '/images/companies/pinterest.png',
        '/images/companies/quora.png',
        '/images/companies/reddit.png',
        '/images/companies/skype.png',
        '/images/companies/spotify.png',
        '/images/companies/telegram.png',
        '/images/companies/tiktok.png',
        '/images/companies/yahoo.png',
    ],
    tech: '/images/tech.svg',
    robot: '/images/robot.png',
};

const CONTRIBUTORS = [
    {
        image: IMAGES.sania,
        role: 'Lead Developer',
        bio: 'Visionary Full Stack Developer crafting impactful, real-world solutions with precision and purpose.',
        name: 'Sania Singla',
        socials: {
            linkedIn: 'https://www.linkedin.com/in/sania-singla',
            discord: 'https://discord.com/channels/@sania_singla',
            gitHub: 'https://github.com/Sania-Singla',
            threads: 'https://x.com/sania_singla',
            instagram: 'https://www.instagram.com/sania__singla',
        },
    },
    {
        image: IMAGES.vasundhra,
        role: 'Full Stack Developer',
        bio: 'Innovative full stack developer specializing in smart bots and scalable systems that solve real-world problems.',
        name: 'Vasundhra Gupta',
        socials: {
            linkedIn: 'https://www.linkedin.com/in/vasundhra-gupta-764713291',
            discord: '',
            gitHub: 'https://github.com/Vasundhra-Gupta',
            threads: '',
            instagram: 'https://www.instagram.com/vasundhragupta962',
        },
    },
    {
        image: IMAGES.seerat,
        role: 'Aspiring Full-Stack Developer',
        bio: 'Passionate about coding and building real-world projects with a strong foundation in Java, C++, HTML, CSS , js.',
        name: 'Seerat Grover',
        socials: {
            linkedIn: 'https://www.linkedin.com/in/seerat-grover-105233344 ',
            discord: '',
            gitHub: 'https://github.com/Grover-Seerat',
            threads: '',
            instagram: '',
        },
    },
];

const LANGUAGES = [
    'python3',
    'java',
    'cpp',
    'nodejs',
    'c',
    'ruby',
    'go',
    'scala',
    'bash',
    'sql',
    'pascal',
    'csharp',
    'php',
    'swift',
    'rust',
    'r',
];

export {
    LIMIT,
    BASE_BACKEND_URL,
    DEFAULT_RTE_TEXT,
    LOGO,
    SERVER_ERROR,
    BAD_REQUEST,
    MAX_FILE_SIZE,
    CONTRIBUTORS,
    EMAIL,
    CONTACTNUMBER,
    TAILWIND_COLORS,
    IMAGES,
    LANGUAGES,
};
