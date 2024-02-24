const generateSvg = (data) => {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 10,90 90,90" fill="${data.shapeColor}" stroke-width="2" />
            <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
        </svg>
        `
}

module.exports = generateSvg;