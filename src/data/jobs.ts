export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Remote' | 'Contract';
  category: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechNova Inc.',
    companyLogo: 'TN',
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    type: 'Full-time',
    category: 'Technology',
    posted: '2 days ago',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining our web applications using modern JavaScript frameworks.',
    responsibilities: [
      'Build and maintain scalable web applications using React and TypeScript',
      'Collaborate with designers and backend developers to implement new features',
      'Write clean, maintainable, and well-documented code',
      'Mentor junior developers and conduct code reviews',
      'Optimize applications for maximum speed and scalability'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Expert knowledge of React, TypeScript, and modern CSS',
      'Experience with state management solutions (Redux, Zustand)',
      'Strong understanding of web performance optimization',
      'Excellent communication and teamwork skills'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Node.js'],
    benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Unlimited PTO', 'Learning Budget']
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignHub',
    companyLogo: 'DH',
    location: 'New York, NY',
    salary: '$90k - $130k',
    type: 'Remote',
    category: 'Design',
    posted: '1 day ago',
    description: 'Join our creative team as a Product Designer. You will shape the future of our digital products through innovative design solutions and user-centered experiences.',
    responsibilities: [
      'Create user-centered designs by considering market analysis and customer feedback',
      'Design wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with product managers and engineers throughout the design process',
      'Conduct user research and usability testing',
      'Maintain and evolve the design system'
    ],
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma and other design tools',
      'Strong portfolio demonstrating UX/UI work',
      'Understanding of user research methodologies',
      'Experience working in agile environments'
    ],
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'User Research', 'Adobe Creative Suite'],
    benefits: ['Flexible Hours', 'Home Office Stipend', 'Health Benefits', 'Annual Bonus', 'Gym Membership']
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataCore Analytics',
    companyLogo: 'DC',
    location: 'Boston, MA',
    salary: '$130k - $180k',
    type: 'Full-time',
    category: 'Technology',
    posted: '3 days ago',
    description: 'We are seeking a talented Data Scientist to help us unlock insights from complex datasets. You will work on cutting-edge machine learning projects.',
    responsibilities: [
      'Develop and implement machine learning models',
      'Analyze large datasets to identify trends and patterns',
      'Build data pipelines and ETL processes',
      'Present findings to stakeholders through visualizations',
      'Collaborate with engineering to deploy models to production'
    ],
    requirements: [
      'PhD or Masters in Computer Science, Statistics, or related field',
      '4+ years of experience in data science',
      'Strong programming skills in Python and SQL',
      'Experience with ML frameworks (TensorFlow, PyTorch)',
      'Excellent analytical and problem-solving abilities'
    ],
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Deep Learning', 'Statistics'],
    benefits: ['Competitive Salary', 'Stock Options', 'Health & Dental', 'Parental Leave', 'Conference Budget']
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'GrowthLabs',
    companyLogo: 'GL',
    location: 'Austin, TX',
    salary: '$85k - $110k',
    type: 'Full-time',
    category: 'Marketing',
    posted: '5 days ago',
    description: 'Lead our marketing efforts and drive growth for our innovative SaaS platform. You will own the entire marketing strategy from planning to execution.',
    responsibilities: [
      'Develop and execute comprehensive marketing strategies',
      'Manage digital marketing campaigns across multiple channels',
      'Analyze marketing metrics and optimize campaigns',
      'Lead and mentor the marketing team',
      'Collaborate with sales to align marketing efforts'
    ],
    requirements: [
      '5+ years of marketing experience, preferably in B2B SaaS',
      'Proven track record of successful marketing campaigns',
      'Strong analytical skills and data-driven mindset',
      'Experience with marketing automation tools',
      'Excellent leadership and communication skills'
    ],
    skills: ['Digital Marketing', 'SEO', 'Content Marketing', 'Analytics', 'HubSpot', 'Team Leadership'],
    benefits: ['Quarterly Bonuses', 'Health Coverage', 'Remote Fridays', 'Professional Development', 'Wellness Program']
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'CloudScale Systems',
    companyLogo: 'CS',
    location: 'Seattle, WA',
    salary: '$140k - $190k',
    type: 'Remote',
    category: 'Engineering',
    posted: '1 week ago',
    description: 'Join our backend team to build scalable and reliable infrastructure. You will work on distributed systems that power millions of users worldwide.',
    responsibilities: [
      'Design and implement scalable backend services',
      'Build and maintain APIs and microservices',
      'Optimize database performance and queries',
      'Implement security best practices',
      'Participate in on-call rotations'
    ],
    requirements: [
      '5+ years of backend development experience',
      'Strong knowledge of Go, Python, or Java',
      'Experience with cloud platforms (AWS, GCP)',
      'Understanding of distributed systems',
      'Familiarity with containerization (Docker, Kubernetes)'
    ],
    skills: ['Go', 'Python', 'AWS', 'Kubernetes', 'PostgreSQL', 'Redis'],
    benefits: ['Top Tier Salary', 'Equity', 'Unlimited PTO', 'Home Office Budget', 'Learning Stipend']
  },
  {
    id: 6,
    title: 'Financial Analyst',
    company: 'CapitalWise',
    companyLogo: 'CW',
    location: 'Chicago, IL',
    salary: '$75k - $100k',
    type: 'Full-time',
    category: 'Finance',
    posted: '4 days ago',
    description: 'We are looking for a Financial Analyst to join our team. You will provide financial planning and analysis support to help drive business decisions.',
    responsibilities: [
      'Prepare financial models and forecasts',
      'Analyze financial performance and variances',
      'Create presentations for executive leadership',
      'Support budgeting and planning processes',
      'Identify opportunities for cost optimization'
    ],
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      '2+ years of financial analysis experience',
      'Advanced Excel and financial modeling skills',
      'Experience with financial planning software',
      'Strong attention to detail and accuracy'
    ],
    skills: ['Financial Modeling', 'Excel', 'SAP', 'SQL', 'PowerBI', 'Forecasting'],
    benefits: ['Competitive Pay', '401k Match', 'Health Insurance', 'Annual Bonus', 'Career Growth']
  }
];
