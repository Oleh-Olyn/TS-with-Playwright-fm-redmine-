import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly registerBtn: Locator;
  readonly homeLnk: Locator;
  readonly projectsLnk: Locator;
  readonly helpLnk: Locator;
  readonly overviewLnk: Locator;
  readonly downloadLnk: Locator;
  readonly activityLnk: Locator;
  readonly roadmapLnk: Locator;
  readonly issuesLnk: Locator;
  readonly newsLnk: Locator;
  readonly wikiLnk: Locator;
  readonly boardsLnk: Locator;
  readonly repositoryLnk: Locator;
  readonly searchFldsmall: Locator;
  readonly searchFldmain: Locator;
  readonly overviewHeading: Locator;
  readonly downloadHeading: Locator;
  readonly activityHeading: Locator;
  readonly roadmapHeading: Locator;
  readonly questionsHeading: Locator;
  readonly newsHeading: Locator;
  readonly forumsHeading: Locator;
  readonly projectsHeading: Locator;
  readonly helpHeading: Locator;
  readonly highlightedWords: Locator;
  readonly allWordsCheckbox: Locator;
  readonly titlesOnlyCheckbox: Locator;
  readonly articleHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator(".login");
    this.registerBtn = page.locator(".register");
    this.homeLnk = page.locator(".home");
    this.projectsLnk = page.locator("a.projects");
    this.helpLnk = page.locator(".help");
    this.overviewLnk = page.locator(".overview");
    this.downloadLnk = page.locator(".download");
    this.activityLnk = page.locator(".activity");
    this.roadmapLnk = page.locator(".roadmap");
    this.issuesLnk = page.locator(".issues");
    this.newsLnk = page.locator(".news");
    this.wikiLnk = page.locator("#main-menu a.wiki");
    this.boardsLnk = page.locator(".boards");
    this.repositoryLnk = page.locator(".repository");
    this.searchFldsmall = page.locator("#q");
    this.searchFldmain = page.locator("input[type='text']#search-input");
    this.allWordsCheckbox = page.locator("#all_words");
    this.titlesOnlyCheckbox = page.locator("#titles_only");
    this.highlightedWords = page.locator(
      "#search-results dt span.highlight.token-0",
    );

    this.articleHeading = page.getByRole("heading", {
      level: 1,
      name: "Fedora installation prerequisites",
    });

    this.overviewHeading = page.getByRole("heading", {
      level: 2,
      name: "Перегляд",
    });

    this.downloadHeading = page.getByRole("heading", {
      level: 1,
      name: "Download",
    });

    this.activityHeading = page.getByRole("heading", {
      level: 2,
      name: "Активність",
    });

    this.roadmapHeading = page.getByRole("heading", {
      level: 2,
      name: "Оперативний план",
    });

    this.questionsHeading = page.getByRole("heading", {
      level: 2,
      name: "Питання",
    });

    this.newsHeading = page.getByRole("heading", {
      level: 2,
      name: "Новини",
    });

    this.forumsHeading = page.getByRole("heading", {
      level: 2,
      name: "Форуми",
    });

    this.projectsHeading = page.getByRole("heading", {
      level: 2,
      name: "Проекти",
    });

    this.helpHeading = page.getByRole("heading", {
      level: 1,
      name: "Redmine guide",
    });
  }

  async open() {
    await this.page.goto("/");
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async clickRegisterBtn() {
    await this.registerBtn.click();
  }

  async clickHomeLnk() {
    await this.homeLnk.click();
  }

  async clickProjectsLnk() {
    await this.projectsLnk.click();
  }

  async clickHelpLnk() {
    await this.helpLnk.click();
  }

  async clickOverviewLnk() {
    await this.overviewLnk.click();
  }

  async clickDownloadLnk() {
    await this.downloadLnk.click();
  }

  async clickActivityLnk() {
    await this.activityLnk.click();
  }

  async clickRoadmapLnk() {
    await this.roadmapLnk.click();
  }

  async clickQuestionsLnk() {
    await this.issuesLnk.click();
  }

  async clickNewsLnk() {
    await this.newsLnk.click();
  }

  async clickWikiLnk() {
    await this.wikiLnk.click();
  }

  async clickForumsLnk() {
    await this.boardsLnk.click();
  }

  async clickRepositoryLnk() {
    await this.repositoryLnk.click();
  }

  async popualateSearchField(value: string) {
    await this.searchFldsmall.fill(value);
  }

  async setFocus() {
    await this.searchFldmain.focus();
  }
  async verifySearchFieldsmall(value: string) {
    await expect(this.searchFldsmall).toHaveValue(value);
  }

  async verifySearchFieldmain(value: string) {
    await expect(this.searchFldmain).toHaveValue(value);
  }

  async verifySearchedWords(keyword: string) {
    const count = await this.highlightedWords.count();
    expect(count).toBeGreaterThan(0);
    const regex = new RegExp(`^${keyword}$`, "i");
    for (let i = 0; i < count; i++) {
      await expect(this.highlightedWords.nth(i)).toHaveText(regex);
    }
  }

  async uncheckCheckbox() {
    await this.allWordsCheckbox.uncheck();
  }

  async checkCheckbox() {
    await this.titlesOnlyCheckbox.check();
  }

  async verifyCheckbox() {
    await expect(this.allWordsCheckbox).not.toBeChecked();
    await expect(this.titlesOnlyCheckbox).toBeChecked();
  }

  async openWikiArticle(title: string) {
    await this.page.getByRole("link", { name: title }).click();
  }
}
