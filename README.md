# SVG-Logo-Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Walkthrough video [Link](https://app.screencastify.com/v3/watch/k34yyk3jeuCdmHeGmMN8)

## Description

This project was motivated by the need for a simple, flexible way to generate SVG shapes programmatically. The SVG Shapes Generator was built to solve the common problem of dynamically creating and manipulating SVG shapes within web applications, without the overhead of complex graphics libraries. Through this project, I've learned more about SVG specifications, JavaScript programming, and the nuances of shape rendering in modern web browsers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Tests](#tests)


## Installation

To install the SVG Shapes Generator, follow these steps:
```sh
git clone https://github.com/andersonasprilla/SVG-Logo-Maker.git
cd SVG-Logo-Maker
```
Ensure you have Node.js and npm installed on your system to handle dependencies and run the project.

## Usage

To start the application, open the integrated terminal and run:
```sh
node index.js
```

* Enter up to 3 characters: **Type up to 3 characters that you want to include in your logo**.
* Type the text color (Use color keyword or Hex number): **Specify the color of the text in your logo. You can use a color name (e.g., "red") or a hex code (e.g., "#ff0000")**
* Choose the logo shape: **Select a shape for your logo from the options: square, circle, or triangle.**
* Type the shape color (Use color keyword or Hex number): **Specify the color of the shape in your logo. Like the text color, you can use a color name or a hex code.**

After answering all the questions, the script will generate an SVG file named **logo.svg** in the `examples` directory and it will generate the logo:

<p align="center">
  <img src="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjEwMCIgZmlsbD0iZ3JlZW4iLz4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI4MCI+U1ZHPC90ZXh0Pgo8L3N2Zz4K" alt="SVG Image">
</p>




## Credits

This project was developed by [Luis Asprilla](https://www.linkedin.com/in/andersonasprilla/) . Special thanks to the following resources:

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG) for SVG specifications.

[Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) Documentation for backend JavaScript runtime environment details.

## License
This project is licensed under the MIT License. For more information, please visit [here](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
## Features

* Dynamically generate SVG shapes: squares, circles, and triangles.
* Customize shapes with color and size.
* Simple API for integrating with web applications.

## Contribution

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## Tests

To run tests, execute the following command:

```sh
npm test
```
## Questions

If you have any questions about the repo, open an issue or contact me through my [LinkedIn](https://www.linkedin.com/in/andersonasprilla/) You can find more of my work at [GitHub](https://github.com/andersonasprilla).














<!-- <p align="center">
  <img src="data:image/svg+xml;utf8,%0A%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%20%20%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23cd5c5c%22/%3E%0A%20%20%20%20%3Ctext%20x%3D%22100%22%20y%3D%22120%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-size%3D%2280%22%3ECNN%3C/text%3E%0A%3C/svg%3E%0A" alt="Custom SVG">
</p> -->
