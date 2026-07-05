import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";
import { LoginPage } from "../pages/loginPage";
import { generateUser } from "../data/generateData";
import userData from "../data/user.json";

let mainPage: MainPage;
let loginPage: LoginPage;

test.describe("Checking login functionality with invalid data (valid login and invalid password), Checking login functionality with invalid data (invalid login and invalid password", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
    await mainPage.open();
  });

  test("test2", async ({ page }) => {
    const user = generateUser();
    await mainPage.clickLoginBtn();
    await expect(page).toHaveURL("https://www.redmine.org/login");

    await loginPage.fillField(loginPage.usernameFld, userData.validUser.login);
    await loginPage.verifyUsernameFld(userData.validUser.login);

    await loginPage.fillField(loginPage.passwordFld, user.password);
    await loginPage.verifyPasswordFld(user.password);

    await loginPage.clickSubmitBtn();
    await loginPage.verifyErrorMessage();
    await expect(page).toHaveURL("https://www.redmine.org/login");
  });

  test("test3", async ({ page }) => {
    const user = generateUser();
    await mainPage.clickLoginBtn();
    await expect(page).toHaveURL("https://www.redmine.org/login");

    await loginPage.fillField(loginPage.usernameFld, user.login);
    await loginPage.verifyUsernameFld(user.login);

    await loginPage.fillField(loginPage.passwordFld, user.password);
    await loginPage.verifyPasswordFld(user.password);

    await loginPage.clickSubmitBtn();
    await loginPage.verifyErrorMessage();
    await expect(page).toHaveURL("https://www.redmine.org/login");
  });
});
