import { expect, Page } from '@playwright/test';

export class ProjectsInside {
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
}