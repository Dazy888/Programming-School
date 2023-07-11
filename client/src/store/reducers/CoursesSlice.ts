import { ICourse } from "@/models/course"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Questions from "@/components/courses/course/sections/questions/Questions"

const commonItems = {
    header: {
        guarantees: { title: 'We guarantee animation', text: 'or refund money *'  },
        getJobInSixMonths: {title: '6 months later', text: 'you can get a job'  },
        getJobInSevenMonths: { title: '7 months later', text: 'you can get a job' },
        fourProjectsInPortfolio: { title: '4 projects', text: 'in portfolio' },
        threeProjectsInPortfolio: { title: '3 projects', text: 'in portfolio' },
        durationSevenMonths: { title: 'Duration', text: '7 months' },
        forBeginners: { title: 'For beginners', text: 'the course is suitable for those who start from scratch' },
        feedback: { title: 'Feedback', text: 'on practical work from experts' },
        durationOneYear: { title: 'Duration', text: '1 year' }
    },
    market: {
        fullstackText: 'There are not enough fullstack developers on the market',
        listItems: {
            thirdPlace: { title: '3rd place', text: 'in the list of the most in-demand IT professions in 2019, according to Lucky Hunter' },
            devopsVacancies: { title: 'Over 4 000 vacancies', text: 'open to DevOps engineers' },
            devopsSalary: { title: 'From 70 000 dollars', text: 'beginner salary specialist' }
        }
    },
    skills: {
        devopsDocker: { title: 'Work in Docker', text: 'Learn all about containerization. You will write your own docker images, run containers, build dependencies and define access parameters' },
        devopsInfrastructure: { title: 'Manage infrastructure like code', text: 'Learn to create, modify and version environments with Terraform and Ansible' },
        devopsMonitoring: { title: 'Set up monitoring', text: 'You will collect metrics and logs using Prometheus and the elk stack, build convenient dashboards in Grafana. Learn about incident handling and feedback systems' }
    },
    program: {
        pythonBasic_1: {
            title: 'Fundamentals of Python. Part 1',
            listItems: [
                'Introduction', 'Basics of working with Python', 'Operators, expressions', 'Conditional if statement, branches', 'Conditional if statement: continuation',
                'While loop', 'For loop: loops with a counter', 'The for loop: features of working with range', 'The for loop: working with strings', 'Nested loops',
                'Numbers. The types are int and float', 'Functions: start', 'Float features'
            ]
        },
        pythonBasic_2: {
            title: 'Fundamentals of Python. Part 2',
            listItems: [
                'Installing and configuring the IDE', 'Basic collections. Lists', 'List: methods for working with lists', 'List views', 'Basic collections. Strings',
                'Basic collections. Dictionaries', 'Basic collections. Tuples', 'Functions: continued', 'Working with files', 'Exceptions: dealing with errors',
                'Introduction to OOP', 'Basic principles of OOP', 'Iterators and generators', 'Decorators: basic level', 'Deep class work and built-in decorators',
                'Decorators: advanced level', 'Functions: end', 'Libraries for working with data'
            ]
        },
        pythonAdvanced: {
            title: 'Python Advanced ≈ 3.5 months',
            listItems: [
                'Flask: start', 'Basics of working in Linux. Part 1', 'Fundamentals of CI culture. Part 1', 'Flask', 'Basics of working in Linux. Part 2',
                'Basics of debugging and profiling. Part 1', 'Logger', 'Deploy application on linux', 'Docker', 'Database. Part 1', 'Multitasking. Part 1',
                'Multitasking. Part 2', 'Database. Part 2', 'An introductory module on the MVC framework. Part 1', 'An introductory module on the MVC framework. Part 2',
                'Database. Part 3', 'RESTful API', 'MVC, templating language. Part 3', 'Database. Part 4', 'Introduction to ORM SQLAlchemy. Part 1', 'SQLAlchemy ORM. Part 2',
                'CGI server', 'Basics of debugging and profiling. Part 2', 'Basics of debugging and profiling. Part 3', 'Multitasking: asyncio', 'Multitasking: fastAPI',
                'Postgres + Migrations', 'Pytest, Mock', 'Safety', 'Fundamentals of CI culture: linters', 'CD, automatic deployment'
            ]
        },
        webLayout: {
            title: 'Web layout. Baseline 2.5 months',
            subtitle: 'You will learn how to make responsive websites that will look equally beautiful on the monitor screen, mobile phone and tablet',
            listItems: [
                'Basic HTML', 'Basic CSS. 2 modules', 'Preparing for layout', 'Layout. HTML markup', 'Layout. flexbox', 'Layout. Stylization', 'Advanced HTML. Forms',
                'Advanced CSS. 2 modules', 'Adaptability. Desktop', 'Adaptability. Mobile devices', 'JavaScript for layout designer', 'Availability', 'Cross browser',
                'Knowledge base', 'Grids', 'Animation', 'Hosting work',
                'Final project: make up a landing page according to the layout from the customer for the Blanchard art gallery or the W-Wawe podcast platform (your choice)'
            ]
        },
        jsBasic: {
            title: 'JavaScript. Basic level 2 months',
            subtitle: 'You will learn the basics of JavaScript, learn how to work with the DOM and make your projects dynamic. Learn how to communicate with a server using JavaScript',
            listItems: [
                'Introduction', 'Variables and working with numbers', 'Strings, booleans, and conditional statements', 'Arrays and loops', 'Functions', 'Objects',
                'Introduction to the DOM 2 modules', 'Constants, scopes and closures', 'Type conversion and loose comparisons', 'Communication with the server, async/await',
                'Final project: develop a complete CRM system'
            ]
        },
        php: {
            title: 'PHP developer. A basic level of',
            listItems: [
                'Introduction to PHP programming', 'Variables, numbers and boolean', 'Conditional operators and Boolean algebra', 'Strings and arrays', 'Cycles',
                'Functions: creation and use', 'Recursion, callback and anonymous functions', 'Classes, methods and objects', 'Inheritance and abstract classes',
                'Interfaces and polymorphism', 'Access modifiers, getters and setters', 'HTML/CSS', 'Separation of the application into files',
                'Working with files and with the network', 'Error handling, Exceptions and logs', 'HTTP protocol',
                'Handling GET and POST requests, header, cookies and sessions', 'REST and RESTful APIs', 'SQL query language', 'Working with databases in PHP',
                'Laravel framework'
            ]
        },
        laravel: {
            title: 'Laravel PHP Framework',
            listItems: [
                'Introduction, installation and initial setup', 'Controllers, actions and routing', 'Working with databases. Eloquent ORM',
                'Working with templates. Blade template engine', 'Formation of the answer (Response)', 'Working with forms', 'Request processing (Request)',
                'Services: creation and use', 'Working with events', 'Built-in Laravel features', 'Authorization implementation', 'Integration with external services',
                'Testing and debugging Laravel applications', 'Creation of an admin panel'
            ]
        },
        frameworks: {
            title: 'Framework to choose from: React.js, Vue.js, Angular',
            text: 'You can design models faster with the help of frameworks - ready-made libraries for developing dynamic sites'
        },
        additionalCourses: {
            title: 'Additional courses',
            listItems: ['Git version control system', 'Working on the Bash command line', 'SQL query language', 'Figma from zero to PRO', 'Presentation of final projects']
        },
        careerCourse: {
            title: 'Career Course: Employment and Development',
            text: 'Get useful tips for further career development. Learn how to write a strong resume, take tests and prepare for interviews. Understand typical interview questions'
        },
        employment: {
            title: 'Employment through the Career Center',
            text: 'A career counselor will help you find a job and prepare you for an interview. You will be able to start working as a Junior in a company and take a course at the same time'
        },
        nodejs: {
            title: 'Node.js',
            text: 'Learn how server-side JavaScript works in Node.js. Learn the Express.js framework, learn how to work with databases'
        },
        typescript: {
            title: 'TypeScript. A basic level of',
            text: 'Learn advanced JavaScript - TypeScript is slowly becoming the standard for web development. You will be able to write more predictable and reliable code, work in large companies'
        },
        bash: {
            title: 'Working on the Bash command line',
            listItems: [
                'What is command line', 'Working with files and folders', 'Authorization and access rights', 'Processes, services and tasks', 'Configuration and tools',
                'Writing scripts in Bash', 'Using bash on an example of setting up a web server'
            ]
        },
        git: {
            title: 'Git version control system',
            listItems: [
                'Program code versions', 'Installing Git', 'Index and partial commits', 'Version comparison', 'Undo changes and rollback versions', 'Repositories and teamwork',
                'Branches - creation and management', 'Merging and conflict resolution', 'Useful tools', 'Rules for working with Git'
            ]
        },
        sql: {
            title: 'SQL query language',
            listItems: [
                'SQL. Introduction', 'DB structure, DESCRIBE query', 'Selecting and filtering data, SELECT query', 'Functions and expressions, data aggregation',
                'Relations and connection of tables: JOIN', 'Grouping', 'Data modification', 'Subqueries', 'Declaring and changing the data structure'
            ]
        },
        knowledge: {
            title: 'Universal programmer knowledge',
            listItems: [
                'How to become a first-class programmer', 'How to search for development orders', "Developer's personal brand", 'Photoshop for the programmer',
                'Layout of email newsletters. Tips on real examples', 'The state of soft skills', 'How we created a development map for developers',
                'How to communicate via email and work effectively with mail', 'Increasing your efficiency', 'Dispute about the first programming language',
                'Self-development: how I did not sit on two chairs and found a third', 'Data-driven approach to productivity - insights from the data of a million people'
            ]
        },
        careerCenter: {
            title: '✦ Job placement with Career Center',
            text: 'At this stage, you are ready for employment - a career consultant will begin to help you find a job and prepare you for an interview. You will be able to start working as a Junior in the company and go through advanced topics at the same time'
        },
        mobileAdditionalCourses: {
            title: '5 additional courses: Git, SQL, Figma, Testing and Career. 3 months',
            listItems: [
                'Git version control system. You have learned how to work with a version of the software code. You will be able to compare and change them using the Git system',
                'SQL query language. You will learn a popular language that will help you speed up your work with requests',
                'Career and development for a programmer. You will notice how to grow in the profession and where the programmer can develop',
                'Figma from scratch to PRO. You have learned to work in the most popular service for creating models',
                "Manual Application Testing - You'll learn how to write verification tests and find packages that even experienced mobile testers miss"
            ]
        },
        iosBasic: {
            title: 'iOS development. Basics. 3 months',
            subtitle: 'You will gain basic iOS development skills. Understand the basics of Swift, immerse yourself in the UI, learn how to work with libraries and publish ready-made applications',
            listItems: [
                'Development environment', 'Swift development basics. Variables and numeric types', 'Swift development basics. Working with strings',
                'Swift development basics. Boolean types and flow control', 'Swift development basics. Working with arrays. Methods',
                'Swift development basics. Working with dictionaries', 'Fundamentals of UI development', 'Classes and structures in Swift', 'OOP', 'Protocols',
                'The layout of UI elements. Using Enum', 'Working with layouts', 'Life cycle and navigation', 'Lists', 'Libraries. access modifiers', 'Version control',
                'Multithreading', 'Network requests. Part 1', 'Network requests. Part 2', 'Storage of user data', 'Animations', 'Modern approaches to development',
                'Creating navigation in code', 'Publishing an app to the App Store'
            ]
        },
        iosAdvanced: {
            title: 'iOS developer. Advanced level. 3 months',
            subtitle: 'You will dive deeper into iOS development. Learn to test and optimize applications, use design patterns, create your own libraries and speed up the product',
            listItems: [
                'Introduction to SwiftUI', 'SwiftUI. Element layout', 'SwiftUI. Navigation', 'SwiftUI. Widgets', 'SwiftUI. Layout of elements', 'SwiftUI. Working with State',
                'SwiftUI. Animation', 'combine. Part 1: The Basics', 'What is a combine. Part 2', 'What is a combine. Part 3', 'What is a combine. Part 4', 'Testing',
                'Xcode Optimization and Tools', 'Push Notifications', 'Design patterns', 'Team final project'
            ]
        },
        kotlin: {
            title: 'Kotlin programming language. 2 months',
            subtitle: 'Learn how to code in Kotlin - in 2019, Google declared it a priority programming language for developing Android applications. Learn the principles of object-oriented programming (OOP), asynchronous and reactive programming',
            listItems: ['Variables', 'Functions', 'Conditions and cycles', 'Collections', 'Objects', 'OOP', 'Type comparison', 'Exceptions', 'Coroutines', 'Threads'],
        },
        devopsStart: {
            title: 'Getting Started in DevOps: System Administration for Beginners',
            listItems: [
                'Introduction to Linux', 'Linux: first steps', 'Users and Files. Introduction to Vim', 'Preparation for writing scripts in Bash', 'Writing scripts in Bash',
                'Writing scripts in Bash. Continuation', 'Writing scripts in Bash. Cycles', 'Writing scripts in Bash. Cycles: continued', 'Writing scripts in Bash. Conclusion',
                'World Wide Web', 'Initialization systems', 'Cryptography. HTTPS', 'Working with devices in Linux', 'Introduction to databases', 'Database. Continuation',
                'Introduction to networks', 'Continuation of acquaintance with data transfer', 'Completion of acquaintance with networks', 'We collect LAMP', 'Deb packages',
                'Monitoring and diagnostics', 'Monitoring and diagnostics. Continuation', 'Firewall', 'Virtualization', 'Tunnels'
            ]
        },
        devopsBasic: {
            title: 'DevOps engineer. Basics',
            listItems: [
                'Development evolution: CI/CD', 'Introduction to DevOps', 'Introduction to CD (Continuous Delivery)', 'Continuous integration using GitLab CI',
                'Continuous delivery. Working with development environment and PROD', 'Infrastructure as code (IaC)', 'Virtualization', 'Docker', 'Ansible',
                'Infrastructure code testing', 'Monitoring', 'Incident management', 'Tools', 'Final work'
            ]
        }
    },
    projects: {
        texts: {
            yandexDisc: 'You will develop an application for working with documents on Yandex Disk. The user will be able to log in to the application with a username and password, view and download files and folders, share links to documents, and monitor how full the disk is',
            finder: 'In the application, you can see the list of premieres, popular films and TV shows, find a movie by country and genre. You will design a separate screen to view information about the movie: genre, cast, and rating. Add a save to favorites feature and write logic to find similar movies',
            emulator: 'Create a program that will track the loading, unloading and movement of trucks and control the sorting of goods',
            teamProject: 'As part of a team led by an experienced mentor, create an Android app. You will be given TOR, project design and roles in the team. All processes of this project are an experience as close as possible to real conditions. This is how applications are made',
            chatBot: "Telegram bot for Too Easy Travel travel agency. The bot takes the user's approximate cost of living and location, and then returns a list of the most suitable hotels"
        },
        infrastructure: {
            imgSrc: 'devops/1',
            title: 'DevOps engineer course. Basics. infrastructure platform',
            firstParagraph: 'You will go through all the stages of working on a full-fledged platform, as in a real company:',
            listItems: [
                'deploy infrastructure in the cloud', 'automate deployment', 'test services, set up monitoring and log management system',
                'make a separate environment for production', 'think over a plan for the development of the platform'
            ],
            secondParagraph: 'Add the finished project to your portfolio and you can present it to the employer at the interview.'
        },
        accountManagement: {
            imgSrc: 'devops/2',
            title: 'Getting Started in DevOps: Framework for Account Management',
            firstParagraph: 'You will consolidate the theory and work out approaches to solving real-life problems that DevOps engineers work on:',
            listItems: [
                'deploy a certification authority for issuing certificates', 'create and configure a VPN server', 'set up monitoring', 'make a backup',
                'prepare documentation', 'plan infrastructure development'
            ]
        }
    },
    teachers: {
        krotov: {
            imgSrc: 'python/4',
            fullName: 'Sergey Krotov',
            text: 'Lead Software Engineer. Work experience - more than 5 years'
        },
        shulaev: {
            imgSrc: 'python/3',
            fullName: 'Andrey Shulaev',
            text: 'Lead Software Engineer. Work experience - more than 3 years'
        },
        kornienko: {
            imgSrc: 'web/1',
            fullName: 'Sergey Kornienko',
            text: 'Frontend teamlead at Prequel Inc. Over 20 years in development'
        },
        vasyanovich: {
            imgSrc: 'web/2',
            fullName: 'Maksim Vasyanovich',
            text: 'Layout designer at Lenta, mentor of the Web Layout block. Programming for over 6 years',
            additionalInfo: ['2016–2021. Freelance layout designer. Created more than 50 commercial projects', 'Since 2021 — layout designer at Lenta', 'Leads the MaxGraph YouTube channel, talks about front-end development']
        },
        tiunov: {
            imgSrc: 'web/3',
            fullName: 'Timofei Tiunov',
            text: 'System architect at SberMegaMarket. 10 years of experience in web development',
            additionalInfo: [
                'Author of JavaScript courses', 'Member of the program committee of the Frontendconf conference', '2011–2012. Web Developer at OUTSIDE. Developed a system for online synchronization of data from car dealer websites',
                `2013–2016. Leading web developer at the agency "Freedom Island". Worked on websites for the company's clients and internal projects`,
                '2016–2017. Teamlead in "Delovik". Responsible for all development in a startup. Together with the team, he implemented and launched a portal for entrepreneurs from scratch with a complex rating system and search with a neural network',
                '2018–2021. System architect at SberMegaMarket. He supervised the entire frontend direction, was responsible for infrastructure projects on information security, fault tolerance and CI / CD',
                'Since 2021 — Tech Lead at Isfors. Developed from scratch and launched a new version of the site for the largest esports media in the CIS'
            ]
        },
        avdeev: {
            imgSrc: 'web/4',
            fullName: 'Alexey Avdeev',
            text: 'CTO at Mish Design Lab. 10 years in web development'
        },
        molescu: {
            imgSrc: 'web/6',
            fullName: 'Michael Molescu',
            text: 'PHP developer, branch manager of ITRex Group',
            additionalInfo: ['In the profession since the age of 18, programming in more than 10 languages. He worked on a service for predicting the life expectancy of cancer patients, developed a news portal with video streaming of sports competitions for the official partner of Euro and Al Jazeera. Created an accounting system for brokers of an American insurance company, a platform for booking golf courses and renting equipment for a company from the USA']
        },
        pozdnyakov: {
            imgSrc: 'web/7',
            fullName: 'Alexander Pozdnyakov',
            text: 'Angular Developer at Insilico Medicine. More than 10 years in front-end development',
            additionalInfo: [
                'Speaker of the course "Profession Frontend-developer"', 'Uses Angular 2 since its inception', '2014–2017. Web developer at Comrade Digital Marketing Agency, Chicago',
                '2017–2020. Lead Front End Developer at Société Générale', 'Developed models for USbank', 'Since 2020 — front-end developer at Insilico Medicine. Works on a medical project in Skolkovo',
                'Since 2021 — Software Architect at Kaspersky Lab'
            ]
        },
        bondarovich: {
            imgSrc: 'web/8',
            fullName: 'Pavel Bondarovich',
            text: 'Creonit CTO. Over 13 years in development'
        },
        savchenko: {
            imgSrc: 'web/9',
            fullName: 'Maksim Savchenko',
            text: 'Senior frontend developer at Motivity. 12 years in development'
        },
        mirotin: {
            imgSrc: 'web/10',
            fullName: 'Evgeny Mirotin',
            text: 'Software Development Engineer at Play North. 16 years of experience in IT',
            additionalInfo: [
                'Worked as a JavaScript programmer for the last 9 years (frontend and fullstack)',
                'Speaker at the Internet of Things and International Mobile Developers Conference (Moscow), online conference of Prof IT Academy (Kyiv) and MinskJS meetup',
                '2012. Front-end developer at EPAM. Worked on projects for Viacom: MTV, European Music Awards',
                "2012–2014. Full stack developer at Like'n'Pay. Created a platform to support authors",
                '2014–2017. Developer at balena. 2018 startup. Developer at Botpress. Created a platform-constructor for chatbots',
                'Since 2019 — Software Development Engineer at Play North. Develops solutions for gaming sites'
            ]
        },
        ignatiev: {
            imgSrc: 'web/11',
            fullName: 'Dmitry Ignatiev',
            text: 'Managed the product team at Rabota.ru. Experience in development — 15 years',
            additionalInfo: ['Designs non-standard, complex and highly loaded systems in PHP, works with Symfony. Able to write complex logic in native ways, without using frameworks. 2006–2012 Developer at Dom Programs. Created templates for online stores for foreign customers and sites on Wordpress. 2012–2017 PHP developer at Embria. Supported the work of a high-load video portal and designed new features. 2017–2018. Senior PHP Developer at EPAM. Developed an internal company project for accounting and booking time for offices. Wrote a service from scratch in Symfony. Since 2019, he has been a team leader at Rabota.ru. Personally writes complex pieces of code, conducts reviews, manages teams and coordinates tasks']
        },
        pilipenko: {
            imgSrc: 'web/12',
            fullName: 'Daniel Pilipenko',
            text: 'Java programmer with 18 years of experience, director of the SymbioWay recruitment center',
            additionalInfo: ['Graduate of Moscow State University named after M. V. Lomonosov, candidate of sciences. Proficient in Java, PHP, frontend development technologies. 2006–2012 Head of the development department at the publishing house "Vokrug Sveta". 2012–2013 Lead developer of Utinet.Ru, created the portal and external services of the project. 2013–2014 Head of development at PilotCards, managed the team that created the website and mobile apps for iOS and Android. Author of courses, speaker and program director of backend development']
        },
        yakovushen: {
            imgSrc: 'fullstack-python/4',
            fullName: 'Egor Yakovushen',
            text: 'Setka, senior frontend-developer. Block «Javascript»'
        },
        mikheev: {
            imgSrc: 'frontend/1',
            fullName: 'Gleb Mikheev',
            text: 'CTO of our Holding. 19 years in development'
        },
        klimonova: {
            imgSrc: 'frontend/2',
            fullName: 'Olga Klimonova',
            text: 'Lead developer TASS'
        },
        kuznetsov: {
            imgSrc: 'frontend/3',
            fullName: 'Aleksandr Kuznetsov',
            text: 'Frontend developer at TASS'
        },
        borzunov: {
            imgSrc: 'frontend/4',
            fullName: 'Igor Borzunov',
            text: 'Frontend Tech Lead at Rosbank'
        },
        lisakov: {
            imgSrc: 'android/1',
            fullName: 'Egor Lisakov',
            text: '9 years developing applications for Android. Lead Developer, Arcadia',
            additionalInfo: ['During his time at Arcadia, he managed to launch large projects in Russian and foreign companies. Has been using Kotlin for the last 3 years']
        },
        alexandrov: {
            imgSrc: 'android/2',
            fullName: 'Denis Alexandrov',
            text: 'Team Lead Software Developer at Arcadia, in development for 13 years',
            additionalInfo: ['Program Director of Mobile Development. More than 11 years of experience in education. Conducted online and offline courses, internships and practices. 2013–2017 Developer at Game Insight. Worked on games: Build a Kingdom, Mirrors of Albion, Mystery Manor. 2017–2018. Lead mobile developer at Mentalstack, created educational portals and social networks. Since 2018 - Lead Kotlin Developer at Arcadia']
        },
        martynenko: {
            imgSrc: 'android/3',
            fullName: 'Eugene Martynenko',
            text: 'In development for 7 years. Lead Android Developer at Kitchen on the District'
        },
        machikhin: {
            imgSrc: 'android/4',
            fullName: 'Anton Machikhin',
            text: 'In development for 10 years. Senior Android Developer at Alfa-Bank'
        },
        firsov: {
            imgSrc: 'android/5',
            fullName: 'Alexei Firsov',
            text: 'In development for 8 years. Head of Android, MTC Shop'
        },
        malykh: {
            imgSrc: 'android/8',
            fullName: 'Andrey Malykh',
            text: 'QA Automation Lead'
        },
        shadrin: {
            imgSrc: 'android/9',
            fullName: 'Dmitry Shadrin',
            text: 'Head of QA at Social Solutions'
        },
        rybakov: {
            imgSrc: 'android/12',
            fullName: 'Anton Rybakov',
            text: 'Senior UI/UX Designer at KROK'
        },
        kudryavtsev: {
            imgSrc: 'iOS/1',
            fullName: 'Alexey Kudryavtsev',
            text: 'Developer Advocate at inDriver',
            additionalInfo: ['Developing iOS applications since 2013. From 2017 to 2022, he worked at Avito, organized 6 seasons of Podlodka iOS crew online conferences, and now advises on sustainable career development in IT']
        },
        aniskov: {
            imgSrc: 'iOS/2',
            fullName: 'Roman Aniskov',
            text: 'Technical Lead for Mobile Development at Home Credit Bank',
            additionalInfo: ['More than 10 years in IT. For 5 years he worked as an iOS developer at ivi, and now he is responsible for the development of the mobile application of Home Credit Bank']
        },
        nikolaev: {
            imgSrc: 'iOS/3',
            fullName: 'Maxim Nikolaev',
            text: 'Senior iOS developer at Alfa-Bank',
            additionalInfo: ['Developing mobile applications since 2014. He was engaged in backend development, Python programming and testing. Created projects for Alfa-Bank, Sreda Solutions, Motorola Solutions']
        },
        sotsky: {
            imgSrc: 'iOS/4',
            fullName: 'Nikolay Sotsky',
            text: 'Chief Executive Officer at InstaDev',
            additionalInfo: ["In mobile development since 2013. Prior to that, he led teams in technical projects. For the last 4 years, he has been combining iOS programming and managing the company's production department"]
        },
        ovchinnikov: {
            imgSrc: 'android/11',
            fullName: 'Michael Ovchinnikov',
            text: 'Badoo dating social network developer with more than 15 years of experience in IT'
        },
        naumenko: {
            imgSrc: 'devops/1',
            fullName: 'Artyom Naumenko',
            text: 'Head of IT infrastructure SkyEng'
        },
        zaycev: {
            imgSrc: 'devops/2',
            fullName: 'Dmitriy Zaycev',
            text: 'CTO/CIO @ Flocktory'
        },
        aquilin: {
            imgSrc: 'devops/3',
            fullName: 'Alexander Aquilin',
            text: 'DevOps Engineer at Data Travel and Aquiva Labs'
        },
        bryukhanov: {
            imgSrc: 'devops/4',
            fullName: 'Konstantin Bryukhanov',
            text: 'Head of DevOps, VTB Internet Bank'
        },
        krylov: {
            imgSrc: 'devops/5',
            fullName: 'Alexander Krylov',
            text: 'Lead DevOps services at Rosgosstrakh'
        },
        dmitriev: {
            imgSrc: 'devops/6',
            fullName: 'Eugene Dmitriev',
            text: 'DevOps engineer at InfoTeKS'
        }
    },
    questions: {
        frontend: {
            title: 'Front-end',
            text: 'that part of the site or application with which the user interacts directly. First of all: interface and appearance.'
        },
        backend: {
            title: 'Back-end',
            text: 'that part of the site or application that the user does not see. For example, interacting with servers, synchronizing data between systems, storing user data, and so on.'
        },
        figma: {
            title: 'Figma',
            text: 'a service in which designers design models for websites and mobile applications.'
        },
        framework: {
            title: 'Framework',
            text: 'a language-specific tool that helps you complete routine tasks faster. For example, the Vue framework works with JavaScript and helps build user models by automating many processes.'
        },
        api: {
            title: 'API',
            text: 'a software component that describes how one program or service interacts with others. For example, many sites allow you to host videos from YouTube. The code that describes how such an inclusion works is the API.'
        },
        ui: {
            title: 'UI',
            text: 'user interface. This is the part of the program that users see with their eyes. All windows, buttons, pictures, interactive elements are part of the UI.'
        },
        js: {
            title: 'JavaScript',
            text: 'main programming language in web development. JS is used to program site functions, add interactivity and describe user interaction scenarios. It also works great with HTML and CSS.'
        },
        html: {
            title: 'HTML',
            text: 'the most layout layout language on the Internet. You can think of HTML as a set of commands that defines the structure and logic of the site.'
        },
        css: {
            title: 'CSS',
            text: 'a language that describes the style of the site. If HTML is responsible for the content, then CSS is responsible for the appearance of the site.'
        },
        css_grid: {
            title: 'CSS Grid',
            text: 'tool in CSS: a special ruler that helps to arrange site elements symmetrically and neatly.'
        },
        default_questions: [
            { title: 'I have never programmed. Will I succeed?', text: 'Of course! With the right approach to learning, independent expansion of horizons and timely completion of practical tasks, you can achieve results even without special basic knowledge. Experienced tutors will help you with everything, who will accompany you throughout the course.' },
            { title: 'What is the training schedule on the platform? Can you combine it with work?', text: 'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time.' },
            { title: 'How many hours per week will I need to devote to training on the platform?', text: 'Everything depends on you. On average, platform users spend 3 to 5 hours a week.' },
            { title: 'Who will help me learn on the platform?', text: "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks." },
        ],
        site_development: {
            title: 'I have never developed websites. Will I succeed?',
            text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be assisted by practicing experts who will accompany you throughout the course.'
        },
        remote: {
            title: 'Will I be able to work from home?',
            text: 'Certainly! Many companies offer telecommuting on an ongoing basis. You do not have to go to the office - the main thing is to be in touch with the team. And if you want to choose projects and customers yourself, freelance platforms are always available for you.'
        },
        system_requirements: {
            title: 'Do you need a powerful computer to develop websites?',
            text: 'Front-end development does not require large computing resources, so a laptop or a medium-sized computer is suitable for work. Here are the minimum specs:',
            listItems: [
                'Operating system: Windows 8.0 or higher, macOS 10.12 (macOS Sierra) or higher.', 'Processor: 4-core with a frequency of 2.5 GHz or higher.', 'RAM: from 4 GB.',
                'Video Card: Intel HD Graphics 4000, Nvidia 330m or ATI Radeon HD 4850 or higher.', 'It is desirable, but not necessary, that the memory be on an SSD.',
                'Screen resolution: preferably 1920x1080.', 'Internet access.'
            ]
        },
        soft: {
            title: 'Do I need to install programs to work on the course?',
            text: "You don't need to download anything beforehand. During the course, we will help you install all the necessary software for work and provide access to paid tools."
        },
        english: {
            title: 'Do you need to know English?',
            text: 'Not at all necessary. You will memorize the names of built-in functions and expressions in programming languages in the process, and unfamiliar phrases can be translated using Google Translate. In addition, you will have access to lessons and materials from the online English learning platform. Improve your grammar and expand your vocabulary.'
        },
        freelance: {
            title: 'How much do freelancers pay to create websites?',
            text: 'Depends on the scope of the project. For example, for the layout of a landing page, you can earn from 500 USD, and the development of an online store can cost hundreds of thousands. Sometimes it is required not only to create a site on a turnkey basis, but to correct something in the existing code. Such orders are inexpensive. But if you take several of these a month at once, you will have a good additional source of income.'
        },
        help: {
            title: 'Who will help me learn on the platform?',
            text: "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks."
        },
        schedule: {
            title: 'What is the training schedule on the platform? Can you combine it with work?',
            text: "You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. What's more, all videos will be available at the end of the course, so you can brush up on your knowledge at any time."
        },
        kotlin: {
            title: 'Kotlin',
            text: 'the programming language in which Android applications have been developed since 2019.'
        },
        swift: {
            title: 'Swift',
            text: 'programming language used to create applications for Apple devices.'
        },
        androidSDK: {
            title: 'Android SDK',
            text: 'an additional set of tools to assist in application development.'
        },
        iosSDK: {
            title: 'iOS SDK',
            text: 'is a set of tools for developing applications for iOS. For example, the SDK includes resources for working with multi-touch screens, an accelerometer, animation, and a camera.'
        },
        oop: {
            title: 'Principles of object-oriented programming (OOP)',
            text: 'ideas and rules that govern how to write a program. With an object-oriented approach, an application consists of separate entities - objects. They have their own properties, methods and can interact with each other or be inherited. For example, a Cat object may have properties inherited from an Animal object.'
        },
        java_development: {
            title: 'I have never done Java development. Will I succeed?',
            text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be assisted by practicing experts who will accompany you throughout the course.'
        }
    }
}

