QUnit.module("MyClass");

QUnit.test("init()", function() {
	
	var obj = null;
	var actual = null;
	var expected = null;
	
	obj = new MyClass();
	expected = MyClassConst.DEFAULT_ATTRIBUTE_VALUE;
	actual = obj.getAttribute();
	equal(actual, expected);
});

QUnit.test("setAttribute()", function() {
	
	var obj = null;
	var actual = null;
	var expected = null;
	
	obj = new MyClass();
	expected = 'something';
	obj.setAttribute(expected);
	actual = obj.getAttribute();
	equal(actual, expected);
});

