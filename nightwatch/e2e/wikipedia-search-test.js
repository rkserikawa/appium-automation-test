describe('Wikipedia Android app test', function() {
  const onboardingPage = app.page.onboardingPage();
  const searchPage = app.page.searchPage();


  before(function() {
    onboardingPage.onboardSkip();
  });

  it('Pesquisar pelo artigo BrowserStack', async function(app) {
    searchPage.searchArticle('BrowserStack');
    app.waitUntil(async function() {
      const contexts = await this.appium.getContexts();
                
      return contexts.includes('WEBVIEW_org.wikipedia');
    })
    app.appium.setContext('WEBVIEW_org.wikipedia')
    app.assert.textEquals('.pcs-edit-section-title','BrowserStack');  // command run in webview conte
  });

});
