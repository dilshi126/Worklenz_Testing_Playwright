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

test.describe('Change project details', () => {
    test('Verify changing the project details', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.changeProjectDetails();
    });

}); 

test.describe('Delete project', () => {
    test('Verify delete a project', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.deleteProject();
    });
});

test.describe('Subscribe a project', () => {
    test('Verify subscribe a project', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.subscribeProject();
    });
});

test.describe('Unsubscribe project', () => {
    test('Verify unsubscribe a project', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.unsubscribeProject();
    });
});

test.describe('Invite members', () => {
    test('Verify invite members to the project', async ({ page }) => {
        const project = new ProjectsInside(page);
        await project.addTeamMember();
    });
});


//npx playwright test