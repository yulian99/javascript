
cov-json: target-dir prepare-cov
	EXPRESS_COV=1 node src/test/js/testrunner.js json-cov > target/result.json || touch target/output.err	

cov-html: target-dir prepare-cov
	EXPRESS_COV=1 node src/test/js/testrunner.js html-cov > target/result.html || touch target/output.err

prepare-cov: install
	jscoverage src/main/js/ src/main/js-cov

test: install
	node src/test/js/testrunner.js dot

test-tap: target-dir install
	node src/test/js/testrunner.js tap > target/result.tap || touch target/output.err

install: 
	npm install mocha qunit-mocha-ui 

target-dir:
	mkdir -p target

clean:
	rm -rf target

post-err:
	if [ -f target/output.err ]; then exit 1; fi
	

.PHONY: cov-json
.PHONY: cov-html
.PHONY: test
.PHONY: test-tap
