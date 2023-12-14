const fs = require('fs');
const { resolve } = require('path');

const funkoData = JSON.parse(fs.readFileSync(resolve() + "/src/data/funko.json", 'utf-8'));

module.exports = funkoData;
