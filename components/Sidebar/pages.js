import { dashboard, market, analytics, reports, industries, settings, notifications } from '@/components/Sidebar/assets/svg'

const pages = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/dashboard',
        icon: dashboard
    },
    {
        id: 2,
        name: 'Market Overview',
        link: '/dashboard/market',
        icon: market
    },
    {
        id: 3,
        name: 'Users',
        link: '/dashboard/users',
        icon: analytics
    },
    {
        id: 4,
        name: 'Reports',
        link: '/dashboard/reports',
        icon: reports
    },{
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