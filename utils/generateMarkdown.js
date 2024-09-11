function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}]
`;
}

module.exports = generateMarkdown;
