// tests/home.spec.ts

import { test } from '@playwright/test';
import { HomePage } from '../pages/home';

test.describe('Home Page UI Tests', () => {
    test('Verify home UI elements', async ({ page }) => {
        const home = new HomePage(page);
        await home.interactWithHomePage();
    });

}); 


test.describe(' Project Drawer Tests', () => {
    test('Open create project drawer', async ({ page }) => {
        const home = new HomePage(page);
        await home.openCreateProjectDrawer();
    });
});

test.describe('Project drawer UI Tests',() => {
    test('Project drawer UI elements', async ({ page }) => {
        const home = new HomePage(page);
        await home.uiElementsProjectDrawer();
    });
});


//     // test('Create a new project', async ({ page }) => {
//     //     const home = new HomePage(page);
//     //     await home.createNewProject();
//     // });

//     test('Verify required field validation', async ({ page }) => {
//         const home = new HomePage(page);
//         await home.verifyRequiredFields();
//     });
// });

test.describe(' Import from Template Tests', () => {
    test('Open select-from-template drawer', async ({ page }) => {
        const home = new HomePage(page);
        await home.openSelectFromTemplateDrawer();
    });
})

    test('Create project by importing template', async ({ page }) => {
        const home = new HomePage(page);
        await home.createProjectByImportingTemplate();
    });

// test.describe(' Task Table Tests', () => {
//     test('Verify visibility of "Add a Task" input', async ({ page }) => {
//         const home = new HomePage(page);
//         await home.verifyAddTaskInputVisible();
//     });
// });
