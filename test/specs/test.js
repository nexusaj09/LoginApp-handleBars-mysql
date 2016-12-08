var assert = require('assert');

describe.only('PERALTA\'s TESTING!', function() {
    describe('localhost page', function() {
        it('should have the right title - Home', function () {
            browser.url('localhost:6789/');

            var title = browser.getTitle();

            console.log(title);
            browser.click("#lo");
        });

        it('should have desctiption - Logics Attendance Application', function () {
            browser.url('localhost:6789/');
            var text = browser.getText("#lpdes");
            assert.equal(text,"Logics Attendance Application")
            console.log(text);
            browser.click("#lo");

        });

        it('should have the login form presented - Login', function () {
            browser.url('localhost:6789/');

            browser.click("#lo");

            var title = browser.getTitle();
            assert.equal(title, 'Login');
            console.log(title);

        });
    });


    describe('Login page', function() {


        it('should click login button with empty credentials and displays Missing credentials', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.click('#btnlogin');
            var text = browser.getText("#lblerror");
            assert.equal(text,"No Username and Password")
            console.log("Missing credentials");

        });

        it('should click login button with invalid credentials and displays invalid credentials', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.setValue('#lfusername','Nexus_aj');
            browser.setValue('#lfpassword','Heys2');
            browser.click('#btnlogin');
            var text = browser.getText("#lblerror");
            assert.equal(text,"Incorrect Username/Password")
            console.log("Invalid credentials");

        });

        it('should click login button with valid credentials and navigate to DashBoard ', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.setValue('#lfusername','Nexus_aj09');
            browser.setValue('#lfpassword','Heys200');
            browser.click('#btnlogin');
            var text = browser.getTitle();
            assert.equal(text,"DashBoard")
            browser.click('#dboardlogout');  
            console.log("Welcome to the DashBoard");


        });

    });
    describe('Registration page', function() {

        it('should click register button with empty fields and displays empty notification messages', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.click('#re');
            browser.url('http://localhost:6789/register');
            browser.click("#btnreg");    
            var text = browser.getText("#regerror");
            assert.equal(text,"Error: No Input.") 
            console.log("Fields are empty");


        });


        it('should register successful', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.click('#re');
            browser.url('http://localhost:6789/register');
            browser.setValue('#reg-username','Nexus_aj10');
            browser.setValue('#reg-password','Heys300');
            browser.setValue('#re-pass','Heys300');
            browser.click("#btnreg");    
            var text = browser.getText("#regerror");
            assert.equal(text,"Account Added.") 
            console.log("Register successful");

        });



    });
    describe('Logout page', function() {
        it('should have a logout link visible', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.setValue('#lfusername','Nexus_aj09');
            browser.setValue('#lfpassword','Heys200');
            browser.click('#btnlogin');
            var text = browser.getText("#dboardlogout");
            assert.equal(text,"Logout")
            browser.click('#dboardlogout');           
            console.log("Logout Link Visible");



        });


        it('should logout when logout link is clicked', function () {
            browser.url('localhost:6789/');
            browser.click("#lo");
            browser.url('http://localhost:6789/login?#');
            browser.setValue('#lfusername','Nexus_aj09');
            browser.setValue('#lfpassword','Heys200');
            browser.click('#btnlogin');   
            browser.click('#dboardlogout');
            var text = browser.getTitle();
            assert.equal(text,"Login")           
            console.log("Logout Successful");


        });


    });

});








