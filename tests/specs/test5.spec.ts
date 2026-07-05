import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";

let mainPage: MainPage;

test.describe("Checking search functionality", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.open();
  });

  test("test5", async ({ page }) => {
    await mainPage.popualateSearchField("Installation");
    await mainPage.verifySearchFieldsmall("Installation");

    await page.keyboard.press("Enter");
    await mainPage.verifySearchFieldsmall("Installation");
    await mainPage.verifySearchedWords("Installation");

    await mainPage.uncheckCheckbox();
    await mainPage.checkCheckbox();
    await mainPage.setFocus();
    await page.keyboard.press("Enter");
    await mainPage.verifySearchFieldmain("Installation");
    await mainPage.verifyCheckbox();
    await mainPage.verifySearchedWords("Installation");

    await mainPage.openWikiArticle("Fedora_installation_prerequisites");
    await expect(mainPage.articleHeading).toBeVisible();

    await mainPage.clickHomeLnk();
    await expect(page).toHaveURL("https://www.redmine.org");

    await mainPage.verifySearchFieldsmall("");
  });
});
