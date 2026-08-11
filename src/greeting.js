// greeting.js — the single source of truth for the app's greeting text.
// Accepts an optional name so callers can personalise the greeting.
export function getGreeting(name = "world") {
  return `Hello, ${name}, from the stacked PR demo!`;
}
