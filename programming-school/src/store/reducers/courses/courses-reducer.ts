import { CourseI } from "@/interfaces/courses"
import { InferActionTypes } from "../../../../../src/Redux/Redux-Store";

const commonItems = {
    frontendHeader: {
        text: 'Thanks to frontend developers, we leave likes and comments, add products to the cart and quickly understand online maps. In the course, you will learn how to create web service interfaces using programming languages and additional technologies. You will be able to develop task planners, instant messengers, online stores',
        features: [
            {
                title: 'Suitable for beginners',
                text: 'without programming experience'
            },
            {
                title: '6 months',
                text: 'before employment'
            },
            {
                title: 'Up to 8 projects',
                text: 'in portfolio'
            },
            {
                title: 'We guarantee employment',
                text: 'or refund money *'
            },
            {
                title: 'Practice on webinars',
                text: 'with developers from large companies'
            },
        ],
    },
    header: {
        features: {
            guarantees: {
                title: 'We guarantee employment',
                text: 'or refund money *'
            },
            getJobInSixMonths: {
                title: '6 months later',
                text: 'you can get a job'
            },
            getJobInSevenMonths: {
                title: '7 months later',
                text: 'you can get a job'
            },
            fourProjectsInPortfolio: {
                title: '4 projects',
                text: 'in portfolio'
            },
            threeProjectsInPortfolio: {
                title: '3 projects',
                text: 'in portfolio'
            },
            durationSevenMonths: {
                title: 'Duration',
                text: '7 months'
            },
            forBeginners: {
                title: 'For beginners',
                text: 'the course is suitable for those who start from scratch'
            },
            feedback: {
                title: 'Feedback',
                text: 'on practical work from experts'
            },
            durationOneYear: {
                title: 'Duration',
                text: '1 year'
            },
        }
    },
}

