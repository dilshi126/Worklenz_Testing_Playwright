import { expect, Page } from '@playwright/test';
import { HomePageLocators } from '../test_locators/locators';

export class HomePage {
  readonly page: Page;
  readonly locators: HomePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new HomePageLocators(page);
  }

  async login() {
    await this.page.goto('https://react.worklenz.com/auth/login');
    await this.page.fill('#login_email', 'olivia.rose@wlz.com');
    await this.page.fill('#login_password', '200126@Dpw');
    await this.page.click("button[type='submit']");
    await this.page.waitForLoadState('networkidle');
  }

  async interactWithHomePage() {
    await this.login();
    await this.page.locator('li[class="ant-menu-overflow-item ant-menu-item ant-menu-item-selected ant-menu-item-only-child"] a').isVisible();
    await this.page.locator("a[href='/worklenz/projects']").isVisible();
    await this.page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2) > span:nth-child(2)').isVisible();
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-icon-only ant-tooltip-open'] span[class='ant-btn-icon']").isVisible();
    await this.page.locator("//span[normalize-space()='Upgrade Plan']").isVisible();
    await this.page.locator("//button[@class='ant-btn css-1o7vu8l ant-btn-dashed ant-btn-color-default ant-btn-variant-dashed ant-tooltip-open']").isVisible();
    await this.page.locator("//div[@class='ant-tooltip-open ant-dropdown-trigger ant-flex css-1o7vu8l ant-flex-align-center ant-flex-justify-center']").isVisible();
    await this.page.locator("//button[@class='ant-btn css-1o7vu8l ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-icon-only profile-button ant-tooltip-open ant-dropdown-trigger']//span[@class='ant-btn-icon']").isVisible();
    await this.page.locator("//button[@class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-compact-item ant-btn-compact-first-item']").isVisible();
    await this.page.locator("//span[@title='tasks.assignedToMe']").isVisible();
    await this.page.locator("//button[@class='ant-btn css-1o7vu8l ant-btn-circle ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-icon-only ant-tooltip-open']").isVisible();
    await this.page.locator("//div[@title='List']").isVisible();
    await this.page.locator("//div[@title='Calendar']").isVisible();
    await this.page.locator("//div[@id='rc-tabs-0-tab-All']").isVisible();
    await this.page.locator("//div[@id='rc-tabs-0-tab-Today']").isVisible();
    await this.page.locator("//div[@id='rc-tabs-0-tab-Upcoming']").isVisible();
    await this.page.locator("//div[@id='rc-tabs-0-tab-Overdue']").isVisible();
    await this.page.locator("//div[@id='rc-tabs-0-tab-NoDueDate']").isVisible();
    await this.page.locator("//input[@placeholder='+ Add task']").isVisible();
    await this.page.locator("//span[normalize-space()='Name']").isVisible();
    await this.page.locator("//th[normalize-space()='Project']").isVisible();
    await this.page.locator("//th[normalize-space()='Status']").isVisible();
    await this.page.locator("//th[normalize-space()='Due Date']").isVisible();
    await this.page.locator("//input[@placeholder='+ Add Task']").isVisible();
    await this.page.locator("//h5[normalize-space()='Projects (0)']").isVisible();
    await this.page.locator("//button[@class='ant-btn css-1o7vu8l ant-btn-circle ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-icon-only ant-tooltip-open']").isVisible();
    await this.page.locator("//div[@title='Recent']").isVisible();
    await this.page.locator("//div[@title='Favourites']").isVisible();
}

   async openCreateProjectDrawer() {
    await this.login();
    await this.page.waitForSelector("div.ant-col", { timeout: 10000 });
    await this.page.click("//button[@class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-compact-item ant-btn-compact-first-item']");
    await expect(this.page.locator("//input[@id='name']")).toBeVisible();

  }

  async uiElementsProjectDrawer(): Promise<void> {
    await this.openCreateProjectDrawer();
    await this.page.locator(".ant-color-picker-color-block-inner").isVisible();
    await this.page.locator("div[class='ant-select ant-select-outlined ant-select-in-form-item css-1o7vu8l ant-select-single ant-select-show-arrow ant-select-open'] span[class='ant-typography css-1o7vu8l']").isVisible();
    await this.page.locator("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)").isVisible();
    await this.page.locator("#category_id").isVisible();
    await this.page.locator("#notes").isVisible();
    await this.page.locator("#client_name").isVisible();
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-circle ant-btn-dashed ant-btn-color-default ant-btn-variant-dashed ant-btn-icon-only']").isVisible();
    await this.page.locator("#start_date").isVisible();
    await this.page.locator("#end_date").isVisible();
    await this.page.locator("#working_days").isVisible();
    await this.page.locator("#man_days").isVisible();
    await this.page.locator("#hours_per_day").isVisible();
    await this.page.locator("button[id='use_manual_progress'] span[class='ant-switch-inner']").isVisible();
    await this.page.locator("button[id='use_weighted_progress'] span[class='ant-switch-inner']").isVisible();
    await this.page.locator("button[id='use_time_progress'] span[class='ant-switch-inner']").isVisible();
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").isVisible();
  }

  async createNewProject() {
    await this.openCreateProjectDrawer();
    await this.page.locator("//input[@id='name']").fill("New Project")
    await this.page.locator(".ant-color-picker-color-block-inner").click();
    await expect(this.page.locator("input[class='ant-input ant-input-sm css-1o7vu8l']")).toHaveValue("972b7c");
    await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click();
    // await this.page.click(`css=${project.colourDropdown}`);
    // const name = faker.company.name();
    // await this.page.locator(`xpath=${project.nameField}`).fill(name);
    // await this.page.click(`xpath=${project.createProjectButton}`);
    // await this.page.waitForTimeout(3000);
    // await this.page.click(`css=${created.backButton}`);
    // await expect(this.page.locator(`css=${created.tableHeaderName}`)).toBeVisible();
    // const rows = this.page.locator('table tbody tr');
    // const rowTexts = await rows.allTextContents();
    // const found = rowTexts.some(text => text.includes(name));
    // expect(found).toBeTruthy();
    }

  // async verifyRequiredFields() {
  //   await this.openCreateProjectDrawer();
  //   await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click();
  //   await expect(this.page.locator(`css=${this.locators.nameEmptyError}`)).toBeVisible();
  // }

   async openSelectFromTemplateDrawer() {
        await this.login();
        await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-compact-item ant-btn-compact-first-item']").isVisible();
        await this.page.locator("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-icon-only ant-btn-compact-item ant-btn-compact-last-item ant-dropdown-trigger']").click({ timeout: 10000 });
        await this.page.locator('.w-full.m-0.p-0').click({ timeout: 10000 });
        await expect(this.page.locator("#rc-tabs-1-tab-1")).toBeVisible();
    }

    async createProjectByImportingTemplate() {
        await this.openSelectFromTemplateDrawer();
        await this.page.click("li[class='ant-menu-item ant-menu-item-active ant-menu-item-only-child'] span[class='ant-menu-title-content']");
        await this.page.click("button[class='ant-btn css-1o7vu8l ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span");
        await expect(this.page.locator("//h4[normalize-space()='Design & Creative']")).toBeVisible();
    }
}



   

    

//     async verifyAddTaskInputVisible() {
//         await this.login();
//         await expect(this.page.locator(`css=${taskTable.addTaskInput}`)).toBeVisible();
//     }
// }
