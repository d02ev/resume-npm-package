const resumeData = {
  name: 'Vikramaditya Pratap Singh',
  title: 'Software Engineer',
  contact: {
    email: 'vikramadityapratapsingh98@gmail.com',
    phone: '+91-9617945540',
    github: 'https://github.com/d02ev',
    linkedin: 'https://linkedin.com/in/vikramaditya-pratap-singh',
    website: 'https://d02ev.netlify.app',
  },
  skills: {
    languages: ['C/C++', 'C#', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
    technologies: [
      'Azure Functions',
      'Docker',
      'Supabase',
      'Git',
      '.NET Core',
      'Express.js',
      'Node.js',
      'React.js',
      'PostgreSQL',
      'MongoDB',
      'Redis'
    ]
  },
  experience: [
    {
      company: 'Nagarro',
      position: 'Engineer',
      duration: 'Jan 2024 - Present',
      highlights: [
        'Architected scalable backend functionalities using Azure Functions, C#, and .NET Core, ensuring seamless operations for 15,000+ active users.',
        'Implemented frontend unit test strategies, elevating code coverage from 79% to 92.3%, improving application stability and quality assurance.',
        'Optimized SQL Server database queries to reduce API response time by 80%, delivering a faster and more efficient user experience.',
        'Technologies: Azure, Azure Functions, SQL Server, Jasmine, Karma, Angular, TypeScript, Git'
      ]
    },
    {
      company: 'Nagarro',
      position: 'Associate Engineer',
      duration: 'Jan 2023 - Jan 2024',
      highlights: [
        'Designed and developed reusable web components using Vue, increasing development efficiency and reducing feature implementation time, aligning with client-specific analytical platform requirements.',
        'Engineered interactive data visualization tools by integrating ChartJS, enhancing user engagement and improving decision-making accuracy by providing clearer analytical insights.',
        'Built backend REST APIs using .NET Core, C#, and Uber H3 Grid Library, processing and analyzing geospatial data.',
        'Enhanced application performance by 100% through real-time data processing algorithms and efficient chart-rendering methodologies',
        'Technologies: C#, .NET Core, Vue, TypeScript, Pinia'
      ]
    },
    {
      company: 'Nagarro',
      position: 'Engineering Trainee',
      duration: 'Oct 2022 - Jan 2023',
      highlights: [
        'Mastered technical proficiency in .NET Core, Angular, C#, and TypeScript; leveraged skills to construct scalable web applications',
        'Created two end-to-end web application prototypes using .NET, Angular, and SQL Server, implementing best practices in software development.',
        'Technologies: C#, .NET Core, SQL Server, Angular, TypeScript, GitLab, Git'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Vellore Institute of Technology, Bhopal',
      duration: 'Aug 2018 - May 2022',
      coursework: [
        'Object Oriented Programming',
        'Databases',
        'Discrete Mathematics',
        'Data Structures and Algorithms',
        'Operating Systems',
        'Computer Networks',
      ]
    }
  ],
  projects: [
    {
      name: 'Git Initializer (Git CLI Tool)',
      description: 'Developed a CLI tool that automates the process of initializing Git repositories, reducing setuptime and streamlining the creation of README.md and .gitignore files.Integrated gitignore.io API to generate .gitignore files for 30 + languages.',
      technologies: ['C++', 'CMake', 'Bash', 'Git']
    },
    {
      name: 'Portfolio Website',
      description: 'Created a personal portfolio website to showcase my projects and skills, enhancing my online presence and professional branding.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
    },
    {
      name: 'Resume NPM Package',
      description: 'Developed an NPM package that displays my resume in the terminal, showcasing my skills in Node.js and command-line interface development.',
      technologies: ['Node.js', 'NPM', 'Boxen', 'Chalk', 'Figlet']
    }
  ],
  certifications: [
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Jan 2022',
      url: 'https://www.freecodecamp.org/certification/randombit/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Introduction to Structured Query Language (SQL)',
      issuer: 'Coursera',
      date: 'Oct 2020',
      url: 'https://coursera.org/share/acdcdbbb9c82cfb16b522c72d3a0c288'
    },
    {
      name: 'AWS Educate Machine Learning Foundations',
      issuer: 'AWS',
      date: 'Jun 2025',
      url: 'https://www.credly.com/badges/f159ce68-73b7-4bef-bfe2-07338e0a0201/public_url'
    }
  ]
};

module.exports = resumeData;