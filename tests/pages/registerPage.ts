import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly registerPageHeading: Locator;
  readonly loginFld: Locator;
  readonly passwordFld: Locator;
  readonly confirmPasswordFld: Locator;
  readonly firstNameFld: Locator;
  readonly lastNameFld: Locator;
  readonly emailFld: Locator;
  readonly submitBtn: Locator;
  readonly flashNotice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginFld = page.locator("#user_login");
    this.passwordFld = page.locator("#user_password");
    this.confirmPasswordFld = page.locator("#user_password_confirmation");
    this.firstNameFld = page.locator("#user_firstname");
    this.lastNameFld = page.locator("#user_lastname");
    this.emailFld = page.locator("#user_mail");
    this.submitBtn = page.locator("input[type='submit'][name='commit']");
    this.flashNotice = page.locator("#flash_notice");

    this.registerPageHeading = page.getByRole("heading", {
      level: 2,
      name: "Зареєструватися",
    });
  }

  async fillField(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async verifyLoginFld(value: string) {
    await expect(this.loginFld).toHaveValue(value);
  }

  async verifyPasswordFld(value: string) {
    await expect(this.passwordFld).toHaveAttribute("type", "password");
    await expect(this.passwordFld).toHaveValue(value);
  }

  async verifyConfirmPasswordFld(value: string) {
    await expect(this.confirmPasswordFld).toHaveAttribute("type", "password");
    await expect(this.confirmPasswordFld).toHaveValue(value);
  }

  async verifyFirstNameFld(value: string) {
    await expect(this.firstNameFld).toHaveValue(value);
  }

  async verifyLastNameFld(value: string) {
    await expect(this.lastNameFld).toHaveValue(value);
  }

  async verifyEmailFld(value: string) {
    await expect(this.emailFld).toHaveValue(value);
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }

  async verifyNoticeMessage() {
    await expect(this.flashNotice).toHaveText(
      "Обліковий запис успішно створений. Для активації Вашого облікового запису зайдіть по посиланню, яке відіслане вам електронною поштою.",
    );
  }
}
