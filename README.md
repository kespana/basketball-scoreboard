# Basketball Scoreboard

A simple, responsive basketball scoreboard built with HTML, CSS, and vanilla JavaScript.  
The project is scaffolded with Vite to provide a modern development environment, but all functionality is implemented without frameworks or external libraries.

## Features

### Score Tracking
- Independent scoring for Home and Guest teams  
- Buttons for +1, +2, and +3 points  
- Automatic visual highlight for the leading team  

### Game Period Management
- Displays the current quarter (1 to 4)  
- "Next Period" button cycles through quarters  
- The New Game button resets the period back to Quarter 1  

### New Game Reset
- Resets Home and Guest scores  
- Resets the game period  
- Removes leader highlight  

## Tech Stack

- HTML5 for structure  
- CSS3 for styling and layout  
- JavaScript (ES6) for scoreboard logic and DOM updates  
- Vite as a development tool (bundler and dev server)

## Project Structure

```
.
├── index.html
├── index.css
├── index.js
└── fonts/
    └── CursedTimerULiL.ttf
```

## Getting Started

Clone the repository:

```
git clone https://github.com/your-username/basketball-scoreboard.git
cd basketball-scoreboard
```

Install dependencies and start the dev server:

```
npm install
npm start
```

Or simply open `index.html` in a browser if you prefer not to use Vite's dev server.

## Roadmap

Planned improvements include:
- Overtime system
- Game timer
- Foul tracking
- Additional UI polish and mobile considerations

## Testing

This project uses [Playwright](https://playwright.dev/) for automated testing. The test suite ensures the core functionality of the scoreboard works as expected across modern browsers (Chromium, Firefox, WebKit).

### Test Coverage

The current test suite (`tests/scoreboard.spec.js`) covers:
- **Score Incrementing**: Verifies that score buttons correctly update the score.
- **Game Period**: Verifies cycling through quarters (Q1-Q4) and resetting.
- **Leader Highlight**: Verifies visual highlighting updates correctly as the lead changes or ties occur.
- **Game Reset**: Verifies that the "New Game" button correctly resets scores, period, and leader highlights.

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests with UI mode (interactive):
```bash
npx playwright test --ui
```

View the test report:
```bash
npx playwright show-report
```

## Acknowledgements

Inspired by the Scrimba Basketball Scoreboard project and extended with custom behavior, improved semantics, and additional features.