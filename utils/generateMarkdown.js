// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  
  ## Description
  
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## License

  Copyright 2021 © ${data.firstName} ${data.lastName} [${data.userName}]. All rights reserved.
  Licensed under the [${data.license}](https://opensource.org/licenses/${data.license}).

  ## Features

  ${data.features}


  ## How to Contribute

  ${data.contribute}


  ## Tests

  ${data.tests}


`;
}

module.exports = generateMarkdown;
