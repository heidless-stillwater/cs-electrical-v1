import { CircuitBoard, Home, Lightbulb, User, Wrench, Zap } from 'lucide-react';

export const siteConfig = {
  name: 'CS Electrical',
  phone: '555-123-4567',
  email: 'contact@cselectrical.com',
  address: '123 Electric Ave, Sparksville, CA 90210',
  website: 'www.cselectrical.com',
};

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#ai-tips', label: 'AI Tips' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const services = [
  {
    icon: Home,
    title: 'Residential Wiring',
    description: 'Complete wiring solutions for new homes and renovations, ensuring safety and compliance with all codes.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Installation',
    description: 'Expert installation of indoor, outdoor, and specialty lighting systems to enhance your space.',
  },
  {
    icon: CircuitBoard,
    title: 'Panel Upgrades',
    description: 'Modernize your electrical system with a panel upgrade to support today\'s power demands safely.',
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    description: '24/7 emergency services to quickly resolve power outages, short circuits, and other urgent issues.',
  },
  {
    icon: Wrench,
    title: 'Appliance Circuits',
    description: 'Dedicated circuit installation for heavy-duty appliances like ovens, dryers, and EV chargers.',
  },
  {
    icon: User,
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety inspections to identify and mitigate potential hazards in your home.',
  },
];

export const testimonials = [
  {
    name: 'Jane D.',
    location: 'Los Angeles, CA',
    quote: 'CS Electrical was fantastic! They arrived on time, were incredibly professional, and fixed our lighting issue in no time. Highly recommend their services!',
  },
  {
    name: 'Michael S.',
    location: 'Santa Monica, CA',
    quote: 'I needed a full panel upgrade for my older home. The team was knowledgeable, efficient, and the price was fair. My system is now safer and more reliable.',
  },
  {
    name: 'Emily R.',
    location: 'Pasadena, CA',
    quote: 'The electricians from CS Electrical installed all the new wiring for our kitchen remodel. They did a clean job and everything works perfectly. Great communication throughout.',
  },
  {
    name: 'David L.',
    location: 'Beverly Hills, CA',
    quote: 'Called them for an emergency repair on a weekend and they were a lifesaver. Fast response and professional service. I know who to call next time.',
  },
];
