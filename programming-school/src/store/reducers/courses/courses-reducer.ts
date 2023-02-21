import { CourseI } from "@/interfaces/courses"
import { InferActionTypes } from "../../../../../src/Redux/Redux-Store"

class TitleTextItem {
    title: string
    text: string

    constructor(title: string, text: string) {
        this.title = title
        this.text = text
    }
}

class CoursesReducer {
    text: string

    constructor(text: string) {
        this.text = text
    }
}

class Preview {
    profession: string
    imgSrc: string
    time: string
    path: string

    constructor(profession: string, imgSrc: string, time: string, path: string) {
        this.profession = profession
        this.imgSrc = imgSrc
        this.time = time
        this.path = path
    }
}

class ForWho {
    imgSrc: string
    subtitle: string
    text: string

    constructor(imgSrc: string, subtitle: string, text: string) {
        this.imgSrc = imgSrc
        this.subtitle = subtitle
        this.text = text
    }
}

class Count {
    number: string
    text: string

    constructor(number: string, text: string) {
        this.number = number
        this.text = text
    }
}

class Project {
    imgSrc: string
    title: string
    text: string

    constructor(imgSrc: string, title: string, text: string) {
        this.imgSrc = imgSrc
        this.title = title
        this.text = text
    }
}

const commonItems = {
    header: {
        features: {
            guarantees: new TitleTextItem('We guarantee animation', 'or refund money *' ),
            getJobInSixMonths: new TitleTextItem('6 months later', 'you can get a job' ),
            getJobInSevenMonths: new TitleTextItem('7 months later', 'you can get a job' ),
            fourProjectsInPortfolio: new TitleTextItem('4 projects', 'in portfolio' ),
            threeProjectsInPortfolio: new TitleTextItem('3 projects', 'in portfolio' ),
            durationSevenMonths: new TitleTextItem('Duration', '7 months' ),
            forBeginners: new TitleTextItem('For beginners', 'the course is suitable for those who start from scratch' ),
            feedback: new TitleTextItem('Feedback', 'on practical work from experts' ),
            durationOneYear: new TitleTextItem('Duration', '1 year' )
        }
    },
    market: {
        titleTexts: {
            fullstackText: 'There are not enough fullstack developers on the market'
        },
        listItems: {
            thirdPlace: new TitleTextItem('3rd place', 'in the list of the most in-demand IT professions in 2019, according to Lucky Hunter'),
            devopsVacancies: new TitleTextItem('Over 4 000 vacancies', 'open to DevOps engineers'),
            devopsSalary: new TitleTextItem('From 70 000 dollars', 'beginner salary specialist')
        }
    },
    skills: {
        devopsDocker: new TitleTextItem('Work in Docker', 'Learn all about containerization. You will write your own docker images, run containers, build dependencies and define access parameters'),
        devopsInfrastructure: new TitleTextItem('Manage infrastructure like code', 'Learn to create, modify and version environments with Terraform and Ansible'),
        devopsMonitoring: new TitleTextItem('Set up monitoring', 'You will collect metrics and logs using Prometheus and the elk stack, build convenient dashboards in Grafana. Learn about incident handling and feedback systems')
    },
    content: {
        pythonBasic_1: {
            title: 'Fundamentals of Python. Part 1',
            listItems: [
                'Introduction', 'Basics of working with Python', 'Operators, expressions', 'Conditional if statement, branches', 'Conditional if statement: continuation',
                'While loop', 'For loop: loops with a counter', 'The for loop: features of working with range', 'The for loop: working with strings', 'Nested loops',
                'Numbers. The types are int and float', 'Functions: start', 'Float features'
            ],
        },
        pythonBasic_2: {
            title: 'Fundamentals of Python. Part 2',
            listItems: [
                'Installing and configuring the IDE', 'Basic collections. Lists', 'List: methods for working with lists', 'List views', 'Basic collections. Strings',
                'Basic collections. Dictionaries', 'Basic collections. Tuples', 'Functions: continued', 'Working with files', 'Exceptions: dealing with errors',
                'Introduction to OOP', 'Basic principles of OOP', 'Iterators and generators', 'Decorators: basic level', 'Deep class work and built-in decorators',
                'Decorators: advanced level', 'Functions: end', 'Libraries for working with data'
            ],
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
            ],
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
        frameworks: new TitleTextItem('Framework to choose from: React.js, Vue.js, Angular', 'You can design interfaces faster with the help of frameworks - ready-made libraries for developing dynamic sites'),
        additionalCourses: {
            title: 'Additional courses',
            listItems: ['Git version control system', 'Working on the Bash command line', 'SQL query language', 'Figma from zero to PRO', 'Presentation of final projects']
        },
        careerCourse: new TitleTextItem('Career Course: Employment and Development', 'Get useful tips for further career development. Learn how to write a strong resume, take tests and prepare for interviews. Understand typical interview questions'),
        employment: new TitleTextItem('Employment through the Career Center', 'A career counselor will help you find a job and prepare you for an interview. You will be able to start working as a Junior in a company and take a course at the same time'),
        nodejs: new TitleTextItem('Node.js', 'Learn how server-side JavaScript works in Node.js. Learn the Express.js framework, learn how to work with databases'),
        typescript: new TitleTextItem('TypeScript. A basic level of', 'Learn advanced JavaScript - TypeScript is slowly becoming the standard for web development. You will be able to write more predictable and reliable code, work in large companies'),
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
        careerCenter: new TitleTextItem('✦ Job placement with Career Center', 'At this stage, you are ready for employment - a career consultant will begin to help you find a job and prepare you for an interview. You will be able to start working as a Junior in the company and go through advanced topics at the same time'),
        mobileAdditionalCourses: {
            title: '5 additional courses: Git, SQL, Figma, Testing and Career. 3 months',
            listItems: [
                'Git version control system. You have learned how to work with a version of the software code. You will be able to compare and change them using the Git system',
                'SQL query language. You will learn a popular language that will help you speed up your work with requests',
                'Career and development for a programmer. You will notice how to grow in the profession and where the programmer can develop',
                'Figma from scratch to PRO. You have learned to work in the most popular service for creating interfaces',
                "Manual Application Testing - You'll learn how to write verification tests and find packages that even experienced mobile testers miss"
            ],
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
            ],
        },
        iosAdvanced: {
            title: 'iOS developer. Advanced level. 3 months',
            subtitle: 'You will dive deeper into iOS development. Learn to test and optimize applications, use design patterns, create your own libraries and speed up the product',
            listItems: [
                'Introduction to SwiftUI', 'SwiftUI. Element layout', 'SwiftUI. Navigation', 'SwiftUI. Widgets', 'SwiftUI. Layout of elements', 'SwiftUI. Working with State',
                'SwiftUI. Animation', 'combine. Part 1: The Basics', 'What is a combine. Part 2', 'What is a combine. Part 3', 'What is a combine. Part 4', 'Testing',
                'Xcode Optimization and Tools', 'Push Notifications', 'Design patterns', 'Team final project'
            ],
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
            ],
        },
        devopsBasic: {
            title: 'DevOps engineer. Basics',
            listItems: [
                'Development evolution: CI/CD', 'Introduction to DevOps', 'Introduction to CD (Continuous Delivery)', 'Continuous integration using GitLab CI',
                'Continuous delivery. Working with development environment and PROD', 'Infrastructure as code (IaC)', 'Virtualization', 'Docker', 'Ansible',
                'Infrastructure code testing', 'Monitoring', 'Incident management', 'Tools', 'Final work'
            ],
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
            imgSrc: '/courses/course/projects/devops/1.png',
            title: 'DevOps engineer course. Basics. infrastructure platform',
            firstParagraph: 'You will go through all the stages of working on a full-fledged platform, as in a real company:',
            listItems: [
                'deploy infrastructure in the cloud', 'automate deployment', 'test services, set up monitoring and log management system',
                'make a separate environment for production', 'think over a plan for the development of the platform'
            ],
            secondParagraph: 'Add the finished project to your portfolio and you can present it to the employer at the interview.'
        },
        accountManagement: {
            imgSrc: '/courses/course/projects/devops/2.png',
            title: 'Getting Started in DevOps: Framework for Account Management',
            firstParagraph: 'You will consolidate the theory and work out approaches to solving real-life problems that DevOps engineers work on:',
            listItems: [
                'deploy a certification authority for issuing certificates', 'create and configure a VPN server', 'set up monitoring', 'make a backup',
                'prepare documentation', 'plan infrastructure development'
            ],
        }
    }
}

const frontend = {
    header: {
        text: 'Thanks to frontend developers, we leave likes and comments, add products to the cart and quickly understand online maps. In the course, you will learn how to create web service interfaces using programming languages and additional technologies. You will be able to develop task planners, instant messengers, online stores',
        features: [
            new TitleTextItem('Suitable for beginners', 'without programming experience'), new TitleTextItem('6 months', 'before animation'),
            new TitleTextItem('Up to 8 projects', 'in portfolio'), new TitleTextItem('We guarantee animation', 'or refund money *'),
            new TitleTextItem('Practice on webinars', 'with developers from large companies')
        ],
    },
    market: {
        titleText: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
        list: [
            new TitleTextItem('4 100 vacancies', 'now open for a frontend developer position'), new TitleTextItem('55 000 dollars', 'beginner salary'),
            new TitleTextItem('6 months', 'intensive training on the platform is enough to get your first job')
        ]
    },
    skills: [
        new TitleTextItem('Build websites in HTML and CSS', 'Master the most popular layout languages and be able to create websites that will look good on any screen'),
        new TitleTextItem('Work with frameworks', 'Learn to use Angular, React. js, Vue.js. You can easily assemble web applications from individual components'),
        new TitleTextItem('Program in JavaScript and TypeScript', 'Master two popular programming languages at once. With JavaScript you will create interactive interfaces, and with TypeScript you will be able to quickly and reliably develop complex projects'),
        new TitleTextItem('Develop server applications with Node.js', 'Learn how to create a backend part of a service, work on its security and load resistance. You can take on more tasks and increase your earnings'),
        new TitleTextItem('Work in a team like a pro', 'Boost your time management and personal efficiency. You will be able to work effectively in a team with other developers, designers and team leaders'),
    ],
    content: {
        programItems: [
            { ...commonItems.content.webLayout, number: 1 }, { ...commonItems.content.jsBasic, number: 2 }, { ...commonItems.content.frameworks, number: 3 },
            { ...commonItems.content.nodejs, number: 4 }, { ...commonItems.content.typescript, number: 5 }, { ...commonItems.content.careerCourse, number: 6 },
            { ...commonItems.content.employment, number: 7 }, { ...commonItems.content.additionalCourses, number: 8 }
        ]
    }
}

