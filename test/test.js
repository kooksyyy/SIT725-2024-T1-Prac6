async function test() {
    const expect = await import("chai").then((module) => module.expect);
    var request = require("request");
  
    describe("Add Two Numbers", function () {
      var url = "http://localhost:3000/addTwoNumbers/3/5";
      it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
      it("returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.statusCode).to.equal(200);
          done();
        });
      });
      it("returns the result as a number", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.be.a('number');
          done();
        });
      });
      it("returns the result equal to 8", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.equal(8);
          done();
        });
      });
      it("returns the result not equal to 15", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.not.equal(15);
          done();
        });
      });
    });
  
    describe("Add Two strings", function () {
      var url = "http://localhost:3000/addTwoNumbers/a/b";
      it("should not returns status 200", function (done) {
        request(url, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
      it("returns statusCode key in body to check if api gives right result should be 400", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.statusCode).to.equal(400);
          done();
        });
      });
      it("returns the result as null", function (done) {
        request(url, function (error, response, body) {
          body = JSON.parse(body);
          expect(body.result).to.be.a('null'); // This should be 'null' (case-sensitive)
          done();
        });
      });
    });
  }
  
  test(); // Call the async function to run the tests