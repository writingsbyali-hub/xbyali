import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Library',
      href: getPermalink('/library'),
    },
    {
      text: 'Writings',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Start a Project', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Studio',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Capabilities', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Work',
      links: [
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'Library', href: getPermalink('/library') },
        { text: 'Writings', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Start a Project', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Start a Project', href: getPermalink('/contact') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/xbyali' },
    { ariaLabel: 'Behance', icon: 'tabler:brand-behance', href: 'https://www.behance.net/xbyali' },
    { ariaLabel: 'Dribbble', icon: 'tabler:brand-dribbble', href: 'https://dribbble.com/xbyali' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    (c) 2025 <span class="font-semibold">X by Ali</span>. Crafted with intention.
  `,
};


