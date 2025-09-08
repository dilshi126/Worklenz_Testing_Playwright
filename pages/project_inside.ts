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
  }

  async openProject() {
    await this.login();
    await this.page.goto('https://react.worklenz.com/projects');
    await this.page.click(`tbody tr:nth-child(3) td:nth-child(2) div:nth-child(1) span:nth-child(2) span:nth-child(1)`);
    // await this.page.waitForLoadState('networkidle');
  }

  
}