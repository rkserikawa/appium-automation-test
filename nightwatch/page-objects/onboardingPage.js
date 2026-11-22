const onboardPageCommands = {
    onboardSkip(){
        this.waitForElementVisible('@onboardSkipButton')
            .click('@onboardSkipButton');
    return this;
    }
} 


module.exports = {
    commands: [onboardPageCommands],
    elements: {
        onboardSkipButton: {
            selector: 'org.wikipedia:id/fragment_onboarding_skip_button',
            locateStrategy: 'id'
        }
    }
};