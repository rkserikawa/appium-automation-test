const searchPageCommands = {

    searchArticle(text){
        this.click('@searchContainer');
        this.sendKeys('@searchInput',text);
        this.click('@pageListTitle');
        return this;
    }
}

module.exports = {
    commands: [searchPageCommands],
    elements: {
        searchContainer: {
            selector: 'org.wikipedia:id/search_container',
            locateStrategy: 'id'
        },
        searchInput: {
            selector: 'org.wikipedia:id/search_src_text',
            locateStrategy: 'id'
        },
        pageListTitle: {
            selector: 'org.wikipedia:id/page_list_item_title', 
            locateStrategy: 'id', 
            index: 0
        },
        wikipediaWebview: {
            selector: 'WEBVIEW_org.wikipedia'
        },
        titlePage: {
            selector: '.pcs-edit-section-title'
        }
    }
};
