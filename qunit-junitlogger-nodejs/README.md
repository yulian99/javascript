QUnit Maven and Node.JS
=========================

This project is a _mavenized_ JavaScript [QUnit](http://qunitjs.com/) based project. It aims to help using TDD with JavaScript in a CI environment with [Jenkins](http://jenkins-ci.org/).

POM based on [https://bitbucket.org/aceontech/jsrails/src/0b8f3a7b17b0/pom.xml]
[http://mojo.codehaus.org/javascript-maven-tools/]

You need to get the necessary modules:
<code>
npm install qunitjs
</code>

To run:
<code>
nodejs src/test/js/testrunner.js
</code>

JUnit XML Output:
<code>
target/surefire/simple.xml
</code>

_Tested with_:
 * <code>Qunit 1.10.0</code>
 
