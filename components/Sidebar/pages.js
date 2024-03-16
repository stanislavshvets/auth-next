import { dashboard, news, achievements, clients, industries, settings, notifications } from '@/components/assets/svg'

const pages = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/dashboard',
        icon: dashboard
    },
    {
        id: 2,
        name: 'News',
        link: '/dashboard/news',
        icon: news
    },
    {
        id: 3,
        name: 'Achievements',
        link: '/dashboard/achievements',
        icon: achievements
    },
    {
        id: 4,
        name: 'Clients',
        link: '/dashboard/clients',
        icon: clients
    },
    {
        id: 5,
        name: 'Industries',
        link: '/dashboard/industries',
        icon: industries
    },
    {
        id: 6,
        name: 'Settings',
        link: '/dashboard/settings',
        icon: settings
    },
    {
        id: 7,
        name: 'Notifications',
        link: '/dashboard/notifications',
        icon: notifications
    },
]

export default pages;
