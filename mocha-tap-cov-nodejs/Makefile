
cov-json: target-dir prepare-cov
	EXPRESS_COV=1 node src/test/js/testrunner.js json-cov > target/result.json || echo "Output error: $?"

cov-html: target-dir prepare-cov
	EXPRESS_COV=1 node src/test/js/testrunner.js html-cov > target/result.html || echo "Output error: $?"

prepare-cov: install
	jscoverage src/main/js/ src/main/js-cov

test: install
	node src/test/js/testrunner.js dot

test-tap: target-dir install
	node src/test/js/testrunner.js tap > target/result.tap || echo "Output error: $?"

install: 
	npm install mocha qunit-mocha-ui 

target-dir:
	mkdir -p target

.PHONY: cov-json
.PHONY: cov-html
.PHONY: test
.PHONY: test-tap
