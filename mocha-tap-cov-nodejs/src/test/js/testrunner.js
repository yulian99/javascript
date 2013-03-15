/*var fs = require('fs');
QUnit = require('qunitjs');
require('qunitjs/addons/junitlogger/junitlogger');

var xmlFile = fs.createWriteStream('simple.xml');
QUnit.jUnitReport = function(data) {
	xmlFile.write(data.xml);
};

require('./MyClassTest.js');
*/
var Mocha = require('mocha');

//Override the built-in QUnit reporter
Mocha.interfaces["qunit-mocha-ui"] = require("qunit-mocha-ui/qunit-mocha-ui.js");
var mocha = new Mocha({ui:"qunit-mocha-ui", reporter:process.argv[2]});
mocha.addFile("src/main/js/MyClass.js");
mocha.addFile("src/test/js/MyClassTest.js");
mocha.run(function(failures){
  process.exit(failures);
});