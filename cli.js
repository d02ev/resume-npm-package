const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');

const displayResume = (resumeData) => {
  console.log(
    chalk.yellow(
      figlet.textSync('Resume', { horizontalLayout: 'full' })
    )
  );

  console.log(
    boxen(
      chalk.white.bold(`${resumeData.name}\n`) +
      chalk.white(`📧 ${resumeData.contact.email}\n`) +
      chalk.white(`📱 ${resumeData.contact.mobile}\n`) +
      chalk.white(`📦 ${resumeData.contact.github}\n`) +
      chalk.white(`🔗 ${resumeData.contact.linkedin}\n`) +
      chalk.white(`🌐 ${resumeData.contact.website}`),
      { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green' }
    )
  );

  console.log(
    chalk.green.bold('\nSkills:\n') +
    chalk.white(`Languages: ${resumeData.techStack.languages.join(', ')}\n`) +
    chalk.white(`Technologies: ${resumeData.techStack.techAndTools.join(', ')}\n`)
  );

  console.log(
    chalk.green.bold('\nExperience:\n') +
    resumeData.experience.map(exp =>
      `${chalk.white.bold(exp.companyName)} - ${chalk.blue(exp.jobTitle)} (${exp.startDate} - ${exp.endDate ? exp.endDate : 'Present'})\n` +
      exp.description.map(desc => `  - ${desc}`).join('\n')
    ).join('\n\n')
  );

  console.log(
    chalk.green.bold('\nEducation:\n') +
    `${chalk.white.bold(resumeData.education.institute)} - ${chalk.blue(resumeData.education.degree)} (${resumeData.education.startDate} - ${resumeData.education.endDate})\n` +
      `${resumeData.education.grade}\n` +
      `Coursework:\n` +
    resumeData.education.coursework.map(course => `  - ${course}`).join('\n')
  );

  // console.log(
  //   chalk.green.bold('\nCertifications:\n') +
  //   resumeData.certifications.map(cert =>
  //     `${chalk.white.bold(cert.name)}\n` +
  //     `${chalk.blue(`Issued by: ${cert.issuer}`)} | ${chalk.blue(`Date: ${cert.date}`)}\n` +
  //     `${chalk.white(`🔗 ${cert.url}`)}\n`
  //   ).join('\n')
  // );

  console.log(
    chalk.green.bold('\nProjects:\n') +
    resumeData.projects.map(project =>
      `${chalk.white.bold(project.displayName)}\n` +
      `${chalk.blue(project.longDescription)}\n` +
      `Technologies: ${project.techStack.join(', ')}\n` +
      `Live: ${project.liveUrl}\n` +
      `Repo: ${project.repoUrl}\n`
    ).join('\n\n')
  );
};

module.exports = displayResume;