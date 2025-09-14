#!/usr/bin/env node

const fetchResumeData = require('./resume');
const displayResume = require('./cli');
const { logInfo, logError } = require('./logger');

logInfo('Fetching latest resume data...');
fetchResumeData().then(resumeData => {
  displayResume(resumeData.data);
}).catch(err => {
  console.log("err", err);
  logError('Failed to render resume:', err);
});