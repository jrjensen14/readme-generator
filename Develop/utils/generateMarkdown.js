// function to generate markdown for README
function generateMarkdown(data) {
  return `
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
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Test
  ${answers.test}

  ## Questions?
  If you have any questions please reach out to me at:
  GitHub - ${answers.link}
  Email - ${answers.email}

`;
}

module.exports = generateMarkdown;
