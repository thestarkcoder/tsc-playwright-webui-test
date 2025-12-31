import { type Locator, type Page, expect } from '@playwright/test';

/**
 * Page Object Model for the Logged In Successfully Page
 * Provides verification methods for successful login state
 */
export class LoggedInSuccessfullyPage {
    readonly page: Page;
    readonly successMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.getByRole('heading', { name: 'Logged In Successfully' });
        this.logoutButton = page.getByRole('link', { name: 'Log out' });
    }

    /**
     * Verify that the user is on the successful login page
     * Checks URL, success message, and logout button visibility
     */
    async verifyOnPage(): Promise<void> {
        await expect(this.page).toHaveURL(/logged-in-successfully/);
        await expect(this.successMessage).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    }
}
