// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  
  ![github license](https://img.shields.io/badge/license-${data.license}-blue)
***
 
  ## Description

    ${data.description}
***

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#use)
  * [Contributors](#contributors)
  * [Contact Information](#email)
  * [License](#license)
***

  ## Installation

    To install necessary dependencies, run the following command:
  
     ${data.installation}
***
  ## Usage

     ${data.use}
***
  ## Contributors

     ${data.contributors}
***
  ## Tests

  To run tests, run the following command:
  
     ${data.test}
  
***
  ## Contact Information

     ${data.GitUsername} or ${data.email}
***
    ### License: ${data.license}
***  
`;
}

module.exports = generateMarkdown;
