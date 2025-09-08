import { test } from '@playwright/test';
import { ProjectsInside } from '../pages/project_inside';

test.describe('Project inside', () => {
    test('Verify open a project', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project. openProject();
    });

}); 