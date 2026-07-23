# Learning Journal

A tiny command-line tool that saves your learning notes as Markdown files.

## First use

Install Node.js, then open a terminal in this project folder and run:

```bash
npm run note -- "Learned how git commit works"
npm run list
```

The first command creates a file such as `notes/2026-07-23.md`. Open it in VS Code or Cursor to see the Markdown you created.

## What each file does

- `package.json` defines the project and the `npm run` commands.
- `src/index.js` is the Node.js program.
- `notes/` is created automatically and holds your Markdown learning notes.

## Git practice for this step

```bash
git status
git add package.json src/index.js README.md
git commit -m "Create learning journal CLI"
git push
```

After creating a note, save it to GitHub too:

```bash
git add notes
git commit -m "Add learning note"
git push
```
