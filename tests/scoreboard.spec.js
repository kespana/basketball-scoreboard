// tests/scoreboard.spec.js
import { test, expect } from '@playwright/test';
import { ScoreboardPage } from './pages/ScoreboardPage';

test.describe('Scoreboard functionality', () => {
    let scoreboard;

    test.beforeEach(async ({ page }) => {
        scoreboard = new ScoreboardPage(page);
        await scoreboard.goto();
    });

    test('should increment the Home score by 1 when the +1 button is clicked', async () => {
        // Act
        await scoreboard.incrementHomeScoreByOne();

        // Assert
        await expect(scoreboard.homeScore).toHaveText('1');

        // Test a second click
        await scoreboard.incrementHomeScoreByOne();
        await expect(scoreboard.homeScore).toHaveText('2');
    });

    test('should reset scores to 0 when the "New Game" button is clicked', async () => {
        // Arrange: Set scores to a high value (Home: 3, Guest: 2)
        await scoreboard.incrementHomeScoreByThree();
        await scoreboard.incrementGuestScoreByTwo();
        
        await expect(scoreboard.homeScore).toHaveText('3');
        await expect(scoreboard.guestScore).toHaveText('2');

        // Act
        await scoreboard.startNewGame();

        // Assert
        await expect(scoreboard.homeScore).toHaveText('0');
        await expect(scoreboard.guestScore).toHaveText('0');
    });


    test('should cycle the game period from Q1 to Q4 and then reset with New Game', async () => {
        // Verify initial state
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 1'); 
        
        // Cycle Q1 -> Q2
        await scoreboard.advancePeriod();
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 2');
        
        // Cycle Q2 -> Q3
        await scoreboard.advancePeriod();
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 3');
        
        // Cycle Q3 -> Q4
        await scoreboard.advancePeriod();
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 4');
        
        // Cycle Q4 -> Q1
        await scoreboard.advancePeriod();
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 1'); 
        
        // Reset Logic Test
        
        // Set to Q2
        await scoreboard.advancePeriod();
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 2'); 
        
        // Add a score
        await scoreboard.incrementHomeScoreByOne();
        await expect(scoreboard.homeScore).toHaveText('1');

        // Trigger New Game
        await scoreboard.startNewGame();
        
        // Assert Reset
        await expect(scoreboard.periodDisplay).toHaveText('QUARTER 1'); 
        await expect(scoreboard.homeScore).toHaveText('0');
    });

    test('should highlight the leading team section and remove highlight on tie', async () => {
        const leaderClass = /.*leader/;

        // Scenario 1: Home Team Leads (Home: 1, Guest: 0)
        await scoreboard.incrementHomeScoreByOne();
        
        await expect(scoreboard.homeSection).toHaveClass(leaderClass); 
        await expect(scoreboard.guestSection).not.toHaveClass(leaderClass); 
        
        // Scenario 2: Guest Team Takes the Lead (Home: 1, Guest: 3)
        await scoreboard.incrementGuestScoreByThree();
        
        await expect(scoreboard.homeSection).not.toHaveClass(leaderClass);
        await expect(scoreboard.guestSection).toHaveClass(leaderClass);
        
        // Scenario 3: Teams Tie (Home: 3, Guest: 3)
        // Home needs 2 more points to tie 3-3. (1 + 1 + 1)
        await scoreboard.incrementHomeScoreByOne();
        await scoreboard.incrementHomeScoreByOne();
        
        await expect(scoreboard.homeSection).not.toHaveClass(leaderClass);
        await expect(scoreboard.guestSection).not.toHaveClass(leaderClass);
    });
});
