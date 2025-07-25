import { Locator, Page } from '@playwright/test';

export class HomePageLocators {
    readonly homeNav: Locator;
    readonly projectsNav: Locator;
    readonly inviteButton: Locator;
    readonly notificationIcon: Locator;
    readonly helpButton: Locator;
    readonly profile: Locator;
    readonly createProjectButton: Locator;

    constructor(page: Page) {
        this.homeNav = page.locator('li[class="ant-menu-overflow-item ant-menu-item ant-menu-item-selected ant-menu-item-only-child"] a');
        this.projectsNav = page.locator("a[href='/worklenz/projects']");
        this.inviteButton = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2) > span:nth-child(2)'); // CSS selector
        this.notificationIcon = page.locator("//button[.//span[@aria-label='bell']]");
        this.helpButton = page.locator("//button[.//span[@aria-label='question-circle']]");
        this.profile = page.locator("//span[@aria-label='user']//*[name()='svg']");
        this.createProjectButton = page.locator("//button[span[normalize-space()='Create Project']]");
    }
}







// export const LoginPageLocators = {
//     loginEmail: '#login_email',
//     loginPassword: '#login_password',
//     signupName: '#signup_name',
//     forgotPasswordEmail: '#forgot-password_email',
//     rememberMe: '#login_remember',

//     loginButton: "button[type='submit']",
//     createProjectButton: "//button[span[normalize-space()='Create Project']]",
//     signupLink: "//a[text()='Sign up']",
//     emailErrorNotification: "//div[text()='Please enter a valid email address']",
//     emptyErrorNotification: "//div[@class='ant-notification-notice-description' and text()='Please check your email and password and try again']",
//     eyeIcon: "//span[contains(@class, 'ant-input-password-icon') and @aria-label='eye']",
//     forgotPasswordLink: "//a[text()='Forgot password?']",
//     resetPasswordButton: "//button[span[text()='Reset Password']]",
//     returnToLoginButton: "//button[span[text()='Return to Login']]",
//     accountDoesNotExistError: "//div[contains(@class, 'ant-notification-notice-description') and text()='Account does exists!']",
//     emailEmptyNotification: "//div[@class='ant-form-item-explain-error' and text()='Please enter your Email!']",
//     signInWithGoogle: "//button[span[text()='Sign in with Google']]",
// };

// export const HomePageLocators = {
//     navBar: "//ul[@role='menu']",
//     inviteButton: "//button[span[text()='Invite']]",
//     notificationIcon: "//button[.//span[@aria-label='bell']]",
//     helpButton: "//button[.//span[@aria-label='question-circle']]",
//     profileIcon: "//span[@aria-label='user']//*[name()='svg']",
//     createProjectButton: "//button[span[normalize-space()='Create Project']]",
//     expandButton: "button[class*='ant-btn-icon-only']",
//     importTemplate: "//li[contains(., 'Import from template')]",
//     greetingText: "//h3[contains(text(),'Hi')]",
//     dateText: "h4[class*='ant-typography']",
//     taskTable: "//div[@data-node-key='All' and contains(@class, 'ant-tabs-tab-active')]",
//     listTab: "//div[@title='List' and text()='List' and @aria-selected='true']",
//     calendarTab: "//div[@title='Calendar' and text()='Calendar' and @aria-selected='false']",
//     monthTab: "//span[text()='Month']",
//     currentYear: "//span[@title='2025' and text()='2025']",
//     currentMonth: "//div[contains(@class, 'ant-picker-calendar-month-select')]//span[@title='Apr']",
//     yearTab: "//span[text()='Year']",
//     assignedToMe: "//span[@title='Assigned to me' and text()='Assigned to me']",
//     refreshButton: "//button[@type='button']//span[contains(@class, 'anticon-sync')]",
//     toDoList: "//form[contains(@class,'ant-form-horizontal')]",
//     addTaskInput: "//input[@placeholder='+ Add Task']",
//     todoRefresh: "//div[contains(@class,'ant-card-head-extra')]//span[@aria-label='sync']",
//     projectTable: "//h5[text()='Projects']",
//     favouriteIcon: "//svg[@data-icon='star']",
//     favouriteSelected: "//span[@aria-label='star' and contains(@class, 'anticon-star')]",
//     recentTab: "//div[text()='Recent']",
//     favouriteTab: "//div[text()='Favourites']",
//     projectRefresh: "//svg[@data-icon='sync']",
//     switchTeam: "//div[contains(@class, 'ant-dropdown-trigger') and contains(@class, 'ant-flex')]",
//     taskName: "//span[contains(@class, 'ant-tooltip-open')]",
//     taskExpand: "//button[contains(@class, 'ant-btn')]//span[contains(@class, 'anticon-expand-alt')]",
//     taskProject: "//div[contains(@class, 'ant-tooltip-open')]//span[contains(@class, 'ant-badge-status-dot')]",
//     markAsDone: "//svg[@data-icon='check-circle']",
//     taskInTodoList: "//span[contains(@class, 'ant-tooltip-open')]",
//     createProjectDrawer: "//div[contains(@class, 'ant-drawer-title')]/span[contains(@class, 'ant-typography')]",
//     projectNameInput: "div[id=':r89:']",
// };

// export const ProjectDrawerLocators = {
//     healthId: '#health_id',
//     clientName: '#client_name',
//     startDate: '#start_date',
//     statusDropdown: '.ant-select-item-option-active',
//     nameField: "//input[@id='name']",
//     createProjectButton: "//span[normalize-space()='Create']",
//     healthDropdown: "div[class*='ant-select-dropdown'] span[class*='ant-typography']",
//     newCategory: "div[class*='ant-select-dropdown-empty'] span:nth-child(2)",
//     createCategoryButton: "button[class*='ant-btn-primary'] span",
//     categoryDropdown: ".ant-select.ant-select-outlined.ant-select-single",
//     projectPageLink: "a[href='/worklenz/projects']",
//     tableNameHeader: "th[aria-label='Name'] span[class='ant-table-column-title']",
//     nameEmptyError: ".ant-form-item-explain-error",
//     downArrowButton: "span[class='anticon anticon-down']",
//     createFromTemplateButton: ".w-full.m-0.p-0",
//     drawerTitle: ".ant-drawer-title",
//     colorPicker: "input[value='164c9b']",
//     colorDropdown: "#color_code",
//     projectCategoryLabel: "label[title='Category']",
//     addCategoryButton: "div[class*='ant-select-dropdown'] button[type='button']",
//     addCategoryContainer: "body > div:nth-child(8)",
//     projectNoteLabel: "//label[normalize-space()='Notes']",
// };

// export const CreatedProjectLocators = {
//     taskList: "div[id='rc-tabs-0-tab-tasks-list'] div[class*='ant-flex']",
//     createTaskButton: "button[class*='ant-btn-primary']",
//     backButton: "svg[data-icon='arrow-left']",
//     tableHeaderName: "th[aria-label='Name']",
//     tableColumn: ".ant-table-cell.ant-table-column-sort.ant-table-cell-row-hover",
// };

// export const ImportFromTemplateLocators = {
//     worklenzLibraryTab: "#rc-tabs-0-tab-1",
//     templateList: ".template-menu",
//     createButton: "button[class*='ant-btn-primary']",
//     taskList: "div[id='rc-tabs-1-tab-tasks-list'] div[class*='ant-flex']",
// };

// export const TaskTableLocators = {
//     addTaskInput: "input[placeholder='+ Add task']",
// };
