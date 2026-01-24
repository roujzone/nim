type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Profound @ Vercel Ship 25',
    description:
      'Engineering for Answer Optimization.',
    link: 'blank',
    image: '/Projects/ShipV3.png',
    id: 'project1',
  },
  {
    name: 'Project 2',
    description: 'Placeholder description for project 2.',
    link: 'blank',
    image: '/Projects/blank.png',
    id: 'project2',
  },
  {
    name: 'Project 3',
    description: 'Placeholder description for project 3.',
    link: 'blank',
    image: '/Projects/blank.png',
    id: 'project3',
  },
  {
    name: 'Project 4',
    description: 'Placeholder description for project 4.',
    link: 'blank',
    image: '/Projects/blank.png',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Profound',
    title: 'Visual Designer',
    start: '2025',
    end: 'Present',
    link: 'https://tryprofound.com',
    id: 'work1',
  },
  {
    company: 'Modal',
    title: 'Visual Designer',
    start: '2025',
    end: 'Present',
    link: 'https://modal.com',
    id: 'work2',
  },
  {
    company: 'Trunk',
    title: 'Brand Designer',
    start: '2024',
    end: '2025',
    link: 'https://trunk.io',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Design Engineering',
    description: 'My first steps into design engineering as a designer',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'From finance to frames',
    description:
      'Why I left behind a career in finance to pursue design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/roujzone',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/solaraj_',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raj-solanki',
  },
]

export const EMAIL = 'rajsolankii.26@gmail.com'
