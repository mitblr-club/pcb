import { NavItem } from '@/types/nav-item';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'The Photography Club Bangalore',
  institution: 'Manipal Institute of Technology Bengaluru (MIT)',
  description:
    'Empower your MIT Bengaluru club experience with our centralized platform, seamlessly managing and collaborating on events, blogs, and administration.',
  eventsTableId: 'df0bbd9604a846468e6aaf7f41042c1c',
  blogTableId: 'd8caac170c6243a18228b8467ec1f41e',
  navLinks: [
    // {
    //   title: 'Home',
    //   href: '/',
    // },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Events',
      href: '/events',
    },
  ] satisfies NavItem[],
  mediaLinks: {
    instagram: 'https://www.instagram.com/photography.mitb/',
    linkedin: 'https://www.linkedin.com/company/the-photography-club-mitb/mycompany/',
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
    institute: 'https://manipal.edu/mitblr.html',
  },
  contactDetails: {
    number: '+91 1234567890',
    email: 'abc.efg@gmail.com',
  },
  homePage: {
    tagline: 'One Ecosystem for all Clubs.',
  },
};
