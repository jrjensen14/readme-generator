// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <img src="https://img.shields.io/badge/Readme-generator-bright%20green">
  
  # ${data.title}

  ## Description

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#licience)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questioins)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contibutors}

  ## Test
  ${data.test}

  ## Questions?
  If you have any questions please reach out to me at:
  GitHub - ${data.link}
  Email - ${data.email}

`;
}

module.exports = generateMarkdown;
