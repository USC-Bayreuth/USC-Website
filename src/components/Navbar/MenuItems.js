export const MenuItems=[
    {
        title: 'Startseite',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: 'News',
        url: '/News',
        cName: 'nav-links'
    },
    {
        title: 'Abteilungen',
        url: '',
        cName: 'nav-dropdown',
        children: [
            {
                title: 'Fußball',
                url: '',
                cName: 'nav-dropdown',
            },
            {
                title: 'Tennis',
                url: '',
                cName: 'nav-dropdown',
            },
        ]
    },
    {
        title: 'Philiosphie',
        url: '/Philosophie',
        cName: 'nav-links'
    },
    {
        title: 'Sponsoring',
        url: '/Sponsoring',
        cName: 'nav-dropdown'
    },
    {
        title: 'Werde Mitglied',
        url: '/Werde-Mitglied',
        cName: 'nav-links'
    },
    {
        title: 'Kontakt',
        url: '/Kontakt',
        cName: 'nav-links'
    }
]