const frontend = {
    header: {
        text: 'Thanks to frontend developers, we leave likes and comments, add products to the cart and quickly understand online maps. In the course, you will learn how to create web service models using programming languages and additional technologies. You will be able to develop task planners, instant messengers, online stores',
        features: [
            { title: 'Suitable for beginners', text: 'without programming experience' },
            { title: '6 months', text: 'before animation' },
            { title: 'Up to 8 projects', text: 'in portfolio' },
            { title: 'We guarantee animation', text: 'or refund money *' },
            { title: 'Practice on webinars', text: 'with developers from large companies' }
        ],
    },
    market: {
        title: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
        list: [
            { title: '4 100 vacancies', text: 'now open for a frontend developer position' },
            { title: '55 000 dollars', text: 'beginner salary' },
            { title: '6 months', text: 'intensive training on the platform is enough to get your first job' }
        ]
    },
    skills: [
        { title: 'Build websites in HTML and CSS', text: 'Master the most popular layout languages and be able to create websites that will look good on any screen' },
        { title: 'Work with frameworks', text: 'Learn to use Angular, React. js, Vue.js. You can easily assemble web applications from individual components' },
        { title: 'Program in JavaScript and TypeScript', text: 'Master two popular programming languages at once. With JavaScript you will create interactive models, and with TypeScript you will be able to quickly and reliably develop complex projects' },
        { title: 'Develop server applications with Node.js', text: 'Learn how to create a backend part of a service, work on its security and load resistance. You can take on more tasks and increase your earnings' },
        { title: 'Work in a team like a pro', text: 'Boost your time management and personal efficiency. You will be able to work effectively in a team with other developers, designers and team leaders' }
    ],
    programs: [
        { ...commonItems.program.webLayout, number: 1 }, { ...commonItems.program.jsBasic, number: 2 },
        { ...commonItems.program.frameworks, number: 3 }, { ...commonItems.program.nodejs, number: 4 },
        { ...commonItems.program.typescript, number: 5 }, { ...commonItems.program.careerCourse, number: 6 },
        { ...commonItems.program.employment, number: 7 }, { ...commonItems.program.additionalCourses, number: 8 }
    ],
    teachers: [
        commonItems.teachers.mikheev, commonItems.teachers.tiunov, commonItems.teachers.kornienko, commonItems.teachers.vasyanovich,
        commonItems.teachers.avdeev, commonItems.teachers.bondarovich, commonItems.teachers.savchenko, commonItems.teachers.mirotin,
        commonItems.teachers.pozdnyakov, commonItems.teachers.klimonova, commonItems.teachers.kuznetsov, commonItems.teachers.borzunov
    ],
    cv: {
        skills: [
            'Responsive layout of websites and emails', 'Working with TypeScript', 'Strong knowledge of JavaScript and OOP',
            'Developing Server Applications with Node.js', 'Working with Git Version Control', 'Understanding algorithms and data structures in projects',
            'Knowledge of React.js/Angular/Vue.js'
        ],
        tools: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Vue 3.0', 'Node.js', 'TypeScript', 'Git', 'Bash', 'SQL', 'Figma']
    },
    questions: [
        commonItems.questions.site_development,
        commonItems.questions.freelance,
        commonItems.questions.system_requirements,
        commonItems.questions.soft,
        commonItems.questions.english,
        commonItems.questions.remote,
        commonItems.questions.help,
        {
            title: 'How many hours per week will I need to devote to the course?',
            text: 'Depends on how quickly you want to master the profession. To complete the course in 8 months and get a job in 6.5 months, you need to study the materials for 2 hours a day. But such a schedule is not necessary to follow - you can take the course at a comfortable pace.'
        },
        {
            title: 'I see a lot of unfamiliar terms: CSS, JavaScript, framework? What does all of this mean?',
            terms: [
                commonItems.questions.frontend,
                commonItems.questions.backend,
                commonItems.questions.framework,
                commonItems.questions.js,
                commonItems.questions.html,
                commonItems.questions.css,
                commonItems.questions.css_grid,
                commonItems.questions.api,
                commonItems.questions.ui,
                commonItems.questions.figma,
                { title: 'TypeScript', text: 'a programming language based on JavaScript that extends its capabilities and allows you to quickly develop reliable, stable and secure systems.' },
                { title: 'Node.js', text: 'a JavaScript-based platform that allows you to work on the back-end of the application.' }
            ]
        },
        {
            title: 'What kind of projects can I do?',
            texts: [
                'Sites with the ability to buy a product or service, sign up for an event. For example, online stores, barbershop websites, food ordering services.',
                'Streaming services with music, podcasts, movies and series.',
                'Platforms for processing data of company clients, documents, invoices. For example, large CRM systems for banks.'
            ]
        },
        {
            title: 'What do you need to know to start taking the first orders or get a job?',
            text: `A web developer's career always starts with layout. To master the necessary skills, you need to take three courses within the profession: “Web layout. Basic level”, “JavaScript. Basic level" and master one of the technologies to choose from: Vue, React or Angular`
        },
        {
            title: 'How to develop in the profession?',
            texts: [
                'Things change quickly in frontend development: new technologies and frameworks appear, new features are added to JavaScript and CSS. Therefore, to study something once and forever remain in demand will not work.',
                'You need to constantly expand your knowledge in the field - communicate with team leaders in your company, attend conferences, read articles on Habré and other resources for developers.'
            ]
        }
    ]
}

interface CoursesState {
    openedCourse: string
    courses: {
        [key: string]: ICourse;
    }
}

