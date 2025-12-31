import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for the Login Page
 * Encapsulates all interactions with the login form
 */
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#submit');
        this.errorMessage = page.locator('#error');
    }

    /**
     * Navigate to the login page
     */
    async goto(): Promise<void> {
        await this.page.goto('/practice-test-login/');
    }

    /**
     * Perform login action with provided credentials
     * @param username - Username to enter
     * @param password - Password to enter
     */
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
