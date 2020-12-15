// function to generate markdown for README
function generateMarkdown(data) {

  return `
  <img src="https://img.shields.io/badge/Liciense-${(data.license)}-bright%20green">

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#licience)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions please reach out to me at:
  GitHub - [${data.link}](https://github.com/${data.link}) 
  <break>
  Email - [${data.email}](mailto:${data.email})

`;
};

module.exports = generateMarkdown;
