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
    common: {
        pilipenko: {
            img: 'https://248006.selcdn.ru/LandGen/phone_fbbc99ca56e69746997e6eaf8c3e002e7afc234a16233165285426.png',
            name: 'Danil',
            surname: 'Pilipenko',
            description: 'SymbioWay Human Resources Director',
            text: 'More than 50 presentations at seminars and conferences. More than 10 years of experience in Java development. Managed the software development department at the Vokrug Sveta publishing house. For a long time he was the lead developer of Utinet'
        },
        kornienko: {
            img: 'https://248006.selcdn.ru/LandGen/phone_1890723ab65184cfab1f039ff440e145b130df101581930947279.png',
            name: 'Sergey',
            surname: 'Kornienko',
            description: 'Frontend team-lead of the investment marketplace of the Moscow Exchange'
        },
        vasiyanovich: {
            img: 'https://248006.selcdn.ru/LandGen/phone_a033e05247e12556bab2ffd1de900b5f1d04edc815816063024472.png',
            name: 'Max',
            surname: 'Vasiyanovich',
            description: 'Practicing freelancer, mentor of the "Web layout" block'
        },
        shulaev: {
            img: 'https://248006.selcdn.ru/LandGen/phone_9d00f491602e13a195cc1cb879d6e22547a9ca0716173753055802.jpg',
            name: 'Andrey',
            surname: 'Shulaev',
            description: 'Lead Software Engineer at EPAM. Work experience - more than 3 years'
        },
        krotov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_5e0651512a80fafedb8c1166afd241ec743f3d3f15858530969821.png',
            name: 'Sergey',
            surname: 'Krotov',
            description: 'Lead Software Engineer at EPAM. Work experience - more than 5 years'
        },
        ovchinnikov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_f4d4e17eaebd56c213bbc998fe48cea8dae6655c15816710471744.png',
            name: 'Michael',
            surname: 'Ovchinnikov',
            description: 'Lead Software Engineer at Badoo',
            text: 'Specialist in the development of high-load systems and big data processing. Speaker of the largest IT-conferences in Russia. More than 15 years of experience in IT - from startups to large companies'
        },
        malyx: {
            img: 'https://248006.selcdn.ru/LandGen/phone_a687400295cf38db7b04f57a7a5071c14e33892616073245514895.png',
            name: 'Andrey',
            surname: 'Malyx',
            description: 'QA Automation Lead'
        },
        rybakov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_a0ead5cd7ca2d8c360d24d55373b4cea7b39b05015802024074199.png',
            name: 'Anton',
            surname: 'Rybakov',
            description: 'Senior UI/UX Designer at CROC'
        },
        yakovushen: {
            img: 'https://248006.selcdn.ru/LandGen/phone_8e9a02d5a15b7535cc3ccf7bf7e4694b84e1800415772835958486.png',
            name: 'Egor',
            surname: 'Yakovushen',
            description: 'Setka, senior frontend-developer. Block «Javascript»',
            text: 'Engaged in web development since 2005. Participated in the development and launch of more than 200 Internet projects. Among his clients: PepsiCo, Tetra Pak, EY, Ministry of Culture, Moscow City Duma, Cherkizovo Group and others'
        },
        nikolaev: {
            img: 'https://248006.selcdn.ru/LandGen/phone_300d123f37c4a9812f6203f3007e7b3622dda48716227363114772.jpg',
            name: 'Max',
            surname: 'Nikolaev',
            description: 'Senior IOS developer at Alfa-Bank',
            text: 'Developing mobile applications since 2014. Prior to that, he was engaged in backend development, Python programming and testing. Did projects for Alfa-Bank, Sreda Solutions, Motorola Solutions'
        },
        ageychenko: {
            img: 'https://248006.selcdn.ru/LandGen/phone_1948593983e0df83652171e9205340baaf241a2916232524461533.jpg',
            name: 'Alex',
            surname: 'Ageychenko',
            description: 'Lead Android Developer, Tinkoff'
        },
        tiunov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_645d9a358339dead930478e2632d53da72da97de16233165763255.jpg',
            name: 'Timothy',
            surname: 'Tiunov',
            description: 'System architect at Sbermegamarket'
        },
        avdeev: {
            img: 'https://248006.selcdn.ru/LandGen/phone_b03ee8a95d1181ea402ba85cb046fab4d22badff16056266416968.png',
            name: 'Alex',
            surname: 'Avdeev',
            description: 'CTO at Mish Design Lab, Senior Frontend Developer'
        },
        pozdnyakov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_16e4640f57e33793bc9b2350c42d73a5aa7930ca16031193418503.png',
            name: 'Alexander',
            surname: 'Pozdnyakov',
            description: 'Angular Developer in Insilico Medicine'
        },
        bondarovich: {
            img: 'https://248006.selcdn.ru/LandGen/phone_b782df15f2ad6d8fa9ab0285c4e4b92382660cd415808363896536.png',
            name: 'Pavel',
            surname: 'Bondarovich',
            description: 'CTO Creonit digital production'
        },
        savchenko: {
            img: 'https://248006.selcdn.ru/LandGen/phone_3a06a7d73a6f25936ddcf3eddbd888b2d23fd0a815808363617309.png',
            name: 'Max',
            surname: 'Savchenko',
            description: 'Frontend team leader Creonit digital production'
        },
        mirotin: {
            img: 'https://248006.selcdn.ru/LandGen/phone_215224282a1d2a0b0ec9ee0708f6db1af3c909e015821159435477.png',
            name: 'Evgeniy',
            surname: 'Mirotin',
            description: 'Software Development Engineer in Play North. Block «Node.js»'
        },
        mixeev: {
            img: 'https://248006.selcdn.ru/LandGen/phone_465249a3105a9675f8879acee30e0b9f6bb694a516148522378829.jpg',
            name: 'Gleb',
            surname: 'Mixeev',
            description: 'CTO at Beta, Head of the FrontendConf conference program committee'
        },
        klimonova: {
            img: 'https://248006.selcdn.ru/LandGen/phone_1d71251d1bc898984fd778b501882339d32ce5e215813367239901.png',
            name: 'Olga',
            surname: 'Klimonova',
            description: 'Lead developer TASS'
        },
        borzunov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_dbec8397fe88c84fb4c92ca3a54c42d28c52024716512389688806.png',
            name: 'Igor',
            surname: 'Borzunov',
            description: 'Frontend Tech Lead at Rosbank'
        },
        kuznetsov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_60ec1f645d09c2ef9825066d66aff7b7b33d4fa415813367059723.png',
            name: 'Alexander',
            surname: 'Kuznetsov',
            description: 'Frontend developer at TASS'
        },
        ignatiev: {
            img: 'https://248006.selcdn.ru/LandGen/phone_efe36990f90cb7e746b4b010a9a8368796b8743f16248754421811.png',
            name: 'Dmitry',
            surname: 'Ignatiev',
            description: 'Managed the product team at Rabota.ru. Until 2018 Senior Developer at EPAM',
            text: 'Development experience - 15 years. Designs non-standard, complex and highly loaded systems in PHP, works with Symfony. Able to write complex logic in native ways, without using frameworks'
        },
        molesku: {
            img: 'https://248006.selcdn.ru/LandGen/phone_a0af2fea5ee7080c852ed063ecf1eacffbb0de4e16313791291576.jpg',
            name: 'Michael',
            surname: 'Molesku',
            description: 'PHP developer, branch manager of ITRex Group',
            text: 'In the profession since the age of 18, programming in more than 10 languages. He worked on a service for predicting the life expectancy of cancer patients, developed a news portal with video streaming of sports competitions for the official partner of Euro and Al Jazeera. Created an accounting system for brokers of an American insurance company, a platform for booking golf courses and renting equipment for a company from the USA'
        },
        alexandrov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_d0bf11f37e8858d6c637d12e943d966a2622ed0b16233158946399.jpg',
            name: 'Denis',
            surname: 'Alexandrov',
            description: 'Lead Software Developer, Technical Lead of Skillbox Courses'
        },
        lisakov: {
            img: 'https://248006.selcdn.ru/LandGen/phone_84fb38fcebe7a839a039b28d370ed246c7b4a7a516232442326702.jpg',
            name: 'Egor',
            surname: 'Lisakov',
            description: 'Senior Software Developer, Arcadia'
        }
    },
    python: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_db7dc1dadb32b0d4eaf95191cba15668cd70c99115985272629128.png',
            'https://248006.selcdn.ru/LandGen/phone_258e458fed31e82e76bbfdd941b9a5adcbc6ceb915917882888996.png',
            'https://248006.selcdn.ru/LandGen/phone_946993b867488a71d5e3abe4bfe1ad3a599a87fd16318910080466.png',
            'https://248006.selcdn.ru/LandGen/phone_f28687b11a8778f736703dbb51d6a9cde6c6d9b216178126017106.jpg'
        ],
        descriptions: [
            'Computer science and programming teacher with more than 5 years of experience',
            'AGIMA Python-teamlead. Work experience - more than 7 years',
            'Project manager and chief development engineer at Sberbank. Work experience - more than 5 years',
            'Leader of the Python direction at MTS, Program Director of the Python direction at Skillbox. Work experience - more than 6 years'
        ],
        names: ['Roman', 'Alex', 'Nikita', 'Alex'],
        surnames: ['Bulgakov', 'Polovinkin', 'Nesterenko', 'Nekrasov']
    },
    web: {
        avatars: ['https://248006.selcdn.ru/LandGen/phone_c31c52b4d6a887361e690370ba34c616e56a728916243700283898.png'],
        descriptions: ['Lead Angular & .NET Developer'],
        names: ['Andrey'],
        surnames: ['Grekov']
    },
    c_plus_plus: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_a352c07373650fbee55bd196d3b8181c63f0aa8a16056904433366.jpg',
            'https://248006.selcdn.ru/LandGen/phone_6f486995a719871d73d15b78c817e96077d8d6a616056903196629.jpg',
            'https://248006.selcdn.ru/LandGen/phone_15ee12eb65f2b9262c92b9f89684877b90eea9fb16056903628043.jpg',
        ],
        descriptions: [
            'C++ developer',
            'Head of development service at Yandex.Market',
            'C++ developer',
        ],
        names: ['Vladislav', 'Alex', 'Denis'],
        surnames: ['Turbanov', 'Shvec', 'Krahmalev'],
        texts: [
            '10+ years of experience in creating games, websites and mobile applications. Worked at Gaijin Entertainment and Mail.ru game studios. Currently creating graphics for the Night is Coming project',
            'C++ Lecturer at the Faculty of Programming, Moscow Institute of Physics and Technology'
        ]
    },
    python_fullstack: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_e0afda5aca757c7a90614f0c66927eaacb278c6715796014152475.png',
            'https://248006.selcdn.ru/LandGen/phone_24693eb0caa59ac278037653a4c202240e449a1c1585853008076.png',
            'https://248006.selcdn.ru/LandGen/phone_bd15c1fcde284a7a019a1426ad4c0b7cdf557d7d15796014443306.png',
        ],
        descriptions: [
            'Python developer with over 16 years of experience. Block "Python Basic"',
            'Senior developer at Twitter',
            'Co-founder and technical director at Angry Developers',
        ],
        names: ['Vadim', 'Anton', 'Nikita'],
        surnames: ['Shandrinov', 'Turin', 'Levashov']
    },
    android: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_0a1aef9e5b877b01d4c4557decaf91dee8f1e59316438140439622.png',
            'https://248006.selcdn.ru/LandGen/phone_df06fe6a6e6f3e09a7602d751e2df3d800b08c2416438139396734.png',
            'https://248006.selcdn.ru/LandGen/phone_5ab7f274468d38d5caef071f1405e0f012dd12fc16438924445176.png',
            'https://248006.selcdn.ru/LandGen/phone_645d9a358339dead930478e2632d53da72da97de16233165763255.jpg'
        ],
        descriptions: [
            'Senior Android Developer, CYAN',
            'Chief Android Developer, EPAM Systems',
            'Senior Android Developer, EPAM Systems',
            'Head of QA в Social Solutions'
        ],
        names: ['Alex', 'Artem', 'Alexander', 'Dmitry'],
        surnames: ['Phirsov', 'Bagricevich', 'Oplachnikov', 'Shadrin']
    },
    c_sharp: {
        avatars: ['https://248006.selcdn.ru/LandGen/phone_2d8aec3317a76994cd37ff522fd610a57db5706215792671717877.png'],
        descriptions: ['Microsoft Certified Developer'],
        names: ['Sergey'],
        surnames: ['Kameneckiy'],
        texts: ['8 years in C# development, Microsoft Uniapps Challenge winner']
    },
    ios: {
        avatars: ['https://248006.selcdn.ru/LandGen/phone_870076285823036b059b932e68a37074b19821d516363726005463.png'],
        descriptions: ['Chief Executive Officer в InstaDev'],
        names: ['Nikolay'],
        surnames: ['Sockiy']
    },
    php_fullstack: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_4fc8c732a1f6392008cc18a256bad9a6e2479b1015816822607492.png',
            'https://248006.selcdn.ru/LandGen/phone_e66985be694cae4f00ecb76cf2bf60e75257822e15853011991708.png'
        ],
        descriptions: [
            'Chief executive officer in InstaDev',
            'Technical director Qsoft'
        ],
        names: ['Vasiliy', 'Michael'],
        surnames: ['Grudistov', 'Volkov'],
        texts: [
            'Analyst-designer of high-load, fault-tolerant systems. Over 15 years programming experience',
            'Owns development technologies in PHP, Java, JS, Vue.js, Laravel, Symfony, 1C-Bitrix, RabbitMQ, MySQL, Couchbase, Redis'
        ]
    },
    flutter: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_f4bacca3f2bf0cd02ab95863f39feb88a2ec7eeb16019800616943.jpeg',
            'https://248006.selcdn.ru/LandGen/phone_9560b507e1ac9ce2cbc732957a1c699058b7625116291286381917.jpg',
            'https://248006.selcdn.ru/LandGen/phone_d816e8577475360be240d5466a3418e450a8391e16291286787796.png',
            'https://248006.selcdn.ru/LandGen/phone_72db85f5f99529e054d5c29f1f63cc448bf143d015795060261248.png',
            'https://248006.selcdn.ru/LandGen/phone_2c566e572ff1d80661b978a44dc32ed97dc4020616076774271102.png',
            'https://248006.selcdn.ru/LandGen/phone_d2ac52330cb0640e254f1d7f2e39c14d8e7f70ad15899884075218.png',
            'https://248006.selcdn.ru/LandGen/phone_b1ffd49af9658c55a8935a6b9238103198e3bda21579855616938.jpg'
        ],
        descriptions: [
            'Practicing speaker and Flutter developer',
            'Chief Software Engineer, Co-Head of Flutter Competency, EPAM Systems',
            'Senior Software Developer, EPAM Systems',
            'Founder of mobile app studio Anvics',
            'Art director of Distillery',
            'Skillbox speaker',
            'Ex-design director of Redmadrobot'
        ],
        names: ['Anatoliy', 'Alexander', 'Vladimir', 'Nikita', 'Michael', 'Pavel', 'Pavel'],
        surnames: ['Kirsanov', 'Denisov', 'Poluhovich', 'Arhipov', 'Nikipelov', 'Yarec', 'Gorshkov']
    },
    js: {
        avatars: ['https://248006.selcdn.ru/LandGen/phone_c31c52b4d6a887361e690370ba34c616e56a728916243700283898.png'],
        descriptions: ['Lead Angular & .NET Developer'],
        names: ['Andrey'],
        surnames: ['Grekov']
    },
    php: {
        avatars: ['https://248006.selcdn.ru/LandGen/phone_e66985be694cae4f00ecb76cf2bf60e75257822e15853011991708.png'],
        descriptions: ['Head of training department Qsoft. Block "PHP"'],
        names: ['Michael'],
        surnames: ['Krahmalev']
    }
};
export function TeachersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return __assign({}, state);
    }
}
