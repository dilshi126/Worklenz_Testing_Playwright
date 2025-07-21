import { Page } from '@playwright/test';
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
}



    async openCreateProjectDrawer() {
        await this.login();
        await this.page.click(`xpath=${home.createProjectButton}`);
        await expect(this.page.locator(`xpath=${home.createProjectDrawer}`)).toBeVisible();
    }

//     // async createNewProject() {
//     //     await this.openCreateProjectDrawer();
//     //     const color = faker.internet.color().replace('#', '');
//     //     //await this.page.click(`css=${project.colourDropdown}`);
//     //     await this.page.locator(`css=${project.colorPicker}`).fill(color);
//     //     //await this.page.click(`css=${project.colourDropdown}`);
//     //     const name = faker.company.name();
//     //     await this.page.locator(`xpath=${project.nameField}`).fill(name);
//     //     await this.page.click(`xpath=${project.createProjectButton}`);
//     //     await this.page.waitForTimeout(3000);
//     //     await this.page.click(`css=${created.backButton}`);
//     //     await expect(this.page.locator(`css=${created.tableHeaderName}`)).toBeVisible();
//     //     const rows = this.page.locator('table tbody tr');
//     //     const rowTexts = await rows.allTextContents();
//     //     const found = rowTexts.some(text => text.includes(name));
//     //     expect(found).toBeTruthy();
//     // }

//     async verifyRequiredFields() {
//         await this.openCreateProjectDrawer();
//         await this.page.click(`xpath=${project.createProjectButton}`);
//         await expect(this.page.locator(`css=${project.nameEmptyError}`)).toBeVisible();
//     }

//     async openSelectFromTemplateDrawer() {
//         await this.login();
//         await this.page.click(`xpath=${home.createProjectButton}`);
//         await this.page.click(`css=${project.downArrowButton}`);
//         await this.page.click(`css=${project.createFromTemplateButton}`);
//         await expect(this.page.locator(`css=${project.drawerTitle}`)).toBeVisible();
//     }

//     async createProjectByImportingTemplate() {
//         await this.openSelectFromTemplateDrawer();
//         await this.page.click(`css=${temp.templateList} >> nth=0`);
//         await expect(this.page.locator(`css=${temp.createButton}`)).toBeVisible();
//         await expect(this.page.locator(`css=${temp.taskList}`)).toBeVisible();
//     }

//     async verifyAddTaskInputVisible() {
//         await this.login();
//         await expect(this.page.locator(`css=${taskTable.addTaskInput}`)).toBeVisible();
//     }
// }
