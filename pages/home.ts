// pages/HomePage.ts
// import { faker } from '@faker-js/faker';

import { Page, expect } from '@playwright/test';
import {
    HomePageLocators as home,
    ProjectDrawerLocators as project,
    CreatedProjectLocators as created,
    ImportFromTemplateLocators as temp,
    TaskTableLocators as taskTable
} from '../test_locators/locators';

export class HomePage {
    constructor(private page: Page) { }

    async login() {
        await this.page.goto('https://react.worklenz.com/auth/login');
        await this.page.fill('#login_email', 'olivia.rose@wlz.com');
        await this.page.fill('#login_password', '200126@Dpw');
        await this.page.click("button[type='submit']");
        await this.page.waitForLoadState('networkidle');
    }

    async verifyHomeUI() {
        await this.login();
        await expect(this.page.locator(`xpath=${home.navBar}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.inviteButton}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.helpButton}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.profileIcon}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.createProjectButton}`)).toBeVisible();
        await this.page.click(`xpath=${home.expandButton}`);
        await expect(this.page.locator(`xpath=${home.importTemplate}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.greetingText}`)).toBeVisible();
        await expect(this.page.locator(`css=${home.dateText}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.taskTable}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.listTab}`)).toBeVisible();
        await this.page.click(`xpath=${home.calendarTab}`);
        await this.page.click(`xpath=${home.monthTab}`);
        await expect(this.page.locator(`xpath=${home.currentYear}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.currentMonth}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.yearTab}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.assignedToMe}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.refreshButton}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.toDoList}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.addTaskInput}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.todoRefresh}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.projectTable}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.favouriteIcon}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.recentTab}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.favouriteTab}`)).toBeVisible();
        await expect(this.page.locator(`xpath=${home.projectRefresh}`)).toBeVisible();
    }

    async verifyTooltips() {
        await this.login();
        const tooltipTarget = this.page.locator(`xpath=${home.notificationIcon}`);
        await tooltipTarget.hover();
        const tooltip = this.page.locator('.ant-tooltip-inner');
        await expect(tooltip).toBeVisible();
        const text = await tooltip.textContent();
        console.log('Tooltip text:', text);
    }

    async openCreateProjectDrawer() {
        await this.login();
        await this.page.click(`xpath=${home.createProjectButton}`);
        await expect(this.page.locator(`xpath=${home.createProjectDrawer}`)).toBeVisible();
    }

    // async createNewProject() {
    //     await this.openCreateProjectDrawer();
    //     const color = faker.internet.color().replace('#', '');
    //     //await this.page.click(`css=${project.colourDropdown}`);
    //     await this.page.locator(`css=${project.colorPicker}`).fill(color);
    //     //await this.page.click(`css=${project.colourDropdown}`);
    //     const name = faker.company.name();
    //     await this.page.locator(`xpath=${project.nameField}`).fill(name);
    //     await this.page.click(`xpath=${project.createProjectButton}`);
    //     await this.page.waitForTimeout(3000);
    //     await this.page.click(`css=${created.backButton}`);
    //     await expect(this.page.locator(`css=${created.tableHeaderName}`)).toBeVisible();
    //     const rows = this.page.locator('table tbody tr');
    //     const rowTexts = await rows.allTextContents();
    //     const found = rowTexts.some(text => text.includes(name));
    //     expect(found).toBeTruthy();
    // }

    async verifyRequiredFields() {
        await this.openCreateProjectDrawer();
        await this.page.click(`xpath=${project.createProjectButton}`);
        await expect(this.page.locator(`css=${project.nameEmptyError}`)).toBeVisible();
    }

    async openSelectFromTemplateDrawer() {
        await this.login();
        await this.page.click(`xpath=${home.createProjectButton}`);
        await this.page.click(`css=${project.downArrowButton}`);
        await this.page.click(`css=${project.createFromTemplateButton}`);
        await expect(this.page.locator(`css=${project.drawerTitle}`)).toBeVisible();
    }

    async createProjectByImportingTemplate() {
        await this.openSelectFromTemplateDrawer();
        await this.page.click(`css=${temp.templateList} >> nth=0`);
        await expect(this.page.locator(`css=${temp.createButton}`)).toBeVisible();
        await expect(this.page.locator(`css=${temp.taskList}`)).toBeVisible();
    }

    async verifyAddTaskInputVisible() {
        await this.login();
        await expect(this.page.locator(`css=${taskTable.addTaskInput}`)).toBeVisible();
    }
}
