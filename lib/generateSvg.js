const generateSvg = (data) => {
    const shape = data.shape
    let element = {}

    if (shape === 'square') {
        element = {
            label: 'rect',
            attributes: 'width="80" height="80"'
        }
    } else if (shape === 'circle') {
        element = {
            label: 'circle',
            attributes: 'cx="50" cy="50" r="40"'
        }
    } else if (shape === 'triangle') {
        element = {
            label: 'polygon',
            attributes: 'points= "50,10 10,90 90,90"'
        }
    }

    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <${element.label} ${element.attributes} fill="${data.shapeColor}" stroke-width="2" />
            <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
        </svg> `

}

module.exports = generateSvg;