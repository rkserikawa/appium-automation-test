const loginPageCommands = {
    addtionalVerificationAlert(){
        this.assert
            .textContains('@snackbarText',"An additional verification step is required. Please submit the form again.");
        return this;
    },

    login(username,password){
        this.waitForElementVisible('@usernameInput')
            .sendKeys('@usernameInput',username);

        this.waitForElementVisible('@passwordInput')
            .sendKeys('@passwordInput',password);

        this.waitForElementVisible('@loginButton')
            .click('@loginButton');
        return this; 
    }
} 


module.exports = {
    commands: [loginPageCommands],
    elements: {
        usernameInput: {
            selector: '//android.widget.EditText[@text="Username"]',
            locateStrategy: 'xpath'
        },
        textInputError: {
            selector: 'org.wikipedia:id/textinput_error',
            locateStrategy: 'id'
        },
        passwordInput: {
            selector: '//android.widget.EditText[@text="Password"]',
            locateStrategy: 'xpath'
        },
        createAccountButton: {
            selector: 'org.wikipedia:id/login_create_account_button',
            locateStrategy: 'id'
        },
        loginButton: {
            selector: 'org.wikipedia:id/login_button',
            locateStrategy: 'id'
        },
        forgotPasswordLink: {
            selector: 'org.wikipedia:id/forgot_password_link',
            locateStrategy: 'id'
        },
        privacyPolicyLink: {
            selector: 'org.wikipedia:id/privacy_policy_link',
            locateStrategy: 'id'
        },
        snackbarText: {
            selector: 'org.wikipedia:id/snackbar_text',
            locateStrategy: 'id'
        }
    }
};

