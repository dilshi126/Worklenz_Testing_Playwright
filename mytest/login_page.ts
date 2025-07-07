import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('login test', async () => {
    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://react.worklenz.com/auth/login");

    const emailID: Locator = await page.locator('#login_email');
    const password: Locator = await page.locator('#login_password');
    const loginButton: Locator = await page.locator("[type=submit")



})