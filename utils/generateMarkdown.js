// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensesBadge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  }
  return licensesBadge[`${license}`]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  <a name="Title"></a>
  ## TITLE
  # ${data.title}

  1. [ Description. ](#description)
  2. [Installation.](#installation)
  3. [Usage.](#usage)
  4. [Contribution](#contrubation)
  5. [license.](#license)
  


  <a name= "Description"></a>
  ## DESCRIPTION
  # ${data.description}

  <a name="Installation"></a>
  # INSTALLATION 
  # ${data.installation}


  <a name="Usage"></a>
  # USAGE
  # ${data.usage}


  <a name="Contribution"></a>
  # CONTRIBUTION
  # ${data.contribution}

  <a name="Test"></a>
  # TEST
  # ${data.test}

  <a name= "Questions"></a>
  # QUESTIONS 
  #${data.questions}

  <a name= "License"></a>
  ## LICENSE
  # ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