const initialState = {
    openedCourse: '',
    courses: {
        python: {
            preview: new Preview('Python developer', '/courses/previews/python.png', '10 months', 'python'),
            course: {
                logoSrc: '/courses/course/logos/python.png',
                header: {
                    text: 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and an analogue of a popular social network for a portfolio, and the Career Center will help you find a job as a Python developer',
                    features: [
                        new TitleTextItem('★ 4,75 out of 5', 'based on 26 293 course evaluations'), commonItems.header.features.getJobInSixMonths,
                        new TitleTextItem('9 courses', 'you can start working'), new TitleTextItem('4 projects', 'including group training'),
                        commonItems.header.features.guarantees
                    ]
                },
                market: {
                  titleText: 'Python is the perfect language for a beginner. Python code is easy to write and read, the language consistently ranks highly in high rankings, and Pythonists are in demand in almost all broad IT - programming, data analysis, system administration and testing. YouTube, Intel, Pixar, NASA - these are just a few of the countries in the world that use Python in their products',
                  list: [
                      new TitleTextItem('Over 8,778 vacancies', 'open to Python developers in August 2022'),
                      new TitleTextItem('80 000 dollars', 'salary of a novice Python developer'),
                      new TitleTextItem('6 months', 'intensive classes and practice on the course are enough to find your first job'),
                      new TitleTextItem('YouTube, Intel, Pixar, NASA','companies in which the participants of the course got a job'),
                  ]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/python/1.png', 'Newbies in code', 'Those who have just decided to become a programmer, but have not chosen in which area they are going to work. Python is a universal language'),
                    new ForWho('/courses/course/for-who/python/2.png', 'Beginning developers', 'For those who are already learning Python on their own or from textbooks. But there is no one to ask a question and ask for help')
                ],
                skills: [
                    new CoursesReducer('Create simple and complex modular programs: from console scripts to chat bots'), new CoursesReducer('Write autotests'),
                    new CoursesReducer('Deploy applications to the server'), new CoursesReducer('Work with databases'),
                    new CoursesReducer('Work with popular frameworks - Django, Flask'), new CoursesReducer('Package projects in Docker and apply DevOps practices'),
                    new CoursesReducer('Use industrial development tools: Git, PyCharm, Postman'), new CoursesReducer('Write database queries in Python with Sqlalchemy, Django-ORM'),
                    new CoursesReducer('Work in a team')
                ],
                projects: [
                    new Project('/courses/course/projects/python/1.png', 'Chatbot for hotel search', commonItems.projects.texts.chatBot),
                    new Project('/courses/course/projects/python/2.png', 'Online store', 'A team of five course participants developed the server part for the marketplace, an analogue of Yandex Market. The marketplace has a search by category and filters, a shopping cart, an order form with the possibility of online payment'),
                    new Project('/courses/course/projects/python/3.png', 'Social network', 'The participant developed the server part of the application, used the Flask framework and the principles of asynchronous programming. Its users will be able to publish posts, comment on them and put likes')
                ],
                content: {
                    title: {
                        text: 'You are waiting for 3 blocks of programming in Python and more than 100 topics for analysis. The difficulty of the lessons increases gradually. Additional and bonus courses can be taken in parallel with the main ones',
                        counts: [new Count('10', 'months'), new Count('3', 'final project')]
                    },
                    programItems: [
                        { ...commonItems.content.pythonBasic_1, number: 1 },
                        { ...commonItems.content.pythonBasic_2, number: 2 },
                        {
                            title: 'Final project: Telegram bot',
                            text: 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels',
                            number: 3
                        },
                        {
                            title: 'Python framework Django ≈ 2.5 months',
                            listItems: [
                                'Introduction to web frameworks', 'Introduction to Django', 'Handling requests in Django', 'Database and models', 'Forms', 'Working with files',
                                'Testing', 'Authentication and authorization', 'Admin', 'Localization and internationalization', 'Access rights', 'Documentation',
                                'Optimization', 'Data export'
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
                        { ...commonItems.content.careerCenter, number: 6 },
                        { ...commonItems.content.pythonAdvanced, number: 7 },
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
                reviews: {
                    letters: ['M', 'I', 'N', 'S', 'P', 'P'],
                    user_data: ['Maxim Brechko, Russia, Moscow', 'Igor Novikov, Moscow', 'Nikita Pack', 'Sergey Kolesnik', 'Pavel Semenov', 'Phedor Egorov, Gagarin'],
                    course: `Course "Profession Python-developer"`,
                    texts: [
                        'I like the presentation, the ability to explain a topic that you could not understand on your own for a week in a few 10-minute videos, and moderately complex practical work that allows you to consolidate the studied material',
                        'I like that you can choose the pace of learning that suits you. Clear and uncluttered videos with elements of humor. Good practical tasks that help to consolidate the studied material and develop practical skills. Prompt and friendly support of the curator. Interesting Telegram channel',
                        'I like the constant feedback from the platform and the curator. A large number of practical work, allowing you to instantly apply the knowledge gained. An abundance of bonus courses that provide an opportunity to independently develop not only according to the program chosen for study, but also in other aspects. The process of checking practical tasks sometimes takes time, but this is not a minus: while you wait, you can consolidate the material you have covered and remember important formulations and concepts',
                        'Very extensive training, excellent practical tasks, excellent communication with the curator. I will say right away that it is not for the lazy - you have to work here',
                        'I liked the communication with the curator and the depth of knowledge gained on the course. Some points at first seem incomprehensible, but as practical tasks are completed, everything becomes clear as two times two',
                        "It's all pretty compelling. But the most magnificent thing is the curator's approach to the participants. Good open dialogue, without pretense of severity and precision. You feel free, and not shaking from tension, as before defending your thesis at the university",
                    ]
                },
                resume: {
                    salary: '300 usd',
                    texts: ['Python Core', 'Installing and configuring the web server', 'Clean code', 'Working with external APIs', 'Git version control system',
                        'Async/await', 'Working with databases (pure SQL, ORM, Postgres)', 'Working with Django, Flask, FastAPI frameworks', 'Web mark-up',
                        'Deploying applications and working with docker/docker-compose', 'Creation of bots', 'API design'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have no programming experience. Is this course right for me?',
                        'Do you need to know math?',
                        'How is streaming learning different from regular learning?',
                        'How many hours per week will I need to devote to the course?',
                        'Who will help me on the course?',
                        'Will there be bonuses for results on the course?',
                        'Are there any special computer requirements?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course - the course is designed for absolute beginners. But you will have to try - read additional literature, do not miss classes and do practical work on time. Skillbox will help with the rest - curators will analyze practical tasks, assistants will answer questions about the process of passing, and the Career Center will take care of your animation',
                        'At the initial stages, advanced knowledge is not required from you - a school mathematics course is enough. However, do not be alarmed if you have to figure out topics that you forgot or did not go through - the curator will help you refresh your knowledge or give useful links',
                        'In the stream, you will complete the Python Basic course in 2 times faster than regular participants. You are waiting for daily online classes in a group, deadlines for completing training modules and reviewing work at online meetings with the curator and the team',
                        'Depends on the format. According to the usual schedule, you can study at a convenient time - on average, platform users spend 3 to 5 hours a week on the course. You do not have a rigid schedule and deadlines. An accelerated schedule in the stream requires more time - you need to find at least 3 hours a day for practical classes and 1.5 hours a week for an online meeting with a curator. It is also impossible to postpone the execution of practical work in the flow - you must hand it in before a certain deadline',
                        "Practical work is checked by a curator - a practicing Python developer. You can ask him a question in your personal account or contact the course's Telegram chat.Participants of streaming training communicate with the group curator in Discord, discuss difficult tasks with a personal partner - buddy. The team leader at the weekly team meeting makes a list of topics for analysis at the final webinar with the curator",
                        'Participants who complete practical work and submit projects receive internship invitations before the end of the course. For individual achievements in streaming training, you will receive achievements - awards that can be attached to the name',
                        'Python does not require powerful hardware and large resources. Any computer running Windows 7 or 10, Linux Ubuntu or macOS 10.11 or higher will do. To install the PyCharm development environment, you will need at least 4Gb of RAM, 5 Gb of free hard disk space and one of the latest versions of a 64-bit operating system',
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        fullstack_python:  {
            preview: new Preview('Fullstack Python developer', '/courses/previews/fullstack-python.png', '10 months', 'fullstack-python'),
            course: {
                logoSrc: '/courses/course/logos/fullstack-python.png',
                header: {
                    text: 'You will be able to actively participate in all stages of the development of sites and web interfaces - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more',
                    features: [ commonItems.header.features.getJobInSixMonths, new TitleTextItem('Help', 'in animation'), commonItems.header.features.fourProjectsInPortfolio ]
                },
                market: {
                    titleText: commonItems.market.titleTexts.fullstackText,
                    list: [commonItems.market.listItems.thirdPlace, new TitleTextItem('90 000 dollars', 'skilled worker salary')]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/fullstack-python/1.png', 'Beginners in programming', 'You will master a sought-after profession from scratch, learn how to program in Python and JavaScript, create websites and work with databases. You will be able to write the backend and frontend part yourself'),
                    new ForWho('/courses/course/for-who/fullstack-python/2.png', 'Beginning developers', 'If you already have basic knowledge of frontend or backend, then the training will help you master the full cycle of product development. You will become a universal specialist and increase your income'),
                    new ForWho('/courses/course/for-who/fullstack-python/3.png', 'Experienced programmers', 'You will increase your chances of getting a high-paying job, get advice from experienced teachers and learn how to develop as a fullstack programmer and work on complex and expensive projects')
                ],
                skills: [
                    new CoursesReducer('Build websites in HTML and CSS'), new CoursesReducer('Work with databases'), new CoursesReducer('Work with API'),
                    new CoursesReducer('Programming in Python'), new CoursesReducer('Build modern web applications'), new CoursesReducer('Use the Git version control system'),
                    new CoursesReducer('Create interactive websites with JavaScript'), new CoursesReducer('Apply the principles of OOP in practice'),
                    new CoursesReducer('Understand modern web frameworks for frontend and backend development')
                ],
                projects: [
                    new Project('/courses/course/projects/fullstack-python/1.png', 'Landing', 'You create a landing page based on the brief to consolidate the knowledge gained in the course'),
                    new Project('/courses/course/projects/fullstack-python/2.png', 'User interface', 'You will develop a user interface similar to Instagram'),
                    new Project('/courses/course/projects/fullstack-python/3.png', 'Space game', 'You will write a behavior algorithm for space drones that collect fuel from asteroids')
                ],
                content: {
                    title: {
                        text: 'You are waiting for 4 main blocks and 119 additional courses with video materials and practical tasks',
                        counts: [new Count('100+', 'thematic modules'), new Count('500+', 'video footage')]
                    },
                    programItems: [
                        { ...commonItems.content.webLayout, number: 1 }, { ...commonItems.content.jsBasic, number: 2 }, { ...commonItems.content.pythonBasic_1, number: 3 },
                        { ...commonItems.content.pythonBasic_2, number: 4 }, { ...commonItems.content.pythonAdvanced, number: 5 }, { ...commonItems.content.frameworks, number: 6 },
                        { ...commonItems.content.careerCourse, number: 7 }, { ...commonItems.content.employment, number: 8 }, { ...commonItems.content.additionalCourses, number: 9 }
                    ]
                },
                reviews: {
                    letters: ['V', 'A', 'P'],
                    user_data: ['Vyacheslav Smirnov', 'Alexander Chemakin', 'Pavel Shkaburin'],
                    course: `Course "Profession Python Fullstack-developer"`,
                    texts: [
                        'Very well designed curriculum. Curators are always ready to help and suggest the best solution to problems',
                        'Skillbox is the best educational platform: cool speakers and curators, very good feedback, understandable and high-quality educational content',
                        'Excellent presentation of information. The volume of new material in each module is such that it is neither too much nor too little. The content of the modules is constantly updated'
                    ]
                },
                resume: {
                    salary: '300 usd',
                    texts: ['Development of turnkey online stores', 'Writing commented and formatted code', 'Administration and deployment of pilot works',
                        'Ability to set and meet deadlines', 'Creation of animation sites', "Ability to understand other people's code", 'Setting up CRM integration with external systems',
                        'Writing queries against relational databases'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never programmed. Will I succeed?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! With the right approach to learning, independent expansion of horizons and timely completion of practical tasks, you can achieve results even without special basic knowledge. Experienced tutors will help you with everything, who will accompany you throughout the course',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        web: {
            preview: new Preview('Web developer', '/courses/previews/web.png', '9 months', 'web'),
            course: {
                logoSrc: '/courses/course/logos/web.png',
                header: {
                    text: 'A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend',
                    features: [
                        new TitleTextItem('★ 4,5 out of 5', 'based on 55 143 course evaluations'), commonItems.header.features.getJobInSixMonths,
                        new TitleTextItem('10 projects', 'in portfolio on GitHub'), commonItems.header.features.guarantees,
                        new TitleTextItem('Course fit', 'beginners without experience')
                    ]
                },
                market: {
                    titleText: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
                    list: [
                        new TitleTextItem('3 160 vacancies', 'web developers open for July 2022'), new TitleTextItem('65 000 dollars', 'beginner salary'),
                        new TitleTextItem('6 months', 'intensive training on the platform is enough to get your first job')
                    ]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/web/1.png', 'Beginners in web development', 'Learn the basics of JavaScript and PHP programming from scratch. Learn how to design websites in HTML and CSS. Create your first portfolio projects'),
                    new ForWho('/courses/course/for-who/web/2.png', 'Beginning developers', 'Level up with the most popular programming languages Learn Vue, ReactFramework or Angular frameworks and expand your coding skills'),
                    new ForWho('/courses/course/for-who/web/3.png', 'IT specialists', 'Learn to program in JavaScript and PHP, you will create projects on the Laravel framework. You can change direction and become a popular web developer')
                ],
                skills: [
                    new TitleTextItem('Build websites in HTML and CSS', 'Which will adaptively adapt to the screen size and look equally cool on different devices: from small smartphones to TVs'),
                    new TitleTextItem('Program in JavaScript and PHP', 'Master two popular languages at once - using JavaScript you will create interactive interfaces, and use PHP to program the server side of sites'),
                    new TitleTextItem('Work with JavaScript frameworks', 'With the help of frameworks, you will easily assemble web applications from individual components, as from the details of a designer. You will have 3 frameworks to choose from: ReactFramework, Vue or Angular'),
                    new TitleTextItem('Building the backend with Node.js and Laravel', 'You will connect databases, work with the file system, template engines, forms, and process search queries. Get familiar with microservice architecture and learn how to build resilient applications'),
                    new TitleTextItem('Work in a team', 'Take part in a team internship and create your own project - an online store. You organize the work as in a real company - you will have sprints, calls with a team leader, and you will control versions in Git')
                ],
                projects: [
                    new Project('/courses/course/projects/web/1.png', 'Landing', 'You make up a landing page for the Blanchard art gallery according to the layout from the customer'),
                    new Project('/courses/course/projects/web/2.png', 'Pages for an online store', 'You make up several pages for an online furniture store according to the terms of reference from the customer'),
                    new Project('/courses/course/projects/web/3.png', 'Customer contact management system', 'You will develop a complete CRM system. Through your application, employees will be able to track the lists of transactions, clients, and follow the document flow. You will go through all stages of commercial software development in a company and be ready for teamwork'),
                    new Project('/courses/course/projects/web/4.png', 'Online store', 'You will develop a front-end for a product aggregator using Vue or Angular'),
                    new Project('/courses/course/projects/web/5.png', 'Pomodoro task tracker', 'Write a task tracker with a timer in the ReactFramework framework'),
                    new Project('/courses/course/projects/web/6.png', 'Note service', 'Develop a note service with the ability to autosave, delete, upload to PDF, search by notes and infinite scroll. Deploy the result to the server')
                ],
                content: {
                    title: {
                        text: 'Practice based on real cases is waiting for you. Training on the platform can be equated to a year of work',
                        counts: [new Count('1100', 'video footage'), new Count('131', 'practical work')]
                    },
                    programItems: [
                        { ...commonItems.content.webLayout, number: 1 }, { ...commonItems.content.jsBasic, number: 2 },
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
                        { title: '✦ Job placement with our Career Center', number: 6},
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
                reviews: {
                    letters: ['S', 'E', 'S', 'E', 'A', 'R'],
                    user_data: ['Sergey Gadaev', 'Elena Nekit, Moldova, Kishinev', 'Salavat Sadriev', 'Elena Volkova', 'Andrey Korobka', 'Radik Gataulin'],
                    course: `Course "Profession Web-developer"`,
                    texts: [
                        'I have never regretted that I took the courses of the “Web developer” profession. Everything is cool, I especially liked the work of the curators - Alexander Dudukalo and Maxim Vasyanovich, thanks to them and the whole Skillbox team! I also want to highlight the availability of additional courses on intersecting technologies and knowledge, they are very useful',
                        "I want to note the live presentation of the material. The speakers explain in detail, and most importantly, clearly explain and share their personal experience. This is very valuable and distinguishes learning in Skillbox from the classical university. I'm still only at the beginning of the journey, but I like it, and this is already a lot to maintain motivation",
                        'Proper distribution of materials, step-by-step training - I really like everything! I have been going to this for a long time',
                        'I really like that I can adjust the training schedule as it suits me. As well as interesting and informative videos',
                        "I like how the material for training is presented, tests are presented, as well as the curators' answers to questions in the course's Telegram chat",
                        'I like the opportunity to build my own training schedule, as well as the presence of an assistant when performing practical tasks. It is worth noting special attention to the verification of practical work: they check it qualitatively and reasonably'
                    ]
                },
                resume: {
                    salary: '270 usd',
                    texts: ['Cross-browser, adaptive layout on HTML, CSS', 'Working with databases', 'Developing Laravel-applications', 'Teamwork',
                        'Working with front-end frameworks React, Vue, Angular', 'PHP and JavaScript programming', 'Working with external APIs', 'Knowledge of algorithms and data structures',
                        'JavaScript programming', 'Applying the principles of OOP in practice', 'Application testing', 'Building a high load backend'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have no experience in web development. Is this course right for me?',
                        'Is English required?',
                        'How many hours per week will I need to study?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Yes, the course is suitable for absolute beginners with no programming experience. But in order to achieve a result, you need to try - to complete practical tasks, read additional literature and develop final projects. The rest will be helped by practicing experts who will accompany you throughout the course',
                        'Not at all necessary. The documentation of all programming languages has a translation into Russian, and you will remember the names of the code functions in the process of learning on the platform',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours per week. Next to each course name is an approximate duration in hours. You can focus on this data and plan training on the platform according to the schedule that is convenient for you',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        fullstack_php: {
            preview: new Preview('Fullstack PHP developer', '/courses/previews/fullstack-php.png', '10 months', 'fullstack-php'),
            course: {
                logoSrc: '/courses/course/logos/fullstack-php.png',
                header: {
                    text: 'You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development',
                    features: [new TitleTextItem('10+ courses', 'included'), commonItems.header.features.getJobInSixMonths, commonItems.header.features.fourProjectsInPortfolio]
                },
                market: {
                    titleText: "Demand for web developers remains high - business profits directly depend on how convenient it is for customers to use the company's website. There are not enough specialists in the market, so companies offer high salaries and remote work",
                    list: [commonItems.market.listItems.thirdPlace, new TitleTextItem('75 000 dollars', 'skilled programmer salary')]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/fullstack-php/1.png', 'For those new to web development', 'Learn the basic principles of programming and overcome the first difficulties with a personal mentor'),
                    new ForWho('/courses/course/for-who/fullstack-php/2.png', 'Beginning developers', 'Master backend, frontend and other stacks. Learn PHP and learn how to work with application programming interface'),
                    new ForWho('/courses/course/for-who/fullstack-php/3.png', 'IT specialists', 'You will be able to create projects in JavaScript and its frameworks, program in PHP and make up. Learn to work in a team and be a versatile developer')
                ],
                skills: [
                    new CoursesReducer('Build quality and fast websites'), new CoursesReducer('Apply the principles of OOP in practice'),
                    new CoursesReducer('Work in the Git version control system'), new CoursesReducer('Responsive layout for mobile devices'),
                    new CoursesReducer('Develop pages and site modules in PHP'), new CoursesReducer('Create admin panels with Bootstrap and Laravel'),
                    new CoursesReducer('Create interactive websites with JavaScript'), new CoursesReducer('Work with technical documentation')
                ],
                projects: [
                    new Project('/courses/course/projects/fullstack-php/1.png', 'One page website', 'You will create an adaptive one-page website on the subject given by the teacher'),
                    new Project('/courses/course/projects/fullstack-php/2.png', 'Online store', 'You are designing web pages for an online furniture store')
                ],
                content: {
                    title: {
                        text: '3 basic courses are waiting for you: on web layout, JavaScript basics and one of its frameworks - ReactFramework, Vue or Angular.To master backend development, you will learn PHP. And then take 11 additional courses on algorithms, Git, technical EnglishBig and more',
                        counts: [new Count('100+', 'thematic modules'), new Count('500', 'video footage')]
                    },
                    programItems: [
                        { ...commonItems.content.webLayout, number: 1 }, { ...commonItems.content.jsBasic, number: 2 }, { ...commonItems.content.php, number: 3 },
                        { ...commonItems.content.laravel, number: 4 }, { ...commonItems.content.frameworks, number: 5 }, { ...commonItems.content.additionalCourses, number: 6 }
                    ]
                },
                reviews: {
                    letters: ['I'],
                    user_data: ['Ivan Dudikov'],
                    course: 'Course "Profession PHP Fullstack-developer"',
                    texts: ['I liked the video answer on practical work with a detailed report. I see that the curator has a deep knowledge of the course material. He easily navigates the topic, gives advice on improving my code. I am facing this for the first time']
                },
                resume: {
                    salary: '800 usd',
                    texts: ['Development of turnkey online stores', 'Ability to set and meet deadlines', 'Writing commented and formatted code', 'Creation of animation sites',
                        'Writing queries against relational databases', "Ability to understand other people's code", 'Setting up CRM integration with external systems', 'Administration and deployment of pilot works'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never done web development. Will I succeed?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be helped by practicing experts who will accompany you throughout the course',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        frontend: {
            preview: new Preview('Frontend developer', '/courses/previews/frontend.png', '7 months', 'frontend'),
            course: {
                logoSrc: '/courses/course/logos/frontend.png',
                header: frontend.header,
                market: frontend.market,
                for_who: [
                    new ForWho('/courses/course/for-who/frontend/1.png','For absolute beginners', 'You will go from a person far from IT to a confident web developer with teamwork skills. You can start a career in a promising IT studio'),
                    new ForWho('/courses/course/for-who/frontend/2.png', 'Beginning programmers', 'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession')
                ],
                skills: frontend.skills,
                content: {
                    title: {
                        text: 'Master the profession and become a Junior specialist. Practice based on real cases awaits you. Training on the platform can be equated to a year of work. The training period is 8 months',
                        counts: [new Count('609', 'video footage'), new Count('49', 'practical work')]
                    },
                    programItems: frontend.content.programItems
                }
            }
        } as CourseI,
        frontend_pro: {
            preview: new Preview('Frontend developer PRO', '/courses/previews/frontend-pro.png', '10 months', 'frontend-pro'),
            course: {
                logoSrc: '/courses/course/logos/frontend-pro.png',
                header: frontend.header,
                market: frontend.market,
                for_who: [
                    new ForWho('/courses/course/for-who/frontend-pro/1.png', 'For beginners', "You don't need to be good at math or have programming experience. Step by step you will learn how to develop websites. You will start with simple landing pages, and by the end of the training you will know frameworks, create complex enterprise services and work in a team"),
                    new ForWho('/courses/course/for-who/frontend-pro/2.png', 'Beginning programmers', 'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession'),
                    new ForWho('/courses/course/for-who/frontend-pro/3.png', 'Freelancers with no experience in IT', 'Turn programming from a hobby into a profitable profession. Master advanced layout skills, learn JavaScript and frameworks in depth. Close gaps in knowledge and be able to apply for the position of a middle-developer in a large company')
                ],
                skills: frontend.skills,
                content: {
                    title: {
                        text: 'Master the profession, become a Junior specialist or develop to the Middle level through online consultations with an expert. Practice based on real cases awaits you. Training on the platform can be equated to a year of work. The training period is 10 months',
                        counts: [new Count('721', 'video footage'), new Count('67', 'practical work')]
                    },
                    programItems: frontend.content.programItems
                },
                resume: {
                    salary: '300 usd',
                    texts: ['Responsive and cross-browser layout', 'Adjusting layouts in Figma and Photoshop', 'Knowledge of JavaScript', 'Scrum development',
                        'Working with Web API and HTTP/HTTPS protocols', 'Knowledge of SQL', 'Creation of sites and applications on Vue.js, React.js', 'Working on the Bash command line',
                        'Advanced CSS3 and HTML5 skills', 'Working with Git version control systems', 'Building server solutions', 'Deploy, assembly of projects for production'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never programmed. Will I succeed?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        "Who will help me learn on the platform?",
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be helped by practicing experts who will accompany you throughout the course',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        fullstack_js: {
            preview: new Preview('Fullstack JavaScript developer', '/courses/previews/fullstack-js.png', '10 months', 'fullstack-js'),
            course: {
                logoSrc: '/courses/course/logos/fullstack-js.png',
                header: {
                    text: 'You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, ReactFramework or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more',
                    features: [
                        new TitleTextItem('Program', 'from 12 courses'), commonItems.header.features.getJobInSixMonths, commonItems.header.features.fourProjectsInPortfolio,
                        commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'There are not enough experts in the market',
                    list: [new TitleTextItem('6 000 companies', 'currently looking for JavaScript developers'), new TitleTextItem('80 000 dollars', 'skilled worker salary')]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/fullstack-js/1.png', 'Those who want to start a career as a programmer', 'You will learn how to make up, code in JavaScript and develop full-fledged websites from scratch. Master the full cycle of creating web projects and be able to get a job in an IT company'),
                    new ForWho('/courses/course/for-who/fullstack-js/2.png', 'Beginning developers', 'You will get acquainted with Node.js and frameworks and deepen your knowledge. You can move to the position of a fullstack developer in a web studio or create turnkey websites on freelance'),
                    new ForWho('/courses/course/for-who/fullstack-js/3.png', 'Experienced professionals', 'You will learn Vue.js, ReactFramework.js or Angular and be able to create complex interactive interfaces. Get soft skills for professional development and understand where to go next')
                ],
                skills: [
                    new TitleTextItem('Make up websites', "Get familiar with HTML and CSS, be able to create landing pages and multi-page responsive websites. Learn to find errors in someone else's layout and fix already finished code"),
                    new TitleTextItem('Work with frameworks', 'Learn ReactFramework.js, Vue.js or Angular and learn how to create dynamic interactive user interfaces'),
                    new TitleTextItem('Develop backend sites', 'You will learn the principles of object-oriented programming and will be able to develop sites with different functionality in JavaScript using Node.JS'),
                    new TitleTextItem('Work with databases', 'Learn the difference between MySQL, Redis and MongoDB. Learn to manage large amounts of data and get what you want with queries'),
                    new TitleTextItem('Use Git', 'Learn how to work with a distributed version control system, be able to easily make or roll back changes and work on a project in a large team'),
                    new TitleTextItem('Work with the network', 'You will understand how client-server interaction works, learn how to work with the API and be able to set up frontend and backend communication within one project')
                ],
                projects: [
                    new Project('/courses/course/projects/fullstack-php/1.png', 'Landing', 'Build a landing page based on a brief from a customer using HTML and CSS'),
                    new Project('/courses/course/projects/fullstack-php/2.png', 'User interface', 'Develop a web application using JavaScript'),
                    new Project('/courses/course/projects/fullstack-php/3.png', 'Note service', 'Develop the frontend and backend for a personal note service using Node.js'),
                    new Project('/courses/course/projects/fullstack-php/4.png', 'Online store', 'Create a full-fledged online store using the Vue.js framework'),
                    new Project('/courses/course/projects/fullstack-php/5.png', 'Integration with Reddit', 'Set up the integration of posts from the Reddit news site using the ReactFramework.js framework'),
                    new Project('/courses/course/projects/fullstack-php/6.png', 'Online store', 'Develop a full-fledged online store on the Angular framework')
                ],
                content: {
                    title: {
                        text: 'Online lectures and practical tasks based on real cases are waiting for you',
                        counts: [new Count('100+', 'thematic modules'), new Count('500+', 'online lessons')]
                    },
                    programItems: [
                        { ...commonItems.content.webLayout, number: 1 }, { ...commonItems.content.jsBasic, number: 2 }, { ...commonItems.content.nodejs, number: 3 },
                        { ...commonItems.content.frameworks, number: 4 }, { ...commonItems.content.additionalCourses, number: 5 },
                    ]
                },
                reviews: {
                    letters: ['M'],
                    user_data: ['Muxamadzhon Nabiev, Uzbekistan, Phergana'],
                    course: 'Course "Profession Javascript Fullstack-developer"',
                    texts: ['Everything is clear and clearly explained. Before starting my studies, I thought that it would be simply unrealistic to learn this profession, but Skillbox proved the opposite, which I am very happy about. Thanks a lot!']
                },
                resume: {
                    salary: '540 usd',
                    texts: ['Layout of sites on HTML and CSS', 'Working with HTTP/HTTPS protocols', 'Redux basics', 'Web development with JavaScript',
                        'Backend development with Node.js', 'Working with Web API', 'Adaptive layout', 'Working with databases: MySQL, MongoDB, Redis', 'Creating web applications on the React.js/Vue.js/Angular framework',
                        'Working with the Git version control system'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never done programming. Will I succeed?',
                        'What is the training schedule? Can you combine it with work?',
                        'How many hours per week will I need to study?',
                        'Will I be able to communicate with teachers?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! With the right approach to learning, independent expansion of horizons and timely completion of homework, you can achieve results even without special basic knowledge. Experienced mentors will help you with everything, who will supervise you throughout the course',
                        'You can work through the course materials at your convenience, moving through the program at your own pace. Moreover, all lessons will be available at the end of the course, forever, so you can refresh your knowledge at any time. Training is organized in such a way that you can combine it with work, study and personal life',
                        'Everything depends on you. On average, our students study three to five hours per week',
                        'You will have a curator in the Telegram chat, and the teacher will personally comment on homework and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts',
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        php_pro: {
            preview: new Preview('PHP developer PRO', '/courses/previews/php-pro.png', '7 months', 'php-pro'),
            course: {
                logoSrc: '/courses/course/logos/php-pro.png',
                header: {
                    text: 'You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position',
                    features: [
                        new TitleTextItem('6 courses', 'for professional immersion'), commonItems.header.features.durationSevenMonths,
                        new TitleTextItem('Internship', 'in a team led by a team leader'), commonItems.header.features.threeProjectsInPortfolio,
                        commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'PHP is one of the ten most popular programming languages in the TIOBE ranking. Most CMS are written on it, including WordPress, which powers 65% of all sites in the world. PHP under the hood of Wikipedia, Facebook and YouTube. Developers have been developing the language for over 25 years and introducing new features with each version. To keep old projects running and write web applications from scratch, companies hire PHP programmers',
                    list: [new TitleTextItem('2 837 companies', 'currently looking for PHP developers'), new TitleTextItem('80 000 dollars', 'average PHP developer salary')]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/php-pro/1.png', 'For those who want to learn how to program', 'Learn the PHP programming language from scratch, get help and advice from experienced speakers, and practice on real problems. Write the first projects for the portfolio and work in a team'),
                    new ForWho('/courses/course/for-who/php-pro/2.png', 'Beginning developers', 'You structure your existing knowledge, and curators will help you deal with difficult-to-understand topics and recommend additional literature. Learn how to effectively solve everyday tasks for a PHP programmer')
                ],
                skills: [
                    new TitleTextItem('Programming in PHP', 'You will go through the basics, without which it is impossible to grow into a cool PHP developer: learn how to work with variables, data types, conditions, loops, functions. Learn about recursion and scope'),
                    new TitleTextItem('Understand the principles of OOP', 'Learn how to organize code into classes, control access to properties, and encapsulate methods. Make your applications more predictable and secure, and your code more readable'),
                    new TitleTextItem('Work with the file system', 'Learn how to open files for reading or writing on the local system and over the Internet. Get familiar with XML, JSON formats'),
                    new TitleTextItem('Find errors in code', 'Familiarize yourself with the Xdebug debugging tool, you can find and fix errors in the application'),
                    new TitleTextItem('Work with databases', 'Learn how to connect MySQL to a project. Learn how to write queries in SQL, get, add, delete and change information in the database'),
                    new TitleTextItem('Develop on Laravel', 'Get acquainted with the principles of the framework, routing, set up interaction with the database, connect the Blade templating engine. Learn to write and test complex business logic')
                ],
                content: {
                    title: {
                        text: 'Webinars and practice based on real cases are waiting for you',
                        counts: [new Count('39', 'modules'), new Count('206', 'video footage')]
                    },
                    programItems: [
                        { ...commonItems.content.php, number: 1 }, { ...commonItems.content.laravel, number: 2 }, { ...commonItems.content.bash, number: 3 },
                        { ...commonItems.content.git, number: 4 }, { ...commonItems.content.sql, number: 5 }, { ...commonItems.content.knowledge, number: 6 },
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
                    new Project('/courses/course/projects/php/1.png', 'Evgeny Pletnev. Cloud storage', 'A course participant developed an analogue of Dropbox. Users will be able to register on the service, upload files and create folders, search through documents and share files with other participants'),
                    new Project('/courses/course/projects/php/2.png', 'Mikhail Terentiev. Booking service for hotels', 'The course participant developed a booking service similar to Booking.com. Through a personal account, customers can set prices for room categories, and visitors can book rooms for certain dates.'),
                    new Project('/courses/course/projects/php/3.png', 'The third stream of course participants. Product aggregator on the Laravel framework', 'A team of four members created an online store, an analogue of Yandex.Market. The project was developed using the latest version of Laravel. We used a flexible service-repository approach'),
                ],
                resume: {
                    salary: '270 usd',
                    texts: ['Install and configure Denwer, OpenServer', 'Understand and apply OOP in projects', 'Structure the code into files and folders',
                        'I understand the principles of network operation, GET- and POST-requests', 'Working on the command line', 'Working with MySQL databases',
                        'Working with the file system', 'Knowledge of Laravel PHP framework', 'Programming in PHP 7', 'I know the basics of HTML/CSS', 'I debug code manually and am familiar with Xdebug',
                        'I adhere to the DRY principles and follow the code style'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have no programming experience. Will this course help me?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Will I be able to communicate with teachers?',
                    ],
                    texts: [
                        'Of course! The course is designed for beginners, and the PHP programming language can be mastered without special technical training. The main thing - do not forget to read additional literature and consolidate knowledge on practical tasks at the end of the module',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'You will have a curator in the Telegram chat, and the checking teacher will comment on homework and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts',
                    ]
                }
            }
        } as CourseI,
        c_plus_plus: {
            preview: new Preview('C++ developer', '/courses/previews/c-plus-plus-plus-plus++.png', '7 months', 'c-plus-plus-plus-plus-plus-plus'),
            course: {
                logoSrc: '/courses/course/logos/c-plus-plus-plus-plus++.png',
                header: {
                    text: 'C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language. You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills',
                    features: [
                        new TitleTextItem('★ 4,6 out of 5', 'based on 9 746 course evaluations'), commonItems.header.features.durationSevenMonths,
                        new TitleTextItem('2 projects', 'in portfolio'), new TitleTextItem('Support', 'curator'), commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'C++ developers work in large IT companies, game development, web development, create corporate and banking applications, design operating systems and software for robots',
                    list: [new TitleTextItem('4 018 companies', 'currently looking for C++ developers'), new TitleTextItem('100 000 dollars', 'average C++ developer salary')]
                },
                for_who: [
                    new ForWho('/courses/course/for-who/c-plus-plus-plus-plus/1.png', 'For those who want to become a programmer', 'Learn the basic principles of C++ programming. Write your first programs, build a portfolio and start a career in the direction you like'),
                    new ForWho('/courses/course/for-who/c-plus-plus-plus-plus/2.png', 'Developers in other languages', 'Get familiar with C++ syntax and learn the in-demand language. Write a microservice, make a game for UE4 and be able to apply for the position of a middle developer in a game dev or IT company')
                ],
                skills: [
                    new TitleTextItem('Program in C++', 'Learn the syntax, loops, conditions, and features of the language. Learn how to turn lines of code into working programs'),
                    new TitleTextItem('Work with databases', 'Learn the SQL language and be able to quickly get information using database queries'),
                    new TitleTextItem('Use Git', 'Learn how to work with a distributed version control system and be able to make changes to the project together with the team'),
                    new TitleTextItem('Understand the principles of OOP', 'Get familiar with the object-oriented programming paradigm and learn how to work with objects and classes'),
                    new TitleTextItem('Develop microservices', 'You will learn how to create algorithms and will be able to develop complex programs from different independent components'),
                    new TitleTextItem('Create games for UE4', 'Learn how to use the C++ toolkit for game development. You will be able to create simple arkanoids and shooters for the Unreal Engine')
                ],
                projects: [
                    new Project('/courses/course/projects/c-plus-plus/1.png', 'Search engine', "You will develop a search engine for the company's corporate portal - an analogue of the Yandex or Google search string. Learn to get data from web pages and build search indexes. Write a relevancy formula to return search results"),
                    new Project('/courses/course/projects/c-plus-plus/2.png', 'Browser', 'Work with other course participants to create an app that your friends and family can use. Write a full-fledged browser in C ++: with its help, you can search for information, browse the web and surf social networks - like in Google Chrome or Yandex Browser')
                ],
                content: {
                    title: {
                        text: 'Webinars and practical tasks are waiting for you. You will learn how to program in C ++, work with databases, Git version control system and develop games on the Unreal Engine 4. Practice developing services and add projects to your portfolio',
                        counts: [new Count('95', 'thematic modules'), new Count('450', 'video footage')]
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
                        { ...commonItems.content.git, number: 2 }, { ...commonItems.content.sql, number: 3 }, { ...commonItems.content.knowledge, number: 4 },
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
                            ]
                        }
                    ]
                },
                reviews: {
                    letters: ['D', 'N', 'S'],
                    user_data: ['Denis Katkov', 'Nikita Xolodkov', 'Stanisla Talanov'],
                    course: `Course "Profession C++ developer"`,
                    texts: [
                        'I like the availability of explanations, conciseness, brevity of presentation of rather complex things. A fairly quick response of the curator to messages and completed tasks, detailed recommendations and links to additional materials on the topic, if required',
                        "I liked the attitude of the curators and the understanding that the study of absolutely new material is given to everyone in different ways. Regardless of the student's skill level, the curators will always respond as positively as possible, support and guide, so to speak, on the right path",
                        'Well chosen material. Interesting practical tasks motivate to study additional sources and deeper immersion in the topic. At the same time, there is enough material in the videos to complete them'
                    ]
                },
                resume: {
                    salary: '650 usd',
                    texts: ['Application development in C++', 'Cross-platform development', 'Working with the STL library', 'Debugging and monitoring applications',
                        'Working with SQL', 'Working with multithreading', 'Writing code for Unreal Engine 4', 'Creating microservices', 'Working with git, gcc, gdb',
                        'Creating a REST API', 'Work with the documentation'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never programmed in C++. Will I succeed?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be helped by practicing experts who will accompany you throughout the course. The rest will be helped by experienced mentors who will supervise you throughout the course',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        android: {
            preview: new Preview('Android developer', '/courses/previews/android.png', '7 months', 'android'),
            course: {
                logoSrc: '/courses/course/logos/android.png',
                header: {
                    text: "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services. You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course",
                    features: [
                        commonItems.header.features.getJobInSevenMonths, commonItems.header.features.forBeginners, new TitleTextItem('Team internship', 'at the end of the course'),
                        commonItems.header.features.guarantees, new TitleTextItem('Lots of practice', '43 practical work to develop skills')
                    ]
                },
                market: {
                    titleText: '72% of mobile devices in the world run on Android. Therefore, millions of people will be able to use your applications. This is quite realistic, because you can distribute Android applications through several stores at the same time: Play Market, Samsung Store, App Gallery',
                    list: [
                        new TitleTextItem('2 491 vacancies', 'Android Developers Open September 2022'), new TitleTextItem('75 000 dollars', 'average beginner salary'),
                        new TitleTextItem('Crossroads Vprok, CleverPumpkin', 'companies in which the participants of the course were employed')
                    ],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/android/1.png', 'Beginners in programming', 'You will go from a beginner to a confident Android developer without stress: learn to code in Kotlin from scratch, write your first applications for your portfolio and be able to get a job right after the course'),
                    new ForWho('/courses/course/for-who/android/2.png', 'Beginning developers', 'In practice, solidify the basics and delve into more complex topics. Learn how to create and test large applications according to technical specifications from a real customer'),
                    new ForWho('/courses/course/for-who/android/3.png', 'Programmers who want to change direction', 'Learn about the features of developing and testing mobile software. Get system knowledge and portfolio, you can find a job as an Android developer and increase your income')
                ],
                skills: [
                    new TitleTextItem('Programming in Kotlin', 'Kotlin is the main programming language for Android applications. You will learn from scratch both the basic features of the language and advanced concepts such as multithreading'),
                    new TitleTextItem('Work in Android Studio environment', 'Learn how to design screens and program application logic, learn how to release your projects on Google Play'),
                    new TitleTextItem('Use Android SDK', "You will create dynamic applications that solve user problems. For example, learn how to access the device's camera or location"),
                    new TitleTextItem('Create animations and custom screens', 'Boring and static apps are a thing of the past. You will learn everything you need to design custom transitions between application states, and you will be able to code even the most unusual screen'),
                    new TitleTextItem('Timer applications', "Who will use your app if it doesn't work? You will learn how to check the performance of projects under different conditions, use emulators and simulators"),
                    new TitleTextItem('Design stable and fast applications', 'Design patterns will help you speed up the development process, and you will also learn how to avoid memory leaks - this aspect is often forgotten by beginners')
                ],
                projects: [
                    new Project('/courses/course/projects/android/1.png', 'Distribution center emulator', commonItems.projects.texts.emulator),
                    new Project('/courses/course/projects/android/2.png', 'Application for finding movies and series', commonItems.projects.texts.finder),
                    new Project('/courses/course/projects/android/3.png', 'Team Internship: Mobile App for Android', commonItems.projects.texts.teamProject)
                ],
                content: {
                    title: {
                        text: 'You will get all the necessary skills that employers expect from aspiring Android developers in 2022',
                        counts: [new Count('7', 'months'), new Count('43', 'practical work')]
                    },
                    programItems: [
                        { ...commonItems.content.kotlin, number: 1 },
                        { title: 'Final work. Distribution center emulator', number: 2 },
                        {
                            title: 'Android developer. 3 months',
                            subtitle: 'You will go through the basics of Android development: learn how to make screens, animate interfaces, program logic, work with data and the network. Write over 7 mini-projects, including a quiz app, gallery, news feed, and point of interest map',
                            listItems: [
                                'Introduction to the profession', 'Beginning of work', 'Layout', 'Components', 'ConstraintLayout', 'Project resources', 'Application screens', 'Fragments', 'Animation',
                                'Application localization', 'Life cycle', 'Fundamentals of data storage', 'Presentation layer architecture', 'Work with the network (Retrofit)', 'Working with the database (Room)',
                                'Project architecture', 'Working with lists', 'Working with protected OS partitions', 'Location work', 'Firebase', 'Preparing for release'
                            ],
                            number: 3
                        },
                        { title: 'Final work. Android Application', number: 4 },
                        {
                            title: 'Android developer. Advanced level. 2 months',
                            subtitle: 'Master advanced development techniques — learn how to change interfaces. Optimize performance, get familiar with design patterns, and immerse yourself in the concept of reactive programming',
                            listItems: [
                                'We create our own View and animations', 'Working with lists', 'Declarative UI', 'Running tasks in the background: practice', 'Advanced dependency injection. Dagger 2',
                                'Application building patterns', 'Presentation layer patterns', 'Testing', 'Application exit', 'Memory leaks and static analyzers', 'Code review at an advanced level'
                            ],
                            number: 5
                        },
                        { title: 'Final work. Team app development', number: 6 }, { ...commonItems.content.careerCenter, number: 7 }, { ...commonItems.content.mobileAdditionalCourses, number: 8 }
                    ]
                },
                reviews: {
                    letters: ['B'],
                    user_data: ['Bukreev Andrey'],
                    course: `Course "Profession Android-developer"`,
                    texts: ["Learning on the Skillbox platform gave me exactly what I wanted. But keep in mind that you have to write a lot of code. Sometimes, in order to do practical work, you need to ask the curator for help. It's cool that he does not give direct hints, but advises additional materials. Sometimes it was necessary to literally break the brain to correct the mistake. But it was worth it. Thanks to my curator Octavian for his support. Also, some advice for newbies. Don't be afraid to make tasks with an asterisk if you want to get the most out of the course"]
                },
                resume: {
                    salary: '400 usd',
                    texts: ['Strong knowledge of the Kotlin programming language', 'Testing mobile apps', 'Experience with multithreading', 'Basic skills in Figma',
                        'I create applications for Android devices', 'Conducting a code review', 'Skills with SQLite, Firebase', 'I follow the code style — my code is easy to read and understand for colleagues',
                        'Understand design patterns', 'Working with the API', 'Version control in Git', 'Technical english'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never developed mobile applications. Will I succeed?',
                        'Which computer is suitable for the course?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will accompany me?',
                        'Are there any installment programs?'
                    ],
                    texts: [
                        'Of course! The course is ideal for beginners without special knowledge. The main thing is not to miss classes and do not forget to practice. Under some videos you will find additional materials - we advise you to devote time to them. If you have any questions about the topic of classes, do not hesitate to contact the Telegram chat',
                        'To work in Android Studio, you need Windows (64 bit), Linux (64 bit) or macOS versions from 10.10 (Yosemite) to 10.14 (Mojave). Minimum 4 GB RAM, recommended 8 GB. Minimum - 2 gigabytes of free disk space, recommended size - 4 GB. Screen resolution - from 1280x800',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        'You will have a mentor in the Telegram chat, and the curator will comment on practical work and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts',
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        ios: {
            preview: new Preview('iOS developer', '/courses/previews/ios.png', '6 months', 'ios'),
            course: {
                logoSrc: '/courses/course/logos/ios.png',
                header: {
                    text: 'An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs interfaces, tests code, and uploads projects to the App Store. On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job',
                    features: [
                        commonItems.header.features.getJobInSixMonths, new TitleTextItem('Feedback', 'on practical work from experienced professionals'),
                        new TitleTextItem('Team internship', 'under the leadership of a team leader'), commonItems.header.features.guarantees,
                        commonItems.header.features.forBeginners
                    ]
                },
                market: {
                    titleText: 'Businesses lack iOS developers, so companies offer high salaries and remote work. Novice iOS developers earn from 60 000 to 80 000 dollars, middles receive up to 100 000 dollars, and seniors and leads can count on salaries of up to 130 000 dollars',
                    list: [new TitleTextItem('2 491 vacancies', 'open to iOS developers'), new TitleTextItem('60 000 dollars', 'iOS developer beginner salary')],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/ios/1.png', 'Beginners in programming', 'The course will allow you to master the profession of an iOS developer from scratch. You will write your first portfolio applications, and after graduation we will help you with animation'),
                    new ForWho('/courses/course/for-who/ios/2.png', 'Beginning developers', 'You will receive the systematic knowledge that is necessary for a successful career as an iOS developer'),
                    new ForWho('/courses/course/for-who/ios/3.png', 'Programmers who want to change specialization', 'Get to know the specifics of iOS development better, hone the necessary skills, find a profitable and interesting job')
                ],
                skills: [
                    new TitleTextItem('Programming in Swift', 'Learn the language in which you will describe the entire logic of the applications. Step by step, you will understand the basics and understand how the language works from the inside'),
                    new TitleTextItem('Design mobile applications', 'Learn how to choose the right architecture for your application, get acquainted with the MVC, MVVM, SOLID models. Make your code readable and structured'),
                    new TitleTextItem('Create interfaces for applications', 'You will learn how to design both basic UI elements and custom buttons, screens, animations, and transitions'),
                    new TitleTextItem('Make your applications efficient', 'Get familiar with multithreading and learn how to work effectively with the transfer of large amounts of data over the network'),
                    new TitleTextItem('Release your projects in the App Store', 'Learn how to upload projects to AppStore Connect so that the whole world knows about your application'),
                    new TitleTextItem('Work in a team', 'In practice, you will understand how the software development process works in large companies. Present team final project')
                ],
                projects: [new Project('/courses/course/projects/ios/1.png', 'Yandex Disk analogue', commonItems.projects.texts.yandexDisc)],
                content: {
                    title: {
                        text: 'You will get all the necessary skills that employers expect from aspiring iOS developers in 2022',
                        counts: [new Count('6', 'months'), new Count('89', 'modules')]
                    },
                    programItems: [
                        { ...commonItems.content.iosBasic, number: 1 }, { title: 'Final work. Application for working with Yandex Disk', number: 2 }, { ...commonItems.content.iosAdvanced, number: 3 },
                        { title: '✦ Job placement with Career Center', number: 4 }, { ...commonItems.content.mobileAdditionalCourses, number: 5 }
                    ]
                },
                reviews: {
                    letters: ['I'],
                    user_data: ['Ivan Pestov'],
                    course: 'Course "Profession IOS-developer"',
                    texts: ['I liked that the teacher answers quickly, even on his days off']
                },
                resume: {
                    salary: '400 usd',
                    texts: ['I develop mobile applications for IOS', 'I know basic sorting and searching algorithms', 'Writing reactive code using RxSwift',
                        'Teamwork experience in Git', 'I own the IOS SDK', 'Experience in developing multithreaded applications', 'Layout complex interfaces using UIKit and Swift',
                        'I can meet deadlines', 'Network request skills', 'I follow the principles of OOP and SOLID, I apply design patterns', "Read and understand other people's code",
                        'I understand the specifics of working with the App Store'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never programmed. Will I succeed?',
                        'What are the general Mac requirements for iOS development?',
                        'What are the Mac hardware requirements?',
                        'Is English required?',
                        'Will I definitely get a job?',
                    ],
                    texts: [
                        'It will turn out. When we develop the content of the courses, we understand that the classes should be focused on those who want to learn programming from scratch. Therefore, speakers explain each topic from the most basic things - or you can always close unanswered questions through communication with the curator or in the course chat',
                        'Your Mac must also have at least 4 GB of memory and 12.5 GB of free disk space. Either up to 18.5 GB of free space when upgrading from OS X Yosemite or earlier',
                        'You will write code in the Swift 5 programming language and work in the Xcode 12.4 environment. Xcode 12.4 requires a Mac running macOS Catalina 10.15.4 or later',
                        'It is desirable to know English. In the course, we give links to the official Swift documentation, and it is completely written in English. If you are new to the language, Google Translate will help you at first, but it is better to study English additionally - any programmer needs it',
                        'Yes, if you take the course - it teaches enough skills to get a job as a programmer. For our part, we will help you to correctly compose a resume and arrange a portfolio, as well as provide contacts of companies',
                    ]
                }
            }
        } as CourseI,
        mobile: {
            preview: new Preview('Mobile developer', '/courses/previews/mobile.png', '7 months', 'mobile'),
            course: {
                logoSrc: '/courses/course/logos/mobile.png',
                header: {
                    text: 'You will learn how to create applications for devices based on iOS or Android from scratch. Practice on real tasks and add projects to your portfolio. You can get a full-time mobile developer or work as a freelancer',
                    features: [
                        new TitleTextItem('We will help you decide', 'which platform to develop for - iOS or Android'), commonItems.header.features.getJobInSevenMonths,
                        commonItems.header.features.feedback, commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'According to Statista, more than 6.5 billion people worldwide use smartphones in 2022. By 2027, this figure is projected to rise to almost 8 billion. Every year, smartphones become more powerful, with their help we can solve more and more tasks. Mobile developers create applications for iOS and Android, without which it is difficult to imagine modern life: online banks, marketplaces, streaming services, instant messengers, online navigators and fitness trackers',
                    list: [
                        new TitleTextItem('Over 3 000 vacancies', 'available to mobile developers in November 2022'),
                        new TitleTextItem('60 000 dollars', 'beginner mobile developer salary'),
                        new TitleTextItem('80 000 dollars', 'mobile developer salary with 1 year experience'),
                        new TitleTextItem('110 000 dollars', 'mobile developer salary with 3 year experience')
                    ],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/mobile/1.png', 'Beginners in programming', 'Master programming in Swift or Kotlin, learn how to design interfaces and test applications. Get a sought-after profession: you will work in a studio or in a product team'),
                    new ForWho('/courses/course/for-who/mobile/2.png', 'Beginning mobile developers', 'Fix the basics and go through more advanced topics. Learn how to create and test mobile applications according to technical specifications from a real customer'),
                    new ForWho('/courses/course/for-who/mobile/3.png', 'Developers from other fields', 'Learn about the features of designing, developing and testing mobile applications. Add projects to your portfolio, add skills to your resume, change jobs or move up the career ladder')
                ],
                skills: [
                    new TitleTextItem('Create native apps', 'You will not only learn the basics of Swift or Kotlin, but also dive into advanced topics: learn how to work with multithreading, get acquainted with algorithms, data structures, and learn how to code-review'),
                    new TitleTextItem('Design interfaces and animations', 'You will lay out basic UI elements and assemble them on the screen. Learn how to create custom interfaces, screen transitions and animations'),
                    new TitleTextItem('Set up the client-server part', 'You will connect interfaces and program logic into a single whole, learn how to communicate with databases using SQL and make network queries. Connect third party services to your apps'),
                    new TitleTextItem('Timer applications', 'Learn how to use emulators and simulators to test your code. You will test projects in different conditions, for example, when the signal is lost'),
                    new TitleTextItem('Write clean and efficient code', 'Familiarize yourself with design patterns and coding rules. Make your programs readable, structured and easy to debug'),
                    new TitleTextItem('Work in a team', 'You will understand the requirements of designers and team leaders. In practice, you will understand how the application development process works, and defend a team thesis project')
                ],
                projects: [
                    new Project('/courses/course/projects/ios/1.png', 'Profession iOS developer. Yandex Disk analogue', commonItems.projects.texts.yandexDisc),
                    new Project('/courses/course/projects/android/2.png', 'Profession Android developer. Application for finding movies and series', commonItems.projects.texts.finder),
                    new Project('/courses/course/projects/android/1.png', 'Profession Android developer. Console application for the logistics center', commonItems.projects.texts.emulator),
                    new Project('/courses/course/projects/android/3.png', 'Team Internship: Mobile App for Android', commonItems.projects.texts.teamProject),
                ],
                content: {
                    title: {
                        text: 'You will choose one of the directions - iOS or Android and become a mobile developer. The difficulty of the course increases gradually. We constantly update the course so that you get the skills that employers need right now',
                        counts: [new Count('7', 'months'), new Count('39', 'practical work')]
                    },
                    programItems: [
                        { ...commonItems.content.iosBasic, number: 1 }, { ...commonItems.content.iosAdvanced, number: 2 },
                        {
                            title: '✦ Job placement with Career Center',
                            listItems: [
                                'At this point, you are ready for real practice. Skills will be enough to get to the position of an intern and take the first orders',
                                'Together with a career consultant, you will prepare a resume and portfolio, as well as prepare for an interview. The specialist will select suitable vacancies for you and arrange an interview with the employer'
                            ],
                            number: 3
                        },
                        { ...commonItems.content.kotlin, number: 4 },
                        {
                            title: 'Android developer. Basics. 3 months',
                            subtitle: 'You will go through the basics of Android development: learn how to make screens, animate interfaces, program logic, work with data and the network. Write over 7 mini-projects, including a quiz app, gallery, news feed, and point of interest map',
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
                            subtitle: 'Master advanced development techniques — learn how to change interfaces. Optimize performance, get familiar with design patterns, and immerse yourself in the concept of reactive programming',
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
                        { ...commonItems.content.mobileAdditionalCourses, number: 8 }
                    ]
                },
                questions: {
                    titles: [
                        "I don't really understand what to choose - iOS or Android. Tell!",
                        'I have no experience in mobile development. Is this course right for me?',
                        'Which computer is suitable for the course?',
                        'Is English required?',
                        'Will I get a job after the course?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        "Don't worry if you haven't decided yet. After the application, we will discuss specialization options together by phone. We will tell you in detail about the features of each platform, answer questions and choose a direction",
                        'Of course! You will succeed even without special knowledge - just pay more attention to practice and read additional literature. The rest will be helped by practicing experts who will accompany you throughout the course',
                        "To work in Android Studio, you need Windows 8/10 (64 bit), Linux (64 bit) with support for Gnome, KDE or macOS version 10.14 (Mojave) or higher. 4 GB RAM minimum, 8 GB recommended. Minimum - 2 free gigabytes on the disk, the recommended amount is 4 GB. Screen resolution - from 1280 × 800. You'll need a MacBook or other macOS computer to take iOS courses. The operating system is macOS Catalina 10.15.4 or later. The course uses the Swift 5 programming language, as well as the Xcode 12.4 development environment. The Mac must also have at least 4 GB of memory and 12.5 GB of free disk space. Either up to 18.5 GB of free space when upgrading from OS X Yosemite or earlier",
                        'It is desirable to know English. In the course, we provide links to the official Swift/Kotlin documentation, and it is written entirely in English. If you are not familiar with the language, then Google Translate will help you at first, but it is better to study English additionally - any programmer needs it',
                        'The courses cover all the topics that a mobile developer needs. If you study regularly, complete practical tasks and work on final projects, then by the end of the course you will be ready for animation. We will take care of the rest — we will select vacancies, help you write a resume, correctly draw up a portfolio and prepare for an interview. If the interview fails, we will collect feedback from the employer and suggest in what aspects you need to develop, and continue working. Most often, platform users get a chance to prove themselves in an internship or get a junior position',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        flutter: {
            preview: new Preview('Flutter developer', '/courses/previews/flutter.png', '6 months', 'flutter'),
            course: {
                logoSrc: '/courses/course/logos/flutter.png',
                header: {
                    text: 'You will master the Flutter development tool and be able to create mobile applications immediately for iOS and Android. Learn one of the native languages to choose from - Kotlin or Swift and become a sought-after specialist who can work with different platforms',
                    features: [new TitleTextItem('Employment', 'in 6 months'), commonItems.header.features.guarantees, commonItems.header.features.feedback]
                },
                market: {
                    titleText: 'Companies are looking for Flutter developers because they help save money on creating a product. Instead of two separate specialists, the business hires one who makes the application for Android and iOS at once. Today, more than 500,000 applications are powered by Flutter worldwide. Among the companies that use it: WeChat, Toyota, BMW, Google, Alibaba Group, eBay and the Brazilian government',
                    list: [new TitleTextItem('90 000 dollars', 'specialist salary'), new TitleTextItem('322 vacancies', 'right now open for the position of Flutter developer')],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/flutter/1.png', 'For native developers', 'Go beyond one platform and become a universal developer. Learn how to create working prototypes and complete projects with Flutter. Master Dart and add cross-platform apps to your portfolio. Rewrite personal projects for Android and iOS, offer to implement the framework in your company or join a new team'),
                    new ForWho('/courses/course/for-who/flutter/2.png', 'Programmers in other areas', 'Learn about the features of developing and testing mobile applications. Master one of the native programming languages Swift or Kotlin. Get to know Dart, the Flutter framework, and write cross-platform portfolio apps. After the course, you will be able to change direction and start a career in mobile development')
                ],
                skills: [
                    new TitleTextItem('Write application blocks in native language', 'Learn Kotlin for Android development or Swift for iOS. Be able to write clean code for every platform'),
                    new TitleTextItem('Build apps with Flutter and Dart', 'Understand how to work with widgets, forms and media. Learn to use services and plugins. Can write multi-platform applications'),
                    new TitleTextItem('Use ready-made functions from libraries', 'You will be able to assemble applications from individual components and speed up the development process'),
                    new TitleTextItem('Customize the interaction of applications with the backend', 'Learn how to connect databases. Learn to work with the file system, template engines, forms. Can handle incoming requests'),
                    new TitleTextItem('Interact with UX design', 'Master Figma. You will be able to customize user interfaces and develop design for application pages'),
                    new TitleTextItem('Test applications', 'Learn how to find errors using the built-in tools of Android Studio and XCode. You can remove data about the operation of the application')
                ],
                content: {
                    title: {
                        text: 'You are waiting for a video with theory and 38 practical work. Materials updated in 2022',
                        counts: [new Count('115', 'topics'), new Count('6', 'months')]
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
                        { title: '✦ Job placement with Career Center', number: 4 },
                        {
                            title: '7 additional courses: Testing, Figma, Agile, Project Presentation, Git, SQL, Programming Career ≈ 5 months',
                            listItems: [
                                'Manual testing of mobile applications. You will learn how to look for errors in the operation of sites and applications. You can test user interfaces',
                                'Figma from zero to PRO. You will learn how to work in the most popular service for creating interfaces', 'Agile: Scrum and Kanban in product development. You will learn how to work in a development team on the main methodologies for maintaining digital products',
                                'Presentation of projects. You will learn how to prepare presentations of your projects and pitch them in front of an audience', 'Git version control system. You will learn how to work with code versions. You can compare and undo them using the Git system',
                                "SQL query language. You'll learn a popular language that will help you speed up your queries", '"Career and development for a programmer". You will understand where to grow in the profession and how to develop as a programmer'
                            ],
                            number: 5
                        }
                    ]
                },
                projects: [
                    new Project('/courses/course/projects/flutter/1.png', 'Flutter course. Spotify analogue', 'Develop an application for listening to music. Add a search by artist, a list of the most popular tracks, and a collection feature'),
                    new Project('/courses/course/projects/flutter/1.png', 'Flutter course. Expense tracker app', 'Develop an app to track monthly expenses. Write the logic for removing and adding expenses and their categories. Add an expense schedule for each month and switch between months'),
                    new Project('/courses/course/projects/flutter/1.png', 'Flutter course. Analogue of Instagram*', 'You will develop an application with a feed of publications with a description of the photo and the ability to like it. Add a feature to view the post page, which displays users who have liked it')
                ],
                resume: {
                    salary: '600 usd',
                    texts: ['Creation of mobile applications according to platform guidelines', 'Experience in designing client-server applications', "Ability to understand other people's code",
                        'Knowledge of Flutter and Dart', 'Working with API, including social networks', 'Working with eactive libraries', 'Creating blocks in Swift or Kotlin',
                        'Working with Git version control', 'Working with multithreading in applications', 'Ability to set and meet deadlines', 'Uploading the application to the store',
                        'Mobile application testing'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never developed applications for mobile platforms. Will I succeed?',
                        'What are the hardware requirements?',
                        'What are the general Mac requirements for iOS development?',
                        'Is English required?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?'
                    ],
                    texts: [
                        'The course is designed for mobile developers or developers from related fields. During the course, we recommend paying attention to practical work and reading additional literature. The rest will be assisted by experienced practitioners who will accompany you throughout the profession',
                        'If you choose Swift as your native language to learn, Mac models that are compatible with macOS from High Sierra and above are suitable: MacBook and iMac (Late 2009 or later), MacBook Pro, MacBook Air, Mac mini, and Mac Pro (Mid 2010) year or newer). To get information about your Mac model, click the Apple icon in the top left corner of the screen and choose About This Mac from the menu. The course uses the Swift programming language (version 4 at the first level, version 5 at the second level), as well as the Xcode development environment (version 10 at the first level, 11.1 at the second level).',
                        'If you choose the Kotlin language, you will need Windows (64 bit), Linux (64 bit) or macOS versions from 10.10 (Yosemite) to 10.14 (Mojave). Minimum 4 GB RAM, recommended 8 GB. Minimum - 2 free gigabytes on the disk, the recommended amount is 4 GB. Screen resolution - from 1280x800',
                        'OS X 10.8 or later, 2 GB RAM, 14.3 GB free space for system updates. Some features require an Apple ID and a compatible ISP',
                        'Basic knowledge of English is required. In the future, the language will come in handy, since all documentation for developers and the latest information is published on it',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments'
                    ]
                }
            }
        } as CourseI,
        java: {
            preview: new Preview('Java developer', '/courses/previews/java.png', '6 months', 'java'),
            course: {
                logoSrc: '/courses/course/logos/java.png',
                header: {
                    text: "Java is one of the most popular programming languages in the world. It is used to create reliable applications for banks, IT corporations and streaming services, develop online stores, games and cloud solutions. Java is used in their products by: Twitter, Spotify, State Services. Minecraft and Assassin's Creed games are also written in Java. Java is possible to learn on your own, but much easier - on a course with the support of an experienced expert",
                    features: [
                        new TitleTextItem('★ 4.5 out of 5', 'based on 46 012 course evaluations'), new TitleTextItem('6 months later', 'you can start working'),
                        new TitleTextItem('Team internship', 'under the leadership of a team leader'), new TitleTextItem('Lots of practice', '69 practical works'),
                        commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'Novice Java developers earn from 60,000, middles receive up to 80 000 dollars, and seniors and leads can count on salaries up to 120 000 dollars',
                    list: [new TitleTextItem('90 000 dollars','specialist salary'), new TitleTextItem('322 vacancies', 'right now open for the position of Flutter developer')],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/java/1.png', 'Beginning programmers', `Perhaps you already have basic skills and understanding of programming and apply this knowledge in your projects. Our course will give you an in-depth knowledge of the universal Java language, and you will begin to properly structure the code and follow everyone's "favorite" syntax to create outstanding projects`),
                    new ForWho('/courses/course/for-who/java/2.png', 'Beginners', 'If you are attracted by modern technologies and high salaries in the field of IT, then this course is definitely for you. You will learn how to write code, learn that the legend that a programmer must be perfect in mathematics is a fiction, begin to think critically and be able to code in the most popular language in the world')
                ],
                skills: [
                    new CoursesReducer('Administration and deployment of pilot works'), new CoursesReducer('Knowledge of OOP principles'),
                    new CoursesReducer('Java web application development'), new CoursesReducer('Development of web applications on the Spring framework'),
                    new CoursesReducer('Working with the Git version control system'), new CoursesReducer('Relational database query writing skills')
                ],
                content: {
                    title: {
                        text: 'We constantly update the course so that you get the skills that employers need right now. 57 topical topics and practical work are waiting for you to help you become a developer in demand',
                        counts: [new Count('6', 'months'), new Count('69', 'practical work')]
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
                        { title: 'You will develop a search engine that will help site visitors quickly find the information they need using the search box', number: 3 },
                        {
                            title: 'You will work under the guidance of an experienced team leader as part of a team of 5-7 people. Create your own social network in 3 months according to the TOR from a real customer. In practice, get acquainted with the SCRUM project management methodology',
                            number: 4
                        },
                        {
                            title: 'All the processes that you will go through are experiences that are as close to real conditions as possible. This is how commercial software is created in employer companies',
                            number: 5
                        },
                        { ...commonItems.content.careerCenter, number: 6 }, { ...commonItems.content.mobileAdditionalCourses, number: 7 }
                    ]
                },
                reviews: {
                    letters: ['A', 'D', 'D', 'V', 'A', 'M'],
                    user_data: ['Anna Rudova', 'Dmitry Slepec, Belgorod', 'Danil Panik', 'Vladislav Vidin', 'Anton Chupin', 'Max Vlasov'],
                    course: 'Course "Profession Java-developer"',
                    texts: [
                        'I like the feedback from the curators, updating materials and a lot of additional useful information for self-study',
                        'I like the opportunity to study at any time, the structure of the course and the reworked content of the program, the good presentation of the material on video and the response time of the curator - no more than one day. At the same time, I would like to be able to submit several works at once within the same block',
                        'There is a lot of interesting material in the course. I try to go through it carefully and study all the additional information on the topic. It\'s great that you can test the programs in practical tasks with autotests and figure it out yourself',
                        'Lots of practice, lots of topics to explore. Feedback from the curator. Positive attitude, beautiful and comfortable design. In general, it is difficult, but interesting',
                        'I liked the approach to learning. I myself choose the pace of study and how much time per week to devote to it',
                        'I like the good elaboration of old material. Skillbox does not stand still, and every month the courses improve: new videos are added, the material of practical work becomes more interesting. Webinars from Konstantin are very useful for learning and consolidating the material. Good community of participants'
                    ]
                },
                resume: {
                    salary: '540 usd',
                    texts: ['Administration and deployment of pilot works', 'Knowledge of OOP principles', 'Ability to set and meet deadlines', 'The habit of writing commented and strongly formatted code',
                        'Java web application development', 'Development of web applications on the Spring framework', 'Relational database query writing skills', "Ability to understand other people's code",
                        'Working with the Git version control system'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never done Java development. Will I succeed?',
                        'What is the training schedule? Can you combine it with work?',
                        'How many hours per week will I need to study?',
                        'Will I be able to communicate with teachers?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! With diligent study and timely completion of homework, you can achieve results even without special basic knowledge. Experienced mentors will help you with everything, who will supervise you throughout the course',
                        'You can work through the course materials at your convenience, moving through the program at your own pace. Moreover, all lessons will be available at the end of the course, forever, so you can refresh your knowledge at any time. Training is organized in such a way that you can combine it with work, study and personal life',
                        'Everything depends on you. On average, our students study three to five hours per week',
                        'You will have a curator in the Telegram chat, and the teacher will personally comment on homework and give useful advice. So you can learn from experience, professional knowledge and life hacks from leading experts',
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        java_pro: {
            preview: new Preview('Java developer PRO', '/courses/previews/java-pro.png', '11 months', 'java-pro'),
            course: {
                logoSrc: '/courses/course/logos/java-pro.png',
                header: {
                    text: 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist',
                    features: [
                        new TitleTextItem('★ 4.5 out of 5', 'based on 38 137 course evaluations'), new TitleTextItem('4 months later', 'you can get a job'),
                        new TitleTextItem('Practical work', 'with expert verification'), commonItems.header.features.guarantees
                    ]
                },
                market: {
                    titleText: 'There are not enough experts in the market',
                    list: [new TitleTextItem('3 000 companies', 'currently looking for Java Developers'), new TitleTextItem('90 000 dollars', 'average salary of a middle-specialist')],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/java-pro/1.png', 'For those who want to get started in Java development', 'You will understand how to create web applications, explore the possibilities of Java, develop the first projects for real customers and build a portfolio'),
                    new ForWho('/courses/course/for-who/java-pro/2.png', 'Programmers from other fields', 'You will understand the features and syntax of Java, master a new popular language and be able to change the direction of work to work on interesting projects and earn more'),
                    new ForWho('/courses/course/for-who/java-pro/3.png', 'Beginners in Java', 'Learn how to structure and debug your code, work with frameworks and databases, improve your level and be able to take on complex expensive projects in Java')
                ],
                skills: [
                    new TitleTextItem('Create applications in Java', 'You will understand how to turn lines of code into a working program, master object-oriented programming and be able to develop applications with different functionality'),
                    new TitleTextItem('Understand algorithms and data structures', 'Learn how to efficiently solve typical problems using well-known algorithms and existing data structures in Java'),
                    new TitleTextItem('Use Git', 'Learn how to work with a distributed version control system and be able to easily make or roll back changes in different versions of the same project'),
                    new TitleTextItem('Work with databases', 'Learn the difference between MySQL, Redis and MongoDB, get familiar with Hadoop and learn how to manage large amounts of data'),
                    new TitleTextItem('Optimize code', 'Learn how to debug and optimize your code, and be able to create programs with high performance'),
                    new TitleTextItem('Use Spring', 'Explore the capabilities of the Spring framework and learn how to build web applications with it')
                ],
                content: {
                    title: {
                        text: 'You are waiting for 3 blocks with different levels of difficulty, videos from experts and practical tasks',
                        counts: [new Count('145', 'thematic modules'), new Count('1043', 'video footage')]
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
                                'Advanced technologies in Java. functional interfaces', 'QA (Quality Assurance)', 'Development infrastructure', 'Monitoring, logging and audit',
                                'Microservices. Data flow management', 'Microservices. Administration', 'Technologies of corporate development. Work with protocols and protection of data transmission channels',
                                'Technologies of corporate development. Service tyres', 'Apache Camel integration framework'
                            ],
                            number: 3
                        },
                        { ...commonItems.content.webLayout, number: 4 }, { ...commonItems.content.additionalCourses, number: 5 },
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
                reviews: {
                    letters: ['R', 'E', 'A', 'V', 'O', 'R'],
                    user_data: ['Roman Zulcov', 'Eduard Kuksa', 'Alex Zemlyakov', 'Vyacheslav Mamontov', 'Olga Shvec', 'Roman Akamelkov'],
                    course: `Course "Profession Java-developer PRO"`,
                    texts: [
                        'I liked the new videos on the "Java developer from scratch" course: the speaker energetically talks and shares useful information. As well as autotests in practical work, which speed up the approval of assignments if you do not need the help of a curator',
                        'Tasks are great! Not always everything turns out right away, sometimes you have to look for additional information in third-party sources, but they make you think, this is a plus',
                        'I like that the information is presented in great detail, as well as the realization that, in fact, all the material is here and even more than is necessary for obtaining the cherished profession. In some practical tasks, they make you think too much :)',
                        'A MEGA resource and a great help for those who decide to change their profession and start a new life. I speak as a person who not only completed the course, but also successfully found a job. When questions or problems arose, I was helped by associates from the chat and mentors. And when the motivation weakened, the mailings from Skillbox were very encouraging. Thanks to the whole team, you are doing a great job!',
                        'I like how the material was chosen, the program was drawn up. The video explains everything clearly and interestingly. Lots of practical tasks. The good thing is that you can do it anytime',
                        "The quality of the training videos is high. The tasks are interesting, although sometimes too simple :). The curator responded within a day, plus or minus a few hours. And if I asked questions, I always got exhaustive answers to them. In the profession, in addition to the main program, there are many related training materials on various topics: from hard methodologies to soft skills and topics that broaden one's horizons - you can choose what you like. And, of course, it is convenient that you can practice at a pace that suits you"
                    ]
                },
                resume: {
                    salary: '550 usd',
                    texts: ['Java application development', 'Working with the Git version control system', 'Working on the Bash command line',
                        'Debugging and testing applications, JUnit', 'Working with MySQL, ability to write queries with JOIN, knowledge of HAVING, GROUP BY, ORDER BY',
                        'Development of web applications on the Spring framework, working with Hibernate', 'Excellent knowledge of OOP principles and design patterns',
                        'Java Core, Collections Framework, Multithreading', 'Work on Scrum methodology', 'Web mark-up', 'Application optimization'],
                    certificate: 'https://248006.selcdn.ru/LandGen/blocks/resume/certificate.svg'
                },
                questions: {
                    titles: [
                        'I have never done Java development. Will I succeed?',
                        'What is the training schedule on the platform? Can you combine it with work?',
                        'How many hours per week will I need to devote to training on the platform?',
                        'Who will help me learn on the platform?',
                        'Are there any installment programs?',
                    ],
                    texts: [
                        'Of course! With hard work and timely implementation of practical work, you can achieve results even without special basic knowledge. Experienced mentors will help you with everything, who will supervise you throughout the course',
                        'You can study the course materials in a mode convenient for you, combine learning on the platform with work and personal life. Moreover, all videos will be available at the end of the course, so you can brush up on your knowledge at any time',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        'You will have reviewing experts and a curator in the course\'s Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks',
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        cyber_security: {
            preview: new Preview('Cyber security specialist', '/courses/previews/cyber-security.png', '1 year', 'cyber-security'),
            course: {
                logoSrc: '/courses/course/logos/cyber-security.png',
                header: {
                    text: 'You will learn how to look for vulnerabilities, prevent threats and ensure the security of IT systems. Learn a sought-after profession even with zero experience in IT',
                    features: [
                        commonItems.header.features.durationOneYear, new TitleTextItem('5 months later', 'you can get a job'), commonItems.header.features.guarantees,
                        new TitleTextItem('Practical works', '100 works')
                    ]
                },
                market: {
                    titleText: 'The task of a cyber security specialist is to look for vulnerabilities in programs, websites and mobile applications, protect data and repel hacker attacks',
                    list: [new TitleTextItem('2,000+ jobs for cyber security professionals', 'open'), new TitleTextItem('70 000 dollars', 'cyber security specialist salary')],
                },
                skills: [
                    new CoursesReducer('Understand system and network administration'), new CoursesReducer('Find and exploit OS and web application vulnerabilities'),
                    new CoursesReducer('Analyze application source code'), new CoursesReducer('Identify potential cyber threats to systems'),
                    new CoursesReducer('Recover systems after a cyberattack'), new CoursesReducer('Work with security and access policies'),
                    new CoursesReducer('Capture and analyze network traffic'), new CoursesReducer('Automate routine cyber security processes'),
                    new CoursesReducer('Work with intrusion detection systems')
                ],
                content: {
                    title: {
                        text: 'We regularly update the course, and each time we consult with employers to understand what skills they expect from applicants. You will be able to find an internship in 5-6 months from the start of training',
                        counts: [new Count('12', 'months'), new Count('110', 'modules')]
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
                        { title: 'Linux network administration. 1 month', listItems: ['Learn how to administer your network environment using Linux computers'], number: 4 },
                        { title: 'Database security. 3 weeks',  listItems: ['Learn how to secure your databases with encryption, access restrictions, and more'], number: 5 },
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
                    new Project('/courses/course/projects/cyber-security/1.png', 'Company Case: Incident Investigation', 'You have to find vulnerabilities, write a report and give recommendations on how to fix them. You will get a full experience of working on a project in a real company — you will complete tasks in a cloud environment on virtual stands'),
                    new Project('/courses/course/projects/cyber-security/2.png', 'Telegram bot for a travel agency', 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels')
                ]
            }
        } as CourseI,
        devops: {
            preview: new Preview('DevOps engineer', '/courses/previews/devops.png', '7 months', 'devops'),
            course: {
                logoSrc: '/courses/course/logos/devops.png',
                header: {
                    text: 'You will learn how to administer Linux, set up web servers and master the DevOps methodology: you will automate the development of complex IT products. Get support from the Career Center and get a job as a Junior Specialist in 7 months. The course will suit you even if you have never done system administration or programming',
                    features: [commonItems.header.features.durationSevenMonths, commonItems.header.features.threeProjectsInPortfolio, commonItems.header.features.guarantees]
                },
                market: {
                    titleText: 'DevOps engineer automates application development. It helps the company to quickly and safely implement changes to the code, supports the work of highly loaded services. Thanks to the DevOps approach, the quality of applications does not suffer due to the high speed of development, and the business does not lose profit due to failures and can focus on development. A DevOps engineer knows how to program in Python, organizes continuous integration and code delivery - CI / CD, works with Docker, Ansible, Terraform, Gitlab, implements tools and processes to improve product security. Such specialists are hired by companies with a large IT infrastructure. For example, banks, IT and telecom, fintech and retailers',
                    list: [commonItems.market.listItems.devopsVacancies, commonItems.market.listItems.devopsSalary],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/devops/1.png', 'For beginners', 'You will master the created IT-specialty from scratch and learn the skills on practical cases. You will be able to start practicing June the next day after the course'),
                    new ForWho('/courses/course/for-who/devops/2.png', 'Junior level IT specialists', 'You will learn how to work with Linux and databases. The course will help close gaps in knowledge and master DevOps from scratch. You can earn more in a related field'),
                    new ForWho('/courses/course/for-who/devops/3.png', 'Professionals who need DevOps skills', 'You will understand the intricacies of DevOps practices from scratch and will be able to expand your competencies at work and increase your value as a specialist')
                ],
                skills: [
                    new TitleTextItem('Administer linux', 'Learn how this operating system works and get to know the Linux terminal'),
                    new TitleTextItem('Work with databases', 'Get familiar with SQL and MySQL databases. Learn to manage large volumes of information and quickly get what you need using queries'),
                    commonItems.skills.devopsDocker,
                    new TitleTextItem('Apply CI/CD principles', 'Understand what problems continuous integration and delivery solves. Using gitlab-ci as an example, learn how to set up the layout of services in development and testing environments'),
                    commonItems.skills.devopsInfrastructure,
                    commonItems.skills.devopsMonitoring
                ],
                content: {
                    title: {
                        text: 'The course is suitable for absolute beginners. First, you will learn the basics of Linux, Python, the command line, databases, networking, and web servers. And then get a full set of skills for working as a Junior DevOps engineer',
                        counts: [new Count('49', 'modules'), new Count('271', 'video footage')]
                    },
                    programItems: [
                        { ...commonItems.content.pythonBasic_1, number: 1 }, { ...commonItems.content.devopsStart, number: 2 }, { ...commonItems.content.devopsBasic, number: 3 },
                        { ...commonItems.content.git, number: 4 }, { ...commonItems.content.pythonBasic_2, number: 5 }, { ...commonItems.content.sql, number: 6},
                        {
                            title: 'Workshops for participants',
                            listItems: ['Gitlab architecture', "Let's dive into Gitlab CI", 'Solving practical problems using Gitlab CI'],
                            number: 7
                        }
                    ]
                },
                projects: [commonItems.projects.infrastructure, commonItems.projects.accountManagement, new Project('/courses/course/projects/python/1.png', 'Python Basic Course: Travel Agency Bot', commonItems.projects.texts.chatBot)]
            }
        } as CourseI,
        devops_pro: {
            preview: new Preview('DevOps engineer PRO', '/courses/previews/devops-pro.png', '1 year', 'devops-pro'),
            course: {
                logoSrc: '/courses/course/logos/devops-pro.png',
                header: {
                    text: 'You will master the DevOps methodology from scratch: combine development and operation processes, accelerate the implementation and delivery of new features to the user. Become a middle-level DevOps specialist',
                    features: [commonItems.header.features.durationOneYear, new TitleTextItem('6 projects', 'in portfolio'), commonItems.header.features.guarantees]
                },
                market: {
                    titleText: 'DevOps engineer automates build, test, deployment and production. It helps the company quickly and safely introduce changes to the code or launch a new product, and supports the operation of highly loaded services. Thanks to the DevOps approach, the quality of development does not suffer due to speed, and the business does not lose profit due to failures and can focus on development. Such specialists are hired by companies with a large IT infrastructure, for example, banks, IT and telecom, fintech and retailers',
                    list: [commonItems.market.listItems.devopsVacancies, commonItems.market.listItems.devopsSalary, new TitleTextItem('From 100 000 dollars', 'earn Middle DevOps Engineers')],
                },
                for_who: [
                    new ForWho('/courses/course/for-who/devops-pro/1.png', 'Beginners without experience', 'First, master system administration, and then delve into DevOps and you can start a career in this area'),
                    new ForWho('/courses/course/for-who/devops-pro/2.png', 'DevOps entry-level engineers', 'Build a clear step-by-step path of professional development. The course will help close gaps in knowledge and grow in income'),
                    new ForWho('/courses/course/for-who/devops-pro/3.png', 'Professionals who need DevOps skills', 'You will understand the intricacies of the DevOps methodology from scratch, expand your working competencies and increase your value as a specialist')
                ],
                skills: [
                    commonItems.skills.devopsDocker,
                    commonItems.skills.devopsInfrastructure,
                    new TitleTextItem('Work with version control systems', 'Learn Git to work effectively with your codebase. Learn to apply the principles of CI / CD, learn how to set up the layout of services in development and testing environments'),
                    new TitleTextItem('Automate processes', 'Get to know Ansible: learn how to set up servers and deploy applications at the click of a button'),
                    new TitleTextItem('Use kubernetes (k8s)', 'You will manage loads between containers, automate deployment, and ensure data privacy'),
                    commonItems.skills.devopsMonitoring
                ],
                content: {
                    title:  {
                        text: 'The course is suitable for absolute beginners. First, you will learn the basics of Linux, Python, the command line, databases, networking, and web servers. And then get a full set of skills for working as a Middle DevOps engineer',
                        counts: [new Count('49', 'modules'), new Count('271', 'video footage')]
                    },
                    programItems: [
                        { ...commonItems.content.pythonBasic_1, number: 1 }, { ...commonItems.content.devopsStart, number: 2 }, { ...commonItems.content.devopsStart, number: 3 },
                        { ...commonItems.content.devopsBasic, number: 4 },
                        {
                            title: 'DevOps engineer. Advanced',
                            listItems: [
                                'Introduction: YAML, Utilities, Git', 'Service Discovery', 'CMS (Configuration Management System). Ansible', 'Docker', 'CI/CD: Jenkins, GitLab',
                                'Monitoring: collection of metrics', 'Monitoring: collection of logs', 'Safety', 'Networks', 'Cloud services', 'Final work'
                            ],
                            number: 5
                        },
                        { ...commonItems.content.git, number: 6 }, { ...commonItems.content.pythonBasic_2, number: 7 }, { ...commonItems.content.sql, number: 8 },
                        {
                            title: 'Docker',
                            listItems: [
                                'Core components of Docker', 'Basic Docker Concepts', 'Docker Builder and Dockerfile', 'Additional tools for working with Docker', 'Container orchestration',
                                'How docker works. Inside view', 'Final work'
                            ],
                            number: 9
                        },
                        {
                            title: 'Infrastructure platform based on Kubernetes',
                            listItems: [
                                'Introduction to Kubernetes: basic concepts and architecture', 'Core Kubernetes objects', 'Security and access control', 'Kubernetes network subsystem',
                                'Data storage in Kubernetes', 'Templates: Helm and its analogues (Jsonnet, Kustomize)', 'HPA', 'Monitoring of cluster components and applications running in it',
                                'Service mesh. Introduction to Istio and Envoy', 'Kubernetes for Continuous Delivery (CI/CD). Integration with CI service', 'Cluster operation',
                                'Final work'
                            ],
                            number: 10
                        },
                        { title: 'GitLab Architecture', number: 11 }, { title: 'Diving into Gitlab CI', number: 12 }, { title: 'Solving practical problems using Gitlab CI', number: 13 }
                    ]
                },
                projects: [
                    commonItems.projects.infrastructure,
                    new Project('/courses/course/projects/devops-pro/1.png', 'Python Basic Course: Travel Agency Bot', 'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels'),
                    commonItems.projects.accountManagement
                ]
            }
        } as CourseI
    }
}

export type InitialStateType = typeof initialState

export function coursesReducer(state = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case 'PROGRAMMING-SCHOOL/COURSES/SET-OPENED-COURSE' :
            return {
                ...state,
                openedCourse: action.course
            }
        default :
            return {
                ...state
            }
    }
}

type ActionType = InferActionTypes<typeof CoursesReducerActions>

export const CoursesReducerActions = {
    setOpenedCourse: (course: string) => ({type: 'PROGRAMMING-SCHOOL/COURSES/SET-OPENED-COURSE', course} as const)
}