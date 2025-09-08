import { test } from '@playwright/test';
import { ProjectsInside } from '../pages/project_inside';

// test.describe('Project inside', () => {
//     test('Verify open a project', async ({ page }) => {
//         const project = new ProjectsInside(page);
//         await project. openProject();
//     });

// }); 

test.describe('Create project template', () => {
    test('Verify create project template', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project. saveAsProjectTemplate();
    });

}); 

test.describe('Create project template', () => {
    test('Verify create project template', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.changeProjectDetails();
    });

}); 


//npx playwright test