# Psychology Revision

NCEA Psychology revision app for NZ students (Level 2 and Level 3).

## Files

- `index.html` — HTML structure and content markup
- `script.js` — Application logic and embedded data (flashcards, quiz questions)
- `styles.css` — Styling with CSS variables for theming

## Architecture

Single-page app with three sections: Topic Summaries, Flashcards, Quiz.

- **Data:** All flashcards and quiz questions are JS objects in `script.js`, organized by level (level2/level3). Covers six approaches: Biological, Behaviourist, Cognitive, Humanistic, Psychodynamic, Sociocultural.
- **State:** Global variables track current level, section, flashcard index, quiz state, and score. Initializes on DOMContentLoaded.
- **Level switching:** CSS classes (`.level-2`, `.level-3`) toggle visibility based on selected level.
