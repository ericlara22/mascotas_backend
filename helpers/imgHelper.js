const sharp = require('sharp');

module.exports = imgHelper = {

    regular: (filePath, filename, size=200) => {
        return sharp(filePath)
        .resize(size)
        .toFile(`./optimized/${filename}`)
    },

    square: (filePath, filename, size=200) => {
        return (sharp(filePath)
        .resize(size, size)
        .toFile(`./optimized/${filename}`))
    }

}
