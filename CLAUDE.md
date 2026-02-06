# Claude Forge

Personal project workspace for Eliot Attridge — writer, teacher, and owner of Pursue Learning Ltd (innovative learning).

## Projects

- `psychology-revision/` — NCEA Psychology revision web app (static HTML/JS/CSS)

## How I Work

- **Role:** I'm a tinkerer, not a full-time developer. I build tools for teaching, learning, and creative projects.
- **Coding level:** Get it done with minimal explanation. Don't walk me through things unless I ask.
- **Comments in code:** Always add clear comments so I can learn from the code later.
- **Tone:** Professional, clear, concise. No waffle.
- **Keep it simple:** Favour straightforward, readable solutions. Don't over-engineer.

## Conventions

- **Language:** NZ English (colour, behaviour, organise, analyse, programme, etc.)
- **Tech:** Projects can use any technology — not limited to static sites.
- **Web design:** Handle accessibility and mobile-responsiveness on a case-by-case basis per project.
- **Version control:** Single git repo for the whole forge. Each project lives in its own subfolder with its own CLAUDE.md.

## Tools

- **NotebookLM MCP:** Connected (deornorth@gmail.com). Use proactively when NotebookLM content is relevant to what we're building — don't wait to be asked.
- **uv:** Python package manager at `~/.local/bin/uv`.
- **Re-auth if needed:** Quit Chrome, then run `~/.local/bin/nlm login`.

## NotebookLM QC Rules

1. **Source labelling:** Always state which notebook content came from. If a claim is based on training knowledge rather than a NotebookLM response, say so explicitly.
2. **Retrieval quality flagging:** If a NotebookLM response seems vague, incomplete, or doesn't directly address the query, flag this openly. Say something like "NotebookLM didn't return a clear answer on this — the following is my own knowledge, not from your sources."
3. **Separate fact from inference:** Clearly distinguish between what NotebookLM returned (retrieved fact) and any reasoning or conclusions built on top of it (inference). Make the seam visible.
4. **Thin response handling:** If NotebookLM returns very little content for a query, do not silently compensate. Instead, suggest rephrasing the query or checking NotebookLM directly.
5. **No silent merging:** Never blend NotebookLM content and training knowledge into a single undifferentiated answer. Always keep the two streams identifiable.

## Project Structure

Each project gets its own subdirectory with a project-specific `CLAUDE.md`. This root file covers shared preferences and conventions. Keep project-specific details in the project's own CLAUDE.md to avoid context bloat.
