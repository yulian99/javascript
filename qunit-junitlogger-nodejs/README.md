QUnit Maven and Node.JS
=========================

This project is a _mavenized_ JavaScript [QUnit](http://qunitjs.com/) based project. It aims to help using TDD with JavaScript in a CI environment with [Jenkins](http://jenkins-ci.org/).

You need to get the necessary modules:
<code>
npm install qunitjs
</code>

To run (Fedora):
<code>
nodejs src/test/js/testrunner.js
</code>

To run (Ubuntu):
<code>
node src/test/js/testrunner.js
</code>

JUnit XML Output:
<code>
simple.xml
</code>

[Integration with Jenkins](https://github.com/fgka/javascript/wiki/How-to-setup-Jenkins-for-NodeJS-QUnit-projects)

_Tested with_:
 * <code>Qunit 1.10.0</code>
 

