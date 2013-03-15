module.exports = require('../../main/js/MyClass.js');
module.exports = process.env.EXPRESS_COV
   ? require('../../main/js-cov/MyClass.js')
   : require('../../main/js/MyClass.js');

var MyClass = module.exports.MyClass;
var MyClassConst = module.exports.MyClassConst;


suite("MyClass");

test("init()", function() {
	
	var obj = null;
	var actual = null;
	var expected = null;
	
	obj = new MyClass();
	expected = MyClassConst.DEFAULT_ATTRIBUTE_VALUE;
	actual = obj.getAttribute();
	equal(actual, expected);
});

test("setAttribute()", function() {
	
	var obj = null;
	var actual = null;
	var expected = null;
	
	obj = new MyClass();
	expected = 'something';
	obj.setAttribute(expected);
	actual = obj.getAttribute();
	equal(actual, expected);
});

test("setAttribute(): Fail", function() {
	
	var obj = null;
	var actual = null;
	var expected = null;
	
	obj = new MyClass();
	expected = 'something';
	obj.setAttribute(expected);
	actual = obj.getAttribute();
	equal(actual, expected + 'fail');
});
