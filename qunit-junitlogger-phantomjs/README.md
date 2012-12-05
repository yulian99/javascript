QUnit Maven and PhantomJS
=========================

This project is a _mavenized_ JavaScript [QUnit](http://qunitjs.com/) based project. It aims to help using TDD with JavaScript in a CI environment with [Jenkins](http://jenkins-ci.org/).

It also uses [PhantomJS](http://phantomjs.org/) for the headless browser simulator.

The maven plugin used is <code>phantomjs-qunit-runner</code>. You can find the code [here](http://code.google.com/p/phantomjs-qunit-runner/) and partial documentation from the creator [here](http://kennychua.net/blog/running-qunit-tests-in-a-maven-continuous-integration-build-with-phantomjs)

To run the project using maven you need to provide the <code>phantomjs.bin</code> variable, pointing to the PhantomJS executable, in my case:
   
<code>
/opt/phantomjs/bin/phantomjs
</code>


Run it with: 

<code>
mvn -Dphantomjs.bin=/opt/phantomjs/bin/phantomjs clean install
</code>

For QUnit HTML generation use:

<code>
mvn -Dphantomjs.bin=/opt/phantomjs/bin/phantomjs phantomjs-qunit-runner:generate-html
</code>


_Tested with_:
 * <code>Qunit 1.10.0</code>
 * <code>PhantomJS 1.7</code>
 * <code>phantomjs-qunit-runner 1.0.15</code>