const initialState: CoursesState = {
    openedCourse: '',
    courses: {
        python: {
            preview: {
                profession: 'Python developer',
                time: '10 months',
                path: 'python'
            },
            course: {
                header: {
                    text: 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and an analogue of a popular social network for a portfolio, and the Career Center will help you find a job as a Python developer',
                    features: [
                        { title: '★ 4,75 out of 5', text: 'based on 26 293 course evaluations' },
                        { title: '9 courses', text: 'you can start working' },
                        { title: '4 projects', text: 'including group training' },
                        commonItems.header.guarantees,
                        commonItems.header.getJobInSixMonths
                    ]
                },
                market: {
                    title: 'Python is the perfect language for a beginner. Python code is easy to write and read, the language consistently ranks highly in high rankings, and Pythonists are in demand in almost all broad IT - programming, data analysis, system administration and testing. YouTube, Intel, Pixar, NASA - these are just a few of the countries in the world that use Python in their products',
                    list: [
                        { title: 'Over 8,778 vacancies', text: 'open to Python developers in August 2022' },
                        { title: '80 000 dollars', text: 'salary of a novice Python developer' },
                        { title: '6 months', text: 'intensive classes and practice on the course are enough to find your first job' },
                        { title: 'YouTube, Intel, Pixar, NASA', text: 'companies in which the participants of the course got a job' }
                    ]
                },
                for_who: [
                    {
                        subtitle: 'Newbies in code',
                        text: 'Those who have just decided to become a programmer, but have not chosen in which area they are going to work. Python is a universal language'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'For those who are already learning Python on their own or from textbooks. But there is no one to ask a question and ask for help'
                    }
                ],
                skills: [
                    { text: 'Create simple and complex modular programs: from console scripts to chat bots' },
                    { text: 'Write autotests' },
                    { text: 'Deploy applications to the server' },
                    { text: 'Work with databases' },
                    { text: 'Work in a team' },
                    { text: 'Work with popular frameworks - Django, Flask' },
                    { text: 'Package projects in Docker and apply DevOps practices' },
                    { text: 'Use industrial development tools: Git, PyCharm, Postman' },
                    { text: 'Write database queries in Python with Sqlalchemy, Django-ORM' },
                ],
                program: {
                    title: {
                        text: 'You are waiting for 3 blocks of programming in Python and more than 100 topics for analysis. The difficulty of the lessons increases gradually. Additional and bonus courses can be taken in parallel with the main ones',
                        counts: [{ number: '10', text: 'months' }, { number: '3', text: 'final project' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.pythonBasic_1,
                            number: 1
                        },
                        {
                            ...commonItems.program.pythonBasic_2,
                            number: 2
                        },
                        {
                            title: 'Final project: Telegram bot',
                            text: 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels',
                            number: 3
                        },
                        {
                            title: 'Python framework Django ≈ 2.5 months',
                            listItems: [
                                'Introduction to web frameworks', 'Introduction to Django', 'Handling requests in Django', 'Database and models', 'Forms', 'Working with files', 'Testing',
                                'Authentication and authorization', 'Admin', 'Localization and internationalization', 'Access rights', 'Documentation', 'Optimization', 'Data export'
                            ],
                            number: 4
                        },
                        {
                            title: 'Internship with us',
                            listItems: [
                                'Together with a team leader and a team of 3–5 people, you will develop a server part for a full-fledged marketplace. You will work according to the Scrum or Kanban system, regularly discuss current progress with the team leader and receive new tasks. All processes are as close as possible to real conditions - this is how commercial software is created in employer companies',
                                'As a result, you will create your own analogue of Yandex Market'
                            ],
                            number: 5
                        },
                        {
                            ...commonItems.program.careerCenter,
                            number: 6
                        },
                        {
                            ...commonItems.program.pythonAdvanced,
                            number: 7
                        },
                        {
                            title: 'Final project: social network',
                            text: 'You will write an analogue of Twitter, in which users will be able to publish posts, comment on them and put likes',
                            number: 8
                        },
                        {
                            title: '✦ Promotion at work',
                            listItems: ['Advanced knowledge and skills will allow you to take on complex tasks at work and grow to Middle faster'],
                            number: 9
                        },
                        {
                            title: 'Additional courses',
                            listItems: ['Career and development for a programmer', 'Web layout. A basic level of', 'SQL query language', 'GIT version control system', 'General knowledge of the programmer'],
                            number: 10
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Chatbot for hotel search',
                        text: commonItems.projects.texts.chatBot
                    },
                    {
                        title: 'Online store',
                        text: 'A team of five course participants developed the server part for the marketplace, an analogue of Yandex Market. The marketplace has a search by category and filters, a shopping cart, an order form with the possibility of online payment'
                    },
                    {
                        title: 'Social network',
                        text: 'The participant developed the server part of the application, used the Flask framework and the principles of asynchronous programming. Its users will be able to publish posts, comment on them and put likes'
                    }
                ],
                teachers: [
                    commonItems.teachers.shulaev,
                    commonItems.teachers.krotov,
                    { imgSrc: '/python/1', fullName: 'Roman Bulgakov', text: 'Computer science and programming teacher with more than 5 years of experience' },
                    { imgSrc: '/python/2', fullName: 'Alexei Polovinkin', text: 'AGIMA Python-teamlead. Work experience - more than 7 years' },
                    { imgSrc: '/python/5', fullName: 'Nikita Nesterenko', text: 'Project manager and chief development engineer at Sberbank. Work experience - more than 5 years' },
                    { imgSrc: '/python/6', fullName: 'Alexei Nekrasov', text: 'Leader of the Python direction at MTS, Program Director of the Python direction. Work experience - more than 6 years' }
                ],
                cv: {
                    salary: 'From 96.000 USD',
                    skills: [
                        'I create applications of any complexity in Python: from scripts to web applications', 'Automate Application Deployment with Docker',
                        'Connect third party libraries', 'I develop multi-threaded applications', 'I test the code: manually and automatically',
                        'Know and apply application design patterns', 'I work with databases and APIs of third-party services',
                        'I create web applications with Django and Flask', 'I set up automatic deployment and integration of applications - CI / CD'
                    ],
                    projects: ['1. Telegram bot for hotel search', '2. Online store', '3. Social network'],
                    tools: ['Python', 'Django', 'HTML', 'CSS', 'SQL', 'Git']
                },
                questions: [
                    {
                        title: 'I have no programming experience. Is this course right for me?',
                        text: 'Of course - the course is designed for absolute beginners. But you will have to try - read additional literature, do not miss classes and do practical work on time. We will help you with the rest - curators will sort out practical tasks, assistants will answer questions about the process of passing, and the Career Center will take care of your employment.'
                    },
                    {
                        title: 'Why exactly Python? There are other programming languages',
                        text: `Python is great because it's easy to learn - it's like a normal language that people speak. No need to put semicolons and brackets, think about concepts that are difficult for a beginner, such as "garbage collection" or "type overflow". On the other hand, Python opens up great opportunities - you can create chat bots, analyze data, automate tasks and develop logic for websites on it.`
                    },
                    {
                        title: 'Do you need to know math?',
                        text: 'At the initial stages, advanced knowledge is not required from you - a school mathematics course is enough. However, do not be alarmed if you have to figure out topics that you forgot or did not go through - the curator will help you refresh your knowledge or give useful links.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 10 months, you need to practice 2 hours a day. But it is not at all necessary to follow a rigid schedule - you can study at any convenient time.'
                    },
                    {
                        title: 'Who will help me on the course?',
                        text: "Practical work is checked by a curator - a practicing Python developer. You can ask him a question in your personal account or contact the course's Telegram chat.Participants of streaming training communicate with the group curator in Discord, discuss difficult tasks with a personal partner - buddy. The team leader at the weekly team meeting makes a list of topics for analysis at the final webinar with the curator."
                    },
                    {
                       title: 'How is the internship on the course?',
                       texts: [
                           'As soon as you complete the courses "Fundamentals of Python", "Django" and complete all the practical work, you will have access to the final project. Leave a request, and we will gather teams and appoint a team leader.',
                           'Together with a team leader and a team of 3-5 people, you will start developing a marketplace. You will work on the Scrum or Kanban system, use Git, call regularly and discuss current tasks. Prepare to work in a real company and create a powerful portfolio project'
                       ]
                    },
                    {
                        title: 'What to do after employment?',
                        text: 'A good developer never stops learning. In our school, you can find a job already during the training - but this is not a reason to quit the course. On the contrary, combining the course and real work will help you grow to the Middle level faster.'
                    },
                    {
                        title: 'Are there any special computer requirements?',
                        text: 'Python does not require powerful hardware and large resources. Any computer running Windows 7 or 10, Linux Ubuntu or macOS 10.11 or higher will do. To install the PyCharm development environment, you will need at least 4Gb of RAM, 5 Gb of free hard disk space and one of the latest versions of a 64-bit operating system.'
                    },
                    {
                        title: 'Explaining terms used on this site',
                        terms: [
                            {
                                title: 'Scrum',
                                text: 'a methodology in which a large task is broken down into small steps. The teams develop different features of the application in parallel, work on tight deadlines, and call regularly to discuss progress.'
                            },
                            {
                                title: 'Kanban',
                                text: 'a methodology that allows you to visualize product development in the form of a "board". With the help of Kanban boards, it is convenient to track progress on tasks and quickly solve problems.'
                            },
                            {
                                title: 'IDE (development environment)',
                                text: 'a special program in which you will write code. Unlike a regular text editor, there are many useful features available. For example, highlighting errors in the code, a console for test output of the program result, and even tooltips that will help you remember the name of the function.'
                            },
                            {
                                title: 'Library',
                                text: 'it is code from other developers that you can "refer to" in your program to make your job easier. For example, Python has a library for complex mathematical calculations - NumPy. Thanks to it, developers do not need to describe the formulas in the code themselves - just call the desired function.'
                            },
                            {
                                title: 'Multithreaded Applications',
                                text: 'these are programs in which several tasks can be executed in parallel. Such tasks are called threads. An example of a multi-threaded application is the operating system. You can simultaneously scroll through the site and, for example, chat in the messenger. In this case, the system will work without glitches.'
                            },
                            {
                                title: 'Application Design Patterns',
                                text: 'these are the rules by which you need to write and format the code so that it is easier for the team to work with it.'
                            },
                            {
                                title: 'Deploy',
                                text: 'is the process of uploading the application to the server. You can’t just take the code and place it on the server - you need to install all the dependencies, set up work with databases and do a lot of other routine. Due to the fact that the deployment takes a lot of time, this process is automated.'
                            }
                        ]
                    }
                ]
            }
        },
        fullstackPython:  {
            preview: {
                profession: 'Fullstack Python developer',
                time: '10 months',
                path: 'fullstack-python'
            },
            course: {
                header: {
                    text: 'You will be able to actively participate in all stages of the development of sites and web models - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more',
                    features: [ commonItems.header.getJobInSixMonths, { title: 'Help', text: 'in animation' }, commonItems.header.fourProjectsInPortfolio ]
                },
                market: {
                    title: commonItems.market.fullstackText,
                    list: [commonItems.market.listItems.thirdPlace, { title: '90 000 dollars', text: 'skilled worker salary' }]
                },
                for_who: [
                    {
                        subtitle: 'Beginners in programming',
                        text: 'You will master a sought-after profession from scratch, learn how to program in Python and JavaScript, create websites and work with databases. You will be able to write the backend and frontend part yourself'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'If you already have basic knowledge of frontend or backend, then the training will help you master the full cycle of product development. You will become a universal specialist and increase your income'
                    },
                    {
                        subtitle: 'Experienced programmers',
                        text: 'You will increase your chances of getting a high-paying job, get advice from experienced teachers and learn how to develop as a fullstack programmer and work on complex and expensive projects'
                    }
                ],
                skills: [
                    { text: 'Build websites in HTML and CSS' },
                    { text: 'Work with databases' },
                    { text: 'Work with API' },
                    { text: 'Programming in Python' },
                    { text: 'Build modern web applications' },
                    { text: 'Use the Git version control system' },
                    { text: 'Create interactive websites with JavaScript' },
                    { text: 'Apply the principles of OOP in practice' },
                    { text: 'Understand modern web frameworks for frontend and backend development' }
                ],
                program: {
                    title: {
                        text: 'You are waiting for 4 main blocks and 119 additional courses with video materials and practical tasks',
                        counts: [{ number: '100+', text: 'thematic modules' }, { number: '500+', text: 'video footage' }]
                    },
                    programItems: [
                        { ...commonItems.program.webLayout, number: 1 }, { ...commonItems.program.jsBasic, number: 2 },
                        { ...commonItems.program.pythonBasic_1, number: 3 }, { ...commonItems.program.pythonBasic_2, number: 4 },
                        { ...commonItems.program.pythonAdvanced, number: 5 }, { ...commonItems.program.frameworks, number: 6 },
                        { ...commonItems.program.employment, number: 7 }, { ...commonItems.program.additionalCourses, number: 8 }
                    ]
                },
                projects: [
                    { title: 'Landing', text: 'You create a landing page based on the brief to consolidate the knowledge gained in the course' },
                    { title: 'User interface', text: 'You will develop a user interface similar to Instagram' },
                    { title: 'Space game', text: 'You will write a behavior algorithm for space drones that collect fuel from asteroids' }
                ],
                teachers: [
                    { fullName: 'Vadim Shandrinov', text: 'Python developer with over 16 years of experience. Block "Python Basic"' },
                    { fullName: 'Anton Turin', text: 'Senior developer at Twitter' },
                    { fullName: 'Nikita Levashov', text: 'Co-founder and technical director at Angry Developers' },
                    commonItems.teachers.yakovushen,
                    commonItems.teachers.shulaev,
                    commonItems.teachers.krotov
                ],
                cv: {
                    salary: 'From 100.000 USD',
                    skills: [
                        'Development of turnkey online stores', 'Administration and deployment of pilot works', 'Creation of animation sites',
                        'Setting up CRM integration with external systems', 'Writing commented and formatted code', 'Ability to set and meet deadlines',
                        "Ability to understand other people's code", 'Writing queries against relational databases'
                    ],
                    projects: ['1. Landing', '2. User interface', '3. Space game'],
                    tools: ['HTML', 'CSS', 'JavaScript', 'Python', 'Angular', 'React', 'Vue 3.0', 'Git', 'Bash', 'SQL', 'Figma']
                },
                questions: commonItems.questions.default_questions
            }
        },
        web: {
            preview: {
                profession: 'Web developer',
                time: '9 months',
                path: 'web'
            },
            course: {
                header: {
                    text: 'A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend',
                    features: [
                        { title: '★ 4,5 out of 5', text: 'based on 55 143 course evaluations' },
                        commonItems.header.getJobInSixMonths,
                        { title: '10 projects', text: 'in portfolio on GitHub' },
                        commonItems.header.guarantees,
                        { title: 'Course fit', text: 'beginners without experience' }
                    ]
                },
                market: {
                    title: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
                    list: [
                        { title: '3 160 vacancies', text: 'web developers open for July 2022' },
                        { title: '65 000 dollars', text: 'beginner salary' },
                        { title: '6 months', text: 'intensive training on the platform is enough to get your first job' }
                    ]
                },
                for_who: [
                    {
                        subtitle: 'Beginners in web development',
                        text: 'Learn the basics of JavaScript and PHP programming from scratch. Learn how to design websites in HTML and CSS. Create your first portfolio projects'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'Level up with the most popular programming languages Learn Vue, ReactFramework or Angular frameworks and expand your coding skills'
                    },
                    {
                        subtitle: 'IT specialists',
                        text: 'Learn to program in JavaScript and PHP, you will create projects on the Laravel framework. You can change direction and become a popular web developer'
                    }
                ],
                skills: [
                    { title: 'Build websites in HTML and CSS', text: 'Which will adaptively adapt to the screen size and look equally cool on different devices: from small smartphones to TVs' },
                    { title: 'Program in JavaScript and PHP', text: 'Master two popular languages at once - using JavaScript you will create interactive models, and use PHP to program the server side of sites' },
                    { title: 'Work with JavaScript frameworks', text: 'With the help of frameworks, you will easily assemble web applications from individual components, as from the details of a designer. You will have 3 frameworks to choose from: ReactFramework, Vue or Angular' },
                    { title: 'Building the backend with Node.js and Laravel', text: 'You will connect databases, work with the file system, template engines, forms, and process search queries. Get familiar with microservice architecture and learn how to build resilient applications' },
                    { title: 'Work in a team', text: 'Take part in a team internship and create your own project - an online store. You organize the work as in a real company - you will have sprints, calls with a team leader, and you will control versions in Git' }
                ],
                program: {
                    title: {
                        text: 'Practice based on real cases is waiting for you. Training on the platform can be equated to a year of work',
                        counts: [{ number: '1100', text: 'video footage' }, { number: '131', text: 'practical work' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.webLayout,
                            number: 1
                        },
                        {
                            ...commonItems.program.jsBasic,
                            number: 2
                        },
                        {
                            title: 'Choice course. Vue 2 months',
                            subtitle: 'You will learn how to develop applications using the Vue JavaScript framework',
                            listItems: [
                                'Vue basics', 'Project creation', 'Catalog', 'Pagination and filtering', 'Product page', 'Basket', 'Working with API. List of goods', 'Working with API. Making an order',
                                'Deploy', 'Vue 3.0', 'Final project: write an online store using the Vue.js framework. to choose from, it will be either a Moire premium lingerie store or a Technosavr electronics store'
                            ],
                            number: 3
                        },
                        {
                            title: 'Choice course. React 2.5 months',
                            subtitle: 'You will learn the popular React framework. Learn to Use Redux to Manage Data',
                            listItems: [
                                'Introduction to React', 'Project creation', 'TypeScript', 'Components on the example of a Reddit news card', 'Hooks and functional programming',
                                'More about components and an introduction to component testing', 'Introduction to component testing', 'Working with a public API on the example of Reddit',
                                'API + Context', 'Portal and form', 'An introduction to Redux using the comment field as an example', 'Using Redux-Thunk on an example of loading a user profile',
                                'Forms on the example of comments and post cards', 'Endless lists on the example of a feed of posts', 'Routing', 'Deploy', 'Bonus module: Mobx, effector and other redux alternatives',
                                'Final project: develop a task tracker with a Pomodoro timer'
                            ],
                            number: 4
                        },
                        {
                            title: 'Choice course. Angular 1.5 months',
                            subtitle: 'You will learn how to build web applications using the popular Angular framework. Learn best practices and advanced application development approaches',
                            listItems: [
                                'Introduction to Angular', 'Creation of UI Kit', 'Catalog', 'Routing', 'Service architecture in Angular', 'HTTP Advanced', 'RXJS: product search',
                                'Forms in Angular', 'Product page', 'Application improvement', 'RXJS & Components Advanced: Shopping Cart', 'Testing', 'Ways to organize data exchange',
                                'Final project: develop a task tracker with a timer using the Pomodoro method'
                            ],
                            number: 5
                        },
                        {
                            title: '✦ Job placement with our Career Center',
                            number: 6
                        },
                        {
                            title: 'PHP developer. Baseline 2.5 months',
                            subtitle: 'You will learn how to write working, clean code in PHP, you will be able to work with functions, classes, databases. Learn how to build simple applications with the Laravel framework',
                            listItems: [
                                'Introduction to PHP programming', 'Variables, numbers and boolean', 'Conditional operators and Boolean algebra', 'Strings and arrays', 'Cycles',
                                'Functions: creation and use', 'Recursion, callback and anonymous functions', 'Classes, methods and objects', 'Inheritance and abstract classes',
                                'Interfaces and polymorphism', 'Access modifiers, getters and setters', 'HTML/CSS', 'Connecting frontend to backend', 'Separation of the application into files',
                                'Working with files and network', 'Error handling, Exceptions and logs', 'Handling GET and POST requests, Header, Cookie and Session', 'REST and RESTful APIs',
                                'SQL query language', 'Working with databases in PHP', 'Laravel framework', 'Dropbox file storage. Write application components from scratch in pure PHP - without using frameworks'
                            ],
                            number: 7
                        },
                        {
                            title: '8 additional courses: PRO Parts, Laravel, Symfony, Careers, Project Presentation, Node.js and SQL',
                            subtitle: 'Auxiliary courses to help expand skills. You can go through them in parallel or watch materials as needed',
                            listItems: [
                                'Web layout. Advanced level. You will learn how to optimize your work, work with CSS using preprocessors, and learn CSS Grid',
                                'JavaScript. Advanced level. You will learn how to work with object-oriented programming in JavaScript, include third-party modules, handle errors, and test code',
                                'Laravel PHP framework. You will learn how to build web applications using one of the most popular PHP frameworks. You will be able to work with databases, create authorization systems, forms, test Laravel applications',
                                'Symfony PHP framework. You will master one of the most popular web development frameworks and learn how to build applications using the main components of Symfony',
                                'Developer career: employment and development. You will learn how to choose the right vacancy, prepare for an interview and negotiate with an employer. You can quickly get a position that matches your expectations and skills',
                                'Node.js You will learn how to create web server applications and CLI utilities. Gain experience with HTTP, REST API, HTML templates, npm, PostgreSQL and MongoDB databases. You can independently deploy a project on Node.js and write a personal note service',
                                'SQL query language. You will learn how to write SQL queries so that your programs can "talk" to databases'
                            ],
                            number: 8
                        },
                        {
                            title: '8 Bonus Courses: Figma, Web Design, Git, General Knowledge, Agile, Bash, Algorithms',
                            subtitle: 'In these courses, you will gain versatile skills that will help you feel more confident in the profession',
                            listItems: [
                                'Figma from zero to PRO. You will get acquainted with a graphic editor in which you will be sent layouts for layout. Learn to extract colors, fonts, styles and even try yourself as a web designer',
                                'Web design from scratch to PRO. Immerse yourself in the web design profession. Learn how to work on a project from the first meeting with the client to the finished website',
                                'Working on the Bash command line. You automate your work, learn how to manage files and folders without using a graphical interface',
                                'Git version control system. You will learn how to version control your projects in Git. This skill will help you work collaboratively in a team',
                                'General knowledge of the programmer. You will gain useful skills that will be useful to you in your new job',
                                'Algorithms and data structures for developers. You will learn how to evaluate the complexity of algorithms, write more efficient and productive code. Understand how to solve real problems using algorithms',
                                'Agile: Scrum and Kanban in product development. You will learn how to work in a development team on the main methodologies for maintaining digital products'
                            ],
                            number: 9
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Landing',
                        text: 'You make up a landing page for the Blanchard art gallery according to the layout from the customer'
                    },
                    {
                        title: 'Pages for an online store',
                        text: 'You make up several pages for an online furniture store according to the terms of reference from the customer'
                    },
                    {
                        title: 'Customer contact management system',
                        text: 'You will develop a complete CRM system. Through your application, employees will be able to track the lists of transactions, clients, and follow the document flow. You will go through all stages of commercial software development in a company and be ready for teamwork'
                    },
                    {
                        title: 'Online store',
                        text: 'You will develop a front-end for a product aggregator using Vue or Angular'
                    },
                    {
                        title: 'Pomodoro task tracker',
                        text: 'Write a task tracker with a timer in the ReactFramework framework'
                    },
                    {
                        title: 'Note service',
                        text: 'Develop a note service with the ability to autosave, delete, upload to PDF, search by notes and infinite scroll. Deploy the result to the server'
                    }
                ],
                teachers: [
                    commonItems.teachers.kornienko,
                    commonItems.teachers.vasyanovich,
                    commonItems.teachers.tiunov,
                    commonItems.teachers.avdeev,
                    commonItems.teachers.molescu,
                    commonItems.teachers.pozdnyakov,
                    commonItems.teachers.bondarovich,
                    commonItems.teachers.savchenko,
                    commonItems.teachers.mirotin,
                    commonItems.teachers.ignatiev,
                    commonItems.teachers.pilipenko,
                    {
                        imgSrc: 'web/5',
                        fullName: 'Andrey Grekov',
                        text: 'Google Developer Expert. More than 12 years in IT',
                        additionalInfo: ['TypeScript course speaker. Lead Angular & .NET Developer. Angular Technical Writer at Depth and Angular Fox. 2010–2011 Software developer at Rusoft. 2012–2015 Developed software for an online broker at AMarkets (AForex). Since 2016 — Leading Frontender at IndigoSoft LTD. Since 2020 — Google Developer Expert. Speaker at major conferences such as FrontendConf']
                    }
                ],
                cv: {
                    salary: 'From 80.000 USD',
                    skills: [
                        'Cross-browser, adaptive layout on HTML, CSS', 'Working with front-end frameworks React, Vue, Angular', 'JavaScript programming, TypeScript knowledge',
                        'Working with databases', 'PHP and JavaScript programming', 'Applying the principles of OOP in practice', 'Developing Laravel Applications',
                        'Working with external APIs', 'Application Testing', 'Teamwork', 'Knowledge of algorithms and data structures', 'Building a high load backend'
                    ],
                    projects: [
                        '1. Art gallery landing page / podcast platform', '2. CRM system', '3. Online store / task tracker', '4. Cloud file storage', '5. Frontend part of the online store',
                        '6. Frontend part of the banking service'
                    ],
                    tools: ['HTML', 'CSS', 'JavaScript', 'Bash', 'Git', 'SQL', 'Angular', 'React', 'Vue 3.0', 'Laravel', 'Symfony', 'Node.js', 'Figma']
                },
                questions: [
                    {
                        title: 'I have no experience in web development. Is this course right for me?',
                        text: 'Yes, the course is suitable for absolute beginners with no programming experience. But in order to achieve a result, you need to try - to complete practical tasks, read additional literature and develop final projects. The rest will be assisted by practicing experts who will accompany you throughout the course.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'On average, platform users study for about 2 hours a day and complete the course in 9 months. But we don’t have hard deadlines — learn on the platform at your own pace.'
                    },
                    commonItems.questions.system_requirements,
                    commonItems.questions.soft,
                    commonItems.questions.english,
                    commonItems.questions.remote,
                    {
                        title: 'I see a lot of unfamiliar terms: CSS, PHP, framework? What does all of this mean?',
                        terms: [
                            commonItems.questions.html,
                            commonItems.questions.css,
                            commonItems.questions.css_grid,
                            commonItems.questions.js,
                            commonItems.questions.framework,
                            {
                                title: 'PHP',
                                text: 'a programming language that I use, first of all, to write the server part of the site: everything that “lies under the hood”, away from the user’s eyes. For example, in PHP, you can create an authorization system, user file storage, and so on.'
                            },
                            commonItems.questions.api,
                            commonItems.questions.ui,
                            commonItems.questions.figma,
                            commonItems.questions.frontend,
                            commonItems.questions.backend
                        ]
                    },
                    {
                        title: 'What kind of projects can I create?',
                        listItems: [
                            'Sites with the ability to buy and pay for a product or service, sign up for an event. For example, online stores, barbershop websites, food ordering services.',
                            'Streaming services with music, podcasts, movies and series.',
                            'Platforms for processing company customer data, documents, invoices - for example, large CRM systems for banks.'
                        ]
                    },
                    {
                        title: 'What do you need to know to start taking the first orders or get a job?',
                        text: `A web developer's career always starts with layout. To master the necessary skills, you need to take three courses within the profession: “Web layout. Basic level”, “JavaScript. Basic level" and master one of the technologies to choose from: Vue, React or Angular.`
                    },
                    {
                        title: 'How to develop further in the profession?',
                        text: 'In web development, everything is changing rapidly: technologies, frameworks appear, new features are brought into JavaScript and CSS. Therefore, it is impossible to learn something once and always remain in demand. You need to constantly develop in the profession - communicate with team leaders in your company, attend conferences, read articles on Habré on your topic and other resources.'
                    },
                    commonItems.questions.help,
                    commonItems.questions.freelance
                ]
            }
        },
        fullstackPHP: {
            preview: {
                profession: 'Fullstack PHP developer',
                time: '10 months',
                path: 'fullstack-php'
            },
            course: {
                header: {
                    text: 'You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development',
                    features: [{ title: '10+ courses', text: 'included' }, commonItems.header.getJobInSixMonths, commonItems.header.fourProjectsInPortfolio]
                },
                market: {
                    title: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
                    list: [commonItems.market.listItems.thirdPlace, { title: '75 000 dollars', text: 'skilled programmer salary' }]
                },
                for_who: [
                    {
                        subtitle: 'For those new to web development',
                        text: 'Learn the basic principles of programming and overcome the first difficulties with a personal mentor'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'Master backend, frontend and other stacks. Learn PHP and learn how to work with application programming interface'
                    },
                    {
                        subtitle: 'IT specialists',
                        text: 'You will be able to create projects in JavaScript and its frameworks, program in PHP and make up. Learn to work in a team and be a versatile developer'
                    }
                ],
                skills: [
                    { text: 'Build quality and fast websites' },
                    { text: 'Apply the principles of OOP in practice' },
                    { text: 'Work in the Git version control system' },
                    { text: 'Responsive layout for mobile devices' },
                    { text: 'Develop pages and site modules in PHP' },
                    { text: 'Create admin panels with Bootstrap and Laravel' },
                    { text: 'Create interactive websites with JavaScript' },
                    { text: 'Work with technical documentation' }
                ],
                program: {
                    title: {
                        text: '3 basic courses are waiting for you: on web layout, JavaScript basics and one of its frameworks - ReactFramework, Vue or Angular.To master backend development, you will learn PHP. And then take 11 additional courses on algorithms, Git, technical EnglishBig and more',
                        counts: [{ number: '100+', text: 'thematic modules' }, { number: '500', text: 'video footage' }]
                    },
                    programItems: [
                        { ...commonItems.program.webLayout, number: 1 }, { ...commonItems.program.jsBasic, number: 2 },
                        { ...commonItems.program.php, number: 3 }, { ...commonItems.program.laravel, number: 4 },
                        { ...commonItems.program.frameworks, number: 5 }, { ...commonItems.program.additionalCourses, number: 6 }
                    ]
                },
                projects: [
                    { title: 'One page website', text: 'You will create an adaptive one-page website on the subject given by the teacher' },
                    { title: 'Online store', text: 'You are designing web pages for an online furniture store' }
                ],
                teachers: [
                    { fullName: 'Vasiliy Grudistov', text: 'Chief executive officer in InstaDev' },
                    { fullName: 'Michael Volkov', text: 'Technical director Qsoft' },
                    commonItems.teachers.pilipenko,
                    commonItems.teachers.yakovushen
                ],
                cv: {
                    salary: 'From 75.000 USD',
                    skills: [
                        'Development of turnkey online stores', 'Writing commented and formatted code', 'Writing queries against relational databases',
                        'Setting up CRM integration with external systems', 'Ability to set and meet deadlines', 'Creation of animation sites',
                        "Ability to understand other people's code", 'Administration and deployment of pilot works'
                    ],
                    projects: ['1. One page website', '2. Online store'],
                    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Angular', 'React', 'Vue 3.0', 'Git', 'Bash', 'SQL', 'Figma']
                },
                questions: commonItems.questions.default_questions
            }
        },
        frontend: {
            preview: {
                profession: 'Frontend developer',
                time: '7 months',
                path: 'frontend'
            },
            course: {
                header: frontend.header,
                market: frontend.market,
                for_who: [
                    {
                        subtitle: 'For absolute beginners',
                        text: 'You will go from a person far from IT to a confident web developer with teamwork skills. You can start a career in a promising IT studio'
                    },
                    {
                        subtitle: 'Beginning programmers',
                        text: 'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession'
                    }
                ],
                skills: frontend.skills,
                program: {
                    title: {
                        text: 'Master the profession and become a Junior specialist. Practice based on real cases awaits you. Training on the platform can be equated to a year of work. The training period is 8 months',
                        counts: [{ number: '609', text: 'video footage' }, { number: '49', text: 'practical work' }]
                    },
                    programItems: frontend.programs
                },
                teachers: frontend.teachers,
                cv: {
                    salary: 'From 80.000 USD',
                    skills: frontend.cv.skills,
                    projects: [
                        '1. Art gallery/podcast platform landing page', '2. CRM system', '3. Issue tracker', '4. Note service on Node.js',
                        '5. Construction company website', '6. Tour operator website', '7. Online store of electronic equipment/premium lingerie', '8. Frontend part of a streaming service in TypeScript'
                    ],
                    tools: frontend.cv.tools
                },
                questions: frontend.questions,
            }
        },
        frontendPro: {
            preview: {
                profession: 'Frontend developer PRO',
                time: '10 months',
                path: 'frontend-pro'
            },
            course: {
                header: frontend.header,
                market: frontend.market,
                for_who: [
                    {
                        subtitle: 'For beginners',
                        text: "You don't need to be good at math or have programming experience. Step by step you will learn how to develop websites. You will start with simple landing pages, and by the end of the training you will know frameworks, create complex enterprise services and work in a team"
                    },
                    {
                        subtitle: 'Beginning programmers',
                        text: 'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession'
                    },
                    {
                        subtitle: 'Freelancers with no experience in IT',
                        text: 'Turn programming from a hobby into a profitable profession. Master advanced layout skills, learn JavaScript and frameworks in depth. Close gaps in knowledge and be able to apply for the position of a middle-developer in a large company'
                    }
                ],
                skills: frontend.skills,
                program: {
                    title: {
                        text: 'Master the profession, become a Junior specialist or develop to the Middle level through online consultations with an expert. Practice based on real cases awaits you. Training on the platform can be equated to a year of work. The training period is 10 months',
                        counts: [{ number: '721', text: 'video footage' }, { number: '67', text: 'practical work' }]
                    },
                    programItems: frontend.programs
                },
                teachers: frontend.teachers,
                cv: {
                    salary: 'From 90.000 USD',
                    skills: frontend.cv.skills,
                    projects: [
                        '1. Art gallery/podcast platform landing page', '2. Online furniture store', '3. CRM system', '4. Frontend part of the banking service',
                        '5. Issue tracker', '6. Note service on Node.js', '7. Construction company website', '8. Tour operator website',
                        '9. Online store of electronic equipment/premium lingerie', '10. Frontend part of a streaming service in TypeScript'
                    ],
                    tools: frontend.cv.tools
                },
                questions: frontend.questions,
            }
        },
        fullstackJs: {
            preview: {
                profession: 'Fullstack JavaScript developer',
                time: '10 months',
                path: 'fullstack-js'
            },
            course: {
                header: {
                    text: 'You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, ReactFramework or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more',
                    features: [
                        { title: 'Program', text: 'from 12 courses' },
                        commonItems.header.getJobInSixMonths,
                        commonItems.header.fourProjectsInPortfolio,
                        commonItems.header.guarantees
                    ]
                },
                market: {
                    title: 'There are not enough experts in the market',
                    list: [{ title: '6 000 companies', text: 'currently looking for JavaScript developers' }, { title: '80 000 dollars', text: 'skilled worker salary' }]
                },
                for_who: [
                    {
                        subtitle: 'Those who want to start a career as a programmer',
                        text: 'You will learn how to make up, code in JavaScript and develop full-fledged websites from scratch. Master the full cycle of creating web projects and be able to get a job in an IT company'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'You will get acquainted with Node.js and frameworks and deepen your knowledge. You can move to the position of a fullstack developer in a web studio or create turnkey websites on freelance'
                    },
                    {
                        subtitle: 'Experienced professionals',
                        text: 'You will learn Vue.js, ReactFramework.js or Angular and be able to create complex interactive models. Get soft skills for professional development and understand where to go next'
                    }
                ],
                skills: [
                    { title: 'Make up websites', text: "Get familiar with HTML and CSS, be able to create landing pages and multi-page responsive websites. Learn to find errors in someone else's layout and fix already finished code" },
                    { title: 'Work with frameworks', text: 'Learn ReactFramework.js, Vue.js or Angular and learn how to create dynamic interactive user models' },
                    { title: 'Develop backend sites', text: 'You will learn the principles of object-oriented programming and will be able to develop sites with different functionality in JavaScript using Node.JS' },
                    { title: 'Work with databases', text: 'Learn the difference between MySQL, Redis and MongoDB. Learn to manage large amounts of data and get what you want with queries' },
                    { title: 'Use Git', text: 'Learn how to work with a distributed version control system, be able to easily make or roll back changes and work on a project in a large team' },
                    { title: 'Work with the network', text: 'You will understand how client-server interaction works, learn how to work with the API and be able to set up frontend and backend communication within one project' }
                ],
                program: {
                    title: {
                        text: 'Online lectures and practical tasks based on real cases are waiting for you',
                        counts: [{ number: '100+', text: 'thematic modules' }, { number: '500+', text: 'online lessons' }]
                    },
                    programItems: [
                        { ...commonItems.program.webLayout, number: 1 }, { ...commonItems.program.jsBasic, number: 2 },
                        { ...commonItems.program.nodejs, number: 3 }, { ...commonItems.program.frameworks, number: 4 },
                        { ...commonItems.program.additionalCourses, number: 5 }
                    ]
                },
                projects: [
                    { title: 'Landing', text: 'Build a landing page based on a brief from a customer using HTML and CSS' },
                    { title: 'User interface', text: 'Develop a web application using JavaScript' },
                    { title: 'Note service', text: 'Develop the frontend and backend for a personal note service using Node.js' },
                    { title: 'Online store', text: 'Create a full-fledged online store using the Vue.js framework' },
                    { title: 'Integration with Reddit', text: 'Set up the integration of posts from the Reddit news site using the ReactFramework.js framework' },
                    { title: 'Online store', text: 'Develop a full-fledged online store on the Angular framework' }
                ],
                teachers: [
                    commonItems.teachers.bondarovich, commonItems.teachers.savchenko, commonItems.teachers.kuznetsov, commonItems.teachers.kornienko,
                    commonItems.teachers.vasyanovich, commonItems.teachers.yakovushen, commonItems.teachers.mirotin, commonItems.teachers.klimonova
                ],
                cv: {
                    salary: 'From 95.000 USD',
                    skills: [
                        'Layout of sites on HTML and CSS', 'Backend development with Node.js', 'Creating web applications on the React.js/Vue.js/Angular framework',
                        'Working with HTTP/HTTPS protocols', 'Working with Web API', 'Working with the Git version control system', 'Redux basics', 'Adaptive layout',
                        'Web development with JavaScript', 'Working with databases: MySQL, MongoDB, Redis'
                    ],
                    projects: ['1. Landing', '2. User interface', '3. Note service', '4. Online store', '5. Integration with Reddit'],
                    tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Angular', 'React', 'Vue 3.0', 'Git', 'Bash', 'SQL', 'Figma']
                },
                questions: commonItems.questions.default_questions
            }
        },
        phpPro: {
            preview: {
                profession: 'PHP developer PRO',
                time: '7 months',
                path: 'php-pro'
            },
            course: {
                header: {
                    text: 'You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position',
                    features: [
                        { title: '6 courses', text: 'for professional immersion' },
                        { title: 'Internship', text: 'in a team led by a team leader' },
                        commonItems.header.threeProjectsInPortfolio,
                        commonItems.header.guarantees,
                        commonItems.header.durationSevenMonths
                    ]
                },
                market: {
                    title: 'PHP is one of the ten most popular programming languages in the TIOBE ranking. Most CMS are written on it, including WordPress, which powers 65% of all sites in the world. PHP under the hood of Wikipedia, Facebook and YouTube. Developers have been developing the language for over 25 years and introducing new features with each version. To keep old projects running and write web applications from scratch, companies hire PHP programmers',
                    list: [{ title: '2 837 companies', text: 'currently looking for PHP developers' }, { title: '80 000 dollars', text: 'average PHP developer salary' }]
                },
                for_who: [
                    {
                        subtitle: 'For those who want to learn how to program',
                        text: 'Learn the PHP programming language from scratch, get help and advice from experienced speakers, and practice on real problems. Write the first projects for the portfolio and work in a team'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'You structure your existing knowledge, and curators will help you deal with difficult-to-understand topics and recommend additional literature. Learn how to effectively solve everyday tasks for a PHP programmer'
                    }
                ],
                skills: [
                    { title: 'Programming in PHP', text: 'You will go through the basics, without which it is impossible to grow into a cool PHP developer: learn how to work with variables, data types, conditions, loops, functions. Learn about recursion and scope' },
                    { title: 'Understand the principles of OOP', text: 'Learn how to organize code into classes, control access to properties, and encapsulate methods. Make your applications more predictable and secure, and your code more readable' },
                    { title: 'Work with the file system', text: 'Learn how to open files for reading or writing on the local system and over the Internet. Get familiar with XML, JSON formats' },
                    { title: 'Find errors in code', text: 'Familiarize yourself with the Xdebug debugging tool, you can find and fix errors in the application' },
                    { title: 'Work with databases', text: 'Learn how to connect MySQL to a project. Learn how to write queries in SQL, get, add, delete and change information in the database' },
                    { title: 'Develop on Laravel', text: 'Get acquainted with the principles of the framework, routing, set up interaction with the database, connect the Blade templating engine. Learn to write and test complex business logic' }
                ],
                program: {
                    title: {
                        text: 'Webinars and practice based on real cases are waiting for you',
                        counts: [{ number: '39', text: 'modules' }, { number: '206', text: 'video footage' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.php,
                            number: 1
                        },
                        {
                            ...commonItems.program.laravel,
                            number: 2
                        },
                        {
                            ...commonItems.program.bash,
                            number: 3
                        },
                        {
                            ...commonItems.program.git,
                            number: 4
                        },
                        {
                            ...commonItems.program.sql,
                            number: 5
                        },
                        {
                            ...commonItems.program.knowledge,
                            number: 6
                        },
                        {
                            title: 'Cloud storage',
                            text: 'Users will register on the service, upload files and create folders, search through documents, and share files with other participants',
                            number: 7
                        },
                        {
                            title: 'Booking.com analogue',
                            text: 'Service for booking rooms in hotels. Through their personal account, customers will set prices for room categories, and visitors will order reservations for certain dates',
                            number: 8
                        },
                        {
                            title: 'Team project: online store',
                            text: 'Together with other course participants, you will write a product aggregator using the Laravel framework',
                            number: 9
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Evgeny Pletnev. Cloud storage',
                        text: 'A course participant developed an analogue of Dropbox. Users will be able to register on the service, upload files and create folders, search through documents and share files with other participants'
                    },
                    {
                        title: 'Mikhail Terentiev. Booking service for hotels',
                        text: 'The course participant developed a booking service similar to Booking.com. Through a personal account, customers can set prices for room categories, and visitors can book rooms for certain dates.'
                    },
                    {
                        title: 'The third stream of course participants. Product aggregator on the Laravel framework',
                        text: 'A team of four members created an online store, an analogue of Yandex.Market. The project was developed using the latest version of Laravel. We used a flexible service-repository approach'
                    },
                ],
                teachers: [commonItems.teachers.ignatiev, commonItems.teachers.molescu],
                cv: {
                    salary: 'From 90.000 USD',
                    skills: [
                        'Install and configure Denwer, OpenServer', 'Understand and apply OOP in projects', 'Structure the code into files and folders',
                        'I understand the principles of network operation, GET- and POST-requests', 'Working on the command line', 'Working with MySQL databases'
                    ],
                    projects: ['1. Cloud storage', '2. Booking service for hotels', '3. Product aggregator on the Laravel framework'],
                    tools: ['PHP', 'Laravel', 'Bash', 'Git', 'SQL']
                },
                questions: [
                    {
                        title: 'I have no programming experience. Will this course help me?',
                        text: 'Certainly! The course is designed for beginners, and the PHP programming language can be mastered without special technical training. The main thing - do not forget to read additional literature and consolidate knowledge on practical tasks at the end of the module.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'On average, platform users study for about 2 hours a day and complete the course in 7 months. But we don’t have hard deadlines — learn on the platform at your own pace.'
                    },
                    {
                        title: 'Will I be able to communicate with teachers?',
                        text: 'You will have a curator in the Telegram chat, and a checking teacher will comment on homework and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts.'
                    },
                    commonItems.questions.schedule,
                    commonItems.questions.help
                ]
            }
        },
        cPlusPlus: {
            preview: {
                profession: 'C++ developer',
                time: '7 months',
                path: 'c-plus-plus'
            },
            course: {
                header: {
                    text: 'C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language. You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills',
                    features: [
                        { title: '★ 4,6 out of 5', text: 'based on 9 746 course evaluations' },
                        commonItems.header.durationSevenMonths,
                        { title: '2 projects', text: 'in portfolio' },
                        { title: 'Support', text: 'curator' },
                        commonItems.header.guarantees
                    ]
                },
                market: {
                    title: 'C++ developers work in large IT companies, game development, web development, create corporate and banking applications, design operating systems and software for robots',
                    list: [{ title: '4 018 companies', text: 'currently looking for C++ developers' }, { title: '100 000 dollars', text: 'average C++ developer salary' }]
                },
                for_who: [
                    {
                        subtitle: 'For those who want to become a programmer',
                        text: 'Learn the basic principles of C++ programming. Write your first programs, build a portfolio and start a career in the direction you like'
                    },
                    {
                        subtitle: 'Developers in other languages',
                        text: 'Get familiar with C++ syntax and learn the in-demand language. Write a microservice, make a game for UE4 and be able to apply for the position of a middle developer in a game dev or IT company'
                    }
                ],
                skills: [
                    { title: 'Program in C++', text: 'Learn the syntax, loops, conditions, and features of the language. Learn how to turn lines of code into working programs' },
                    { title: 'Work with databases', text: 'Learn the SQL language and be able to quickly get information using database queries' },
                    { title: 'Use Git', text: 'Learn how to work with a distributed version control system and be able to make changes to the project together with the team' },
                    { title: 'Understand the principles of OOP', text: 'Get familiar with the object-oriented programming paradigm and learn how to work with objects and classes' },
                    { title: 'Develop microservices', text: 'You will learn how to create algorithms and will be able to develop complex programs from different independent components' },
                    { title: 'Create games for UE4', text: 'Learn how to use the C++ toolkit for game development. You will be able to create simple arkanoids and shooters for the Unreal Engine' }
                ],
                program: {
                    title: {
                        text: 'Webinars and practical tasks are waiting for you. You will learn how to program in C ++, work with databases, Git version control system and develop games on the Unreal Engine 4. Practice developing services and add projects to your portfolio',
                        counts: [{ number: '95', text: 'thematic modules' }, { number: '450', text: 'video footage' }]
                    },
                    programItems: [
                        {
                            title: 'C++',
                            listItems: [
                                'Introductory module. First program', 'Integer variables. Data and calculations', 'User data entry. Strings', 'The if condition construct',
                                'Logical operators and complex conditions', 'Introduction to loops: while, do while', 'For loops and algorithms on loops', 'Floating point numbers. Mathematical calculations',
                                'Strings and text data. Basic algorithms with strings', 'Installing and configuring the IDE', 'Functions in programming', 'Arrays', 'Introduction to std::vector v2',
                                'Two-dimensional arrays', 'Algorithms on arrays', 'Data types', 'Pointers', 'Extended work with functions', 'Reading from files', 'Write to files', 'Data structures',
                                'std::map dictionaries', 'Macros and preprocessor', 'Working with dates', 'Project structure', 'Introduction to OOP. Part 1', 'Introduction to OOP. Part 2', 'Introduction to multithreading'
                            ],
                            number: 1
                        },
                        {
                            ...commonItems.program.git,
                            number: 2
                        },
                        {
                            ...commonItems.program.sql,
                            number: 3
                        },
                        {
                            ...commonItems.program.knowledge,
                            number: 4
                        },
                        {
                            title: 'Advanced C++ and creating GUIs',
                            listItems: [
                                'OOP paradigms', 'HTTP requests over the network', 'Additional class features and smart pointers', 'JSON serialization and deserialization',
                                'Extended features of C++', 'Introduction to Qt development', 'New features of C++', 'Qt Widgets', 'Qt Designer and QML', 'Advanced Qt',
                                'Additional features of Qt', 'Industrial development practices'
                            ],
                            number: 5
                        },
                        {
                            title: 'Create an environment',
                            listItems: [
                                'Asset types', 'Import of various types of assets, naming rules, project structure', 'Static models (Static Mesh)', 'Models with skeletal animation (Skeletal Mesh)',
                                'Animation of models using Animation Blueprint, State Machine, Blending tools', 'Creating landscapes with Landscape'
                            ],
                            number: 6
                        },
                        {
                            title: 'Understanding the main classes and methods',
                            listItems: [
                                'Event system', 'Pawn base class', 'The mechanism of procedural destruction (Destructable Mesh)', 'Interaction between Actor', 'Controller (Controller)',
                                'Navigation data (Navmesh) and navigation', 'Getting control of the Pawn class (Possess), creating new Actors (Spawn)', 'Function reference (Delegates)'
                            ],
                            number: 7
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Search engine',
                        text: "You will develop a search engine for the company's corporate portal - an analogue of the Yandex or Google search string. Learn to get data from web pages and build search indexes. Write a relevancy formula to return search results"
                    },
                    {
                        title: 'Browser',
                        text: 'Work with other course participants to create an app that your friends and family can use. Write a full-fledged browser in C ++: with its help, you can search for information, browse the web and surf social networks - like in Google Chrome or Yandex Browser'
                    }
                ],
                teachers: [
                    {
                        fullName: 'Vladislav Turbanov',
                        text: 'C++ developer',
                        additionalInfo: ['10+ years of experience in creating games, websites and mobile applications. Worked at Gaijin Entertainment and Mail.ru game studios. Now he creates graphics for the Night is Coming project']
                    },
                    {
                        fullName: 'Alexander Shvets',
                        text: 'Head of development service at Yandex.Market'
                    },
                    {
                        fullName: 'Denis Krakhmalev',
                        text: 'C++ developer',
                        additionalInfo: ['C++ teacher at the MIPT Programming Department']
                    }
                ],
                cv: {
                    salary: 'From 100.000 USD',
                    skills: [
                        'Application development in C++', 'Cross-platform development', 'Working with the STL Library', 'Debugging and Monitoring Applications',
                        'Working with SQL', 'Working with multithreading', 'Writing code for Unreal Engine 4 and Unreal Engine 5', 'Creating microservices',
                        'Working with git, gcc, gdb', 'Creating a REST API', 'Work with documents'
                    ],
                    projects: ['1. Search engine', '2. Browser'],
                    tools: ['C++', 'Git', 'SQL']
                },
                questions: [
                    {
                        title: 'I have never programmed in C++. Will I succeed?',
                        text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be helped by practicing experts who will accompany you throughout the course. The rest will be helped by experienced mentors who will supervise you throughout the course.'
                    },
                    {
                        title: 'What is the training schedule on the platform? Can you combine it with work?',
                        text: "You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. What's more, all videos will be available at the end of the course, so you can brush up on your knowledge at any time."
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'On average, platform users study for about 2 hours a day and complete the course in 7 months. But we don’t have hard deadlines — learn on the platform at your own pace.'
                    },
                    commonItems.questions.schedule,
                    commonItems.questions.help
                ]
            }
        },
        android: {
            preview: {
                profession: 'Android developer',
                time: '7 months',
                path: 'android'
            },
            course: {
                header: {
                    text: "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services. You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course",
                    features: [
                        commonItems.header.getJobInSevenMonths,
                        commonItems.header.forBeginners,
                        { title: 'Team internship', text: 'at the end of the course' },
                        commonItems.header.guarantees,
                        { title: 'Lots of practice', text: '43 practical work to develop skills' }
                    ]
                },
                market: {
                    title: '72% of mobile devices in the world run on Android. Therefore, millions of people will be able to use your applications. This is quite realistic, because you can distribute Android applications through several stores at the same time: Play Market, Samsung Store, App Gallery',
                    list: [
                        { title: '2 491 vacancies', text: 'Android Developers Open September 2022' },
                        { title: '75 000 dollars', text: 'average beginner salary' },
                        { title: 'Crossroads Vprok, CleverPumpkin', text: 'companies in which the participants of the course were employed' }
                    ],
                },
                for_who: [
                    {
                        subtitle: 'Beginners in programming',
                        text: 'You will go from a beginner to a confident Android developer without stress: learn to code in Kotlin from scratch, write your first applications for your portfolio and be able to get a job right after the course'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'In practice, solidify the basics and delve into more complex topics. Learn how to create and test large applications according to technical specifications from a real customer'
                    },
                    {
                        subtitle: 'Programmers who want to change direction',
                        text: 'Learn about the features of developing and testing mobile software. Get system knowledge and portfolio, you can find a job as an Android developer and increase your income'
                    }
                ],
                skills: [
                    { title: 'Programming in Kotlin', text: 'Kotlin is the main programming language for Android applications. You will learn from scratch both the basic features of the language and advanced concepts such as multithreading' },
                    { title: 'Work in Android Studio environment', text: 'Learn how to design screens and program application logic, learn how to release your projects on Google Play' },
                    { title: 'Use Android SDK', text: "You will create dynamic applications that solve user problems. For example, learn how to access the device's camera or location" },
                    { title: 'Create animations and custom screens', text: 'Boring and static apps are a thing of the past. You will learn everything you need to design custom transitions between application states, and you will be able to code even the most unusual screen' },
                    { title: 'Timer applications', text: "Who will use your app if it doesn't work? You will learn how to check the performance of projects under different conditions, use emulators and simulators" },
                    { title: 'Design stable and fast applications', text: 'Design patterns will help you speed up the development process, and you will also learn how to avoid memory leaks - this aspect is often forgotten by beginners' }
                ],
                program: {
                    title: {
                        text: 'You will get all the necessary skills that employers expect from aspiring Android developers in 2022',
                        counts: [{ number: '7', text: 'months' },{ number: '43', text: 'practical work' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.kotlin,
                            number: 1
                        },
                        {
                            title: 'Final work. Distribution center emulator',
                            number: 2
                        },
                        {
                            title: 'Android developer. 3 months',
                            subtitle: 'You will go through the basics of Android development: learn how to make screens, animate models, program logic, work with data and the network. Write over 7 mini-projects, including a quiz app, gallery, news feed, and point of interest map',
                            listItems: [
                                'Introduction to the profession', 'Beginning of work', 'Layout', 'Components', 'ConstraintLayout', 'Project resources', 'Application screens', 'Fragments', 'Animation',
                                'Application localization', 'Life cycle', 'Fundamentals of data storage', 'Presentation layer architecture', 'Work with the network (Retrofit)', 'Working with the database (Room)',
                                'Project architecture', 'Working with lists', 'Working with protected OS partitions', 'Location work', 'Firebase', 'Preparing for release'
                            ],
                            number: 3
                        },
                        {
                            title: 'Final work. Android Application',
                            number: 4
                        },
                        {
                            title: 'Android developer. Advanced level. 2 months',
                            subtitle: 'Master advanced development techniques — learn how to change models. Optimize performance, get familiar with design patterns, and immerse yourself in the concept of reactive programming',
                            listItems: [
                                'We create our own View and animations', 'Working with lists', 'Declarative UI', 'Running tasks in the background: practice', 'Advanced dependency injection. Dagger 2',
                                'Application building patterns', 'Presentation layer patterns', 'Testing', 'Application exit', 'Memory leaks and static analyzers', 'Code review at an advanced level'
                            ],
                            number: 5
                        },
                        {
                            title: 'Final work. Team app development',
                            number: 6
                        },
                        {
                            ...commonItems.program.careerCenter,
                            number: 7
                        },
                        {
                            ...commonItems.program.mobileAdditionalCourses,
                            number: 8
                        },
                    ]
                },
                projects: [
                    { title: 'Distribution center emulato', text: commonItems.projects.texts.emulator },
                    { title: 'Application for finding movies and series', text: commonItems.projects.texts.finder },
                    { title: 'Team Internship: Mobile App for Android', text: commonItems.projects.texts.teamProject },
                ],
                teachers: [
                    commonItems.teachers.lisakov,
                    commonItems.teachers.alexandrov,
                    commonItems.teachers.martynenko,
                    commonItems.teachers.machikhin,
                    commonItems.teachers.firsov,
                    commonItems.teachers.malykh,
                    commonItems.teachers.pilipenko,
                    commonItems.teachers.shadrin,
                    commonItems.teachers.ovchinnikov,
                    commonItems.teachers.rybakov,
                    { imgSrc: 'android/3', fullName: 'Artyom Bagritsevich', text: 'In development for 11 years. Chief Android Developer' },
                    { imgSrc: 'android/4', fullName: 'Alexandr Oplachnikov', text: 'Senior Android Developer' },
                    { imgSrc: 'android/10', fullName: 'Alexandr Ageychenko', text: 'Lead Android-developer, Tinkoff' }
                ],
                cv: {
                    salary: 'From 85.000 USD',
                    skills: [
                        'Programming in Kotlin', 'I create applications for Android devices', 'Understand design patterns', 'Testing mobile apps', 'Conducting a code review',
                        'I use multithreading', 'Working with the network: writing GET and POST requests', 'I do version control in Git', 'Working with SQLite and Firebase',
                        'I follow the code style — my code is easy to read and understand for colleagues', 'I speak technical English'
                    ],
                    projects: ['1. Distribution center software', '2. Quiz Application', '3. Satellite image gallery', '4. News application', '5. Landmarks app'],
                    tools: ['Kotlin', 'SQLite', 'Firebase', 'AndroidX', 'Android Studio', 'Jetpack Compose', 'IntelliJ idea', 'Git', 'SQL', 'Figma']
                },
                questions: [
                    {
                        title: 'I have never developed mobile applications. Will I succeed?',
                        text: 'Certainly! The course is ideal for beginners without special knowledge. The main thing is not to miss classes and do not forget to practice. Under some videos you will find additional materials - we advise you to devote time to them. If you have any questions about the topic of the classes, do not hesitate to contact the Telegram chat.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 7 months and find a job by this time, you need to study for 2 hours a day. But it’s not at all necessary to follow a rigid schedule - you can study when it’s convenient.'
                    },
                    {
                        title: 'Which computer is suitable for the course?',
                        text: 'To work in Android Studio, you need Windows (64 bit), Linux (64 bit) or macOS versions from 10.10 (Yosemite) to 10.14 (Mojave). Minimum 4 GB RAM, recommended 8 GB. Minimum - 2 gigabytes of free disk space, recommended size - 4 GB. Screen resolution - from 1280x800.'
                    },
                    commonItems.questions.schedule,
                    {
                        title: 'What is the total length of the videos?',
                        text: '396 hours is the main track of the course. Additional courses contain 100 more hours of video.'
                    },
                    {
                        title: 'Who will accompany me?',
                        text: 'You will have a mentor in the Telegram chat, and the curator will comment on practical work and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts.'
                    },
                    {
                        title: 'Explaining terms used on this page',
                        terms: [
                            commonItems.questions.kotlin,
                            commonItems.questions.figma,
                            commonItems.questions.androidSDK,
                            {
                                title: 'AndroidX',
                                text: 'new version of android support library.'
                            },
                            {
                                title: 'Android Studio',
                                text: 'Android application development environment with built-in code and interface editor, real device emulator, project builder and application debugging system.'
                            },
                            {
                                title: 'Jetpack Compose',
                                text: 'a tool that simplifies the development of user models for Android.'
                            },
                            {
                                title: 'IntelliJ idea',
                                text: 'development environment for Java and Kotlin with built-in auto-completion, code analyzer and other useful features that allow you to speed up your work.' },
                            {
                                title: 'SQLite',
                                text: 'an embedded database management system that allows you to store data locally.'
                            },
                            {
                                title: 'Firebase',
                                text: 'a platform for developing web and mobile applications with the ability to integrate analytics, monitoring, and cloud storage services.'
                            },
                            {
                                title: 'Git',
                                text: 'A version control system that helps developers track code changes and collaborate on a project.'
                            },
                            {
                                title: 'Junior-developer',
                                 text: 'a novice programmer who can only solve small, simple and well-defined tasks.'
                            },
                            {
                                title: 'Middle-developer',
                                 text: 'programmer with 1-3 years experience. Able to independently perform complex tasks within the framework of the project, not only technical, but also administrative.'
                            },
                            {
                                title: 'Senior',
                                 text: 'the highest level of excellence. Such a developer is able to keep incredibly large and complex tasks in mind, take into account the most non-obvious interactions and consequences. He reviews the code, designs the architecture, and makes important decisions.'
                            },
                        ]
                    }
                ]
            }
        },
        ios: {
            preview: {
                profession: 'iOS developer',
                time: '6 months',
                path: 'iOS'
            },
            course: {
                header: {
                    text: 'An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs models, tests code, and uploads projects to the App Store. On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job',
                    features: [
                        commonItems.header.getJobInSixMonths,
                        commonItems.header.forBeginners,
                        commonItems.header.guarantees,
                        { title: 'Feedback', text: 'on practical work from experienced professionals' },
                        { title: 'Team internship', text: 'under the leadership of a team leader' }
                    ]
                },
                market: {
                    title: 'Businesses lack iOS developers, so companies offer high salaries and remote work. Novice iOS developers earn from 60 000 to 80 000 dollars, middles receive up to 100 000 dollars, and seniors and leads can count on salaries of up to 130 000 dollars',
                    list: [{ title: '2 491 vacancies', text: 'open to iOS developers' }, { title: '60 000 dollars', text: 'iOS developer beginner salary' }],
                },
                for_who: [
                    {
                        subtitle: 'Beginners in programming',
                        text: 'The course will allow you to master the profession of an iOS developer from scratch. You will write your first portfolio applications, and after graduation we will help you with animation'
                    },
                    {
                        subtitle: 'Beginning developers',
                        text: 'You will receive the systematic knowledge that is necessary for a successful career as an iOS developer'
                    },
                    {
                        subtitle: 'Programmers who want to change specialization',
                        text: 'Get to know the specifics of iOS development better, hone the necessary skills, find a profitable and interesting job'
                    }
                ],
                skills: [
                    { title: 'Programming in Swift', text: 'Learn the language in which you will describe the entire logic of the applications. Step by step, you will understand the basics and understand how the language works from the inside' },
                    { title: 'Design mobile applications', text: 'Learn how to choose the right architecture for your application, get acquainted with the MVC, MVVM, SOLID models. Make your code readable and structured' },
                    { title: 'Create models for applications', text: 'You will learn how to design both basic UI elements and custom buttons, screens, animations, and transitions' },
                    { title: 'Make your applications efficient', text: 'Get familiar with multithreading and learn how to work effectively with the transfer of large amounts of data over the network' },
                    { title: 'Release your projects in the App Store', text: 'Learn how to upload projects to AppStore Connect so that the whole world knows about your application' },
                    { title: 'Work in a team', text: 'In practice, you will understand how the software development process works in large companies. Present team final project' }
                ],
                program: {
                    title: {
                        text: 'You will get all the necessary skills that employers expect from aspiring iOS developers in 2022',
                        counts: [{number: '6', text: 'months'}, {number: '89', text: 'modules'}]
                    },
                    programItems: [
                        { ...commonItems.program.iosBasic, number: 1 }, { title: 'Final work. Application for working with Yandex Disk', number: 2 },
                        { ...commonItems.program.iosAdvanced, number: 3 }, { title: '✦ Job placement with Career Center', number: 4 },
                        { ...commonItems.program.mobileAdditionalCourses, number: 5 }
                    ]
                },
                projects: [{ title: 'Yandex Disk analogue', text: commonItems.projects.texts.yandexDisc }],
                teachers: [
                    commonItems.teachers.kudryavtsev, commonItems.teachers.aniskov, commonItems.teachers.nikolaev, commonItems.teachers.sotsky,
                    commonItems.teachers.pilipenko, commonItems.teachers.rybakov, commonItems.teachers.malykh, commonItems.teachers.shadrin
                ],
                cv: {
                    salary: 'From 80.000 USD',
                    skills: [
                        'Programming in Swift', 'Write and process network requests', 'I know and apply the principles of OOP - object-oriented programming',
                        'I test the code: manually and automatically', 'Building responsive models with UIKit, SwiftUI and Combine', 'I use multithreading',
                        'I follow the code style - my code is easy to read and maintain', 'I work with databases and built-in storage', 'I do version control in Git',
                        'I create iOS applications with support for push notifications', 'I know basic sorting and searching algorithms'
                    ],
                    projects: ['1. Yandex Disk analogue'],
                    tools: ['Swift', 'XCode', 'Swiftui', 'REST API', 'CoreData', 'Git', 'SQL', 'Figma']
                },
                questions: [
                    {
                        title: 'I have never programmed. Will I succeed?',
                        text: 'It will turn out. When we develop the content of the courses, we understand that the classes should be focused on those who want to learn programming from scratch. Therefore, speakers explain each topic from the most basic things - or you can always close unanswered questions through communication with the curator or in the course chat.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 6 months and find a job by this time, you need to study for 2 hours a day. But it’s not at all necessary to follow a rigid schedule - you can study when it’s convenient.'
                    },
                    {
                        title: 'What are the general Mac requirements for iOS development?',
                        text: 'Your Mac must also have at least 4 GB of memory and 12.5 GB of free disk space. Either up to 18.5 GB of free space when upgrading from OS X Yosemite or earlier.'
                    },
                    {
                        title: 'What are the Mac hardware requirements?',
                        text: 'You will write code in the Swift 5 programming language and work in the Xcode 12.4 environment. Xcode 12.4 requires a Mac running macOS Catalina 10.15.4 or later.'
                    },
                    commonItems.questions.english,
                    {
                        title: 'Will I definitely get a job?',
                        text: 'Yes, if you take the course - it teaches enough skills to get a job as a programmer. For our part, we will help you to correctly compose a resume and arrange a portfolio, as well as provide contacts of companies.'
                    },
                    {
                        title: 'Explaining terms used on this site',
                        terms: [
                            commonItems.questions.swift,
                            commonItems.questions.figma,
                            commonItems.questions.ui,
                            commonItems.questions.iosSDK,
                            {
                                title: 'App Store Connect',
                                text: 'a program that allows you to manage applications that you have developed. For example, testing new features or tracking the number of downloads from the App Store.'
                            },
                            {
                                title: 'Models MVC, MVVM, SOLID',
                                text: 'they are patterns, or application design patterns. Such templates help to reduce the number of errors, speed up and synchronize the work of different teams - developers, testers, designers, analysts and managers.'
                            },
                            {
                                title: 'Teamlead',
                                text: 'development team leader. The team leader evaluates the complexity of tasks and distributes them, communicates with customers and makes sure that the project is completed on time.'
                            }
                        ]
                    }
                ]
            }
        },
        mobile: {
            preview: {
                profession: 'Mobile developer',
                time: '7 months',
                path: 'mobile'
            },
            course: {
                header: {
                    text: 'You will learn how to create applications for devices based on iOS or Android from scratch. Practice on real tasks and add projects to your portfolio. You can get a full-time mobile developer or work as a freelancer',
                    features: [
                        { title: 'We will help you decide', text: 'which platform to develop for - iOS or Android' },
                        commonItems.header.getJobInSevenMonths,
                        commonItems.header.feedback,
                        commonItems.header.guarantees
                    ]
                },
                market: {
                    title: 'According to Statista, more than 6.5 billion people worldwide use smartphones in 2022. By 2027, this figure is projected to rise to almost 8 billion. Every year, smartphones become more powerful, with their help we can solve more and more tasks. Mobile developers create applications for iOS and Android, without which it is difficult to imagine modern life: online banks, marketplaces, streaming services, instant messengers, online navigators and fitness trackers',
                    list: [
                        { title: 'Over 3 000 vacancies', text: 'available to mobile developers in November 2022' },
                        { title: '60 000 dollars', text: 'beginner mobile developer salary' },
                        { title: '80 000 dollars', text: 'mobile developer salary with 1 year experience' },
                        { title: '110 000 dollars', text: 'mobile developer salary with 3 year experience' }
                    ],
                },
                for_who: [
                    {
                        subtitle: 'Beginners in programming',
                        text: 'Master programming in Swift or Kotlin, learn how to design models and test applications. Get a sought-after profession: you will work in a studio or in a product team'
                    },
                    {
                        subtitle: 'Beginning mobile developers',
                        text: 'Fix the basics and go through more advanced topics. Learn how to create and test mobile applications according to technical specifications from a real customer'
                    },
                    {
                        subtitle: 'Developers from other fields',
                        text: 'Learn about the features of designing, developing and testing mobile applications. Add projects to your portfolio, add skills to your resume, change jobs or move up the career ladder'
                    }
                ],
                skills: [
                    { title: 'Create native apps', text: 'You will not only learn the basics of Swift or Kotlin, but also dive into advanced topics: learn how to work with multithreading, get acquainted with algorithms, data structures, and learn how to code-review' },
                    { title: 'Design models and animations', text: 'You will lay out basic UI elements and assemble them on the screen. Learn how to create custom models, screen transitions and animations' },
                    { title: 'Set up the client-server part', text: 'You will connect models and program logic into a single whole, learn how to communicate with databases using SQL and make network queries. Connect third party services to your apps' },
                    { title: 'Timer applications', text: 'Learn how to use emulators and simulators to test your code. You will test projects in different conditions, for example, when the signal is lost' },
                    { title: 'Write clean and efficient code', text: 'Familiarize yourself with design patterns and coding rules. Make your programs readable, structured and easy to debug' },
                    { title: 'Work in a team', text: 'You will understand the requirements of designers and team leaders. In practice, you will understand how the application development process works, and defend a team thesis project' }
                ],
                program: {
                    title: {
                        text: 'You will choose one of the directions - iOS or Android and become a mobile developer. The difficulty of the course increases gradually. We constantly update the course so that you get the skills that employers need right now',
                        counts: [{ number: '7', text: 'months' }, { number: '39', text: 'practical work' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.iosBasic,
                            number: 1
                        },
                        {
                            ...commonItems.program.iosAdvanced,
                            number: 2
                        },
                        {
                            title: '✦ Job placement with Career Center',
                            listItems: [
                                'At this point, you are ready for real practice. Skills will be enough to get to the position of an intern and take the first orders',
                                'Together with a career consultant, you will prepare a resume and portfolio, as well as prepare for an interview. The specialist will select suitable vacancies for you and arrange an interview with the employer'
                            ],
                            number: 3
                        },
                        {
                            ...commonItems.program.kotlin,
                            number: 4
                        },
                        {
                            title: 'Android developer. Basics. 3 months',
                            subtitle: 'You will go through the basics of Android development: learn how to make screens, animate models, program logic, work with data and the network. Write over 7 mini-projects, including a quiz app, gallery, news feed, and point of interest map',
                            listItems: [
                                'Beginning of work', 'Layout', 'Components', 'ConstraintLayout', 'Project resources', 'Application screens', 'Fragments', 'Animation',
                                'Application localization', 'Life cycle', 'Fundamentals of data storage', 'Presentation layer architecture', 'Work with the network (Retrofit)',
                                'Working with the database (Room)', 'Project architecture', 'Working with lists', 'Working with protected OS partitions', 'Location work',
                                'Firebase', 'Preparing for release', 'Final work. Application for finding movies and series'
                            ],
                            number: 5
                        },
                        {
                            title: 'Android developer. Advanced level. 2.5 months',
                            subtitle: 'Master advanced development techniques — learn how to change models. Optimize performance, get familiar with design patterns, and immerse yourself in the concept of reactive programming',
                            listItems: [
                                'We create our own View and animations', 'Working with lists', 'Declarative UI', 'Running tasks in the background: practice', 'Advanced dependency injection. Dagger 2',
                                'Application building patterns', 'Presentation layer patterns', 'Testing', 'Application exit', 'Memory leaks and static analyzers', 'Code review at an advanced level',
                                'RxJava. Basics', 'RxJava. Part 2. Operators', 'Final work. Team app development'
                            ],
                            number: 6
                        },
                        {
                            title: '✦ Job placement with Career Center',
                            listItems: [
                                'At this point, you are ready for real practice. Skills will be enough to get to the position of an intern and take the first orders',
                                'Together with a career consultant, you will prepare a resume and portfolio, as well as prepare for an interview. The specialist will select suitable vacancies for you and arrange an interview with the employer'
                            ],
                            number: 7
                        },
                        {
                            ...commonItems.program.mobileAdditionalCourses,
                            number: 8
                        },
                    ]
                },
                projects: [
                    { title: 'Profession iOS developer. Yandex Disk analogue', text: commonItems.projects.texts.yandexDisc },
                    { title: 'Profession Android developer. Application for finding movies and series', text: commonItems.projects.texts.finder },
                    { title: 'Profession Android developer. Console application for the logistics center', text: commonItems.projects.texts.emulator },
                    { title: 'Team Internship: Mobile App for Android', text: commonItems.projects.texts.teamProject },
                ],
                teachers: [
                    commonItems.teachers.kudryavtsev, commonItems.teachers.aniskov, commonItems.teachers.nikolaev, commonItems.teachers.sotsky, commonItems.teachers.lisakov,
                    commonItems.teachers.alexandrov, commonItems.teachers.martynenko, commonItems.teachers.machikhin, commonItems.teachers.firsov
                ],
                questions: [
                    {
                        title: "I don't really understand what to choose - iOS or Android. Tell!",
                        text: "Don't worry if you haven't decided yet. After the application, we will discuss specialization options together by phone. We will tell you in detail about the features of each platform, answer questions and choose a direction."
                    },
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 7.5 months and find a job by this time, you need to study for 2 hours a day. But it’s not at all necessary to follow a rigid schedule - you can study when it’s convenient.'
                    },
                    {
                        title: 'I have no experience in mobile development. Is this course right for me?',
                        text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be assisted by practicing experts who will accompany you throughout the course.'
                    },
                    {
                        title: 'Which computer is suitable for the course?',
                        texts: [
                            'To work in Android Studio, you need Windows 8/10 (64 bit), Linux (64 bit) with support for Gnome, KDE or macOS version 10.14 (Mojave) or higher. 4 GB RAM minimum, 8 GB recommended. Minimum - 2 free gigabytes on the disk, the recommended amount is 4 GB. Screen resolution - from 1280 × 800.',
                            "You'll need a MacBook or other macOS computer to take iOS courses. The operating system is macOS Catalina 10.15.4 or later. The course uses the Swift 5 programming language, as well as the Xcode 12.4 development environment. The Mac must also have at least 4 GB of memory and 12.5 GB of free disk space. Or up to 18.5 GB of free space when upgrading from OS X Yosemite or earlier."
                        ]
                    },
                    {
                        title: 'Will I get a job after the course?',
                        texts: [
                            'The courses cover all the topics that a mobile developer needs. If you study regularly, complete practical tasks and work on final projects, then by the end of the course you will be ready for employment. We will take care of the rest — we will select vacancies, help you write a resume, correctly draw up a portfolio and prepare for an interview.',
                            'If the interview fails, we will collect feedback from the employer and suggest in what aspects you need to develop, and continue working. Most often, platform users get a chance to prove themselves in an internship or get a junior position.'
                        ]
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 7.5 months and find a job by this time, you need to study for 2 hours a day. But it is not at all necessary to follow a rigid schedule - you can study when it is convenient.'
                    },
                    {
                        title: 'I see a lot of unfamiliar terms: Kotlin, Swift, libraries. What does all of this mean?',
                        terms: [
                            commonItems.questions.kotlin,
                            commonItems.questions.swift,
                            commonItems.questions.androidSDK,
                            commonItems.questions.iosSDK,
                            commonItems.questions.oop,
                            {
                                title: 'Interface, or UI',
                                text: 'this is the "face" of the application. Colors, fonts, animation - everything that the user sees with his eyes. In addition to the appearance, the interface includes the convenience of managing and navigating the application.'
                            },
                            {
                                title: 'Library',
                                text: 'ready-made code that helps to solve any narrow problem. The library can be installed in your project so as not to reinvent the wheel and use a ready-made solution.'
                            },
                            {
                                title: 'Asynchronous programming',
                                text: 'a programming approach in which an application can perform several operations at the same time.'
                            },
                            {
                                title: 'Design patterns',
                                text: 'ready-made templates that allow you to write programs according to certain principles that are understandable to all developers.'
                            }
                        ]
                    },
                    commonItems.questions.english,
                    commonItems.questions.schedule,
                    commonItems.questions.help,
                ]
            }
        },
        flutter: {
            preview: {
                profession: 'Flutter developer',
                time: '6 months',
                path: 'flutter'
            },
            course: {
                header: {
                    text: 'You will master the Flutter development tool and be able to create mobile applications immediately for iOS and Android. Learn one of the native languages to choose from - Kotlin or Swift and become a sought-after specialist who can work with different platforms',
                    features: [{ title: 'Employment', text: 'in 6 months' }, commonItems.header.guarantees, commonItems.header.feedback]
                },
                market: {
                    title: 'Companies are looking for Flutter developers because they help save money on creating a product. Instead of two separate specialists, the business hires one who makes the application for Android and iOS at once. Today, more than 500,000 applications are powered by Flutter worldwide. Among the companies that use it: WeChat, Toyota, BMW, Google, Alibaba Group, eBay and the Brazilian government',
                    list: [{ title: '90 000 dollars', text: 'specialist salary' }, { title: '322 vacancies', text: 'right now open for the position of Flutter developer' }],
                },
                for_who: [
                    {
                        subtitle: 'For native developers',
                        text: 'Go beyond one platform and become a universal developer. Learn how to create working prototypes and complete projects with Flutter. Master Dart and add cross-platform apps to your portfolio. Rewrite personal projects for Android and iOS, offer to implement the framework in your company or join a new team'
                    },
                    {
                        subtitle: 'Programmers in other areas',
                        text: 'Learn about the features of developing and testing mobile applications. Master one of the native programming languages Swift or Kotlin. Get to know Dart, the Flutter framework, and write cross-platform portfolio apps. After the course, you will be able to change direction and start a career in mobile development'
                    }
                ],
                skills: [
                    { title: 'Write application blocks in native language', text: 'Learn Kotlin for Android development or Swift for iOS. Be able to write clean code for every platform' },
                    { title: 'Build apps with Flutter and Dart', text: 'Understand how to work with widgets, forms and media. Learn to use services and plugins. Can write multi-platform applications' },
                    { title: 'Use ready-made functions from libraries', text: 'You will be able to assemble applications from individual components and speed up the development process' },
                    { title: 'Customize the interaction of applications with the backend', text: 'Learn how to connect databases. Learn to work with the file system, template engines, forms. Can handle incoming requests' },
                    { title: 'Interact with UX design', text: 'Master Figma. You will be able to customize user models and develop design for application pages' },
                    { title: 'Test applications', text: 'Learn how to find errors using the built-in tools of Android Studio and XCode. You can remove data about the operation of the application' }
                ],
                program: {
                    title: {
                        text: 'You are waiting for a video with theory and 38 practical work. Materials updated in 2022',
                        counts: [{ number: '115', text: 'topics' }, { number: '6', text: 'months' }]
                    },
                    programItems: [
                        {
                            title: 'Flutter. 3 months',
                            subtitle: 'You will learn how to create applications for different platforms that use the same database for iOS and Android. With the help of the Flutter framework and the Dart language, you can grow as a mobile developer',
                            listItems: [
                                'Introduction', 'Fundamentals of Dart', 'Flutter', 'Stateful/Stateless Widget', 'Material/Cupertino', 'Layout', 'Navigation', 'Asynchrony',
                                'Working with forms', 'Testing/Advanced Testing', 'Firebase', 'Flutter project architecture', 'State management', 'Advanced widgets', 'Multiplatform solutions',
                                'Application theme', 'Animations', 'Working with media, maps and Web View', 'Integration with native', 'Persistence data', 'DevTools', 'Flutter under the hood'
                            ],
                            number: 1
                        },
                        {
                            title: 'Choice course. Android developer. 3 months',
                            subtitle: "You'll learn how to write apps in the most up-to-date Android language. Explore popular development libraries and master the principles of design concepts. Get to know the Material Design interface design style",
                            listItems: [
                                'Introduction', 'Variables', 'Functions', 'Conditions and cycles', 'Collections', 'Objects', 'Object-oriented programming. Part 1', 'Object-oriented programming. Part 2',
                                'Object-oriented programming. Part 3', 'Type comparison', 'Exceptions', 'Coroutines', 'Threads', 'Introduction to the profession', 'Beginning of work', 'Layout',
                                'Components', 'ConstraintLayout', 'Project resources', 'Application screens', 'Animation', 'Application localization', 'Life cycle', 'Fundamentals of data storage',
                                'Presentation layer architecture', 'Networking. retrofit', 'Working with DB. Room', 'Working with data arrays', 'Working with protected OS partitions', 'Location work',
                                'Firebase', 'Preparing for release'
                            ],
                            number: 2
                        },
                        {
                            title: 'Choice course. iOS developer. 1.5 months',
                            subtitle: 'You will learn how to write applications for Apple devices in the Swift language. Learn how to make animation and design applications. You will work with neural networks, object-oriented, asynchronous and functional programming',
                            listItems: [
                                'Introduction to iOS development', 'Data flow control: conditions, cycles', 'Functions and options', 'Classes, structures, enumerations',
                                'Object-oriented programming', 'Working in Xcode', 'Screen transitions and interaction', 'Standard UI components and working with them',
                                'Autolayout, Constrains, StakViews', 'Tables and collections', 'Creating your own UI components', 'Interaction with the server, json parsing. Standard tools and libraries',
                                'Animation from A to Z', 'Data storage: Realm, CoreData, UserDefaults, version control', 'Functional programming', 'Signing and submitting apps to the App Store. iTunes connect overview'
                            ],
                            number: 3
                        },
                        {
                            title: '✦ Job placement with Career Center',
                            number: 4
                        },
                        {
                            title: '7 additional courses: Testing, Figma, Agile, Project Presentation, Git, SQL, Programming Career ≈ 5 months',
                            listItems: [
                                'Manual testing of mobile applications. You will learn how to look for errors in the operation of sites and applications. You can test user models',
                                'Figma from zero to PRO. You will learn how to work in the most popular service for creating models', 'Agile: Scrum and Kanban in product development. You will learn how to work in a development team on the main methodologies for maintaining digital products',
                                'Presentation of projects. You will learn how to prepare presentations of your projects and pitch them in front of an audience', 'Git version control system. You will learn how to work with code versions. You can compare and undo them using the Git system',
                                "SQL query language. You'll learn a popular language that will help you speed up your queries", '"Career and development for a programmer". You will understand where to grow in the profession and how to develop as a programmer'
                            ],
                            number: 5
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Flutter course. Spotify analogue',
                        text: 'Develop an application for listening to music. Add a search by artist, a list of the most popular tracks, and a collection feature'
                    },
                    {
                        title: 'Flutter course. Expense tracker app',
                        text: 'Develop an app to track monthly expenses. Write the logic for removing and adding expenses and their categories. Add an expense schedule for each month and switch between months'
                    },
                    {
                        title: 'Flutter course. Analogue of Instagram*',
                        text: 'You will develop an application with a feed of publications with a description of the photo and the ability to like it. Add a feature to view the post page, which displays users who have liked it'
                    }
                ],
                teachers: [
                    { fullName: 'Anatoly Kirsanov', text: 'Practicing speaker and Flutter developer' },
                    { fullName: 'Alexander Denisov', text: 'Chief Software Engineer, Co-Head of Flutter Competency' },
                    { fullName: 'Vladimir Polyukhovich', text: 'Senior Software Developer' },
                    { fullName: 'Nikita Arkhipov', text: 'Founder of mobile app studio Anvics' },
                    { fullName: 'Mikhail Nikipelov', text: 'Art Director at Distillery' },
                    { fullName: 'Pavel Yarets', text: 'Our speaker' },
                    { fullName: 'Pavel Gorshkov', text: 'Former Design Director at Red_mad_robot' },
                    commonItems.teachers.ovchinnikov,
                    commonItems.teachers.alexandrov,
                    commonItems.teachers.rybakov,
                    commonItems.teachers.pilipenko,
                    commonItems.teachers.malykh,
                ],
                cv: {
                    salary: 'From 90.000 USD',
                    skills: [
                        'Creation of mobile applications according to platform guidelines', "Ability to understand other people's code", 'Working with API, including social networks',
                        'Creating Blocks in Swift or Kotlin', 'Working with multithreading in applications', 'Uploading the application to the store',
                        'Experience in designing client-server applications', 'Knowledge of Flutter and Dart', 'Working with Reactive Libraries', 'Working with Git Version Control',
                        'Ability to set and meet deadlines', 'Mobile Application Testing'
                    ],
                    projects: ['1. Spotify analogue', '2. Expense tracker app', '3. Instagram analogue'],
                    tools: ['Flutter', 'Kotlin', 'Swift', 'Figma', 'SQL']
                },
                questions: [
                    {
                        title: 'I have never developed applications for mobile platforms. Will I succeed?',
                        texts: [
                            'The course is designed for mobile developers or developers from related fields. If you are a beginner, you can leave a request, and we will help you choose the right course.',
                            'During the course, we recommend paying attention to practical work and reading additional literature. The rest will be assisted by experienced practicing experts who will accompany you throughout the profession.'
                        ]
                    },
                    {
                        title: 'What are the hardware requirements?',
                        texts: [
                            'If you choose Swift as your native language to learn, Mac models that are compatible with macOS from High Sierra and above are suitable: MacBook and iMac (Late 2009 or later), MacBook Pro, MacBook Air, Mac mini, and Mac Pro (Mid 2010) year or newer). To get information about your Mac model, click the Apple icon in the top left corner of the screen and choose About This Mac from the menu. The course uses the Swift programming language (version 4 at the first level, version 5 at the second level), as well as the Xcode development environment (version 10 at the first level, 11.1 at the second level).',
                            'If you choose the Kotlin language, you will need Windows (64 bit), Linux (64 bit) or macOS versions from 10.10 (Yosemite) to 10.14 (Mojave). Minimum 4 GB RAM, recommended 8 GB. Minimum - 2 free gigabytes on the disk, the recommended amount is 4 GB. Screen resolution - from 1280x800.'
                        ]
                    },
                    {
                        title: 'What are the general Mac requirements for iOS development?',
                        text: 'OS X 10.8 or later, 2 GB RAM, 14.3 GB free space for system updates. Some features require an Apple ID and a compatible ISP.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'To master the profession and get a job after 6 months from the start of the course, you need to study the materials for 2 hours a day. But there is no strict schedule and deadlines - you can take the course at a comfortable pace.'
                    },
                    {
                        title: 'Explaining terms used on this site',
                        terms: [
                            {
                                title: 'Framework Flutter',
                                text: 'a development tool that allows you to develop cross-platform applications for iOS and Android.'
                            },
                            {
                                title: 'Dart',
                                text: 'programming language used for development on Flutter.'
                            },
                            {
                                title: 'UX-design',
                                text: '"user experience"; how the user interacts with the interface and how the site or application is understandable and convenient for him.'
                            },
                            {
                                title: 'Agile',
                                text: 'a group of methods for flexible project management and a way of team interaction between employees, which allows them to jointly create products.'
                            },
                            {
                                title: 'Scrum',
                                text: 'approach to management, when a universal team of specialists works on each project, to which two people join: the product owner and the scrum master.'
                            },
                            {
                                title: 'Kanban',
                                text: 'management approach, when the workflow is divided into the stages of performing specific tasks: "Planned", "Developed", "Tested", "Completed", etc.'
                            },
                            commonItems.questions.swift,
                            commonItems.questions.kotlin,
                            commonItems.questions.figma
                        ]
                    },
                    commonItems.questions.english,
                    commonItems.questions.schedule,
                    commonItems.questions.help,
                ]
            }
        },
        java: {
            preview: {
                profession: 'Java developer',
                time: '6 months',
                path: 'java'
            },
            course: {
                header: {
                    text: "Java is one of the most popular programming languages in the world. It is used to create reliable applications for banks, IT corporations and streaming services, develop online stores, games and cloud solutions. Java is used in their products by: Twitter, Spotify, State Services. Minecraft and Assassin's Creed games are also written in Java. Java is possible to learn on your own, but much easier - on a course with the support of an experienced expert",
                    features: [
                        { title: '★ 4.5 out of 5', text: 'based on 46 012 course evaluations' },
                        { title: '6 months later', text: 'you can start working' },
                        { title: 'Team internship', text: 'under the leadership of a team leader' },
                        { title: 'Lots of practice', text: '69 practical works' },
                        commonItems.header.guarantees
                    ]
                },
                market: {
                    title: 'Novice Java developers earn from 60,000, middles receive up to 80 000 dollars, and seniors and leads can count on salaries up to 120 000 dollars',
                    list: [{ title: '90 000 dollars', text: 'specialist salary' }, { title: '322 vacancies', text: 'right now open for the position of Flutter developer' }],
                },
                for_who: [
                    {
                        subtitle: 'Beginning programmers',
                        text:  `Perhaps you already have basic skills and understanding of programming and apply this knowledge in your projects. Our course will give you an in-depth knowledge of the universal Java language, and you will begin to properly structure the code and follow everyone's "favorite" syntax to create outstanding projects`
                    },
                    {
                        subtitle: 'Beginners',
                        text: 'If you are attracted by modern technologies and high salaries in the field of IT, then this course is definitely for you. You will learn how to write code, learn that the legend that a programmer must be perfect in mathematics is a fiction, begin to think critically and be able to code in the most popular language in the world'
                    }
                ],
                skills: [
                    { text: 'Administration and deployment of pilot works' },
                    { text: 'Knowledge of OOP principles' },
                    { text: 'Java web application development' },
                    { text: 'Development of web applications on the Spring framework' },
                    { text: 'Working with the Git version control system' },
                    { text: 'Relational database query writing skills' }
                ],
                program: {
                    title: {
                        text: 'We constantly update the course so that you get the skills that employers need right now. 57 topical topics and practical work are waiting for you to help you become a developer in demand',
                        counts: [{ number: '6', text: 'months' }, { number: '69', text: 'practical work' }]
                    },
                    programItems: [
                        {
                            title: 'Projects you will create:',
                            listItems: [
                                'Project 1. Game "Guess the number". The program will guess the number that the user has guessed', 'Project 2. A calculator that can perform basic arithmetic operations',
                                'Project 3. Applications for the accounting of goods and books in different stores', 'Project 4. Program for managing the operation of a passenger elevator',
                                'Project 5. An application that converts text into different encodings', 'Project 6. Phone book application', 'Project 7. A program for managing company employees: it can display all employees and sort them by various properties',
                                'Project 8. A navigator application that can be used to find out the duration of trips on the subway', 'Project 9. An application that can be used to "pull" statistics on purchases of courses from the database',
                                'Project 10. An image compression program that uses multithreading', 'Project 11. Application for managing transactions between bank accounts',
                                'Project 12. A Spring Boot web application for managing a to-do list', 'Project 13. A program with which you can find the cheapest air tickets',
                                '49 more practical works'
                            ],
                            number: 1
                        },
                        {
                            title: 'What you will learn:',
                            listItems: ['Variables, conditional statements, comments, loops, methods, classes, encapsulation, static typing, primitives, numbers, dates, strings, arrays, lists, inheritance, OOP, exceptions, testing, file manipulation, JSON, MySQL, multithreading, HTTP, Spring Boot, Redis, algorithms, data structures, design patterns'],
                            number: 2
                        },
                        {
                            title: 'You will develop a search engine that will help site visitors quickly find the information they need using the search box' ,
                            number: 3
                        },
                        {
                            title: 'You will work under the guidance of an experienced team leader as part of a team of 5-7 people. Create your own social network in 3 months according to the TOR from a real customer. In practice, get acquainted with the SCRUM project management methodology' ,
                            number: 4
                        },
                        {
                            title: 'All the processes that you will go through are experiences that are as close to real conditions as possible. This is how commercial software is created in employer companies' ,
                            number: 5
                        },
                        {
                            ...commonItems.program.careerCenter,
                            number: 6
                        },
                        {
                            ...commonItems.program.mobileAdditionalCourses,
                            number: 7
                        }
                    ]
                },
                teachers: [commonItems.teachers.pilipenko, commonItems.teachers.ovchinnikov],
                cv: {
                    salary: 'From 80.000 USD',
                    skills: [
                        'I develop web applications in Java', 'Working with file system and databases', 'Testing applications', 'Know and apply application design patterns',
                        'I know the principles of object-oriented programming', "I can read other people's code", 'I apply algorithms to solve problems',
                        'Working with the Git version control system', 'I develop multi-threaded applications', 'Ability to work in a distributed team using the SCRUM methodology',
                        'I write clear code that is easy to maintain', 'Basic knowledge of the Spring framework (Spring Boot)',
                        'I create web applications on the Spring framework (Spring Boot)'
                    ],
                    projects: ['1. Search engine', '2. Social network', '3. And 15 more mini-projects'],
                    tools: ['Java', 'IntelliJ idea', 'MySQL', 'PostgreSQL', 'Spring', 'Git', 'Bash', 'SQL', 'Figma']
                },
                questions: [
                    commonItems.questions.java_development,
                    commonItems.questions.help,
                    {
                        title: 'What is the training schedule on the platform? Can you combine it with work?',
                        text: "You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. What's more, all videos will be available at the end of the course, so you can brush up on your knowledge at any time."
                    },
                    {
                        title: 'What is the duration of the course?',
                        text: 'The duration of the main course is 6 months. During this time, you will be able to study 338 videos and complete 62 practical tasks at an average pace to hone your skills.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in six months and find a job by this time, you need to study for 2 hours a day. But it is not at all necessary to follow a rigid schedule - you can study when it is convenient for you, at a pace that is comfortable for you.'
                    },
                    {
                        title: 'Explaining terms used on this site',
                        terms: [
                            {
                                title: 'Code',
                                text: 'instructions that are written in a programming language. Such instructions can be "translated" into a special format - a set of zeros and ones, which will be understood by the computer.'
                            },
                            {
                                title: 'Data store',
                                text: 'computer system for storing information. The closest analogy is a library in which various documents are stored in an orderly manner: books, magazines, newspapers. We can choose and get the data we need for a while.'
                            },
                            {
                                title: 'Application optimization',
                                text: 'improving the performance of the application, for example, reducing the search time, increasing the number of clients served. At the same time, the result that we expect from the application does not change. For example, we found a shorter route to the bakery, and instead of 15 minutes on the road, we now spend 10. This means that we have optimized the route in terms of time.'
                            },
                            {
                                title: 'Search engine',
                                text: 'a program that allows you to search for information among a large amount of data. For example, Yandex searches for websites, online stores help to find suitable products among tens of thousands of items. In all these examples, a search engine is running under the hood.'
                            },
                            {
                                title: 'Terms of Reference, or TK',
                                text: 'a document that contains all the requirements for the program. Written in an understandable language, contains diagrams, charts, tables, images. When the developers hand over the program to the customer, he evaluates the result according to the requirements from the TOR.'
                            },
                            {
                                title: 'Variables',
                                text: 'areas of memory that a program uses to store data while it is running. Variables can be compared to boxes in a storage room. Like boxes, each variable has a number - an identifier. It can be accessed to use the data that is stored inside.'
                            },
                            {
                                title: 'Pilot work',
                                 text: "work to test hypotheses. Before doing something large-scale, it is advisable to check: will it work at all and does anyone need it? For example, in the production of TV shows, they often shoot a pilot episode - they show it to a focus group and determine whether it is worth working further and trying something new. It's the same with programs."
                            },
                            commonItems.questions.oop,
                            {
                                title: 'Framework Spring',
                                text: 'a software platform that facilitates the development of web applications in Java. The framework takes care of all routine tasks, allowing the developer to focus only on business tasks.'
                            },
                            {
                                title: 'Writing queries',
                                 text: 'create database commands for reading, adding, modifying, and deleting database data.'
                            },
                            {
                                title: 'Database',
                                 text: 'programs that allow you to store various data and work with them: read, add new ones, change and delete existing ones.'
                            },
                            {
                                title: 'Relational databases',
                                text: 'databases that store data in tables that can be linked. These databases include MySQL, PostgreSQL, Oracle Database, YDB, and many others.'
                                },
                            {
                                title: 'Git version control system',
                                 text: 'a system with which you can conveniently store and track changes in the code. Git helps development teams work in sync — you can see who is doing what, and if something goes wrong, you can roll back at any time. For any developer, knowing the basics of GIt is a must.'
                            }
                        ]
                    }
                ]
            }
        },
        javaPro: {
            preview: {
                profession: 'Java developer PRO',
                time: '11 months',
                path: 'java-pro'
            },
            course: {
                header: {
                    text: 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist',
                    features: [
                        { title: '★ 4.5 out of 5', text: 'based on 38 137 course evaluations' },
                        { title: '4 months later', text: 'you can get a job' },
                        { title: 'Practical work', text: 'with expert verification' },
                        commonItems.header.guarantees
                    ]
                },
                market: {
                    title: 'There are not enough experts in the market',
                    list: [{ title: '3 000 companies', text: 'currently looking for Java Developers' }, { title: '90 000 dollars', text: 'average salary of a middle-specialist' }],
                },
                for_who: [
                    {
                        subtitle: 'For those who want to get started in Java development',
                        text: 'You will understand how to create web applications, explore the possibilities of Java, develop the first projects for real customers and build a portfolio'
                    },
                    {
                        subtitle: 'Programmers from other fields',
                        text: 'You will understand the features and syntax of Java, master a new popular language and be able to change the direction of work to work on interesting projects and earn more'
                    },
                    {
                        subtitle: 'Beginners in Java',
                        text: 'Learn how to structure and debug your code, work with frameworks and databases, improve your level and be able to take on complex expensive projects in Java'
                    }
                ],
                skills: [
                    { title: 'Create applications in Java', text: 'You will understand how to turn lines of code into a working program, master object-oriented programming and be able to develop applications with different functionality' },
                    { title: 'Understand algorithms and data structures', text: 'Learn how to efficiently solve typical problems using well-known algorithms and existing data structures in Java' },
                    { title: 'Use Git', text: 'Learn how to work with a distributed version control system and be able to easily make or roll back changes in different versions of the same project' },
                    { title: 'Work with databases', text: 'Learn the difference between MySQL, Redis and MongoDB, get familiar with Hadoop and learn how to manage large amounts of data' },
                    { title: 'Optimize code', text: 'Learn how to debug and optimize your code, and be able to create programs with high performance' },
                    { title: 'Use Spring', text: 'Explore the capabilities of the Spring framework and learn how to build web applications with it' }
                ],
                program: {
                    title: {
                        text: 'You are waiting for 3 blocks with different levels of difficulty, videos from experts and practical tasks',
                        counts: [{ number: '145', text: 'thematic modules' }, { number: '1043', text: 'video footage' }]
                    },
                    programItems: [
                        {
                            title: 'Fundamentals of Java',
                            listItems: [
                                'Introductory module', 'The syntax of the language. Part 1', 'The syntax of the language. Part 2', 'Objects and classes. Part 1 Methods and classes',
                                'Objects and classes. Part 2. Encapsulation', 'Objects and classes. Part 3. Static, constants and enum', 'Primitives', 'Numbers and dates', 'Strings',
                                'Arrays and collections', 'Inheritance and polymorphism', 'Features of OOP in Java', 'Exceptions, debugging, testing and logging', 'Working with files and network',
                                'Working with MySQL in Java', 'Multithreading', 'HTTP protocol', 'Development of web applications', 'Non-relational databases and queues', 'Development of desktop applications',
                                'Performance and optimization', 'Algorithms', 'Data structures', 'Distributed storage and computing', 'Design patterns', 'Preparation for the final project'
                            ],
                            number: 1
                        },
                        {
                            title: 'Working with the Spring Framework',
                            listItems: [
                                'Introduction to Spring MVC (XML-based approach)', 'Introduction to Spring MVC (Java-based approach)', 'Development on Spring Boot', 'Templates and Thymeleaf',
                                'Working with data', 'Spring REST API. Part 1', 'Spring REST API. Part 2', 'Spring Application Security', 'Testing Spring Applications', 'Spring AOP',
                                'Integration with external services', 'Preparation for the final project'
                            ],
                            number: 2
                        },
                        {
                            title: 'Dive into the world of infrastructure and enterprise solutions, systems, technologies and standards of the Java ecosystem',
                            listItems: [
                                'Teamwork. Flexible management methodologies', 'Teamwork. Interaction tools', 'Development life cycle', 'IT architecture. From application to ecosystem',
                                'Microservices. Organization', 'JVM mechanisms. Memory management', 'JVM mechanisms. Compilation', 'JVM mechanisms. Processes and threads',
                                'Advanced technologies in Java. Exceptions', 'Advanced technologies in Java. Generics', 'Advanced technologies in Java. Collections in development',
                                'Advanced technologies in Java. functional models', 'QA (Quality Assurance)', 'Development infrastructure', 'Monitoring, logging and audit',
                                'Microservices. Data flow management', 'Microservices. Administration', 'Technologies of corporate development. Work with protocols and protection of data transmission channels',
                                'Technologies of corporate development. Service tyres', 'Apache Camel integration framework'
                            ],
                            number: 3
                        },
                        {
                            ...commonItems.program.webLayout,
                            number: 4
                        },
                        {
                            ...commonItems.program.additionalCourses,
                            number: 5
                        },
                        {
                            title: 'Search engine',
                            text: 'You will develop a search engine that will help site visitors quickly find the information they need using the search field',
                            number: 6
                        },
                        {
                            title: 'Social network',
                            text: 'Together with a team of 5-10 developers under the guidance of an experienced team leader, create a full-scale analogue of the social network VKontakte on 60+ standard pages',
                            number: 7
                        }
                    ]
                },
                teachers: [
                    {
                        fullName: 'Kirill Koshaev',
                        text: 'Technical Director at QWEP. More than 7 years of experience in Java and JavaScript programming and business application development on the Spring Framework',
                        additionalInfo: ['2012–2013 IT support specialist at Castorama. 2018–2021. Developer at Gazprom. Participated in the creation of a corporate portal. Since 2021 - CTO at QWEP. Develops solutions for the automotive business. Created games and applications for Android. Team leader in teams of course participants who work on group final projects']
                    },
                    {
                        fullName: 'Andrey Lichman',
                        text: 'CTO at Raiffeisenbank. Development experience — 14 years',
                        additionalInfo: ['Specializes in microservice architecture and distributed systems. 2008–2011 Java developer at IATVT. Created a web application for delivery. 2011–2012 Senior Java Developer at AMARGO. Developed a highly loaded ticket search engine, statistics collection and analytics functions, optimized the system performance. 2012–2018 Lead developer and team leader at Sberbank. Created web applications for internal use, designed the architecture for the analytical platform. 2018–2020. Lead Developer at Kryptonite. Designed and developed algorithms for a company that deals with cryptography, Big Data storage, neural networks and information security. Since 2020 — CTO at Raiffeisenbank. Developed a system for receiving electronic payments']
                    },
                    commonItems.teachers.pilipenko,
                    commonItems.teachers.ovchinnikov,
                ],
                cv: {
                    salary: 'From 83.000 USD',
                    skills: [
                        'Java application development', 'Working with the Git version control system', 'Working on the Bash command line',
                        'Debugging and testing applications, JUnit', 'Working with MySQL, ability to write queries with JOIN, knowledge of HAVING, GROUP BY, ORDER BY'
                    ],
                    projects: ['1. Search engine', '2. Social network', '3. And 15 more mini-projects'],
                    tools: ['Java', 'IntelliJ idea', 'MySQL', 'PostgreSQL', 'Redis', 'Spring', 'Git', 'Bash', 'SQL', 'Figma']
                },
                questions: [
                    commonItems.questions.java_development,
                    commonItems.questions.schedule,
                    commonItems.questions.help,
                    {
                        title: 'How many hours per week will I need to devote to the course?',
                        text: 'Depends on how quickly you want to master the profession. To complete the course in 11 months, you need to practice 2 hours a day. But you do not have a rigid schedule - you can study at any convenient time, at a pace that is comfortable for you.'
                    }
                ]
            }
        },
        cyberSecurity: {
            preview: {
                profession: 'Cyber security specialist',
                time: '1 year',
                path: 'cybersecurity'
            },
            course: {
                header: {
                    text: 'You will learn how to look for vulnerabilities, prevent threats and ensure the security of IT systems. Learn a sought-after profession even with zero experience in IT',
                    features: [
                        commonItems.header.durationOneYear,
                        { title: '5 months later', text: 'you can get a job' },
                        commonItems.header.guarantees,
                        { title: 'Practical works', text: '100 works' }
                    ]
                },
                market: {
                    title: 'The task of a cyber security specialist is to look for vulnerabilities in programs, websites and mobile applications, protect data and repel hacker attacks',
                    list: [{ title: '2,000+ jobs for cyber security professionals', text: 'open' }, { title: '70 000 dollars', text: 'cyber security specialist salary' }],
                },
                skills: [
                    { text: 'Understand system and network administration' },
                    { text: 'Find and exploit OS and web application vulnerabilities' },
                    { text: 'Analyze application source code' },
                    { text: 'Identify potential cyber threats to systems' },
                    { text: 'Recover systems after a cyberattack' },
                    { text: 'Work with security and access policies' },
                    { text: 'Capture and analyze network traffic' },
                    { text: 'Automate routine cyber security processes' },
                    { text: 'Work with intrusion detection systems' }
                ],
                program: {
                    title: {
                        text: 'We regularly update the course, and each time we consult with employers to understand what skills they expect from applicants. You will be able to find an internship in 5-6 months from the start of training',
                        counts: [{ number: '12', text: 'months' }, { number: '110', text: 'modules' }]
                    },
                    programItems: [
                        {
                            title: 'Windows administration and work with Powershell. 1 month',
                            listItems: ['You will learn how to store passwords and personal data of users, understand how certificates and accounts work. Master the PowerShell tool with which you will learn how to administer multiple computers and servers running Windows at once'],
                            number: 1
                        },
                        {
                            title: 'The structure of the Linux OS. 2 weeks',
                            listItems: ['Understand how the Linux operating system works, which runs many servers in companies around the world'],
                            number: 2
                        },
                        {
                            title: 'Linux system administration. 1 month',
                            listItems: ['Learn how to administer computers on Linux, including managing user data, installing programs, working with the system kernel. Learn how to issue commands to the computer using the bash line'],
                            number: 3
                        },
                        {
                            title: 'Linux network administration. 1 month',
                            listItems: ['Learn how to administer your network environment using Linux computers'],
                            number: 4
                        },
                        {
                            title: 'Database security. 3 weeks',
                            listItems: ['Learn how to secure your databases with encryption, access restrictions, and more'],
                            number: 5
                        },
                        {
                            title: 'Fundamentals of Python. Part 1. 2 weeks',
                            listItems: ["Learn the basics of one of the world's premier programming languages. Python is very popular among backend developers working with servers. Therefore, mastering it is one of the key skills of a cybersecurity specialist"],
                            number: 6
                        },
                        {
                            title: 'Introduction to information security. 2 weeks',
                            listItems: ['An introductory course in which you will become more familiar with the profession of a cybersecurity specialist. Master the basic processes of information security and decide in which specialization you should develop'],
                            number: 7
                        },
                        {
                            title: 'Security analysis. 6 weeks',
                            listItems: ['Learn to collect information about the infrastructure to find its weaknesses. You will be able to test security systems for strength with the help of pentests'],
                            number: 8
                        },
                        {
                            title: 'Implementation, modernization and support of information security systems. 3 weeks',
                            listItems: ["Familiarize yourself with the main classes of protective equipment. Learn how to implement information security solutions in the company's infrastructure and support them"],
                            number: 9
                        },
                        {
                            title: 'Monitoring and response to information security events and incidents. 6 weeks',
                            listItems: ['You will be able to monitor cybersecurity, analyze and investigate incidents, generate reports'],
                            number: 10
                        },
                        {
                            title: 'Compliance. 3 weeks',
                            listItems: ['Get acquainted with the legislation in the field of information security and learn how to create documentation that regulates cybersecurity processes'],
                            number: 11
                        },
                        {
                            title: 'Application protection. 6 weeks',
                            listItems: ['Learn to identify software vulnerabilities and shortcomings in the source code, form recommendations on how to neutralize them'],
                            number: 12
                        },
                        {
                            title: 'Git version control system. 1 week',
                            listItems: ['Master one of the main collaboration tools in IT. You will learn how not to get confused in dozens of program iterations and keep a clear code version history'],
                            number: 13
                        },
                        {
                            title: 'Net. 1 month',
                            listItems: ['Understand how local networks and the Internet work. You will understand how network devices work and learn how to build network perimeter protection using Firewall'],
                            number: 14
                        },
                        {
                            title: 'Fundamentals of Python. Part 2. 2 weeks',
                            listItems: ['Deepen your knowledge of Python and get familiar with the principles of object-oriented programming'],
                            number: 15
                        }
                    ]
                },
                projects: [
                    {
                        title: 'Company Case: Incident Investigation',
                        text: 'You have to find vulnerabilities, write a report and give recommendations on how to fix them. You will get a full experience of working on a project in a real company — you will complete tasks in a cloud environment on virtual stands'
                    },
                    {
                        title: 'Telegram bot for a travel agency',
                        text: 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels'
                    }
                ],
                teachers: [
                    {
                        fullName: 'Lev Paley',
                        text: 'Head of the information security service of SO UES',
                        additionalInfo: ['Head of the information security service of SO UES. 16+ years of experience in IT and information security, 7 years of experience in managing information security departments and processes. Lecturer in MBA courses and head of the cybersecurity expert group of the Digital Energy Association']
                    },
                    {
                        fullName: 'Aleksandr Kuznetsov',
                        text: 'Head of Architecture Group at JSOC Rostelecom-Solar',
                        additionalInfo: ['16+ years of experience in information security. 7+ years of experience in SOC in Russia and abroad. 10+ years of experience in teaching and public activities (author of publications in ISACA Journal, Hacker, Windows IT Pro/RE, etc.). Implemented the first in Russia practical cyber exercises for SOC, several hundred cybersecurity projects']
                    },
                    {
                        fullName: 'Denis Rozhkov',
                        text: 'Head of software development at Gazinformservice LLC',
                        additionalInfo: ['Head of software development at Gazinformservice LLC. More than 15 years in IT. Participant of large projects of the federal level. Speaker of technical conferences Highload++, Infostart, GISDAYs and others']
                    },
                    {
                        fullName: 'Sergei Smirnov',
                        text: 'Researcher of the activities of APT-groups and malicious software',
                        additionalInfo: ['Author of the course "Security Analysis". Threat Hunting/Threat Intelligence engineer at a major Russian bank. 5 years of experience in cyber intelligence, incident investigation and threat detection. 3 years of experience in researching the activities of APT groups, malware analysis']
                    },
                    {
                        fullName: 'Konstantin Samatov',
                        text: 'Advisor to the Director of ANO DPO "Institute of Business and Information Technologies"',
                        additionalInfo: ['Author of the course "Ensuring Compliance". Advisor to the Director of ANO DPO "Institute of Business and Information Technologies". 19 years of experience in the field of security. Member of the Board of the Association of Chief Information Security Officers']
                    },
                    {
                        fullName: 'Natalia Onishchenko',
                        text: 'Head of Network Security at SO UES',
                        additionalInfo: ['Author of the course "Implementation, modernization and support of information security systems". 20 years of experience in IT, 5 years in teaching. Head of Network Security at SO UES']
                    },
                    {
                        fullName: 'Konstantin Vasiliev',
                        text: 'Leading SOC engineer of a large Russian state corporation',
                        additionalInfo: ['Leading SOC engineer of a large Russian state corporation. 6+ years of experience in practical information security: penetration testing, investigation of cyber incidents, building monitoring and response systems. 3+ years of teaching and mentoring experience']
                    }
                ],
                cv: {
                    salary: 'From 90.000 USD',
                    skills: [
                        'Security analysis of web applications and network infrastructure', 'Conducting a security audit', 'Malware analysis', 'Development of safety recommendations',
                        'Conducting penetration tests', 'Advanced Linux Administration', 'Preparation of documentation and reports on test results'
                    ],
                    projects: ['1. Investigation of an incident with the search for vulnerabilities', '2. Telegram bot for a travel agency'],
                    tools: ['PowerShell', 'Linux OS', 'Python', 'Git']
                },
                questions: [
                    {
                        title: 'I have never done cybersecurity. Will I succeed?',
                        text: 'Yes. First, you will learn administration on Windows and Linux, working with databases, the basics of programming in Python. By the time you move on to cybersecurity, you will have a sufficient base of IT skills to complete the course.'
                    },
                    {
                        title: 'I see that the course has separate blocks on finding vulnerabilities and testing protection systems. How legal is it?',
                        text: 'There is no illegal content on the course. You will become familiar with cybersecurity legislation, so you will understand what activities are allowed and which are illegal.'
                    },
                    {
                        title: 'Will I need to earn additional certifications to start a career in cybersecurity?',
                        texts: [
                            'In the early stages of a career, certifications are a nice addition, but not essential. First of all, they save interviewers time when applying for a job. But if you can describe and prove your skills (and the Career Center will show you how to do this), then you will not need certificates.',
                            'By the way, according to Habr, 88% of cybersecurity specialists do not have certificates.'
                        ]
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'To complete the course in 12 months, we recommend studying the materials for 2 hours a day. But there is no hard schedule - it all depends on you. On average, platform users spend 3 to 5 hours per week.'
                    },
                    commonItems.questions.schedule,
                    commonItems.questions.help
                ]
            }
        },
        devops: {
            preview: {
                profession: 'DevOps engineer',
                time: '7 months',
                path: 'devops'
            },
            course: {
                header: {
                    text: 'You will learn how to administer Linux, set up web servers and master the DevOps methodology: you will automate the development of complex IT products. Get support from the Career Center and get a job as a Junior Specialist in 7 months. The course will suit you even if you have never done system administration or programming',
                    features: [commonItems.header.durationSevenMonths, commonItems.header.threeProjectsInPortfolio, commonItems.header.guarantees]
                },
                market: {
                    title: 'DevOps engineer automates application development. It helps the company to quickly and safely implement changes to the code, supports the work of highly loaded services. Thanks to the DevOps approach, the quality of applications does not suffer due to the high speed of development, and the business does not lose profit due to failures and can focus on development. A DevOps engineer knows how to program in Python, organizes continuous integration and code delivery - CI / CD, works with Docker, Ansible, Terraform, Gitlab, implements tools and processes to improve product security. Such specialists are hired by companies with a large IT infrastructure. For example, banks, IT and telecom, fintech and retailers',
                    list: [commonItems.market.listItems.devopsVacancies, commonItems.market.listItems.devopsSalary],
                },
                for_who: [
                    {
                        subtitle: 'For beginners',
                        text: 'You will master the created IT-specialty from scratch and learn the skills on practical cases. You will be able to start practicing June the next day after the course'
                    },
                    {
                        subtitle: 'Junior level IT specialists',
                        text: 'You will learn how to work with Linux and databases. The course will help close gaps in knowledge and master DevOps from scratch. You can earn more in a related field'
                    },
                    {
                        subtitle: 'Professionals who need DevOps skills',
                        text: 'You will understand the intricacies of DevOps practices from scratch and will be able to expand your competencies at work and increase your value as a specialist'
                    }
                ],
                skills: [
                    { title: 'Administer linux', text: 'Learn how this operating system works and get to know the Linux terminal' },
                    { title: 'Work with databases', text: 'Get familiar with SQL and MySQL databases. Learn to manage large volumes of information and quickly get what you need using queries' },
                    { title: 'Apply CI/CD principles', text: 'Understand what problems continuous integration and delivery solves. Using gitlab-ci as an example, learn how to set up the layout of services in development and testing environments' },
                    commonItems.skills.devopsDocker,
                    commonItems.skills.devopsInfrastructure,
                    commonItems.skills.devopsMonitoring
                ],
                program: {
                    title: {
                        text: 'The course is suitable for absolute beginners. First, you will learn the basics of Linux, Python, the command line, databases, networking, and web servers. And then get a full set of skills for working as a Junior DevOps engineer',
                        counts: [{ number: '49', text: 'modules' }, { number: '271', text: 'video footage' }]
                    },
                    programItems: [
                        { ...commonItems.program.pythonBasic_1, number: 1 }, { ...commonItems.program.devopsStart, number: 2 },
                        { ...commonItems.program.devopsBasic, number: 3 }, { ...commonItems.program.git, number: 4 },
                        { ...commonItems.program.pythonBasic_2, number: 5 }, { ...commonItems.program.sql, number: 6 },
                        {
                            title: 'Workshops for participants',
                            listItems: ['Gitlab architecture', "Let's dive into Gitlab CI", 'Solving practical problems using Gitlab CI'],
                            number: 7
                        }
                    ]
                },
                projects: [
                    commonItems.projects.infrastructure, commonItems.projects.accountManagement,
                    { title: 'Python Basic Course: Travel Agency Bot', text: commonItems.projects.texts.chatBot }
                ],
                teachers: [
                    commonItems.teachers.naumenko, commonItems.teachers.zaycev, commonItems.teachers.aquilin,
                    commonItems.teachers.bryukhanov, commonItems.teachers.krylov, commonItems.teachers.dmitriev
                ],
                cv: {
                    salary: 'From 95.000 USD',
                    skills: [
                        'Programming in Python', 'Working with containers and building images (Docker)', 'Ensuring the stability and security of servers',
                        'Continuous integration management, ability to set up CI/CD pipelines (Gitlab)', 'Ansible code testing (Molecule, Karate)',
                        'Implementing DevOps in a company with existing processes', 'Working with infrastructure as code (Ansible, Terraform)',
                        'Monitoring setup (Prometheus, Grafana, ELK)'
                    ],
                    projects: ['1. Infrastructure platform', '2. Framework for Account Management', '3. Travel Agency Bot'],
                    tools: ['Python', 'Git', 'SQL']
                },
                questions: [
                    {
                        title: 'I have never done system administration and know nothing about DevOps. Will I succeed?',
                        text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be assisted by practicing experts who will accompany you throughout the course.'
                    },
                    {
                        title: 'How much time should be devoted to the course?',
                        text: 'To complete the course in 7 months, you need to study 9 hours a week. But you do not have a rigid schedule - you can watch course materials at any time and study according to a schedule that is comfortable for you.'
                    },
                    commonItems.questions.schedule,
                    commonItems.questions.help
                ]
            }
        },
        devopsPro: {
            preview: {
                profession: 'DevOps engineer PRO',
                time: '1 year',
                path: 'devops-pro'
            },
            course: {
                header: {
                    text: 'You will master the DevOps methodology from scratch: combine development and operation processes, accelerate the implementation and delivery of new features to the user. Become a middle-level DevOps specialist',
                    features: [commonItems.header.durationOneYear, { title: '6 projects', text: 'in portfolio' }, commonItems.header.guarantees]
                },
                market: {
                    title: 'DevOps engineer automates build, test, deployment and production. It helps the company quickly and safely introduce changes to the code or launch a new product, and supports the operation of highly loaded services. Thanks to the DevOps approach, the quality of development does not suffer due to speed, and the business does not lose profit due to failures and can focus on development. Such specialists are hired by companies with a large IT infrastructure, for example, banks, IT and telecom, fintech and retailers',
                    list: [commonItems.market.listItems.devopsVacancies, commonItems.market.listItems.devopsSalary, { title: 'From 100 000 dollars', text: 'earn Middle DevOps Engineers' }],
                },
                for_who: [
                    {
                        subtitle: 'Beginners without experience',
                        text: 'First, master system administration, and then delve into DevOps and you can start a career in this area'
                    },
                    {
                        subtitle: 'DevOps entry-level engineers',
                        text: 'Build a clear step-by-step path of professional development. The course will help close gaps in knowledge and grow in income'
                    },
                    {
                        subtitle: 'Professionals who need DevOps skills',
                        text: 'You will understand the intricacies of the DevOps methodology from scratch, expand your working competencies and increase your value as a specialist'
                    }
                ],
                skills: [
                    commonItems.skills.devopsDocker,
                    commonItems.skills.devopsInfrastructure,
                    commonItems.skills.devopsMonitoring,
                    { title: 'Work with version control systems', text: 'Learn Git to work effectively with your codebase. Learn to apply the principles of CI / CD, learn how to set up the layout of services in development and testing environments' },
                    { title: 'Automate processes', text: 'Get to know Ansible: learn how to set up servers and deploy applications at the click of a button' },
                    { title: 'Use kubernetes (k8s)', text: 'You will manage loads between containers, automate deployment, and ensure data privacy' }
                ],
                program: {
                    title:  {
                        text: 'The course is suitable for absolute beginners. First, you will learn the basics of Linux, Python, the command line, databases, networking, and web servers. And then get a full set of skills for working as a Middle DevOps engineer',
                        counts: [{ number: '49', text: 'modules' }, { number: '271', text: 'video footage' }]
                    },
                    programItems: [
                        {
                            ...commonItems.program.pythonBasic_1,
                            number: 1
                        },
                        {
                            ...commonItems.program.devopsStart,
                            number: 2
                        },
                        {
                            ...commonItems.program.devopsBasic,
                            number: 3
                        },
                        {
                            title: 'DevOps engineer. Advanced',
                            listItems: [
                                'Introduction: YAML, Utilities, Git', 'Service Discovery', 'CMS (Configuration Management System). Ansible', 'Docker', 'CI/CD: Jenkins, GitLab',
                                'Monitoring: collection of metrics', 'Monitoring: collection of logs', 'Safety', 'Networks', 'Cloud services', 'Final work'
                            ],
                            number: 4
                        },
                        {
                            ...commonItems.program.git,
                            number: 5
                        },
                        {
                            ...commonItems.program.pythonBasic_2,
                            number: 6
                        },
                        {
                            ...commonItems.program.sql,
                            number: 7
                        },
                        {
                            title: 'Docker',
                            listItems: [
                                'Core components of Docker', 'Basic Docker Concepts', 'Docker Builder and Dockerfile', 'Additional tools for working with Docker', 'Container orchestration',
                                'How docker works. Inside view', 'Final work'
                            ],
                            number: 8
                        },
                        {
                            title: 'Infrastructure platform based on Kubernetes',
                            listItems: [
                                'Introduction to Kubernetes: basic concepts and architecture', 'Core Kubernetes objects', 'Security and access control', 'Kubernetes network subsystem',
                                'Data storage in Kubernetes', 'Templates: Helm and its analogues (Jsonnet, Kustomize)', 'HPA', 'Monitoring of cluster components and applications running in it',
                                'Service mesh. Introduction to Istio and Envoy', 'Kubernetes for Continuous Delivery (CI/CD). Integration with CI service', 'Cluster operation',
                                'Final work'
                            ],
                            number: 9
                        },
                        {
                            title: 'GitLab Architecture',
                            number: 10
                        },
                        {
                            title: 'Diving into Gitlab CI',
                            number: 11
                        },
                        {
                            title: 'Solving practical problems using Gitlab CI',
                            number: 12
                        },
                    ]
                },
                projects: [
                    commonItems.projects.infrastructure,
                    commonItems.projects.accountManagement,
                    {
                        title: 'Python Basic Course: Travel Agency Bot',
                        text: 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels'
                    }
                ],
                teachers: [
                    { fullName: 'Ilya Feoktistov', text: 'Head of DevOps at Bling' }, { fullName: 'Denis Matveev', text: 'Sysadmin/DevOps at Ignitia AB (Sweden)' },
                    commonItems.teachers.naumenko, commonItems.teachers.zaycev,
                    commonItems.teachers.aquilin, commonItems.teachers.bryukhanov,
                    commonItems.teachers.krylov, commonItems.teachers.dmitriev,
                ],
                cv: {
                    salary: 'From 100.000 USD',
                    skills: [
                        'Programming in Python', 'Working with containers and building images (Docker)', 'Ensuring the stability and security of servers',
                        'Creation of a full-fledged infrastructure platform based on a Kubernetes cluster', 'Ansible code testing (Molecule, Testinfra)',
                        'Continuous integration management, ability to set up CI/CD pipelines (Gitlab)', 'Implementing DevOps in a company with existing processes',
                        'Working with cloud services', 'Working with infrastructure as code (Ansible, Terraform)', 'Monitoring setup (Prometheus, Grafana, ELK)',
                        'Development of own CI/CD and monitoring solutions'
                    ],
                    projects: ['1. Infrastructure platform', '2. Framework for Account Management', '3. Travel Agency Bot'],
                    tools: ['Python', 'Git', 'SQL', 'Docker']
                },
                questions: [
                    {
                        title: "I don't know anything about DevOps. Will I succeed?",
                        text: 'Certainly! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. Everything else will be assisted by practicing experts who will accompany you throughout the course.'
                    },
                    {
                        title: 'How many hours per week will I need to devote to training on the platform?',
                        text: 'On average, platform users study about 9 hours a week and complete the course in 12 months. But we don’t have hard deadlines — learn on the platform at your own pace.'
                    },
                    commonItems.questions.schedule,
                    commonItems.questions.help
                ]
            }
        }
    }
}

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setOpenedCourse: (state, action: PayloadAction<string>) => {
            state.openedCourse = action.payload
        }
    }
})

export const { setOpenedCourse } = coursesSlice.actions
export const coursesReducer = coursesSlice.reducer
