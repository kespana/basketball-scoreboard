import { expect } from '@playwright/test';

export class ScoreboardPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
        // Locators
        this.homeScore = page.locator('#home-score');
        this.guestScore = page.locator('#guest-score');
        this.periodDisplay = page.locator('#period-display');
        
        // Team Sections (for leader highlighting)
        this.homeSection = page.locator('#home');
        this.guestSection = page.locator('#guest');

        // Home Buttons
        // Note: Using .first() because the button text might be identical for both teams if not scoped strictly
        // Ideally, we'd scope these by their parent container, but assuming current structure relies on order:
        this.homePlusOneBtn = page.getByRole('button', { name: '+1', exact: true }).first();
        this.homePlusTwoBtn = page.getByRole('button', { name: '+2', exact: true }).first();
        this.homePlusThreeBtn = page.getByRole('button', { name: '+3', exact: true }).first();

        // Guest Buttons
        // Using .nth(1) assuming Guest is the second column
        this.guestPlusOneBtn = page.getByRole('button', { name: '+1', exact: true }).nth(1);
        this.guestPlusTwoBtn = page.getByRole('button', { name: '+2', exact: true }).nth(1);
        this.guestPlusThreeBtn = page.getByRole('button', { name: '+3', exact: true }).nth(1);

        // Control Buttons
        this.newGameBtn = page.getByRole('button', { name: 'New Game' });
        this.nextPeriodBtn = page.getByRole('button', { name: 'Next Period' });
    }

    async goto() {
        await this.page.goto('/');
    }

    async incrementHomeScoreByOne() {
        await this.homePlusOneBtn.click();
    }

    async incrementHomeScoreByThree() {
        await this.homePlusThreeBtn.click();
    }

    async incrementGuestScoreByTwo() {
        await this.guestPlusTwoBtn.click();
    }

    async incrementGuestScoreByThree() {
        await this.guestPlusThreeBtn.click();
    }

    async startNewGame() {
        await this.newGameBtn.click();
    }

    async advancePeriod() {
        await this.nextPeriodBtn.click();
    }
}

