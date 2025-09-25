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
    await this.page.click(`td[class='ant-table-cell ant-table-column-sort ant-table-cell-row-hover'] div[class='flex items-center']`);
    await this.page.waitForLoadState('networkidle');
    await this.page.locator("h4[class='ant-typography css-1o7vu8l']").isVisible();
    await this.page.locator(".ant-tag.ant-tag-has-color.ant-tooltip-open.css-1o7vu8l").isVisible();
    await this.page.locator(".ant-btn.css-1o7vu8l.ant-btn-circle.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.ant-btn-icon-only.ant-tooltip-open").isVisible();
    await this.page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)").isVisible();
    await this.page.locator(".ant-btn.css-1o7vu8l.ant-btn-circle.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.ant-btn-icon-only.ant-tooltip-open").isVisible();
    await this.page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4) > span:nth-child(2)").isVisible();
    await this.page.locator(".ant-btn.css-1o7vu8l.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid.ant-tooltip-open").isVisible();
    await this.page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > button:nth-child(1) > span:nth-child(2)").isVisible();
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-compact-item ant-btn-compact-first-item']").isVisible();
    await this.page.locator("div[title='Import task from template']").isVisible();
    
    
  }

  async saveAsProjectTemplate() { 
    await this.login();
    await this.page.goto('https://react.worklenz.com/projects');
    await this.page.click(".ant-btn.css-1o7vu8l.ant-btn-circle.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.ant-btn-icon-only.ant-tooltip-open");
    await this.page.fill("#name", 'Bug Tracking Template');
    await this.page.click("button[type='submit'] span");
    await this.page.waitForTimeout(2000); // Wait for the action to complete
    const successMessage = await this.page.locator(".ant-notification-notice.ant-notification-notice-success.ant-notification-notice-closable").innerText();
    expect(successMessage).toContain('Project template created successfully');
  } 
  async changeProjectDetails() {
    await this.login();
    await this.page.goto('https://react.worklenz.com/projects');
    await this.page.click(`td[class='ant-table-cell ant-table-column-sort ant-table-cell-row-hover'] div[class='flex items-center']`);
    await this.page.click("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3) > span:nth-child(1)");
    await this.page.fill("body > div:nth-child(18) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)", 'Bug Tracking Updated');
    await this.page.fill("#notes", 'This is an updated description for Bug Tracking project.');
    await this.page.click("body > div:nth-child(18) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)");
    await this.page.waitForTimeout(2000); // Wait for the action to complete

  }

  async deleteProject() {
    await this.openProject();
    await this.page.click('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)');
    await this.page.click("button[class='ant-btn css-1o7vu8l ant-btn-dashed ant-btn-dangerous ant-btn-color-dangerous ant-btn-variant-dashed'] span");
    await this.page.waitForTimeout(2000); // Wait for the action to complete
    await this.page.click("body > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)");

  }

  async subscribeProject() {
    await this.openProject();
    await this.page.click(".ant-btn.css-1o7vu8l.ant-btn-round.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined");
    await this.page.waitForTimeout(2000);
  }
  
  async unsubscribeProject() {
    await this.openProject();
    await this.page.click("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4) > span:nth-child(2)");
    await this.page.waitForTimeout(2000);
  }

  async addTeamMember() {
    await this.openProject();
    await this.page.click("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(5) > span:nth-child(2)");
    await this.page.fill("#memberName", 'abcd@test.com');
    await this.page.click("body > div:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)");

  }

  
}