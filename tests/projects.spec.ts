import { test } from '@playwright/test';
import { ProjectsPage } from '../pages/projects';

test.describe('Projects page login', () => {
    test('Verify projects page login', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.login();
    });

}); 