
var MyClassConst = {
    DEFAULT_ATTRIBUTE_VALUE : 'attribute'
};

function MyClass () {
	
	this.attribute = null;
	
	this.init();
}

MyClass.prototype.init = function () {
	
	this.attribute = MyClassConst.DEFAULT_ATTRIBUTE_VALUE;
};

MyClass.prototype.setAttribute = function (value) {
	
	this.attribute = value;
};

MyClass.prototype.getAttribute = function () {
	
	return this.attribute;
};

MyClass.prototype.missingSemicolonOnCheckstyle = function () {
	
	//Just to have a warning on JSLint/Checkstyle
} // Warning on this line
