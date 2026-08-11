// app.js — the entry point. Prints the greeting on startup.
// NOTE: depends on getGreeting() from greeting.js, which is added in the PR below this one.
import { getGreeting } from "./greeting.js";

console.log(getGreeting());
