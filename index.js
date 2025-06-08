#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const resumeData = require('./resume-data');

console.log(
  chalk.yellow(
    figlet.textSync('Resume', { horizontalLayout: 'full' })
  )
);

console.log(
  boxen(
    chalk.white.bold(`${resumeData.name}\n`) +
    chalk.blue(`${resumeData.title}\n\n`) +
    chalk.white(`📧 ${resumeData.contact.email}\n`) +
    chalk.white(`📱 ${resumeData.contact.phone}\n`) +
    chalk.white(`📦 ${resumeData.contact.github}\n`) +
    chalk.white(`🔗 ${resumeData.contact.linkedin}\n`) +
    chalk.white(`🌐 ${resumeData.contact.website}`),
    { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green' }
  )
);


console.log(
  chalk.green.bold('\nSkills:\n') +
  chalk.white(`Languages: ${resumeData.skills.languages.join(', ')}\n`) +
  chalk.white(`Technologies: ${resumeData.skills.technologies.join(', ')}\n`)
);

console.log(
  chalk.green.bold('\nExperience:\n') +
  resumeData.experience.map(exp =>
    `${chalk.white.bold(exp.company)} - ${chalk.blue(exp.position)} (${exp.duration})\n` +
    exp.highlights.map(highlight => `  - ${highlight}`).join('\n')
  ).join('\n\n')
);

console.log(
  chalk.green.bold('\nEducation:\n') +
  resumeData.education.map(edu =>
    `${chalk.white.bold(edu.institution)} - ${chalk.blue(edu.degree)} (${edu.duration})\n` +
    edu.coursework.map(course => `Coursework: ${course}`).join(', ') + '\n',
  ).join('\n\n')
);

console.log(
  chalk.green.bold('\nProjects:\n') +
  resumeData.projects.map(project =>
    `${chalk.white.bold(project.name)}\n` +
    `${chalk.blue(project.description)}\n` +
    `Technologies: ${project.technologies.join(', ')}\n`
  ).join('\n\n')
);