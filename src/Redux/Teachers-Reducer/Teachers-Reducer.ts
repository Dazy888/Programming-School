let initialState = {
    python: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_db7dc1dadb32b0d4eaf95191cba15668cd70c99115985272629128.png',
            'https://248006.selcdn.ru/LandGen/phone_258e458fed31e82e76bbfdd941b9a5adcbc6ceb915917882888996.png',
            'https://248006.selcdn.ru/LandGen/phone_9d00f491602e13a195cc1cb879d6e22547a9ca0716173753055802.jpg',
            'https://248006.selcdn.ru/LandGen/phone_5e0651512a80fafedb8c1166afd241ec743f3d3f15858530969821.png',
            'https://248006.selcdn.ru/LandGen/phone_946993b867488a71d5e3abe4bfe1ad3a599a87fd16318910080466.png'
        ] as Array<string>,
        descriptions: [
            'Computer science and programming teacher with more than 5 years of experience',
            'AGIMA Python-teamlead. Work experience - more than 7 years',
            'Lead Software Engineer at EPAM. Work experience - more than 3 years',
            'Lead Software Engineer at EPAM. Work experience - more than 5 years',
            'Project manager and chief development engineer at Sberbank. Work experience - more than 5 years',
        ] as Array<string>,
        names: ['Roman', 'Alex', 'Andrey', 'Sergey', 'Nikita'] as Array<string>,
        surnames: ['Bulgakov', 'Polovinkin', 'Shulaev', 'Krotov', 'Nesterenko'] as Array<string>
    },
    android: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_0a1aef9e5b877b01d4c4557decaf91dee8f1e59316438140439622.png',
            'https://248006.selcdn.ru/LandGen/phone_df06fe6a6e6f3e09a7602d751e2df3d800b08c2416438139396734.png',
            'https://248006.selcdn.ru/LandGen/phone_5ab7f274468d38d5caef071f1405e0f012dd12fc16438924445176.png',
            'https://248006.selcdn.ru/LandGen/phone_a687400295cf38db7b04f57a7a5071c14e33892616073245514895.png',
            'https://248006.selcdn.ru/LandGen/phone_645d9a358339dead930478e2632d53da72da97de16233165763255.jpg'
        ] as Array<string>,
        descriptions: [
            'Senior Android Developer, CYAN',
            'Chief Android Developer, EPAM Systems',
            'Chief Android Developer, EPAM Systems',
            'QA Automation Lead',
            'Lead Android Developer, Tinkoff',
        ] as Array<string>,
        names: ['Alex', 'Artem', 'Olexander', 'Andrey', 'Alex'] as Array<string>,
        surnames: ['Phirsov', 'Bagricevich', 'Oplachikov', 'Malyx', 'Ageychenko'] as Array<string>
    },
    ios: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_300d123f37c4a9812f6203f3007e7b3622dda48716227363114772.jpg',
            'https://248006.selcdn.ru/LandGen/phone_870076285823036b059b932e68a37074b19821d516363726005463.png',
            'https://248006.selcdn.ru/LandGen/phone_fbbc99ca56e69746997e6eaf8c3e002e7afc234a16233165285426.png',
            'https://248006.selcdn.ru/LandGen/phone_a687400295cf38db7b04f57a7a5071c14e33892616073245514895.png',
            'https://248006.selcdn.ru/LandGen/phone_a0ead5cd7ca2d8c360d24d55373b4cea7b39b05015802024074199.png'
        ] as Array<string>,
        descriptions: [
            'Senior IOS developer at Alfa-Bank',
            'Chief Executive Officer в InstaDev',
            'SymbioWay Human Resources Director',
            'QA Automation Lead',
            'Senior UI/UX Designer at CROC',
        ] as Array<string>,
        names: ['Max', 'Nikolay', 'Danilo', 'Andrey', 'Anton'] as Array<string>,
        surnames: ['Nikolaev', 'Sockiy', 'Pilipenko', 'Malyx', 'Rybakov'] as Array<string>
    },
    javascript: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_1890723ab65184cfab1f039ff440e145b130df101581930947279.png',
            'https://248006.selcdn.ru/LandGen/phone_a033e05247e12556bab2ffd1de900b5f1d04edc815816063024472.png',
            'https://248006.selcdn.ru/LandGen/phone_c31c52b4d6a887361e690370ba34c616e56a728916243700283898.png',
            'https://248006.selcdn.ru/LandGen/phone_3a06a7d73a6f25936ddcf3eddbd888b2d23fd0a815808363617309.png',
            'https://248006.selcdn.ru/LandGen/phone_8e9a02d5a15b7535cc3ccf7bf7e4694b84e1800415772835958486.png'
        ] as Array<string>,
        descriptions: [
            'Frontend team-lead of the investment marketplace of the Moscow Exchange',
            'Practicing freelancer, mentor of the "Web layout" block',
            'Lead Angular & .NET Developer',
            'Frontend team leader Creonit digital production',
            'Setka, старший frontend-разработчик. Блок «Javascript»',
        ] as Array<string>,
        names: ['Sergey', 'Max', 'Andrey', 'Max', 'Egor'] as Array<string>,
        surnames: ['Kornienko', 'Vasiyanovich', 'Grekov', 'Savchenko', 'Yakovushen'] as Array<string>
    },
    cPlusPlus: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_a352c07373650fbee55bd196d3b8181c63f0aa8a16056904433366.jpg',
            'https://248006.selcdn.ru/LandGen/phone_6f486995a719871d73d15b78c817e96077d8d6a616056903196629.jpg',
            'https://248006.selcdn.ru/LandGen/phone_15ee12eb65f2b9262c92b9f89684877b90eea9fb16056903628043.jpg',
        ] as Array<string>,
        descriptions: [
            'C++ developer',
            'Head of development service at Yandex.Market',
            'C++ developer',
        ] as Array<string>,
        names: ['Vladislav', 'Alex', 'Denis'] as Array<string>,
        surnames: ['Turbanov', 'Shvec', 'Krahmalev'] as Array<string>
    },
    php: {
        avatars: [
            'https://248006.selcdn.ru/LandGen/phone_efe36990f90cb7e746b4b010a9a8368796b8743f16248754421811.png',
            'https://248006.selcdn.ru/LandGen/phone_a0af2fea5ee7080c852ed063ecf1eacffbb0de4e16313791291576.jpg',
            'https://248006.selcdn.ru/LandGen/phone_e66985be694cae4f00ecb76cf2bf60e75257822e15853011991708.png'
        ] as Array<string>,
        descriptions: [
            'Managed the product team at Rabota.ru. Until 2018 Senior Developer at EPAM',
            'PHP developer, branch manager of ITRex Group',
            'Head of training department Qsoft. Block "PHP"'
        ] as Array<string>,
        names: ['Dmitry', 'Michael', 'Michael'] as Array<string>,
        surnames: ['Ignatiev', 'Molesku', 'Krahmalev'] as Array<string>
    }
}

type initialStateType = typeof initialState

export function TeachersReducer(state = initialState, action: any): initialStateType {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}