export const MenuItems=[
    {
        title: 'Startseite',
        mobileTitle: 'Startseite',
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
                        mobileTitle: 'Fußball-Herren',
                        url: '/Fußball-Herren',
                        cName: 'drop-nav-link'
                    },
                    {
                        title: 'Damen',
                        mobileTitle: 'Fußball-Damen',
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
                        mobileTitle: 'Tennis-Herren',
                        url: '/Tennis-Herren',
                        cName: 'drop-nav-link'
                    },
                    {
                        title: 'Damen',
                        mobileTitle: 'Tennis-Damen',
                        url: '/Tennis-Damen',
                        cName: 'drop-nav-link'
                    }
                ]
            },
            {
                title: 'Roundnet',
                mobileTitle: 'Roundnet',
                url: '/Roundnet',
                cName: 'drop-nav-link'
            }
        ]
    },
    {
        title: 'Philosophie',
        mobileTitle: 'Philosophie',
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
                mobileTitle: 'Sponsoringkonzept',
                url: '/Konzept',
                cName: 'drop-nav-link',
            },
            {
                title: 'Unsere Sponsoren',
                mobileTitle: 'Unsere Sponsoren',
                url: 'Unsere-Sponsoren',
                cName: 'drop-nav-link',
            }
        ]
    },
    {
        title: 'Werde Mitglied',
        mobileTitle: 'Werde Mitglied',
        url: '/Werde-Mitglied',
        cName: 'nav-link'
    },
    {
        title: 'Kontakt',
        mobileTitle: 'Kontakt',
        url: '/Kontakt',
        cName: 'nav-link'
    }
]