const initialState = {
    openedCourse: '',
    courses: {
        python: {
            preview: {
                occupation: 'Python developer',
                imgSrc: '/courses/previews/python.png',
                time: '10 months',
                path: 'python',
            },
            course: {
                logoSrc: '/courses/course/logos/python.png',
                header: {
                    text: 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and an analogue of a popular social network for a portfolio, and the Career Center will help you find a job as a Python developer',
                    features: [
                        {
                            title: '★ 4,75 out of 5',
                            text: 'based on 26,293 course evaluations'
                        },
                        commonItems.header.features.getJobInSixMonths,
                        {
                            title: '9 courses',
                            text: 'you can start working'
                        },
                        {
                            title: '4 projects',
                            text: 'including group training'
                        },
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_471f5ca3cdee26f3899e1a97f1b69a32c2053785.png',
                        'https://248006.selcdn.ru/LandGen/phone_4d557d9c97e5a6e31a1a72d88cda2d659b21abe1.png'
                    ],
                    texts: [
                        "Those who have just decided to become a programmer, but have not chosen in which area they are going to work. Python is a universal language",
                        'For those who are already learning Python on their own or from textbooks. But there is no one to ask a question and ask for help'
                    ],
                    titles: ['Newbies in code', 'Beginning developers']
                },
                skills: {
                    texts: [
                        'Create simple and complex modular programs: from console scripts to chat bots',
                        'Write autotests',
                        'Deploy applications to the server',
                        'Work with databases',
                        'Work with popular frameworks - Django, Flask',
                        'Package projects in Docker and apply DevOps practices',
                        'Use industrial development tools: Git, PyCharm, Postman',
                        'Write database queries in Python with Sqlalchemy, Django-ORM',
                        'Work in a team'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_3cad607aaf00d5271f48e33cedf271afda9318c0.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_caa9f044e4661b45c4e92b2a7a7f3c2632b72e8a.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_e948f77490a7da379bc173aebd7a78dd185b783b.png'
                    ],
                    titles: [
                        'Python Basic Course: Travel Agency Bot',
                        'Internship in a team: development of an online store',
                        'Python Advanced Course: Problem Book'
                    ],
                    texts: [
                        'Develop a Telegram bot on the instructions of the travel agency Too Easy Travel. The bot will take the approximate cost of living and the location of the user, and return a list of the most suitable hotels',
                        'Together with a team leader and a team of 3-5 people, you will develop a server part for a full-fledged marketplace. You will work according to the Scrum or Kanban system, regularly discuss current progress with the team leader and receive new tasks. All processes are as close as possible to real conditions - this is how commercial software is created in employing companies.As a result, you will create your own analogue of Yandex.Market',
                        'Create a service like CodeWars or Leetcode where users can solve programming problems. Develop a built-in editor and add a runtime so that the visitor runs his code and sees the result of the program directly in the browser. Your task will be to create a fast and secure service that will not allow a visitor to inject a malicious script and break the application'
                    ],
                },
                content: {
                    title: {
                        text: 'You are waiting for 3 blocks of programming in Python and more than 100 topics for analysis. The difficulty of the lessons increases gradually. Additional and bonus courses can be taken in parallel with the main ones',
                        numbers: ['100', '3'],
                        descriptions: ['practical work', 'final project']
                    },
                    courses: {
                        titles: ['Python Basic ≈ 4–6 months', 'Django ≈ 2–4 months', 'Carier start', 'Python Advanced ≈ 3–6 months'],
                    }
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
                        'Of course - the course is designed for absolute beginners. But you will have to try - read additional literature, do not miss classes and do practical work on time. Skillbox will help with the rest - curators will analyze practical tasks, assistants will answer questions about the process of passing, and the Career Center will take care of your employment',
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
            preview: {
                occupation: 'Fullstack Python developer',
                imgSrc: '/courses/previews/fullstack-python.png',
                time: '10 months',
                path: 'fullstack-python',
            },
            course: {
                logoSrc: '/courses/course/logos/fullstack-python.png',
                header: {
                    text: 'You will be able to actively participate in all stages of the development of sites and web interfaces - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more',
                    features: [
                        commonItems.header.features.getJobInSixMonths,
                        {
                            title: 'Help',
                            text: 'in employment'
                        },
                        commonItems.header.features.fourProjectsInPortfolio
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_a5641cfe6d40558046dc9d3de8bdc54a07c0a9fc.png',
                        'https://248006.selcdn.ru/LandGen/phone_8183cf0898f74c94cd37425aba13d98e180b5e2a.png',
                        'https://248006.selcdn.ru/LandGen/phone_b7d3c38e3dc9f8fb00449084468c15465fbff35c.png'
                    ],
                    texts: [
                        "You will master a sought-after profession from scratch, learn how to program in Python and JavaScript, create websites and work with databases. You will be able to write the backend and frontend part yourself",
                        'If you already have basic knowledge of frontend or backend, then the training will help you master the full cycle of product development. You will become a universal specialist and increase your income',
                        'You will increase your chances of getting a high-paying job, get advice from experienced teachers and learn how to develop as a fullstack programmer and work on complex and expensive projects'
                    ],
                    titles: ['Beginners in programming', 'Beginning developers', 'Experienced programmers']
                },
                skills: {
                    texts: [
                        'Build websites in HTML and CSS',
                        'Work with databases',
                        'Work with API',
                        'Programming in Python',
                        'Build modern web applications',
                        'Use the Git version control system',
                        'Create interactive websites with JavaScript',
                        'Apply the principles of OOP in practice',
                        'Understand modern web frameworks for frontend and backend development'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_3bfc250a3c5f8b047b88316a00b7ba67308e6387.png',
                        'https://248006.selcdn.ru/LandGen/phone_ad3aea4c508c9b131827ca0271eae2ebec5f8d08.png',
                        'https://248006.selcdn.ru/LandGen/phone_52d9665391a762e85e7b4d435ef33165056578a8.png'
                    ],
                    titles: [
                        'Landing',
                        'User interface',
                        'Space game',
                    ],
                    texts: [
                        'You create a landing page based on the brief to consolidate the knowledge gained in the course',
                        'You will develop a user interface similar to Instagram',
                        'You will write a behavior algorithm for space drones that collect fuel from asteroids'
                    ],
                },
                content: {
                    title: {
                        text: 'You are waiting for 4 main blocks and 119 additional courses with video materials and practical tasks',
                        numbers: ['100+', '500+'],
                        descriptions: ['thematic modules', 'video materials']
                    },
                    courses: {
                        titles: ['Python Basic', 'Python Advanced', 'Soft skills for a programmer', 'Algorithms and data structures',]
                    }
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
            preview: {
                occupation: 'Web developer',
                imgSrc: '/courses/previews/web.png',
                time: '9 months',
                path: 'web',
            },
            course: {
                logoSrc: '/courses/course/logos/web.png',
                header: {
                    text: 'A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend',
                    features: [
                        {
                            title: '★ 4,5 out of 5',
                            text: 'based on 55 143 course evaluations'
                        },
                        commonItems.header.features.getJobInSixMonths,
                        {
                            title: '10 projects',
                            text: 'in portfolio on GitHub'
                        },
                        commonItems.header.features.guarantees,
                        {
                            title: 'Course fit',
                            text: 'beginners without experience'
                        },
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_229c6152337eeea798e1bf5b4a10ad9e9f49bb53.png',
                        'https://248006.selcdn.ru/LandGen/phone_7f3b1a0a5d3c4980bb91dd4dc88c4810fbd342ba.png',
                        'https://248006.selcdn.ru/LandGen/phone_0627a8ae28c8e2540cd2c941653d2ee50b135da9.png'
                    ],
                    texts: [
                        'Learn the basics of JavaScript and PHP programming from scratch. Learn how to design websites in HTML and CSS. Create your first portfolio projects',
                        'Level up with the most popular programming languages Learn Vue, ReactFramework or Angular frameworks and expand your coding skills',
                        'Learn to program in JavaScript and PHP, you will create projects on the Laravel framework. You can change direction and become a popular web developer'
                    ],
                    titles: ['Beginners in web development', 'Beginning developers', 'IT specialists']
                },
                skills: {
                    titles: [
                        'Build websites in HTML and CSS',
                        'Program in JavaScript and PHP',
                        'Work with JavaScript frameworks',
                        'Building the backend with Node.js and Laravel',
                        'Work in a team'
                    ],
                    texts: [
                        'Which will adaptively adapt to the screen size and look equally cool on different devices: from small smartphones to TVs',
                        'Master two popular languages at once - using JavaScript you will create interactive interfaces, and use PHP to program the server side of sites',
                        'With the help of frameworks, you will easily assemble web applications from individual components, as from the details of a designer. You will have 3 frameworks to choose from: ReactFramework, Vue or Angular',
                        'You will connect databases, work with the file system, template engines, forms, and process search queries. Get familiar with microservice architecture and learn how to build resilient applications',
                        'Take part in a team internship and create your own project - an online store. You organize the work as in a real company - you will have sprints, calls with a team leader, and you will control versions in Git'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_e5d9722ff8a70e273d107d4854d25a7b34fd2e9a.png',
                        'https://248006.selcdn.ru/LandGen/phone_b46cc8d11d486146413d685d94d5e725e0034680.png',
                        'https://248006.selcdn.ru/LandGen/phone_c63de48ef9da79d1d3e75bace90410d4e81bf2e8.png',
                        'https://248006.selcdn.ru/LandGen/phone_e3625203cdbd0b56be13418afdc551ff96718e2d.png',
                        'https://248006.selcdn.ru/LandGen/phone_deed31f3e040ddc70870aaf05186663ba2169474.png',
                        'https://248006.selcdn.ru/LandGen/phone_41e92ba59019c831e3a01c2d145c8ea74fbc44b7.png'
                    ],
                    titles: [
                        'Landing',
                        'Pages for an online store',
                        'Customer contact management system',
                        'Online store',
                        'Pomodoro task tracker',
                        'Note service'
                    ],
                    texts: [
                        'You make up a landing page for the Blanchard art gallery according to the layout from the customer',
                        'You make up several pages for an online furniture store according to the terms of reference from the customer',
                        'You will develop a complete CRM system. Through your application, employees will be able to track the lists of transactions, clients, and follow the document flow. You will go through all stages of commercial software development in a company and be ready for teamwork',
                        'You will develop a front-end for a product aggregator using Vue or Angular',
                        'Write a task tracker with a timer in the ReactFramework framework',
                        'Develop a note service with the ability to autosave, delete, upload to PDF, search by notes and infinite scroll. Deploy the result to the server'
                    ],
                },
                content: {
                    title: {
                        text: 'Practice based on real cases is waiting for you. Training on the platform can be equated to a year of work',
                        numbers: ['1100', '131'],
                        descriptions: ['video materials', 'practical task']
                    },
                    courses: {
                        titles: [
                            'PHP developer. Baseline ~14 hours of video',
                            'Web design from scratch to PRO ~13 hours of video',
                            'Algorithms and data structures for developers ~18 hours of video',
                        ]
                    }
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
            preview: {
                occupation: 'Fullstack PHP developer',
                imgSrc: '/courses/previews/fullstack-php.png',
                time: '10 months',
                path: 'fullstack-php',
            },
            course: {
                logoSrc: '/courses/course/logos/fullstack-php.png',
                header: {
                    text: 'You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development',
                    features: [
                        {
                            title: '10+ courses',
                            text: 'included',
                        },
                        commonItems.header.features.getJobInSixMonths,
                        commonItems.header.features.fourProjectsInPortfolio
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_add8ef2702c18d96050f6a29be5ec4e12863862715816824596821.png',
                        'https://248006.selcdn.ru/LandGen/phone_5cbc8afcd5fd843306b0738e58153dc108c6874c15816824765285.png',
                        'https://248006.selcdn.ru/LandGen/phone_ea2850648ba9f13c89f1fd6a30086b3aacd8691d15816824940198.png'
                    ],
                    texts: [
                        "Learn the basic principles of programming and overcome the first difficulties with a personal mentor",
                        'Master backend, frontend and other stacks. Learn PHP and learn how to work with application programming interface',
                        'You will be able to create projects in JavaScript and its frameworks, program in PHP and make up. Learn to work in a team and be a versatile developer'
                    ],
                    titles: ['For those new to web development', 'Beginning developers', 'IT specialists']
                },
                skills: {
                    texts: [
                        'Build quality and fast websites',
                        'Apply the principles of OOP in practice',
                        'Work in the Git version control system',
                        'Responsive layout for mobile devices',
                        'Develop pages and site modules in PHP',
                        'Create admin panels with Bootstrap and Laravel',
                        'Create interactive websites with JavaScript',
                        'Work with technical documentation'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_86f59dba870b5baf61887669f2536831f81b4cdd15819384567948.png',
                        'https://248006.selcdn.ru/LandGen/phone_94a5065d921b570b47d75309c0a5d3d011657c9715819384767634.png'
                    ],
                    titles: [
                        'One page website',
                        'Online store'
                    ],
                    texts: [
                        'You will create an adaptive one-page website on the subject given by the teacher',
                        'You are designing web pages for an online furniture store'
                    ],
                },
                content: {
                    title: {
                        text: '3 basic courses are waiting for you: on web layout, JavaScript basics and one of its frameworks - ReactFramework, Vue or Angular.To master backend development, you will learn PHP. And then take 11 additional courses on algorithms, Git, technical EnglishBig and more',
                        numbers: ['100+', '500'],
                        descriptions: ['thematic modules', 'video materials']
                    },
                    courses: {
                        titles: ['PHP. Level 1', 'PHP. Level 2', 'Soft skills for a programmer', 'Algorithms and data structures']
                    }
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
            preview: {
                occupation: 'Frontend developer',
                imgSrc: '/courses/previews/frontend.png',
                time: '7 months',
                path: 'frontend'
            },
            course: {
                logoSrc: '/courses/course/logos/frontend.png',
                header: commonItems.frontendHeader
            }
        } as CourseI,
        frontend_pro: {
            preview: {
                occupation: 'Frontend developer PRO',
                imgSrc: '/courses/previews/frontend-pro.png',
                time: '10 months',
                path: 'frontend-pro',
            },
            course: {
                logoSrc: '/courses/course/logos/frontend-pro.png',
                header: commonItems.frontendHeader,
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_8324597e2efaf50fd1f52ad8ae50538cf7f0cc7b15821163457558.png',
                        'https://248006.selcdn.ru/LandGen/phone_f6137b382419ffb2e58e12fbba50a78ea600e86e15821163808598.png',
                        'https://248006.selcdn.ru/LandGen/phone_227ecf445249bb751716bda2dae6c03be894783515821163999428.png'
                    ],
                    texts: [
                        "You don't need to be good at math or have programming experience. Step by step you will learn how to develop websites. You will start with simple landing pages, and by the end of the training you will know frameworks, create complex enterprise services and work in a team",
                        'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession',
                        'Turn programming from a hobby into a profitable profession. Master advanced layout skills, learn JavaScript and frameworks in depth. Close gaps in knowledge and be able to apply for the position of a middle-developer in a large company'
                    ],
                    titles: ['For beginners', 'Beginning programmers', 'Freelancers with no experience in IT']
                },
                skills: {
                    titles: [
                        'Make websites right',
                        'Programming in JavaScript',
                        'Work with modern frameworks',
                        'Work with Git',
                        'Create beauty in a team'
                    ],
                    texts: [
                        'Study in detail all the possibilities of modern CSS, learn how to layout adaptive sites that are convenient to use. Make projects more aesthetic with animations and transitions',
                        'You will design the logic of the site. From a simple modal window to asynchronous data loading from the server and enterprise application programming. Learn one of the most popular programming languages without stress',
                        'With the help of frameworks, you can develop complex web services faster, and they also consume browser resources more efficiently. You choose what to learn - ReactFramework or Vue',
                        'You will save all stages of work on projects so that colleagues always have access to the code, and random errors can be fixed in two clicks',
                        'Learn how to work with sprints and Scrum methodology. Under the guidance of a team leader, together with other students, write a web application'
                    ]
                },
                content: {
                    title: {
                        text: 'You are waiting for 14 courses with different levels of complexity, videos and practice',
                        numbers: ['719', '66'],
                        descriptions: ['video materials', 'practical tasks']
                    },
                    courses: {
                        titles: [
                            'Web layout. Basic level',
                            'JavaScript. Basic level',
                            'Choice course. ReactFramework.js',
                            'Choice course. Vue.js',
                            'Web layout. Advanced level',
                            'JavaScript. Advanced level',
                            'Universal programmer knowledge',
                            'Photoshop from scratch',
                            'Figma from zero to PRO',
                            'EnglishBig for IT professionals',
                            'Git version control system',
                            'SQL query language',
                            'Career and development of a programmer',
                            'Working on the Bash command line',
                            'Algorithms and data structures',
                        ]
                    }
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
            preview: {
                occupation: 'Fullstack JavaScript developer',
                imgSrc: '/courses/previews/fullstack-js.png',
                time: '10 months',
                path: 'fullstack-js',
            },
            course: {
                logoSrc: '/courses/course/logos/fullstack-js.png',
                header: {
                    text: 'You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, ReactFramework or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more',
                    features: [
                        {
                            title: 'Program',
                            text: 'from 12 courses'
                        },
                        commonItems.header.features.getJobInSixMonths,
                        commonItems.header.features.fourProjectsInPortfolio,
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_93b2747395829db9f89d3c9073d02c35a68e1df2.png',
                        'https://248006.selcdn.ru/LandGen/phone_c22d4893414c49389d082537f881ae623775de78.png',
                        'https://248006.selcdn.ru/LandGen/phone_6af395b8a94ab67c78231fa5af4f5faac40babae.png'
                    ],
                    texts: [
                        "You will learn how to make up, code in JavaScript and develop full-fledged websites from scratch. Master the full cycle of creating web projects and be able to get a job in an IT company",
                        'You will get acquainted with Node.js and frameworks and deepen your knowledge. You can move to the position of a fullstack developer in a web studio or create turnkey websites on freelance',
                        'You will learn Vue.js, ReactFramework.js or Angular and be able to create complex interactive interfaces. Get soft skills for professional development and understand where to go next'
                    ],
                    titles: ['Those who want to start a career as a programmer', 'Beginning developers', 'Experienced professionals']
                },
                skills: {
                    titles: [
                        'Make up websites',
                        'Work with frameworks',
                        'Develop backend sites',
                        'Work with databases',
                        'Use Git',
                        'Work with the network'
                    ],
                    texts: [
                        "Get familiar with HTML and CSS, be able to create landing pages and multi-page responsive websites. Learn to find errors in someone else's layout and fix already finished code",
                        'Learn ReactFramework.js, Vue.js or Angular and learn how to create dynamic interactive user interfaces',
                        'You will learn the principles of object-oriented programming and will be able to develop sites with different functionality in JavaScript using Node.JS',
                        'Learn the difference between MySQL, Redis and MongoDB. Learn to manage large amounts of data and get what you want with queries',
                        'Learn how to work with a distributed version control system, be able to easily make or roll back changes and work on a project in a large team',
                        'You will understand how client-server interaction works, learn how to work with the API and be able to set up frontend and backend communication within one project'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_fcd16c857d51e1e7ff159f2e3b19b591d800e4bd.png',
                        'https://248006.selcdn.ru/LandGen/phone_54894499a809735b0210e8035a9065bcf9a7913d.png',
                        'https://248006.selcdn.ru/LandGen/phone_c06f22ea4fddaec2152f9204580de3af38a0e9bb.png',
                        'https://248006.selcdn.ru/LandGen/phone_c8ba4676dbc959880f952595712d2dfc2eecfbbd.png',
                        'https://248006.selcdn.ru/LandGen/phone_047d974aa4b58de90a77668c6175d4e800c2d4cf.png',
                        'https://248006.selcdn.ru/LandGen/phone_924eba8b05cc74dc51ab2644d2da4ad5fe751daa.png'
                    ],
                    titles: [
                        'Landing',
                        'User interface',
                        'Note service',
                        'Online store',
                        'Integration with Reddit',
                        'Online store'
                    ],
                    texts: [
                        'Build a landing page based on a brief from a customer using HTML and CSS',
                        'Develop a web application using JavaScript',
                        'Develop the frontend and backend for a personal note service using Node.js',
                        'Create a full-fledged online store using the Vue.js framework',
                        'Set up the integration of posts from the Reddit news site using the ReactFramework.js framework',
                        'Develop a full-fledged online store on the Angular framework'
                    ],
                },
                content: {
                    title: {
                        text: 'Online lectures and practical tasks based on real cases are waiting for you',
                        numbers: ['100+', '500+'],
                        descriptions: ['thematic modules', 'online lessons']
                    },
                    courses: {
                        titles: [
                            'Soft skills for a programmer',
                        ]
                    }
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
            preview: {
                occupation: 'PHP developer PRO',
                imgSrc: '/courses/previews/php-pro.png',
                time: '7 months',
                path: 'php-pro',
            },
            course: {
                logoSrc: '/courses/course/logos/php-pro.png',
                header: {
                    text: 'You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position',
                    features: [
                        {
                            title: '6 courses',
                            text: 'for professional immersion'
                        },
                        commonItems.header.features.durationSevenMonths,
                        {
                            title: 'Internship',
                            text: 'in a team led by a team leader'
                        },
                        commonItems.header.features.threeProjectsInPortfolio,
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_b4782595d4ffad7b2ecfc8400c85a592e03025e5.png',
                        'https://248006.selcdn.ru/LandGen/phone_8cd6e5c42746f20a62e91b241dd16aaa8740d94e.png'
                    ],
                    texts: [
                        "Learn the PHP programming language from scratch, get help and advice from experienced speakers, and practice on real problems. Write the first projects for the portfolio and work in a team",
                        'You structure your existing knowledge, and curators will help you deal with difficult-to-understand topics and recommend additional literature. Learn how to effectively solve everyday tasks for a PHP programmer'
                    ],
                    titles: ['For those who want to learn how to program', 'Beginning developers']
                },
                skills: {
                    titles: [
                        'Programming in PHP',
                        'Understand the principles of OOP',
                        'Work with the file system',
                        'Find errors in code',
                        'Work with databases',
                        'Develop on Laravel'
                    ],
                    texts: [
                        'You will go through the basics, without which it is impossible to grow into a cool PHP developer: learn how to work with variables, data types, conditions, loops, functions. Learn about recursion and scope',
                        'Learn how to organize code into classes, control access to properties, and encapsulate methods. Make your applications more predictable and secure, and your code more readable',
                        'Learn how to open files for reading or writing on the local system and over the Internet. Get familiar with XML, JSON formats',
                        'Familiarize yourself with the Xdebug debugging tool, you can find and fix errors in the application',
                        'Learn how to connect MySQL to a project. Learn how to write queries in SQL, get, add, delete and change information in the database',
                        'Get acquainted with the principles of the framework, routing, set up interaction with the database, connect the Blade templating engine. Learn to write and test complex business logic'
                    ]
                },
                content: {
                    title: {
                        text: 'Webinars and practice based on real cases are waiting for you',
                        numbers: ['39', '206'],
                        descriptions: ['modules', 'video materials']
                    },
                    courses: {
                        titles: [
                            'PHP developer. Basic level',
                            'Programmer 1C: Bitrix',
                            'Cloud storage',
                            'Booking.com analogue',
                            'Team project: online store'
                        ]
                    }
                },
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
            preview: {
                occupation: 'C++ developer',
                imgSrc: '/courses/previews/c++.png',
                time: '7 months',
                path: 'c-plus-plus',
            },
            course: {
                logoSrc: '/courses/course/logos/c++.png',
                header: {
                    text: 'C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language. You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills',
                    features: [
                        {
                            title: '★ 4,6 out of 5',
                            text: 'based on 9 746 course evaluations'
                        },
                        commonItems.header.features.durationSevenMonths,
                        {
                            title: '2 projects',
                            text: 'in portfolio'
                        },
                        {
                            title: 'Support',
                            text: 'curator'
                        },
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_73434525171cc8231ff2b24ddfa2c05fa84f74dc15789991354209.png',
                        'https://248006.selcdn.ru/LandGen/phone_3e46222e2f153a264c5c16f81c19e5e68a28a02f1578999111297.png'
                    ],
                    texts: [
                        'Learn the basic principles of C++ programming. Write your first programs, build a portfolio and start a career in the direction you like',
                        'Get familiar with C++ syntax and learn the in-demand language. Write a microservice, make a game for UE4 and be able to apply for the position of a middle developer in a game dev or IT company',
                    ],
                    titles: ['For those who want to become a programmer', 'Developers in other languages']
                },
                skills: {
                    titles: [
                        'Program in C++',
                        'Work with databases',
                        'Use Git',
                        'Understand the principles of OOP',
                        'Develop microservices',
                        'Create games for UE4',
                    ],
                    texts: [
                        'Learn the syntax, loops, conditions, and features of the language. Learn how to turn lines of code into working programs',
                        'Learn the SQL language and be able to quickly get information using database queries',
                        'Learn how to work with a distributed version control system and be able to make changes to the project together with the team',
                        'Get familiar with the object-oriented programming paradigm and learn how to work with objects and classes',
                        'You will learn how to create algorithms and will be able to develop complex programs from different independent components',
                        'Learn how to use the C++ toolkit for game development. You will be able to create simple arkanoid and shooters for the Unreal Engine'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_18ae41922e60ac6872cda3dd8bf35b9c724615f0.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_aa40443d4fc9f5711646e553cacabc96263c734f.jpg'
                    ],
                    titles: [
                        'Search engine',
                        'Browser'
                    ],
                    texts: [
                        "You will develop a search engine for the company's corporate portal - an analogue of the Yandex or Google search string. Learn to get data from web pages and build search indexes. Write a relevancy formula to return search results",
                        'Work with other course participants to create an app that your friends and family can use. Write a full-fledged browser in C ++: with its help, you can search for information, browse the web and surf social networks - like in Google Chrome or Yandex Browser'
                    ],
                },
                content: {
                    title: {
                        text: 'Webinars and practical tasks are waiting for you. You will learn how to program in C ++, work with databases, Git version control system and develop games on the Unreal Engine 4. Practice developing services and add projects to your portfolio',
                        numbers: ['95', '450'],
                        descriptions: ['thematic modules', 'video materials']
                    },
                    courses: {
                        titles: [
                            'C++',
                            'Advanced C++ and creating GUIs',
                            'Create an environment',
                            'Understanding the main classes and methods',
                        ]
                    }
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
            preview: {
                occupation: 'Android developer',
                imgSrc: '/courses/previews/android.png',
                time: '7 months',
                path: 'android',
            },
            course: {
                logoSrc: '/courses/course/logos/android.png',
                header: {
                    text: "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services. You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course",
                    features: [
                        commonItems.header.features.getJobInSevenMonths,
                        commonItems.header.features.forBeginners,
                        {
                            title: 'Team internship',
                            text: 'at the end of the course'
                        },
                        commonItems.header.features.guarantees,
                        {
                            title: 'Lots of practice',
                            text: '43 practical work to develop skills'
                        },
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_21e32f33213998f2b4586418fa6658202d2fecf3.png',
                        'https://248006.selcdn.ru/LandGen/phone_7246954690f98ed86dcd2a2aeb73599726eeef4a.png',
                        'https://248006.selcdn.ru/LandGen/phone_ea200f53b190b7e75a1d4ca5cb054c4461588d9a.png'
                    ],
                    texts: [
                        'You will go from a beginner to a confident Android developer without stress: learn to code in Kotlin from scratch, write your first applications for your portfolio and be able to get a job right after the course',
                        'In practice, solidify the basics and delve into more complex topics. Learn how to create and test large applications according to technical specifications from a real customer',
                        'Learn about the features of developing and testing mobile software. Get system knowledge and portfolio, you can find a job as an Android developer and increase your income'
                    ],
                    titles: ['Beginners in programming', 'Beginning developers', 'Programmers who want to change direction']
                },
                skills: {
                    titles: [
                        'Programming in Kotlin',
                        'Work in Android Studio environment',
                        'Use Android SDK',
                        'Create animations and custom screens',
                        'Timer applications',
                        'Design stable and fast applications'
                    ],
                    texts: [
                        'Kotlin is the main programming language for Android applications. You will learn from scratch both the basic features of the language and advanced concepts such as multithreading',
                        'Learn how to design screens and program application logic, learn how to release your projects on Google Play',
                        "You will create dynamic applications that solve user problems. For example, learn how to access the device's camera or location",
                        'Boring and static apps are a thing of the past. You will learn everything you need to design custom transitions between application states, and you will be able to code even the most unusual screen',
                        "Who will use your app if it doesn't work? You will learn how to check the performance of projects under different conditions, use emulators and simulators",
                        'Design patterns will help you speed up the development process, and you will also learn how to avoid memory leaks - this aspect is often forgotten by beginners'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_e5eb8c8011201d0440fc0d3d9373ecfc5ec8d99d.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_ef2c80215f1056c911bf57384bfef0098751c627.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_841791802b54ac1f438813caec54c7658fc36fcd.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_9e37b4ded0db504e52607f5e7396d7aac3726603.jpg',
                        'https://248006.selcdn.ru/LandGen/phone_c9f88e81fd6673c74ee7ab8034b672c1c9f8b4a9.jpg'
                    ],
                    titles: [
                        'Team project: mobile application for Android',
                        'Console application for the logistics center',
                        'Analog Unsplash',
                        'Strava analogue',
                        'Reddit analogue'
                    ],
                    texts: [
                        'As part of a team led by an experienced team leader, you will create an Android application. You will be given TOR, project design and roles in the team. All processes of this project are an experience as close as possible to real conditions. This is how applications are made',
                        'Create a program that will track the movement of trucks with sorted goods, distribute car flows between loading and unloading points, and warn if the goods in the truck exceed the carrying capacity',
                        'Develop an application for a photo sharing service where registered users can view photos, like them and download them',
                        'Create an app for runners and cyclists that allows you to track your activity and weight and get workout reminders',
                        'Develop an application that allows users to post links, find interesting content and discuss it.'
                    ],
                },
                content: {
                    title: {
                        text: '200 online classes, 50 thematic modules and practice based on real cases are waiting for you',
                        numbers: ['50', '5'],
                        descriptions: ['practical tasks', 'final works']
                    },
                    courses: {
                        titles: ['Kotlin ≈ 4-5 months', 'Android developer. Level 1 ≈ 5-6 months', 'Android developer. Level 2 ≈4 months',]
                    }
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
            preview: {
                occupation: 'IOS developer',
                imgSrc: '/courses/previews/ios.png',
                time: '6 months',
                path: 'ios',
            },
            course: {
                logoSrc: '/courses/course/logos/ios.png',
                header: {
                    text: 'An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs interfaces, tests code, and uploads projects to the App Store. On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job',
                    features: [
                        commonItems.header.features.getJobInSixMonths,
                        {
                            title: 'Feedback',
                            text: 'on practical work from experienced professionals'
                        },
                        {
                            title: 'Team internship',
                            text: 'under the leadership of a team leader'
                        },
                        commonItems.header.features.guarantees,
                        commonItems.header.features.forBeginners
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_27077d4ce08bed215d90e1d22ef764aea176ff9d.png',
                        'https://248006.selcdn.ru/LandGen/phone_b8dff30ace11f525a49f10951c610d8e1f7c3613.png',
                        'https://248006.selcdn.ru/LandGen/phone_3162715cbab5423a858090e2a5b5e1521ddc289c.png'
                    ],
                    texts: [
                        "The course will allow you to master the profession of an iOS developer from scratch. You will write your first portfolio applications, and after graduation we will help you with employment",
                        'You will receive the systematic knowledge that is necessary for a successful career as an iOS developer',
                        'Get to know the specifics of iOS development better, hone the necessary skills, find a profitable and interesting job'
                    ],
                    titles: ['Beginners in programming', 'Beginning developers', 'Programmers who want to change specialization']
                },
                skills: {
                    titles: [
                        'Programming in Swift',
                        'Design mobile applications',
                        'Create interfaces for applications',
                        'Make your applications efficient',
                        'Release your projects in the App Store',
                        'Work in a team'
                    ],
                    texts: [
                        'Learn the language in which you will describe the entire logic of the applications. Step by step, you will understand the basics and understand how the language works from the inside',
                        'Learn how to choose the right architecture for your application, get acquainted with the MVC, MVVM, SOLID models. Make your code readable and structured',
                        'You will learn how to design both basic UI elements and custom buttons, screens, animations, and transitions',
                        'Get familiar with multithreading and learn how to work effectively with the transfer of large amounts of data over the network',
                        'Learn how to upload projects to AppStore Connect so that the whole world knows about your application',
                        'In practice, you will understand how the software development process works in large companies. Present team final project'
                    ]
                },
                projects: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_5de25d4ab979cc7edb0d1bd10b85fca230e6cf88.png',
                        'https://248006.selcdn.ru/LandGen/phone_8e006da29d42213ee2dea04d117d78afd4304969.jpg'
                    ],
                    titles: [
                        'Analog Yandex.Go',
                        'News application'
                    ],
                    texts: [
                        'As part of a team led by an experienced team leader, you will create an analogue of Yandex.Go with a food delivery function. You will be given TOR, project design and roles in the team. All processes of this project are an experience as close as possible to real conditions. This is how real applications are built',
                        'You will develop an application with news about the space industry. The project will consist of several screens: news, blog, favorites. Materials will be uploaded through a public API, and favorite notes can be saved on the device and read without an Internet connection'
                    ],
                },
                content: {
                    title: {
                        text: '300 online classes and practical tasks are waiting for you. In the first two levels, you will learn Swift from the very beginning',
                        numbers: ['39', '2'],
                        descriptions: ['practical tasks', 'portfolio apps']
                    },
                    courses: {
                        titles: ['iOS development. Level 1 ~6 months', 'iOS development. Level 2 ~4 months']
                    }
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
            preview: {
                occupation: 'Mobile developer',
                imgSrc: '/courses/previews/mobile.png',
                time: '7 months',
                path: 'mobile',
            },
            course: {
                logoSrc: '/courses/course/logos/mobile.png',
                header: {
                    text: 'You will learn how to create applications for devices based on iOS or Android from scratch. Practice on real tasks and add projects to your portfolio. You can get a full-time mobile developer or work as a freelancer',
                    features: [
                        {
                            title: 'We will help you decide',
                            text: 'which platform to develop for - iOS or Android'
                        },
                        commonItems.header.features.getJobInSevenMonths,
                        commonItems.header.features.feedback,
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_24a404e808fbfd0cf8466bfcb32d18f4502e5d8d.png',
                        'https://248006.selcdn.ru/LandGen/phone_68b506bc505531a0702e65e3475a69c37a462f65.png',
                        'https://248006.selcdn.ru/LandGen/phone_2e532061dfe18df2dd8f19041d43b9d8e085f7ef.png'
                    ],
                    texts: [
                        "Master programming in Swift or Kotlin, learn how to design interfaces and test applications. Get a sought-after profession: you will work in a studio or in a product team",
                        'Fix the basics and go through more advanced topics. Learn how to create and test mobile applications according to technical specifications from a real customer',
                        'Learn about the features of designing, developing and testing mobile applications. Add projects to your portfolio, add skills to your resume, change jobs or move up the career ladder'
                    ],
                    titles: ['Beginners in programming', 'Beginning mobile developers', 'Developers from other fields']
                },
                skills: {
                    titles: [
                        'Create native apps',
                        'Design interfaces and animations',
                        'Set up the client-server part',
                        'Timer applications',
                        'Write clean and efficient code',
                        'Work in a team'
                    ],
                    texts: [
                        'You will not only learn the basics of Swift or Kotlin, but also dive into advanced topics: learn how to work with multithreading, get acquainted with algorithms, data structures, and learn how to code-review',
                        'You will lay out basic UI elements and assemble them on the screen. Learn how to create custom interfaces, screen transitions and animations',
                        'You will connect interfaces and program logic into a single whole, learn how to communicate with databases using SQL and make network queries. Connect third party services to your apps',
                        'Learn how to use emulators and simulators to test your code. You will test projects in different conditions, for example, when the signal is lost',
                        'Familiarize yourself with design patterns and coding rules. Make your programs readable, structured and easy to debug',
                        'You will understand the requirements of designers and team leaders. In practice, you will understand how the application development process works, and defend a team thesis project'
                    ]
                },
                projects: {
                    titles: [
                        'Profession iOS developer. news application',
                        'Profession iOS developer. Analog Yandex Go',
                        'Profession Android developer. Console application for the logistics center',
                        'Profession Android developer. Analog Unsplash',
                        'Profession Android developer. Strava analogue',
                        'Profession Android developer. Reddit analogue',
                        'Team project: mobile application for Android'
                    ],
                },
                content: {
                    title: {
                        text: 'Webinars and practice based on real cases are waiting for you',
                        numbers: ['2', '139'],
                        descriptions: ['professions', 'modules']
                    },
                    courses: {
                        titles: ['iOS development. Level 1', 'iOS development. Level 2', 'Kotlin', 'Android developer. Level 1', 'Android developer. Level 2 ']
                    }
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
                        'The courses cover all the topics that a mobile developer needs. If you study regularly, complete practical tasks and work on final projects, then by the end of the course you will be ready for employment. We will take care of the rest — we will select vacancies, help you write a resume, correctly draw up a portfolio and prepare for an interview. If the interview fails, we will collect feedback from the employer and suggest in what aspects you need to develop, and continue working. Most often, platform users get a chance to prove themselves in an internship or get a junior position',
                        'Everything depends on you. On average, platform users spend 3 to 5 hours a week',
                        "You will have reviewing experts and a curator in the course's Telegram chat. They will comment on practical work, give useful advice and answer any questions. You will be able to adopt their experience, professional knowledge and life hacks",
                        'Yes, you can buy the course in installments - and plan your budget by breaking the entire amount into small monthly payments',
                    ]
                }
            }
        } as CourseI,
        flutter: {
            preview: {
                occupation: 'Flutter developer',
                imgSrc: '/courses/previews/flutter.png',
                time: '6 months',
                path: 'flutter',
            },
            course: {
                logoSrc: '/courses/course/logos/flutter.png',
                header: {
                    text: 'You will master the Flutter development tool and be able to create mobile applications immediately for iOS and Android. Learn one of the native languages to choose from - Kotlin or Swift and become a sought-after specialist who can work with different platforms',
                    features: [
                        {
                            title: 'Employment',
                            text: 'in 6 months'
                        },
                        commonItems.header.features.guarantees,
                        commonItems.header.features.feedback
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_be7c1d4e7b19170ce3b2ff6aab88458c64021917.png',
                        'https://248006.selcdn.ru/LandGen/phone_d02e2de43a6e17c326448aeca6b346bc8be1cce8.png',
                    ],
                    texts: [
                        "Go beyond one platform and become a universal developer. Learn how to create working prototypes and complete projects with Flutter. Master Dart and add cross-platform apps to your portfolio. Rewrite personal projects for Android and iOS, offer to implement the framework in your company or join a new team",
                        'Learn about the features of developing and testing mobile applications. Master one of the native programming languages Swift or Kotlin. Get to know Dart, the Flutter framework, and write cross-platform portfolio apps. After the course, you will be able to change direction and start a career in mobile development',
                    ],
                    titles: ['For native developers', 'Programmers in other areas']
                },
                skills: {
                    texts: [
                        'Write application blocks in native language',
                        'Build apps with Flutter and Dart',
                        'Use ready-made functions from libraries',
                        'Customize the interaction of applications with the backend',
                        'Interact with UX Design',
                        'Work in the Git version control system',
                        'Work according to Scrum methodology for sprints',
                        'Timer mobile applications'
                    ]
                },
                content: {
                    title: {
                        text: 'You are waiting for a video with theory and practice based on real cases',
                        numbers: ['115', '113'],
                        descriptions: ['modules', 'practical task']
                    },
                    courses: {
                        titles: ['Flutter', 'Android', 'IOS', 'Mobile app design from scratch to PRO',],
                    }
                },
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
            preview: {
                occupation: 'Java developer',
                imgSrc: '/courses/previews/java.png',
                time: '6 months',
                path: 'java',
            },
            course: {
                logoSrc: '/courses/course/logos/java.png',
                header: {
                    text: "Java is one of the most popular programming languages in the world. It is used to create reliable applications for banks, IT corporations and streaming services, develop online stores, games and cloud solutions. Java is used in their products by: Twitter, Spotify, State Services. Minecraft and Assassin's Creed games are also written in Java. Java is possible to learn on your own, but much easier - on a course with the support of an experienced expert",
                    features: [
                        {
                            title: '★ 4.5 out of 5',
                            text: 'based on 46 012 course evaluations'
                        },
                        {
                            title: 'Six months later',
                            text: 'you can start working'
                        },
                        {
                            title: 'Team internship',
                            text: 'under the leadership of a team leader'
                        },
                        {
                            title: 'Lots of practice',
                            text: '69 practical works'
                        },
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_eda894e08bd420dceebe9236359421172560b8b0.png',
                        'https://248006.selcdn.ru/LandGen/phone_61edcc5c3bc4f8c0db7805ac7c3cfdb91f618a02.png'
                    ],
                    texts: [
                        'Perhaps you already have basic skills and understanding of programming and apply this knowledge in your projects. Our course will give you an in-depth knowledge of the universal Java language, and you will begin to properly structure the code and follow everyone\'s "favorite" syntax to create outstanding projects',
                        'If you are attracted by modern technologies and high salaries in the field of IT, then this course is definitely for you. You will learn how to write code, learn that the legend that a programmer must be perfect in mathematics is a fiction, begin to think critically and be able to code in the most popular language in the world',
                    ],
                    titles: ['Beginning programmers', 'Beginners']
                },
                skills: {
                    texts: [
                        'Administration and deployment of pilot works',
                        'Knowledge of OOP principles',
                        'Java web application development',
                        'Development of web applications on the Spring framework',
                        'Working with the Git version control system',
                        'Relational database query writing skills'
                    ]
                },
                content: {
                    title: {
                        text: 'Methodologists-practitioners prepared 26 basic, 9 additional and 22 bonus thematic modules based on the requirements of employers. Without "water", only important information',
                        numbers: ['57', '2'],
                        descriptions: ['thematic modules', 'final works']
                    },
                    courses: {
                        titles: [
                            'Introductory module',
                            'Language Syntax - Part 1',
                            'Language Syntax - Part 2',
                            'Objects and classes. Part 1. Methods and classes',
                            'Objects and classes. Part 1. Encapsulation',
                            'Objects and classes. Part 3. Static, constants and enum',
                            'Primitives',
                            'Numbers and dates',
                            'Strings',
                            'Arrays and Collections',
                            'Inheritance and polymorphism',
                            'Features of OOP in Java',
                            'Exceptions, debugging, testing and logging',
                            'Working with files and network',
                            'Working with MySQL in Java',
                            'Multithreading',
                            'HTTP protocol',
                            'Web Application Development',
                            'Non-relational (NoSQL) databases and queues',
                            'Performance and optimization',
                            'Development of desktop applications',
                            'Introduction to Algorithms',
                            'Data Structures',
                            'Distributed storage and computing',
                            'Design patterns',
                            'Git version control system',
                            'SQL query language',
                            'Presentation of final projects',
                            'Help in finding a job',
                            'Individual project: search engine',
                            'Team Internship: Social Network Development',
                        ]
                    }
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
            preview: {
                occupation: 'Java developer PRO',
                imgSrc: '/courses/previews/java-pro.png',
                time: '11 months',
                path: 'java-pro',
            },
            course: {
                logoSrc: '/courses/course/logos/java-pro.png',
                header: {
                    text: 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist',
                    features: [
                        {
                            title: '★ 4.5 out of 5',
                            text: 'based on 38 137 course evaluations'
                        },
                        {
                            title: '4 months later',
                            text: 'you can get a job'
                        },
                        {
                            title: 'Practical work',
                            text: 'with expert verification'
                        },
                        commonItems.header.features.guarantees
                    ]
                },
                for_who: {
                    photographs: [
                        'https://248006.selcdn.ru/LandGen/phone_8842a60ff215e4738db6796099e7b2b688439fb215845377455302.png',
                        'https://248006.selcdn.ru/LandGen/phone_5c55c73f3bf2c300b90f540a7ff6406c99c172e315845377647246.png',
                        'https://248006.selcdn.ru/LandGen/phone_757b950c687cb8d1e31c6d93c611bf42fe69ddc915845377824032.png'
                    ],
                    texts: [
                        "You will understand how to create web applications, explore the possibilities of Java, develop the first projects for real customers and build a portfolio",
                        'You will understand the features and syntax of Java, master a new popular language and be able to change the direction of work to work on interesting projects and earn more',
                        'Learn how to structure and debug your code, work with frameworks and databases, improve your level and be able to take on complex expensive projects in Java'
                    ],
                    titles: ['For those who want to get started in Java development', 'Programmers from other fields', 'Beginners in Java']
                },
                skills: {
                    titles: [
                        'Create applications in Java',
                        'Understand algorithms and data structures',
                        'Use Git',
                        'Work with databases',
                        'Optimize code',
                        'Use Spring'
                    ],
                    texts: [
                        'You will understand how to turn lines of code into a working program, master object-oriented programming and be able to develop applications with different functionality',
                        'Learn how to efficiently solve typical problems using well-known algorithms and existing data structures in Java',
                        'Learn how to work with a distributed version control system and be able to easily make or roll back changes in different versions of the same project',
                        'Learn the difference between MySQL, Redis and MongoDB, get familiar with Hadoop and learn how to manage large amounts of data',
                        'Learn how to debug and optimize your code, and be able to create programs with high performance',
                        'Explore the capabilities of the Spring framework and learn how to build web applications with it'
                    ]
                },
                content: {
                    title: {
                        text: 'You are waiting for 3 blocks with different levels of difficulty, videos from experts and practical tasks',
                        numbers: ['145', '1043'],
                        descriptions: ['thematic modules', 'video footage']
                    },
                    courses: {
                        titles: [
                            'Introductory module',
                            'The syntax of the language. Part 1',
                            'The syntax of the language. Part 2',
                            'Objects and classes. Part 1. Methods and classes',
                            'Objects and classes. Part 2. Encapsulation',
                            'Objects and classes. Part 3. Static, constants and enum',
                            'Primitives',
                            'Numbers and dates',
                            'Strings',
                            'Arrays and Collections',
                            'Inheritance and polymorphism',
                            'Features of OOP in Java',
                            'Exceptions, debugging, testing and logging',
                            'Working with files and network',
                            'Working with MySQL in Java',
                            'Multithreading',
                            'HTTP protocol',
                            'Web Application Development',
                            'Non-relational databases and queues',
                            'Development of desktop applications',
                            'Performance and optimization',
                            'Algorithms',
                            'Data Structures',
                            'Distributed storage and computing',
                            'Design patterns',
                            'Preparation for the final project',
                            'Working with the Spring framework',
                            'Infrastructure and enterprise solutions, and Java ecosystem options',
                            'Workshops and webinars',
                            'Git version control system',
                            'SQL query language',
                            'Web layout. Basic level',
                            'Graduation projects defense',
                            'Employment program',
                            'Working on the Bash command line',
                            'Universal programmer knowledge',
                            'English for IT professionals',
                            'Career and development for a programmer',
                            'Algorithms and data structures for developers',
                            'Search engine',
                            'Social network',
                        ],
                    }
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
            preview: {
                occupation: 'Cyber security specialist',
                imgSrc: '/courses/previews/cyber-security.png',
                time: '1 year',
                path: 'cyber-security'
            },
            course: {
                logoSrc: '/courses/course/logos/cyber-security.png',
                header: {
                    text: 'You will learn how to look for vulnerabilities, prevent threats and ensure the security of IT systems. Learn a sought-after profession even with zero experience in IT',
                    features: [
                        commonItems.header.features.durationOneYear,
                        {
                            title: '5 months later',
                            text: 'you can get a job'
                        },
                        commonItems.header.features.guarantees,
                        {
                            title: 'Practical works',
                            text: '100 works'
                        }
                    ]
                }
            }
        } as CourseI,
        devops: {
            preview: {
                occupation: 'DevOps engineer',
                imgSrc: '/courses/previews/devops.png',
                time: '7 months',
                path: 'devops'
            },
            course: {
                logoSrc: '/courses/course/logos/devops.png',
                header: {
                    text: 'You will learn how to administer Linux, set up web servers and master the DevOps methodology: you will automate the development of complex IT products. Get support from the Career Center and get a job as a Junior Specialist in 7 months. The course will suit you even if you have never done system administration or programming',
                    features: [commonItems.header.features.durationSevenMonths, commonItems.header.features.threeProjectsInPortfolio, commonItems.header.features.guarantees]
                }
            }
        } as CourseI,
        devops_pro: {
            preview: {
                occupation: 'DevOps engineer PRO',
                imgSrc: '/courses/previews/devops-pro.png',
                time: '1 year',
                path: 'devops-pro'
            },
            course: {
                logoSrc: '/courses/course/logos/devops-pro.png',
                header: {
                    text: 'You will master the DevOps methodology from scratch: combine development and operation processes, accelerate the implementation and delivery of new features to the user. Become a middle-level DevOps specialist',
                    features: [
                        commonItems.header.features.durationOneYear,
                        {
                            title: '6 projects',
                            text: 'in portfolio'
                        },
                        commonItems.header.features.guarantees
                    ]
                }
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