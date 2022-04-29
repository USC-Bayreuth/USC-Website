export const MenuItems=[
    {
        title: 'Startseite',
        url: '/',
        cName: 'nav-link'
    },
    {
        title: 'News',
        url: '/News',
        cName: 'nav-link'
    },
    {
        title: 'Abteilungen',
        url: '',
        cName: 'nav-dropdown',
        children: [
            {
                title: 'Fußball',
                url: '',
                cName: 'drop-dropdown',
                children:[
                    {
                        title: 'Herren',
                        url: '/Fußball-Herren',
                        cName: 'drop-nav-link'
                    },
                    {
                        title: 'Damen',
                        url: '/Fußball-Damen',
                        cName: 'drop-nav-link'
                    }
                ]
            },
            {
                title: 'Tennis',
                url: '',
                cName: 'drop-dropdown',
                children:[
                    {
                        title: 'Herren',
                        url: '/Tennis-Herren',
                        cName: 'drop-nav-link'
                    },
                    {
                        title: 'Damen',
                        url: '/Tennis-Damen',
                        cName: 'drop-nav-link'
                    }
                ]
            },
        ]
    },
    {
        title: 'Philosphie',
        url: '/Philosophie',
        cName: 'nav-link'
    },
    {
        title: 'Sponsoring',
        url: '/Sponsoring',
        cName: 'nav-dropdown',
        children:[
            {
                title: 'Konzept',
                url: '/Konzept',
                cName: 'drop-nav-link',
            },
            {
                title: 'Unsere Sponsoren',
                url: 'Unsere-Sponsoren',
                cName: 'drop-nav-link',
            }
        ]
    },
    {
        title: 'Werde Mitglied',
        url: '/Werde-Mitglied',
        cName: 'nav-link'
    },
    {
        title: 'Kontakt',
        url: '/Kontakt',
        cName: 'nav-link'
    }
]