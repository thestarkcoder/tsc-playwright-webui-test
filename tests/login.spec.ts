import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { LoggedInSuccessfullyPage } from './pages/LoggedInSuccessfullyPage';

/**
 * Test data for login scenarios
 * In production, consider using environment variables or test data files
 */
const TEST_DATA = {
    validUser: {
        username: 'student',
        password: 'Password123'
    },
    invalidUser: {
        username: 'incorrectUser',
        password: 'Password123',
        error: 'Your username is invalid!'
    },
    invalidPass: {
        username: 'student',
        password: 'incorrectPass',
        error: 'Your password is invalid!'
    },
};

test.describe('Login Functionality', () => {
    let loginPage: LoginPage;
    let successPage: LoggedInSuccessfullyPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        successPage = new LoggedInSuccessfullyPage(page);
        await loginPage.goto();
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login(TEST_DATA.validUser.username, TEST_DATA.validUser.password);
        await successPage.verifyOnPage();
    });

    test('should fail login with invalid username', async () => {
        await loginPage.login(TEST_DATA.invalidUser.username, TEST_DATA.invalidUser.password);
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(TEST_DATA.invalidUser.error);
    });

    test('should fail login with invalid password', async () => {
        await loginPage.login(TEST_DATA.invalidPass.username, TEST_DATA.invalidPass.password);
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(TEST_DATA.invalidPass.error);
    });

    test('should fail login with empty username', async () => {
        await loginPage.login('', 'Password123');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Your username is invalid!');
    });

    test('should fail login with empty password', async () => {
        await loginPage.login('student', '');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');
    });
});
