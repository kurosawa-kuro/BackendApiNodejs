const fs = require('fs'); // npm

const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isExistFile = function (file) {
    try {
        fs.statSync(file);
        return true
    } catch (err) {
        if (err.code === 'ENOENT') return false
    }
}

module.exports = {
    sleep: sleep,
    isExistFile: isExistFile
}
