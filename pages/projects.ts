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
    await this.page.click("a[href='/worklenz/projects']");
  }

    async verifyUIElements() {
        await this.page.locator("h1:has-text('Projects')").isVisible();
        await this.page.locator("button:has-text('Create Project')").isVisible();
        await this.page.locator("button:has-text('Import from Template')").isVisible();
        await this.page.locator("button:has-text('Import from Template')").click();
        await this.page.locator("h2:has-text('Select from Template')").isVisible();
    }


}