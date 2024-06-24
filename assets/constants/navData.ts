import { SideNavItem } from '@/types/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
      title: 'Home',
      path: '/',
      icon: 'lucide:home' ,
    },
    {
      title: 'About',
      path: 'about',
  },
  {
    title: 'Contact',
    path: 'contact',
    icon: 'lucide:send' ,
  },
    {
      title: 'Internship',
      path: 'internship',
      icon: 'lucide:book' ,
      submenu: true,
      subMenuItems: [
        { title: 'Summary', path: '/internship/summary' },
        {
          title: 'Daily-overview', path: '/internship/daily-overview' },
        { title: 'Team', path: '/internship/team' },
        { title: 'Tech', path: '/internship/tech' },
        { title: 'Features', path: '/internship/features' },
        { title: 'Reflection', path: '/internship/reflection' },
      ],
  },
  {
    title: 'Project',
    path: 'project',
    icon: 'lucide:send' ,
  },
    
  ];