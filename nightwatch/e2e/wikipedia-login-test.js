describe('Wikipedia Android app test', function() {
  const onboardingPage = app.page.onboardingPage();
  const homePageCommands = app.page.homePage();
  const loginPage = app.page.loginPage();
  const registerPage = app.page.registerPage();

  before(function() {
    onboardingPage.onboardSkip();
  });

  it('Verificar mensagem de verificacao no login', async function(app) {
    homePageCommands.clickMoreMenu();
    homePageCommands.clickLoginJoin();
    registerPage.clickLogin();
    loginPage.login('teste','testeteste');
    loginPage.addtionalVerificationAlert();
  });

  it('Verificar mensagem de usuario ja esta sendo utilizado', async function (app) {
    app.back();
    homePageCommands.clickMoreMenu();
    homePageCommands.clickLoginJoin();
    registerPage.registerNewUser('teste','testeteste','testeteste','teste@email.com');
  });

});
