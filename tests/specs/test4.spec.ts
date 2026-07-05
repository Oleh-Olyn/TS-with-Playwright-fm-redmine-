import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainPage";

let mainPage: MainPage;

test.describe("Checking navigation menu links", () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.open();
  });

  test("test4", async ({ page }) => {
    await mainPage.clickOverviewLnk();
    await expect(page).toHaveURL("https://www.redmine.org/projects/redmine");
    await expect(mainPage.overviewHeading).toBeVisible();

    await mainPage.clickDownloadLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/wiki/Download",
    );
    await expect(mainPage.downloadHeading).toBeVisible();

    await mainPage.clickActivityLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/activity",
    );
    await expect(mainPage.activityHeading).toBeVisible();

    await mainPage.clickRoadmapLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/roadmap",
    );
    await expect(mainPage.roadmapHeading).toBeVisible();

    await mainPage.clickQuestionsLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/issues",
    );
    await expect(mainPage.questionsHeading).toBeVisible();

    await mainPage.clickNewsLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/news",
    );
    await expect(mainPage.newsHeading).toBeVisible();

    await mainPage.clickWikiLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/wiki",
    );

    await mainPage.clickForumsLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/boards",
    );
    await expect(mainPage.forumsHeading).toBeVisible();

    await mainPage.clickRepositoryLnk();
    await expect(page).toHaveURL(
      "https://www.redmine.org/projects/redmine/repository",
    );

    await mainPage.clickHomeLnk();
    await expect(page).toHaveURL("https://www.redmine.org");

    await mainPage.clickProjectsLnk();
    await expect(page).toHaveURL("https://www.redmine.org/projects");
    await expect(mainPage.projectsHeading).toBeVisible();

    await mainPage.clickHelpLnk();
    await expect(page).toHaveURL("https://www.redmine.org/guide");
    await expect(mainPage.helpHeading).toBeVisible();
  });
});
