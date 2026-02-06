# Psychology Revision

NCEA Psychology revision app for NZ students (Level 2 and Level 3).

## Files

- `index.html` — HTML structure and content markup
- `script.js` — Application logic and embedded data (flashcards, quiz questions)
- `styles.css` — Styling with CSS variables for theming

## Architecture

Single-page app with five sections: Topic Summaries, Flashcards, Quiz, Brain Dump, Progress.

- **Data:** All flashcards and quiz questions are JS objects in `script.js`, organised by level (level2/level3). Covers six approaches: Biological, Behaviourist, Cognitive, Humanistic, Psychodynamic, Sociocultural.
- **State:** Global variables track current level, section, flashcard index, quiz state, and score. Initialises on DOMContentLoaded.
- **Level switching:** CSS classes (`.level-2`, `.level-3`) toggle visibility based on selected level.
- **Spaced repetition:** Simplified SM-2 algorithm with Hard/Good/Easy ratings on flashcards. Per-card state stored in localStorage (`psych_flashcard_data`), keyed by `level{N}` → `{category}_{origIndex}`. "Review Due" filter shows cards due or never seen.
- **Progress tracking:** Quiz attempts saved to `psych_quiz_history` (last 50). Study streak tracked in `psych_study_streak`. Progress dashboard shows streak, mastery breakdown per approach, recent quiz scores with trend, and review summary.
- **Card IDs:** `{category}_{origIndex}` — stable across shuffle/filter, preserves audio mapping.

- **Traffic lights:** Per-approach red/amber/green self-assessment on card headers. Stored in `psych_traffic_light`. Red-rated cards get priority border.
- **Concept maps:** "View Concept Map" toggle in each approach's level-content. JS data → CSS grid radial layout.
- **Quiz types:** Multiple Choice, True/False, Mixed, Interleaved, Compare Approaches, Pre-Test.
- **Pre-test mode:** Uses MC+T/F pool with intro screen, "Now go study!" result button, saved with `type: 'pretest'`. Progress dashboard shows pre-test vs post-test comparison.
- **Compare mode:** Scenario-based cross-approach questions with per-approach breakdown.

## Content

| Level | Flashcards | MC Quiz | T/F Quiz | Compare Quiz |
|---|---|---|---|---|
| Level 2 | 58 | 42 | 27 | 20 |
| Level 3 | 22 | 15 | 10 | 12 |

Level 2 debates content was expanded in Feb 2026 using the "Level 2 Debates in psychology" NotebookLM notebook (22 sources). Covers nature-nurture, free will-determinism, holism-reductionism, and the replication crisis across all six approaches. Topic summaries in `index.html` include per-approach "Key Debates" subsections and a cross-cutting debates overview table.
