# Claude Code Handoff

## Project Location
`~/desktop/claude-forge/`

## What's Set Up

### Project Structure
```
claude-forge/
  CLAUDE.md                        → root config (project index, shared conventions)
  psychology-revision/
    CLAUDE.md                      → project-specific config
    index.html
    script.js
    styles.css
```

### CLAUDE.md Strategy
- Root CLAUDE.md is kept lean — just a project index and shared conventions
- Each subdirectory gets its own CLAUDE.md with project-specific details
- This prevents context bloat as more projects are added

### NotebookLM MCP Server
- **Installed:** `notebooklm-mcp-cli` (via uv) — provides both `nlm` CLI and `notebooklm-mcp` MCP server
- **Authenticated:** deornorth@gmail.com (profile: default)
- **Credentials:** `~/.notebooklm-mcp-cli/profiles/default`
- **MCP added to Claude Code:** user-wide scope in `~/.claude.json`
- **CLI command:** `~/.local/bin/nlm`
- **Re-auth if needed:** quit Chrome, then run `~/.local/bin/nlm login`

### Tools Installed
- **uv** (Python package manager): `~/.local/bin/uv`
- **notebooklm-mcp-cli**: `~/.local/bin/nlm` and `~/.local/bin/notebooklm-mcp`

## Psychology Revision App
- NCEA Level 2 & 3 Psychology revision app for NZ students
- Static HTML/JS/CSS — open `psychology-revision/index.html` in browser
- Three sections: Topic Summaries, Flashcards, Quiz
- All data embedded in `script.js`
