const generateSvg = (data) => {
    let element = {}

    switch (data.shape) {
        case 'triangle':
            element.label = 'polygon';
            element.points = '50,10 10,90 90,90';
            break;
        case 'circle':
            element.label = 'circle';
            element.cx = '50';
            element.cy = '50';
            element.r = '40';
            break;
        case 'square':
            element.label = 'rect';
            element.width = '80';
            element.height = '80';
            break;
    }

    if (element.label === 'polygon') {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <${element.label} points="${element.points}" fill="${data.shapeColor}" stroke-width="2" />
            <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
        </svg> `
    } else if (element.label === 'circle') {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <${element.label} cx="${element.cx}" cy="${element.cy}" r="${element.r}" fill="${data.shapeColor}" stroke-width="2" />
                <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
            </svg>`;
    } else if (element.label === 'rect') {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <${element.label} width="${element.width}" height="${element.height}" fill="${data.shapeColor}" stroke-width="2" />
        <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
    </svg>`;
    }


}

module.exports = generateSvg;