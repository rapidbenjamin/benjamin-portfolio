import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  flask,
  docker,
  php,
  rubyrails,
  graphql,
  math,
  movie,
  nyeusi,
  fusionbox,
  eventbrite,
  wpengine,
  caktus,
  dropship,
  aricall,
  shufti,
  healthdesk,
  healthcare,
  revbits,
  gulfair,
  stack,
  whenIWork,
  solexe,
  chatbot,
  homemaker,
  angular,
  vue,
  next,
  azure,
  aws,
  django,
  express,
  mongodb,
  mysql,
  numpy,
  pytorch,
  scrapy,
  selenium,
  tensorflow,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'AI Model and Integration',
    icon: prototyping,
  },
  {
    title: 'Web Scraping',
    icon: ux,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Angular',
    icon: angular,
  },
  // {
  //   name: 'Vue JS',
  //   icon: vue,
  // },
  // {
  //   name: 'Next JS',
  //   icon: next,
  // },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'flask',
    icon: flask,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  // {
  //   name: 'Numpy',
  //   icon: numpy,
  // },
  // {
  //   name: 'PyTorch',
  //   icon: pytorch,
  // },
  // {
  //   name: 'Scrapy',
  //   icon: scrapy,
  // },
  // {
  //   name: 'Selenium',
  //   icon: selenium,
  // },
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  // {
  //   name: 'Azure',
  //   icon: azure,
  // },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Fusionbox',
    icon: fusionbox,
    iconBg: '#333333',
    date: '2016 - 2017',
  },
  {
    title: 'Back-end Developer',
    company_name: 'Caktus Group',
    icon: caktus,
    iconBg: '#333333',
    date: '2017 - 2020',
  },
  {
    title: 'Database Engineer',
    company_name: 'WP Engine',
    icon: wpengine,
    iconBg: '#333333',
    date: 'Aug 2020 - Jan 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Eventbrite',
    icon: eventbrite,
    iconBg: '#333333',
    date: 'May 2022 - May 2023',
  },
];

