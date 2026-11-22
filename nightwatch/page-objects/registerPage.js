const registerPageCommands = {
    usedUsername(){
        this.assert
            .textContains('@textInputError','The user name "test" is not available. Please choose a different name.');
        return this;
    },

    invalidPassword(){
        this.assert
            .textContains('@textInputError','The password must be at least 8 characters');
        return this;
    },

    invalidRepeatPassword(){
        this.assert
            .textContains('@textInputError',"Passwords don't match");
        return this;
    },

    clickLogin(){
        this.waitForElementVisible('@loginButton')
            .click('@loginButton');
    },

    registerNewUser(username,password,repeatPassword,email){
        this.waitForElementVisible('@usernameInput')
            .sendKeys('@usernameInput',username);

        this.waitForElementVisible('@passwordInput')
            .sendKeys('@passwordInput',password);

        this.waitForElementVisible('@repeatPasswordInput')
            .sendKeys('@repeatPasswordInput',repeatPassword);

        this.waitForElementVisible('@emailInput')
            .sendKeys('@emailInput',email);

        this.waitForElementVisible('@submitButton')
            .click('@submitButton');
        return this; 
    }
} 


module.exports = {
    commands: [registerPageCommands],
    elements: {
        usernameInput: {
            selector: '	//android.widget.EditText[@text="Username"]',
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
        repeatPasswordInput: {
            selector: '//android.widget.EditText[@text="Repeat password"]',
            locateStrategy: 'xpath'
        },
        emailInput: {
            selector: '//android.widget.EditText[@text="Email (Optional)"]',
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: 'org.wikipedia:id/create_account_submit_button',
            locateStrategy: 'id'
        },
        loginButton: {
            selector: 'org.wikipedia:id/create_account_login_button',
            locateStrategy: 'id'
        },
        forgotPasswordLink: {
            selector: 'org.wikipedia:id/forgot_password_link',
            locateStrategy: 'id'
        },
        privacyPolicyLink: {
            selector: 'org.wikipedia:id/privacy_policy_link',
            locateStrategy: 'id'
        }
    }
};

