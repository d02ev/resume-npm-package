const { logError, logInfo } = require("./logger");

const resumeData = {
  data: {
    name: 'Vikramaditya Pratap Singh',
    contact: {
      email: 'vikramadityapratapsingh98@gmail.com',
      mobile: '+91-9617945540',
      github: 'https://github.com/d02ev',
      linkedin: 'https://linkedin.com/in/vikramaditya-pratap-singh',
      website: 'https://d02ev.netlify.app',
    },
    techStack: {
      languages: ['C/C++', 'C#', 'Python', 'JavaScript', 'TypeScript', 'Bash', 'SQL'],
      techAndTools: [
        ".NET Core",
        "Node.js",
        "Express.js",
        "Angular",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "LLMs",
        "Prompt Engineering",
        "Git",
        "Docker",
        "Supabase"
      ]
    },
    experience: [
      {
        "jobTitle": "Software Engineer",
        "companyName": "Nagarro",
        "location": "Pune, India",
        "startDate": "Jan 2024",
        "endDate": null,
        "description": [
          "Architected scalable backend functionalities using Azure Functions, C#, and .NET Core, ensuring seamless operations for 15,000+ active users.",
          "Implemented frontend unit test strategies, elevating code coverage from 79% to 92.3%, improving application stability and quality assurance.",
          "Optimized SQL Server database queries to reduce API response time by 80%, delivering a faster and more efficient user experience.",
          "Azure, Azure Functions, SQL Server, Jasmine, Karma, Angular, TypeScript, Git"
        ]
      },
      {
        "jobTitle": "Associate Software Engineer",
        "companyName": "Nagarro",
        "location": "Pune, India",
        "startDate": "Jan 2023",
        "endDate": "Jan 2024",
        "description": [
          "Designed and developed reusable web components using Vue, increasing development efficiency and reducing feature implementation time, aligning with client-specific analytical platform requirements.",
          "Engineered interactive data visualization tools by integrating ChartJS, enhancing user engagement and improving decision-making accuracy by providing clearer analytical insights.",
          "Built backend REST APIs using .NET Core, C#, and Uber H3 Grid Library, processing and analyzing geospatial data.",
          "Enhanced application performance by 100% through real-time data processing algorithms and efficient chart-rendering methodologies.",
          "C#, .NET Core, Vue, TypeScript, Pinia"
        ]
      },
      {
        "jobTitle": "Software Engineering Trainee",
        "companyName": "Nagarro",
        "location": "Pune, India",
        "startDate": "Oct 2022",
        "endDate": "Jan 2023",
        "description": [
          "Mastered technical proficiency in .NET Core, Angular, C#, and TypeScript; leveraged skills to construct scalable web applications",
          "Created two end-to-end web application prototypes using .NET, Angular, and SQL Server, implementing best practices in software development.",
          "C#, .NET Core, SQL Server, Angular, TypeScript, GitLab, Git"
        ]
      }
    ],
    education: {
      "institute": "Vellore Institue of Technology, Bhopal",
      "startDate": "Aug 2018",
      "endDate": "Jun 2022",
      "degree": "B.Tech. in Computer Science and Engineering",
      "grade": "CGPA: 7.58/10",
      "coursework": [
        "Object Oriented Programming",
        "DBMS",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks"
      ]
    },
    projects: [
      {
        "displayName": "Portfolio API",
        "shortDescription": "backend API for the portfolio client and resume generation automation.",
        "longDescription": "Devised a backend API automating resume generation and exposing APIs for portfolio data.",
        "techStack": [
          ".NET Core",
          "C#",
          "MongoDB",
          "Postgres",
          "Github Actions",
          "Docker",
          "Git"
        ],
        "repoUrl": "https://github.com/d02ev/portfolio-api",
        "liveUrl": "https://portfolio-api-oo25.onrender.com/api"
      },
      {
        "displayName": "ERD Generator CLI Tool",
        "shortDescription": "Generate beautiful ERDs using database connection string.",
        "longDescription": "Innovated a CLI tool that renders beautiful and interactive ERDs locally on a browser using a db connection string.",
        "techStack": [
          "Express.js",
          "Node.js",
          "JavaScript",
          "HTML",
          "CSS",
          "Bootstrap",
          "Prompt Engineering",
          "npm",
          "Git"
        ],
        "repoUrl": "https://github.com/d02ev/gen-erd-cli",
        "liveUrl": "https://www.npmjs.com/package/gen-erd-cli"
      },
    ],
  }
};

const BASE_URL = 'https://portfolio-api-oo25.onrender.com/api';

const generateAuthToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token?username=vikramaditya`, {
      method: 'GET'
    });
    const data = await response.json();
    if (response.ok) {
      return data.token;
    } else {
      logError('Error generating auth token:', data);
      return null;
    }
  } catch (err) {
    logError('Error generating auth token:', err);
    return null;
  }
};

const fetchResumeData = async () => {
  try {
    const token = await generateAuthToken();
    if (!token) {
      logError('Failed to obtain auth token. Using local resume data.');
      return;
    }

    const response = await fetch(`${BASE_URL}/resume`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    logInfo('Fetched latest resume data.');
    return data;
  } catch (err) {
    logError('Error fetching resume data:', err);
    return resumeData;
  }
};

module.exports = fetchResumeData;