const projects = [
  {
    id: '8',
    name: 'aircall',
    description:
      'The ultimate integrated business phone system for sales and support teams.',
    tags: [
      {
        name: 'react',
        color: 'text-white-600',
      },
      {
        name: 'tailwind',
        color: 'text-blue-400',
      },
      {
        name: 'nodejs',
        color: 'text-pink-400',
      },
    ],
    image: aricall,
    repo: 'https://github.com/rapidbenjamin/frontend-test',
    demo: 'https://aircall.io/',
  },
  {
    id: '10',
    name: 'NFT marketplace',
    description:
      'Mint your Sneaker NFT on the Blockchain for Free!',
    tags: [
      {
        name: 'react',
        color: 'text-blue-400',
      },
      {
        name: 'blockchain',
        color: 'text-purple-400',
      },
      {
        name: 'nft-marketplace',
        color: 'text-red-400',
      },
    ],
    image: solexe,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://solexe.netlify.app/',
  },
  {
    id: '2',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'HTML',
        color: 'text-pink-600',
      },
      {
        name: 'CSS',
        color: 'text-teal-400',
      },
      {
        name: 'JavaScript',
        color: 'text-green-400',
      },
    ],
    image: math,
    repo: 'https://github.com/rapidbenjamin/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: '4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'react',
        color: 'text-pink-600',
      },
      {
        name: 'omdb api',
        color: 'text-teal-400',
      },
      {
        name: 'sass',
        color: 'text-green-400',
      },
    ],
    image: movie,
    repo: 'https://github.com/rapidbenjamin/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: '5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-600',
      },
      {
        name: 'django',
        color: 'text-green-400',
      },
      {
        name: 'mysql',
        color: 'text-pink-600',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/rapidbenjamin/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
  {
    id: '6',
    name: 'GreenDropShip',
    description:
      'GreenDropShip is a site connecting productor and reseller.',
    tags: [
      {
        name: 'vue',
        color: 'text-blue-600',
      },
      {
        name: 'php',
        color: 'text-green-400',
      },
      {
        name: 'bootstrap',
        color: 'text-pink-600',
      },
    ],
    image: dropship,
    repo: 'https://github.com/rapidbenjamin/GreenDropShipping',
    demo: 'https://greendropship.com/',
  },
  {
    id: '11',
    name: 'revbits',
    description: 'Cyber threats are constant. Protect against them with RevBits Cybersecurity Solutions.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-400',
      },
      {
        name: 'mongodb',
        color: 'text-green-400',
      },
      {
        name: 'tailwind',
        color: 'text-pink-400',
      },
    ],
    image: revbits,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://revbits.com/',
  },
  {
    id: '16',
    name: 'Shufti Pro',
    description:
      'solutions provide the greatest global coverage, speed and accuracy for verifying your customer\'s identity.',
    tags: [
      {
        name: 'java',
        color: 'text-blue-600',
      },
      {
        name: 'javascript',
        color: 'text-green-400',
      },
      {
        name: 'scss',
        color: 'text-pink-600',
      },
    ],
    image: shufti,
    repo: 'https://github.com/rapidbenjamin/mx-shufti-connector',
    demo: 'https://shuftipro.com/',
  },
  {
    id: '9',
    name: 'healthdesk',
    description:
      'We help gyms and studios automate conversations and drive more sales.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-blue-600',
      },
      {
        name: 'supabase',
        color: 'text-green-400',
      },
      {
        name: 'css',
        color: 'text-pink-600',
      },
    ],
    image: healthdesk,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://healthdesk.ai/',
  },
  {
    id: '3',
    name: '4C\'S  health',
    description:
      'VIRTUAL PSYCHIATRIC CARE-Accepting new patients for telehealth visits In-Office Visits not available due to Covid-19',
    tags: [
      {
        name: 'nextjs',
        color: 'text-blue-600',
      },
      {
        name: 'supabase',
        color: 'text-green-400',
      },
      {
        name: 'css',
        color: 'text-pink-600',
      },
    ],
    image: healthcare,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://www.4cshealth.com/',
  },
  {
    id: '7',
    name: 'gulfair',
    description:
      'Free City Tour to Bahrain.',
    tags: [
      {
        name: 'React',
        color: 'text-blue-600',
      },
      {
        name: 'scss',
        color: 'text-green-400',
      },
      {
        name: 'django',
        color: 'text-pink-600',
      },
    ],
    image: gulfair,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://www.gulfair.com/',
  },
  {
    id: '12',
    name: 'stack',
    description: 'Decentralized cloud services for Web3. Enterprise Grade. Super-fast. Unstoppable.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-400',
      },
      {
        name: 'mongodb',
        color: 'text-green-400',
      },
      {
        name: 'tailwind',
        color: 'text-pink-400',
      },
    ],
    image: stack,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://www.stackos.io/',
  },
  {
    id: '1',
    name: 'When I Work',
    description:
      'Build the work schedule in minutes. Share and track it instantly.',
    tags: [
      {
        name: 'HTML',
        color: 'text-blue-600',
      },
      {
        name: 'CSS',
        color: 'text-green-400',
      },
      {
        name: 'TypeScript',
        color: 'text-pink-600',
      },
    ],
    image: whenIWork,
    repo: 'https://github.com/rapidbenjamin/wheniwork',
    demo: 'http://wheniwork.com/',
  },
  {
    id: '14',
    name: 'chatbotGPT',
    description:
      'This is a simple UI integrated with GPT-3 and GPT-4.',
    tags: [
      {
        name: 'react',
        color: 'text-blue-600',
      },
      {
        name: 'API',
        color: 'text-green-400',
      },
      {
        name: 'openAI',
        color: 'text-pink-600',
      },
    ],
    image: chatbot,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://www.chatbotgpt.fr/?cf=',
  },
  {
    id: '15',
    name: 'home maker AI',
    description:
      'Take a photo of your room and instantly see how it could be renovated in different themes. Renovate your room today!',
    tags: [
      {
        name: 'ruby',
        color: 'text-blue-600',
      },
      {
        name: 'css',
        color: 'text-green-400',
      },
      {
        name: 'openai',
        color: 'text-pink-600',
      },
    ],
    image: homemaker,
    repo: 'https://github.com/rapidbenjamin/',
    demo: 'https://www.homemakerai.com/',
  },
];

export { services, technologies, experiences, projects };
