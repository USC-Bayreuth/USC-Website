export const MenuItems=[
    {
        title: 'Startseite',
        url: '/',
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
                        url: '/Fussball-Herren',
                        cName: 'drop-nav-link'
                    },
                    {
                        title: 'Damen',
                        url: '/Fussball-Damen',
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
            {
                title: 'Roundnet',
                url: '/Roundnet',
                cName: 'drop-nav-link'
            },
            {
                title: "Volleyball",
                url: "/Volleyball",
                cName: "drop-nav-link"
            }
        ]
    },
    {
        title: 'Philosophie',
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
                url: '/Unsere-Sponsoren',
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
        title: 'Verantwortliche',
        url: '/Verantwortliche',
        cName: 'nav-link'
    },
    {
        title: 'Shop',
        url: 'https://usc-bayreuth.fan12.de/',
        cName: 'external-link'
    }
]