export const projects = [
    {
        projectId: 'p001',
        title: 'Smart Home Automation System',
        description:
            'An IoT-based home automation platform that allows users to control appliances, monitor energy usage, and set automation rules through a mobile app.',
        longDescription: `
        <p>This project creates a comprehensive smart home solution with these features:</p>
        <ul>
            <li>Voice control integration with Alexa and Google Assistant</li>
            <li>Real-time energy consumption monitoring</li>
            <li>Automation rules based on time, sensors, or triggers</li>
            <li>Cross-platform mobile application</li>
            <li>Secure remote access</li>
        </ul>
        <p>Built using React Native for the mobile app, Node.js backend, and ESP32 microcontrollers for device control.</p>
    `,
        tags: [
            { name: 'IoT', color: '#E8F5E9' },
            { name: 'Home Automation', color: '#E3F2FD' },
            { name: 'Mobile App', color: '#FCE4EC' },
        ],
        githubLink: 'https://github.com/home-assistant',
        owner: {
            name: 'Michael Chen',
            email: 'michael.c@example.com',
            profilelink: '',
            avatar: 'https://i.pravatar.cc/150?img=5',
        },
        chat: [],
        requests: [
            {
                id: 1,
                name: 'Sanya Malik',
                email: 'sanya.malik@example.com',
                profilelink: 'https://peerconnect.dev/users/sanyamalik',
                avatar: 'https://i.pravatar.cc/150?img=25',
                requestedOn: '2025-05-20',
                purpose:
                    'I want to help students by sharing my AI and ML expertise.',
                techStack: ['Python', 'TensorFlow', 'Flask'],
                status: 'pending',
                reviewedBy: null,
            },
            {
                id: 2,
                name: 'Dev Arora',
                email: 'dev.arora@example.com',
                profilelink: 'https://peerconnect.dev/users/devarora',
                avatar: 'https://i.pravatar.cc/150?img=26',
                requestedOn: '2025-05-21',
                purpose:
                    'Looking to contribute backend features and improve documentation.',
                techStack: ['Node.js', 'Express', 'MongoDB'],
                status: 'pending',
                reviewedBy: null,
            },
            {
                id: 3,
                name: 'Aarushi Jain',
                email: 'aarushi.j@example.com',
                profilelink: 'https://peerconnect.dev/users/aarushijain',
                avatar: 'https://i.pravatar.cc/150?img=27',
                requestedOn: '2025-05-18',
                purpose:
                    'I’ve built several student-focused apps and want to scale my impact.',
                techStack: ['React', 'Firebase', 'Figma'],
                status: 'approved',
                reviewedBy: 'admin1',
            },
        ],
        contributors: [
            {
                name: 'Emily Rodriguez',
                email: 'emily.r@example.com',
                avatar: 'https://i.pravatar.cc/150?img=11',
                profilelink: '/channel/1b2c3d4e-5678-90ab-cdef-1234567890ab',
                contributorSince: '2025-03-15',
            },
            {
                name: 'David Kim',
                email: 'david.k@example.com',
                avatar: 'https://i.pravatar.cc/150?img=15',
                profilelink: '/channel/2c3d4e5f-6789-01ab-cdef-2345678901bc',
                contributorSince: '2025-04-02',
            },
        ],
        tasks: [
            {
                taskId: '1',
                title: 'Implement device control API',
                description: 'Create REST API endpoints for device control',
                status: 'completed',
                priority: 'high',
                assignee: {
                    name: 'Michael Chen',
                    email: 'michael.c@example.com',
                    profilelink: '',
                    avatar: 'https://i.pravatar.cc/150?img=5',
                },
                created: '2025-02-10',
                updates: [
                    {
                        id: '1-1',
                        text: 'Completed basic CRUD endpoints',
                        author: 'Michael Chen',
                        date: '2025-02-20',
                        type: 'progress',
                    },
                ],
            },
            {
                taskId: '2',
                title: 'Design mobile app UI',
                description:
                    'Create wireframes and UI components for the mobile app',
                status: 'in-progress',
                priority: 'medium',
                assignee: {
                    name: 'Emily Rodriguez',
                    email: 'emily.r@example.com',
                    profilelink:
                        '/channel/1b2c3d4e-5678-90ab-cdef-1234567890ab',
                    avatar: 'https://i.pravatar.cc/150?img=11',
                },
                created: '2025-03-01',
                updates: [],
            },
        ],
        createdAt: '2025-02-05',
        status: 'Active',
    },
    {
        projectId: 'p002',
        title: 'Sustainable Farming Assistant',
        description:
            'An AI-powered platform that helps farmers optimize crop yields while minimizing environmental impact through data-driven recommendations.',
        longDescription: `
        <p>This agricultural technology solution includes:</p>
        <ul>
            <li>Satellite imagery analysis for crop health monitoring</li>
            <li>Weather prediction integration for irrigation planning</li>
            <li>Soil quality assessment tools</li>
            <li>Pest detection using computer vision</li>
            <li>Multi-language support for rural farmers</li>
        </ul>
        <p>The system combines Python for data analysis, React for the web interface, and TensorFlow for machine learning models.</p>
    `,
        tags: [
            { name: 'Agriculture', color: '#E8F5E9' },
            { name: 'AI', color: '#F3E5F5' },
            { name: 'Sustainability', color: '#E0F7FA' },
        ],
        githubLink: 'https://github.com/ravikant-diwakar/AgriSens?',
        owner: {
            name: 'Priya Patel',
            email: 'priya.p@example.com',
            profilelink: '',
            avatar: 'https://i.pravatar.cc/150?img=19',
        },
        chat: [],
        requests: [
            {
                id: 1,
                name: 'Aarushi Jain',
                email: 'aarushi.j@example.com',
                profilelink: 'https://peerconnect.dev/users/aarushijain',
                avatar: 'https://i.pravatar.cc/150?img=27',
                requestedOn: '2025-05-18',
                purpose:
                    'I’ve built several student-focused apps and want to scale my impact.',
                techStack: ['React', 'Firebase', 'Figma'],
                status: 'approved',
                reviewedBy: 'admin1',
            },
            {
                id: 2,
                name: 'Nikhil Bansal',
                email: 'nikhil.b@example.com',
                profilelink: 'https://peerconnect.dev/users/nikhilbansal',
                avatar: 'https://i.pravatar.cc/150?img=28',
                requestedOn: '2025-05-16',
                purpose:
                    'Keen to work on the analytics dashboard and optimization tasks.',
                techStack: ['Django', 'PostgreSQL', 'Docker'],
                status: 'rejected',
                reviewedBy: 'admin2',
            },
            {
                id: 3,
                name: 'Muskaan Singh',
                email: 'muskaan.singh@example.com',
                profilelink: 'https://peerconnect.dev/users/muskaansingh',
                avatar: 'https://i.pravatar.cc/150?img=29',
                requestedOn: '2025-05-19',
                purpose:
                    'Excited to work on frontend designs and accessibility features.',
                techStack: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
                status: 'pending',
                reviewedBy: null,
            },
        ],
        contributors: [
            {
                name: 'Emily Rodriguez',
                email: 'emily.r@example.com',
                avatar: 'https://i.pravatar.cc/150?img=11',
                profilelink: '/channel/1b2c3d4e-5678-90ab-cdef-1234567890ab',
                contributorSince: '2025-03-15',
            },
            {
                name: 'Carlos Mendez',
                email: 'carlos.m@example.com',
                avatar: 'https://i.pravatar.cc/150?img=28',
                profilelink: '/channel/3d4e5f6g-7890-12ab-cdef-3456789012cd',
                contributorSince: '2025-01-20',
            },
            {
                name: 'Aisha Johnson',
                email: 'aisha.j@example.com',
                avatar: 'https://i.pravatar.cc/150?img=33',
                profilelink: '/channel/4e5f6g7h-8901-23ab-cdef-4567890123de',
                contributorSince: '2025-02-15',
            },
        ],
        tasks: [
            {
                taskId: '1',
                title: 'Develop crop health analysis model',
                description:
                    'Create ML model to analyze satellite images for crop health',
                status: 'in-progress',
                priority: 'high',
                assignee: {
                    name: 'Carlos Mendez',
                    email: 'carlos.m@example.com',
                    profilelink:
                        '/channel/3d4e5f6g-7890-12ab-cdef-3456789012cd',
                    avatar: 'https://i.pravatar.cc/150?img=28',
                },
                created: '2025-01-15',
                updates: [
                    {
                        id: '1-1',
                        text: 'Collected initial dataset of 10,000 labeled images',
                        author: 'Carlos Mendez',
                        date: '2025-01-30',
                        type: 'progress',
                    },
                ],
            },
            {
                taskId: '2',
                title: 'Create farmer onboarding flow',
                description:
                    'Design and implement the new farmer registration process',
                status: 'open',
                priority: 'medium',
                assignee: null,
                created: '2025-02-10',
                updates: [],
            },
        ],
        createdAt: '2025-01-10',
        status: 'Active',
    },
    {
        projectId: 'p003',
        title: 'Interactive Language Learning Platform',
        description:
            'A gamified language learning application that uses AI to personalize lessons and provide real-time pronunciation feedback.',
        longDescription: `
        <p>This platform revolutionizes language learning with:</p>
        <ul>
            <li>Speech recognition for pronunciation scoring</li>
            <li>Personalized lesson plans based on learning style</li>
            <li>Interactive stories and scenarios</li>
            <li>Progress tracking and achievement system</li>
            <li>Community features for language exchange</li>
        </ul>
        <p>Built with Flutter for cross-platform compatibility and Firebase for backend services.</p>
    `,
        tags: [
            { name: 'Education', color: '#FFF8E1' },
            { name: 'AI', color: '#F3E5F5' },
            { name: 'Mobile App', color: '#FCE4EC' },
        ],
        githubLink: 'https://github.com/SudoKMaar/leaf?',
        owner: {
            name: 'Thomas Müller',
            email: 'thomas.m@example.com',
            profilelink: '',
            avatar: 'https://i.pravatar.cc/150?img=40',
        },
        chat: [],
        requests: [
            {
                id: 1,
                name: 'Ananya Ghosh',
                email: 'ananya.g@example.com',
                profilelink: 'https://peerconnect.dev/users/ananyaghosh',
                avatar: 'https://i.pravatar.cc/150?img=30',
                requestedOn: '2025-05-17',
                purpose:
                    'Looking to write tech blogs and create guides for beginners.',
                techStack: ['HTML', 'CSS', 'Markdown', 'Canva'],
                status: 'pending',
                reviewedBy: null,
            },
            {
                id: 2,
                name: 'Pranav Iyer',
                email: 'pranav.iyer@example.com',
                profilelink: 'https://peerconnect.dev/users/pranaviyer',
                avatar: 'https://i.pravatar.cc/150?img=31',
                requestedOn: '2025-05-15',
                purpose: 'Interested in helping with testing and bug reports.',
                techStack: ['Jest', 'Cypress', 'JavaScript'],
                status: 'rejected',
                reviewedBy: 'admin1',
            },
        ],
        contributors: [
            {
                name: 'Sophie Laurent',
                email: 'sophie.l@example.com',
                avatar: 'https://i.pravatar.cc/150?img=45',
                profilelink: '/channel/5f6g7h8i-9012-34ab-cdef-5678901234ef',
                contributorSince: '2025-03-01',
            },
            {
                name: 'Rajiv Kapoor',
                email: 'rajiv.k@example.com',
                avatar: 'https://i.pravatar.cc/150?img=50',
                profilelink: '/channel/6g7h8i9j-0123-45ab-cdef-6789012345fg',
                contributorSince: '2025-03-15',
            },
        ],
        tasks: [
            {
                taskId: '1',
                title: 'Implement speech recognition',
                description:
                    'Integrate speech-to-text and pronunciation analysis',
                status: 'in-progress',
                priority: 'high',
                assignee: {
                    name: 'Sophie Laurent',
                    email: 'sophie.l@example.com',
                    profilelink:
                        '/channel/5f6g7h8i-9012-34ab-cdef-5678901234ef',
                    avatar: 'https://i.pravatar.cc/150?img=45',
                },
                created: '2025-02-20',
                updates: [
                    {
                        id: '1-1',
                        text: 'Integrated Google Speech API',
                        author: 'Sophie Laurent',
                        date: '2025-03-05',
                        type: 'progress',
                    },
                    {
                        id: '1-2',
                        text: 'Working on accuracy improvements for non-native speech',
                        author: 'Sophie Laurent',
                        date: '2025-03-10',
                        type: 'progress',
                    },
                ],
            },
            {
                taskId: '2',
                title: 'Design gamification elements',
                description:
                    'Create badges, achievements, and progress tracking',
                status: 'open',
                priority: 'medium',
                assignee: null,
                created: '2025-03-01',
                updates: [],
            },
        ],
        createdAt: '2025-02-15',
        status: 'Active',
    },
    {
        projectId: 'p004',
        title: 'Urban Mobility Platform',
        description:
            'A multi-modal transportation platform that integrates public transit, bike-sharing, and ride-hailing services into a single payment and routing system.',
        longDescription: `
        <p>This urban mobility solution offers:</p>
        <ul>
            <li>Real-time multi-modal route planning</li>
            <li>Unified payment system across services</li>
            <li>Crowd-sourced congestion data</li>
            <li>Carbon footprint tracking</li>
            <li>Accessibility features for users with disabilities</li>
        </ul>
        <p>The platform uses React for web, Kotlin/Swift for native mobile apps, and integrates with numerous transportation APIs.</p>
    `,
        tags: [
            { name: 'Transportation', color: '#E3F2FD' },
            { name: 'Smart Cities', color: '#E8EAF6' },
            { name: 'Mobility', color: '#E0F7FA' },
        ],
        githubLink: 'https://github.com/kc-codes/Urban-Mobility-Solution?',
        owner: {
            name: 'Lena Schmidt',
            email: 'lena.s@example.com',
            profilelink: '',
            avatar: 'https://i.pravatar.cc/150?img=55',
        },
        chat: [],
        requests: [],
        contributors: [
            {
                name: 'Jamal Washington',
                email: 'jamal.w@example.com',
                avatar: 'https://i.pravatar.cc/150?img=60',
                profilelink: '/channel/7h8i9j0k-1234-56ab-cdef-7890123456gh',
                contributorSince: '2025-04-05',
            },
            {
                name: 'Yuki Tanaka',
                email: 'yuki.t@example.com',
                avatar: 'https://i.pravatar.cc/150?img=65',
                profilelink: '/channel/8i9j0k1l-2345-67ab-cdef-8901234567hi',
                contributorSince: '2025-04-10',
            },
        ],
        tasks: [
            {
                taskId: '1',
                title: 'Integrate public transit APIs',
                description: 'Connect with city transit data sources',
                status: 'completed',
                priority: 'high',
                assignee: {
                    name: 'Jamal Washington',
                    email: 'jamal.w@example.com',
                    profilelink:
                        '/channel/7h8i9j0k-1234-56ab-cdef-7890123456gh',
                    avatar: 'https://i.pravatar.cc/150?img=60',
                },
                created: '2025-03-20',
                updates: [
                    {
                        id: '1-1',
                        text: 'Integrated with 3 major city transit systems',
                        author: 'Jamal Washington',
                        date: '2025-04-01',
                        type: 'progress',
                    },
                ],
            },
            {
                taskId: '2',
                title: 'Develop routing algorithm',
                description: 'Create multi-modal route optimization engine',
                status: 'in-progress',
                priority: 'high',
                assignee: {
                    name: 'Yuki Tanaka',
                    email: 'yuki.t@example.com',
                    profilelink:
                        '/channel/8i9j0k1l-2345-67ab-cdef-8901234567hi',
                    avatar: 'https://i.pravatar.cc/150?img=65',
                },
                created: '2025-04-01',
                updates: [
                    {
                        id: '2-1',
                        text: 'Basic routing between two modes implemented',
                        author: 'Yuki Tanaka',
                        date: '2025-04-15',
                        type: 'progress',
                    },
                ],
            },
        ],
        createdAt: '2025-03-15',
        status: 'Active',
    },
    {
        projectId: 'p005',
        title: 'Healthcare Data Analytics Platform',
        description:
            'A secure platform for hospitals to analyze patient data, identify trends, and improve treatment outcomes while maintaining HIPAA compliance.',
        longDescription: `
        <p>This healthcare analytics solution provides:</p>
        <ul>
            <li>Anonymized patient data analysis</li>
            <li>Predictive models for disease outbreaks</li>
            <li>Treatment effectiveness comparisons</li>
            <li>Real-time dashboard for hospital administrators</li>
            <li>Blockchain-based audit trail for data access</li>
        </ul>
        <p>Built with Python for data processing, React for visualization, and robust encryption for security.</p>
    `,
        tags: [
            { name: 'Healthcare', color: '#FFEBEE' },
            { name: 'Data Science', color: '#E8EAF6' },
            { name: 'Analytics', color: '#E0F7FA' },
        ],
        githubLink:
            'https://github.com/Vikranth3140/Mental-Health-Support-Chatbot?',
        owner: {
            name: 'Dr. Robert Chen',
            email: 'robert.c@example.com',
            profilelink: '/channel/1b2c3d4e-5678-90ab-cdef-1234567890ab',
            avatar: 'https://i.pravatar.cc/150?img=70',
        },
        chat: [],
        requests: [
            {
                id: 1,
                name: 'Muskaan Singh',
                email: 'muskaan.singh@example.com',
                profilelink: 'https://peerconnect.dev/users/muskaansingh',
                avatar: 'https://i.pravatar.cc/150?img=29',
                requestedOn: '2025-05-19',
                purpose:
                    'Excited to work on frontend designs and accessibility features.',
                techStack: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
                status: 'pending',
                reviewedBy: null,
            },
            {
                id: 2,
                name: 'Yash Thakur',
                email: 'yash.t@example.com',
                profilelink: 'https://peerconnect.dev/users/yashthakur',
                avatar: 'https://i.pravatar.cc/150?img=29',
                requestedOn: '2025-05-22',
                purpose:
                    'I want to mentor juniors and contribute learning resources.',
                techStack: ['C++', 'DSA', 'Markdown'],
                status: 'approved',
                reviewedBy: 'admin3',
            },
        ],
        contributors: [
            {
                name: 'Maria Garcia',
                email: 'maria.g@example.com',
                avatar: 'https://i.pravatar.cc/150?img=24',
                profilelink: '/channel/9j0k1l2m-3456-78ab-cdef-9012345678ij',
                contributorSince: '2025-05-01',
            },
            {
                name: 'Arjun Patel',
                email: 'arjun.p@example.com',
                avatar: 'https://i.pravatar.cc/150?img=23',
                profilelink: '/channel/0k1l2m3n-4567-89ab-cdef-0123456789jk',
                contributorSince: '2025-05-10',
            },
        ],
        tasks: [
            {
                taskId: '1',
                title: 'Implement data anonymization',
                description:
                    'Develop process to anonymize patient data for analysis',
                status: 'in-progress',
                priority: 'high',
                assignee: {
                    name: 'Maria Garcia',
                    email: 'maria.g@example.com',
                    profilelink:
                        '/channel/9j0k1l2m-3456-78ab-cdef-9012345678ij',
                    avatar: 'https://i.pravatar.cc/150?img=75',
                },
                created: '2025-04-20',
                updates: [
                    {
                        id: '1-1',
                        text: 'Completed initial anonymization algorithm',
                        author: 'Maria Garcia',
                        date: '2025-05-05',
                        type: 'progress',
                    },
                    {
                        id: '1-2',
                        text: 'Needs review by legal team for compliance',
                        author: 'Dr. Robert Chen',
                        date: '2025-05-08',
                        type: 'comment',
                    },
                ],
            },
            {
                taskId: '2',
                title: 'Build admin dashboard',
                description:
                    'Create visualization dashboard for hospital administrators',
                status: 'open',
                priority: 'medium',
                assignee: null,
                created: '2025-05-01',
                updates: [],
            },
        ],
        createdAt: '2025-04-15',
        status: 'Active',
    },
];
