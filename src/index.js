const fs = require("node:fs");
const path = require("node:path");

const [command, ...messageParts] = process.argv.slice(2);
const notesDirectory = path.join(process.cwd(), "notes");

function today() {
  return new Date().toISOString().slice(0, 10);
}

function createNote(message) {
  if (!message) {
    console.log('Please add a note, for example: npm run note -- "Learned git commit"');
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(notesDirectory, { recursive: true });
  const filePath = path.join(notesDirectory, `${today()}.md`);
  const entry = `- ${message}\n`;

  if (fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, entry);
  } else {
    fs.writeFileSync(filePath, `# ${today()}\n\n${entry}`);
  }

  console.log(`Saved note to ${path.relative(process.cwd(), filePath)}`);
}

function listNotes() {
  if (!fs.existsSync(notesDirectory)) {
    console.log("No notes yet. Create one with: npm run note -- \"Your note\"");
    return;
  }

  const notes = fs.readdirSync(notesDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .reverse();

  if (notes.length === 0) {
    console.log("No notes yet.");
    return;
  }

  console.log(notes.join("\n"));
}

if (command === "note") {
  createNote(messageParts.join(" "));
} else if (command === "list") {
  listNotes();
} else {
  console.log("Usage:\n  npm run note -- \"Your note\"\n  npm run list");
  process.exitCode = 1;
}
