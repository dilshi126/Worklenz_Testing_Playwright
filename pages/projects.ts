import { expect, Page } from '@playwright/test';

export class ProjectsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login() {
    await this.page.goto('https://react.worklenz.com/auth/login');
    await this.page.fill('#login_email', 'olivia.rose@wlz.com');
    await this.page.fill('#login_password', '200126@Dpw');
    await this.page.click("button[type='submit']");
    await this.page.waitForLoadState('networkidle');
    await this.page.goto("https://react.worklenz.com/worklenz/projects");
  }

  async verifyUIElements() {
    await this.login();
    await this.page.locator("div[title='All']").isVisible();
    await this.page.locator("div[title='Favorites']").isVisible();
    await this.page.locator("div[title='Archived']").isVisible();
    await this.page.locator("button[aria-describedby=':rfh:'] span[aria-label='star'] svg path").isVisible();
    await this.page.locator("button[aria-label='Refresh projects']").isVisible();
    await this.page.locator("label[class='ant-segmented-item ant-segmented-item-selected'] span:nth-child(2)").isVisible();
    await this.page.locator("label[class='ant-segmented-item'] span:nth-child(2)").isVisible();
    await this.page.locator("input[placeholder='Search by name']").isVisible();
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-compact-item ant-btn-compact-first-item']").isVisible();
    await this.page.locator("tbody tr:nth-child(1) td:nth-child(9) div:nth-child(1) div:nth-child(1) button:nth-child(1)").isVisible();
    await this.page.locator(".ant-dropdown-menu-item.ant-dropdown-menu-item-only-child").isVisible();
    await this.page.locator("tbody tr:nth-child(1) td:nth-child(9) div:nth-child(1) div:nth-child(2) button:nth-child(1)").isVisible();

  }

  async verifySearchProjects() {
    await this.login();
    await this.page.fill("input[placeholder='Search by name']", 'Accounts');
    await this.page.waitForTimeout(2000); // Wait for search results to load
    const searchResults = await this.page.locator("tbody tr");
    const count = await searchResults.count();
    expect(count).toBeGreaterThan(0); // Ensure at least one result is found

  }

  async verifySearchInFavourites() {
    await this.login();
    await this.page.locator("div[title='Favorites']").click();
    await this.page.fill("input[placeholder='Search by name']", 'Management');
    await this.page.waitForTimeout(2000); // Wait for search results to load
    const searchResults = await this.page.locator("tbody tr");
    const count = await searchResults.count();
    expect(count).toBeGreaterThan(0); // Ensure at least one result is found

  }

  async verifySearchArchived() {
    await this.login();
    await this.page.locator("div[title='Archived']").click();
    await this.page.fill("input[placeholder='Search by name']", 'Accounts');
    await this.page.waitForTimeout(2000); // Wait for search results to load
    const searchResults = await this.page.locator("tbody tr");
    const count = await searchResults.count();
    expect(count).toBeGreaterThan(0); // Ensure at least one result is found

  }

  async verifyInvalidSearch() {
    await this.login();
    await this.page.fill("input[placeholder='Search by name']", 'NonExistentProject');
    await this.page.waitForTimeout(2000); // Wait for search results to load
    const searchResults = await this.page.locator("tbody tr");
    const count = await searchResults.count();
    expect(count).toBe(0); // Ensure no results are found

  }

  async verifyMarkProjectAsFavourite() {
    await this.login();
    await this.page.locator("tbody tr:nth-child(2) td:nth-child(1) button:nth-child(1) span:nth-child(1) span:nth-child(1) svg path").click();
    await this.page.waitForTimeout(2000); // Wait for the action to complete
    const isFavourite = await this.page.locator("tbody tr:nth-child(2) td:nth-child(1) button:nth-child(1) span:nth-child(1) span:nth-child(1) svg path").isVisible();
    expect(isFavourite).toBeTruthy(); // Ensure the project is marked as favourite
  }

  async verifyUnmarkProjectAsFavourite() {
    await this.login();
    await this.page.locator("tbody tr:nth-child(2) td:nth-child(1) button:nth-child(1) span:nth-child(1) span:nth-child(1) svg path").click();
    await this.page.waitForTimeout(2000); // Wait for the action to complete
    const isNotFavourite = await this.page.locator("tbody tr:nth-child(2) td:nth-child(1) button:nth-child(1) span:nth-child(1) span:nth-child(1) svg path").isVisible();
    expect(isNotFavourite).toBeFalsy(); // Ensure the project is unmarked as favourite
  }

  async verifyEditProjectDetails() {
    await this.login();
    await this.page.click("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(9) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1)");
    await this.page.locator("#name").isVisible();
    await this.page.fill("#name", "Updated Project Name");
    await this.page.click("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span");
  }

  async verifyArchiveProject() {
    await this.login();
    await this.page.click("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(9) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1) > span:nth-child(1)");
  }
}
//npx playwright test