javascript
==========

This project is a _mavenized_ JavaScript [QUnit](http://qunitjs.com/) based project. It aims to help using TDD with JavaScript in a CI environment with [Jenkins](http://jenkins-ci.org/).

It also uses [PhantomJS](http://phantomjs.org/) for the headless browser simulator.

The maven plugin used is {{{phantomjs-qunit-runner}}}. You can find the code [here](http://code.google.com/p/phantomjs-qunit-runner/) and partial documentation from the creator [here](http://kennychua.net/blog/running-qunit-tests-in-a-maven-continuous-integration-build-with-phantomjs)

To run the project using maven you need to provide the _phantomjs.bin__ variable, pointing to the PhantomJS executable, in my case:
   
   /opt/phantomjs/bin/phantomjs


Run it with: 

   mvn -Dphantomjs.bin=/opt/phantomjs/bin/phantomjs clean install

For QUnit HTML generation use:

   mvn -Dphantomjs.bin=/opt/phantomjs/bin/phantomjs phantomjs-qunit-runner:generate-html



