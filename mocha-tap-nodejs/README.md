QUnit Maven and Node.JS
=========================

This project is a [Mocha](http://visionmedia.github.com/mocha/) with [QUnit UI](https://github.com/itaylor/qunit-mocha-ui) based project. It aims to help using TDD with JavaScript in a CI environment with [Jenkins](http://jenkins-ci.org/).

Requirements:
 - [JScoverage](https://github.com/visionmedia/node-jscoverage)

You need to get the necessary modules:
<code>
npm install mocha qunit-mocha-ui
</code>

To run (Fedora):
<code>
nodejs src/test/js/testrunner.js
</code>

To run (Ubuntu):
<code>
node src/test/js/testrunner.js
</code>

TAP Output (test results):
<code>
make test
</code>

TAP Output (test results for Jenkins):
<code>
make test-tap
</code>

Output at:
<code>
target/result.tap
</code>

HTML coverage Output (human readable coverage):
<code>
make cov-html
</code>

Output at:
<code>
target/result.html
</code>

JSON coverage Output (Jenkins readable coverage):
<code>
make cov-json
</code>

Output at:
<code>
target/result.json
</code>

