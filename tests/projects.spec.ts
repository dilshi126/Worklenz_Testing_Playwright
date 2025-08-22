import { test } from '@playwright/test';
import { ProjectsPage } from '../pages/projects';

// test.describe('Projects page login', () => {
//     test('Verify projects page login', async ({ page }) => {
//         const project = new ProjectsPage(page);
//         await project.login();
//     });

// }); 

// test.describe('Projects page UI elements', () => {
//     test('Verify projects page UI elements', async ({ page }) => {
//         const project = new ProjectsPage(page);
//         await project.verifyUIElements();
//     });

// });

// test.describe('Projects search function', () => {
//     test('Verify projects search function', async ({ page }) => {
//         const project = new ProjectsPage(page);
//         await project.verifySearchProjects();
//     });

// });

test.describe('Search in favourites', () => {
    test('Verify search in favourites', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifySearchInFavourites();
    });

});

test.describe('Search in Archive', () => {
    test('Verify search in archive', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifySearchArchived();
    });

});

test.describe('Invalid search', () => {
    test('Verify invalid search', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifyInvalidSearch();
    });

});

test.describe('Mark project as favourite', () => {
    test('Verify mark project as favourite', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifyMarkProjectAsFavourite();
    });

});

test.describe('Unmark project as favourite', () => {
    test('Verify unmark project as favourite', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifyUnmarkProjectAsFavourite();
    });

});

test.describe('Edit Project details', () => {
    test('Verify edit project details', async ({ page }) => {
        const project = new ProjectsPage(page);
        await project.verifyEditProjectDetails();
    });

});
//npx playwright test
