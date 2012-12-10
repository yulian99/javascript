var fs = require('fs');
QUnit = require('qunitjs');
require('qunitjs/addons/junitlogger/junitlogger');

var xmlFile = fs.createWriteStream('simple.xml');
QUnit.jUnitReport = function(data) {
	xmlFile.write(data.xml);
};

require('./MyClassTest.js');
