import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameFld: Locator;
  readonly passwordFld: Locator;
  readonly loginBtn: Locator;
  readonly flashError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameFld = page.locator("#username");
    this.passwordFld = page.locator("#password");
    this.loginBtn = page.locator("#login-submit");
    this.flashError = page.locator("#flash_error");
  }

  async fillField(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async verifyUsernameFld(value: string) {
    await expect(this.usernameFld).toHaveValue(value);
  }

  async verifyPasswordFld(value: string) {
    await expect(this.passwordFld).toHaveAttribute("type", "password");
    await expect(this.passwordFld).toHaveValue(value);
  }

  async clickSubmitBtn() {
    await this.loginBtn.click();
  }

  async verifyErrorMessage() {
    await expect(this.flashError).toHaveText(
      "Неправильне ім'я користувача або пароль.",
    );
  }
}
