import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";
import { RegisterPage } from "../pages/registerPage";
import { generateUser } from "../data/generateData";

let mainPage: MainPage;
let registerPage: RegisterPage;

test.describe("Checking registration functionality with valid data", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    registerPage = new RegisterPage(page);
    await mainPage.open();
  });

  test("test1", async ({ page }) => {
    const user = generateUser();
    await mainPage.clickRegisterBtn();

    await expect(page).toHaveURL("https://www.redmine.org/account/register");
    await expect(registerPage.registerPageHeading).toBeVisible();

    await registerPage.fillField(registerPage.loginFld, user.login);
    await registerPage.verifyLoginFld(user.login);

    await registerPage.fillField(registerPage.passwordFld, user.password);
    await registerPage.verifyPasswordFld(user.password);

    await registerPage.fillField(
      registerPage.confirmPasswordFld,
      user.password,
    );
    await registerPage.verifyConfirmPasswordFld(user.password);

    await registerPage.fillField(registerPage.firstNameFld, user.fistName);
    await registerPage.verifyFirstNameFld(user.fistName);

    await registerPage.fillField(registerPage.lastNameFld, user.lastName);
    await registerPage.verifyLastNameFld(user.lastName);

    await registerPage.fillField(registerPage.emailFld, user.email);
    await registerPage.verifyEmailFld(user.email);

    await registerPage.clickSubmitBtn();
    await registerPage.verifyNoticeMessage();
    await expect(page).toHaveURL("https://www.redmine.org/login");
  });
});
