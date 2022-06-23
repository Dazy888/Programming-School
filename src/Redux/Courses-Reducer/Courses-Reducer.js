var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var initialState = {
    python: {
        job_name: 'Python-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_4589beaf332198133164e04e0fb855c2c1368858.webp',
        time: '1 year',
        main: {
            path: 'python'
        },
        course: {
            header: {
                titleTxt: 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and a portfolio task book, and the Career Center will help you find a job as a Python developer',
                textAboutJob: "A good developer doesn't stop learning after courses. Programming languages are frequently updated with new frameworks and features.In order to keep your skills in demand in the labor market, in 2022 we updated the course and added relevant materials.Access to online classes is open forever - you can learn new things at any time",
                companies: '6 342',
                salary: '1200',
                projects: '3'
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
            }
        }
    },
    java_pro: {
        job_name: 'Java-developer PRO',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_57c9d80b2b75745579f68b99bdd0e2c0516a955f.webp',
        time: '2 years',
        main: {
            backgroundClass: 'light-purple-back',
            path: 'java-pro'
        },
        course: {
            header: {
                titleTxt: 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist',
                companies: '3 000',
                salary: '1900',
                projects: '4',
                classNames: ['light-purple-back', 'light-purple-border']
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
            }
        }
    },
    web: {
        job_name: 'Web-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_1483b955a743f9098806cbe6c6d78d306a210b65.webp',
        time: '2 years',
        main: {
            backgroundClass: 'purple-back',
            path: 'web'
        },
        course: {
            header: {
                titleTxt: "You will learn how to create full-fledged websites and web applications from scratch. Master HTML, CSS, JavaScript and PHP, get familiar with frameworks and become a sought-after web developer. Even if you haven't programmed before' as string",
                textAboutJob: "A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend.Demand for web developers remains high - business profit directly depends on how convenient it is for customers to use the company's website",
                companies: '3 160',
                salary: '800',
                projects: '6',
                classNames: ['purple-back', 'purple-border']
            },
            for_who: {
                photographs: [
                    'https://248006.selcdn.ru/LandGen/phone_229c6152337eeea798e1bf5b4a10ad9e9f49bb53.png',
                    'https://248006.selcdn.ru/LandGen/phone_7f3b1a0a5d3c4980bb91dd4dc88c4810fbd342ba.png',
                    'https://248006.selcdn.ru/LandGen/phone_0627a8ae28c8e2540cd2c941653d2ee50b135da9.png'
                ],
                texts: [
                    'Learn the basics of JavaScript and PHP programming from scratch. Learn how to design websites in HTML and CSS. Create your first portfolio projects',
                    'Level up with the most popular programming languages Learn Vue, React or Angular frameworks and expand your coding skills',
                    'Learn to program in JavaScript and PHP, you will create projects on the Laravel framework. You can change direction and become a popular web developer'
                ],
                titles: ['Beginners in web development', 'Beginning developers', 'IT specialists']
            }
        }
    },
    c_plus_plus: {
        job_name: 'C++ developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_7d5b8e852952b4fc68ca058c53a3b9570fd4f3d7.webp',
        time: '1 year',
        main: {
            backgroundClass: 'light-blue-back',
            path: 'c-plus-plus'
        },
        course: {
            header: {
                titleTxt: "C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language.You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills",
                textAboutJob: "C++ developers work in large IT companies, game development, web development, create corporate and banking applications, design operating systems and software for robots",
                companies: '4 018',
                salary: '3500',
                projects: '2',
                classNames: ['light-blue-back', 'light-blue-border']
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
            }
        }
    },
    python_fullstack: {
        job_name: 'Python Fullstack-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_43712003895f94c163a288e6e9e0e00bbf671110.webp',
        time: '1 year',
        main: {
            backgroundClass: 'pink-back',
            path: 'python-fullstack'
        },
        course: {
            header: {
                titleTxt: "You will be able to actively participate in all stages of the development of sites and web interfaces - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more as string",
                companies: '4 231',
                salary: '1400',
                projects: '4',
                classNames: ['pink-back', 'pink-border']
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
            }
        }
    },
    android: {
        job_name: 'Android-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_763111395fcf224a8e694cdfbf3bb3d198914536.webp',
        time: '22 months',
        main: {
            backgroundClass: 'light-orange-back',
            path: 'android'
        },
        course: {
            header: {
                titleTxt: "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services.You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course",
                textAboutJob: "Junior Android developers earn an average of 400 usd, middles - 2000 usd, and seniors and leads can count on salaries from 3000 usd",
                companies: '3 867',
                salary: '1500',
                projects: '2',
                classNames: ['light-orange-back', 'light-orange-border']
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
            }
        }
    },
    c_sharp: {
        job_name: 'C# developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_9d6b6453a2e5702f3848771f0bb79eda7566a530.webp',
        time: '1 year',
        main: {
            backgroundClass: 'blue-back',
            path: 'c-sharp'
        },
        course: {
            header: {
                titleTxt: "Do you want to create a website or a game? Or write a mobile application? Or maybe you dream of programming multi-threaded services? Then you should definitely learn C#. The language has absorbed the best of Java and C++ and is used in all areas: from web development to game development.Learn C# from scratch to Pro level, take part in the team development of the messenger and become a cool programmer in the in-demand language",
                textAboutJob: "C# developers create backends for ASP.NET websites, Unity video games, Xamarin mobile apps, high-load desktop programs such as CRM systems, and design smart chatbots. Microsoft maintains and develops the language to this day.A beginner can master C# in a few months. After studying, you will be able to find yourself in web development, you will write corporate software for banks and large businesses. Or master Unity and create indie games in the studio",
                companies: '5 206',
                salary: '900',
                projects: '2',
                classNames: ['blue-back', 'blue-border']
            },
            for_who: {
                photographs: [
                    'https://248006.selcdn.ru/LandGen/phone_4c5e5273443bf1d3ac90f7fc2eb999c3a3c350f515792575451483.png',
                    'https://248006.selcdn.ru/LandGen/phone_54615e41797b0eb62492f4d51492aed3244b4c471579257575757.png'
                ],
                texts: [
                    'A systematic approach will help you learn to program from scratch and learn the topic in theory and practice',
                    'Using the .NET platform, you can develop web resources, applications and games of any complexity. In practice, master all the subtleties of programming in C #',
                ],
                titles: ['For beginners', 'Practicing programmers']
            }
        }
    },
    ios: {
        job_name: 'IOS-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_b0d52a8c5100ff4bb126ca5fc03cd1da32805b9b.webp',
        time: '1 year',
        main: {
            backgroundClass: 'blue-back',
            path: 'ios'
        },
        course: {
            header: {
                titleTxt: "An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs interfaces, tests code, and uploads projects to the App Store.On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job",
                textAboutJob: "Business lacks great programmers, so companies offer high salaries and remote work.Junior iOS developers earn an average of 400 usd, middles - 1500 usd, and seniors and leads can count on salaries from 2300 usd",
                companies: '2 768',
                salary: '2000',
                projects: '3',
                classNames: ['blue-back', 'blue-border']
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
            }
        }
    },
    php_fullstack: {
        job_name: 'PHP Fullstack-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_62f01151670d0e3f00a7099b2501ac2e043a2314.webp',
        time: '1 year',
        main: {
            backgroundClass: 'light-dark-blue-back',
            path: 'php-fullstack'
        },
        course: {
            header: {
                titleTxt: "You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development",
                companies: '3 235',
                salary: '1400',
                projects: '4',
                classNames: ['light-dark-blue-back', 'light-dark-blue-border']
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
            }
        }
    },
    mobile: {
        job_name: 'Mobile-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_b21b1ae4f5baf79bc47f29ca1ab1ef7ad0d3b615.webp',
        time: '2 years',
        main: {
            backgroundClass: 'light-pink-back',
            path: 'mobile'
        },
        course: {
            header: {
                titleTxt: "You will master a profession in demand and learn how to create applications on Android or iOS, gain skills in developing complex UX / UI solutions and be able to expand the functionality of the product. Our managers will help you choose your specialization",
                textAboutJob: "A mobile developer creates applications that we use every day on smartphones, smartwatches and tablets. For example, he writes services for ordering a taxi and food delivery, online banking, applications for booking hotels, selecting airline tickets and listening to music. Such a professional understands the peculiarities of mobile platforms, works in conjunction with UX and UI designers, knows how to test and optimize code for work on different devices",
                companies: '6 000',
                salary: '1900',
                projects: '2',
                classNames: ['light-pink-back', 'light-pink-border']
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
            }
        }
    },
    java: {
        job_name: 'Java-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_477ae814606ca5e5256c683921f40d2d7f29bad4.webp',
        time: '9 months',
        main: {
            backgroundClass: 'orange-back',
            path: 'java'
        },
        course: {
            header: {
                titleTxt: "Learn the popular Java programming language from scratch. Become a sought-after specialist in 9 months, even if you have never programmed before",
                companies: '3 000',
                salary: '1900',
                projects: '2',
                classNames: ['orange-back', 'orange-border']
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
            }
        }
    },
    frontend_full: {
        job_name: 'Frontend-developer from zero to PRO',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_af62204878d4eba3a075419b219ff11849d0bbc3.webp',
        time: '2 years',
        main: {
            backgroundClass: 'grey-back',
            path: 'frontend-full'
        },
        course: {
            header: {
                titleTxt: "Learn JavaScript, TypeScript, and other trending web application development technologies from scratch. Build a portfolio, learn how to work in a team and start a career as a frontend developer",
                textAboutJob: "A frontend developer creates the visible part of websites and web applications using markup and programming languages, frameworks, and other tools. He develops interfaces for complex services - task schedulers, instant messengers, online stores. Without a frontend developer, there will be no likes under posts in social networks, a basket of goods, comments, and convenient navigation through online maps.Frontend developers are needed by both large corporations and startups. And if you don’t want to work for a company, freelancing options are always available",
                companies: '6 660',
                salary: '1100',
                projects: '7',
                classNames: ['grey-back', 'grey-border']
            },
            for_who: {
                photographs: [
                    'https://248006.selcdn.ru/LandGen/phone_47154b3bc22aa560051467b5b501f08d98079468.png',
                    'https://248006.selcdn.ru/LandGen/phone_174ce7a1726098665c79bdd21ae8c7d07d97b9d1.png'
                ],
                texts: [
                    'You will go from a person far from IT to a confident web developer with teamwork skills. You can start a career in a promising IT studio',
                    'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession',
                ],
                titles: ['For absolute beginners', 'Beginning programmers']
            }
        }
    },
    frontend_pro: {
        job_name: 'Frontend-developer PRO',
        header_img: 'https://248006.selcdn.ru/LandGen/desktop_98a708fd2012f5033663fece150133eac4387673.webp',
        time: '1 year',
        main: {
            backgroundClass: 'light-green-back',
            path: 'frontend-pro'
        },
        course: {
            header: {
                titleTxt: "You will start with the basics of layout and JavaScript, and by the end of the course, you will have learned how to create enterprise services. Gain teamwork experience and start your career as a web developer",
                companies: '4 100',
                salary: '1100',
                projects: '6',
                classNames: ['light-green-back', 'light-green-border']
            },
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
            }
        }
    },
    js_fullstack: {
        job_name: 'Javascript Fullstack-developer',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_9567df25c360d949e492c6afcb047f9878baa2b3.webp',
        time: '1 year',
        main: {
            backgroundClass: 'yellow-back',
            path: 'javascript-fullstack'
        },
        course: {
            header: {
                titleTxt: "You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, React or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more",
                companies: '6 000',
                salary: '1400',
                projects: '4',
                classNames: ['yellow-back', 'yellow-border']
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
                    'You will learn Vue.js, React.js or Angular and be able to create complex interactive interfaces. Get soft skills for professional development and understand where to go next'
                ],
                titles: ['Those who want to start a career as a programmer', 'Beginning developers', 'Experienced professionals']
            }
        }
    },
    php_pro: {
        job_name: 'PHP-developer from zero to PRO',
        main_img: 'https://248006.selcdn.ru/LandGen/desktop_ef69df0ff2b047f7d37fea27a790dd8187e4404a.webp',
        time: '1 year',
        main: {
            backgroundClass: 'light-yellow-back',
            path: 'php-pro'
        },
        course: {
            header: {
                titleTxt: "You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position",
                textAboutJob: "PHP is one of the ten most popular programming languages in the TIOBE ranking. Most CMS are written on it, including WordPress, which powers 65% of all sites in the world. PHP under the hood of Wikipedia, VKontakte, Facebook* and YouTube. Developers have been developing the language for over 25 years and introducing new features with each version.To keep old projects running and write web applications from scratch, companies hire PHP programmers",
                companies: '2 837',
                salary: '1400',
                projects: '3',
                classNames: ['light-yellow-back', 'light-yellow-border']
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
            }
        }
    }
};
export function CoursesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return __assign({}, state);
    }
}
