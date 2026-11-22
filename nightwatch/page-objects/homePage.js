const homePageCommands = {
    clickMoreMenu(){
        this.waitForElementVisible('@moreButton')
            .click('@moreButton');
        return this;
    },

    clickLoginJoin(){
        this.waitForElementVisible('@loginJoinButton')
            .click('@loginJoinButton');
        return this;
    }
} 

module.exports = {
    commands: [homePageCommands],
    elements: {
        moreButton: {
            selector: 'org.wikipedia:id/nav_more_container',
            locateStrategy: 'id'
        },
        loginJoinButton: {
            selector: 'org.wikipedia:id/main_drawer_login_button',
            locateStrategy: 'id'
        }
    }
};

