# Assignment 3 — Full Stack Application Proof-of-Concept

A student demonstration using Node.js, Express, browser JavaScript, and an
in-memory singleton containing five foods. GET /foods returns JSON. The
frontend fetches that route and builds table rows using DOM methods.

## Run locally
1. Install Node.js if it is not already installed.
2. Extract the ZIP and open MustafaPOC in VS Code.
3. Open Terminal > New Terminal in that folder.
4. Run `npm install`.
5. Run `npm test`.
6. Run `npm start`.
7. Open http://localhost:3000 (do not open index.html directly).

The server uses PORT when configured, otherwise 3000.

## Files
- server/foodStore.js: singleton mock database and getAll().
- server/server.js: JSON middleware, GET /foods, static files and 404s.
- public/index.html: food table, fetch, DOM updates and disclaimer.
- tests/products.test.js: six Jest/Supertest tests.
- package.json and package-lock.json: scripts and dependencies.

## Manual checks
- Homepage: five rows, prices with two decimals, student disclaimer.
- /foods: JSON with five food objects.
- /unknown: HTTP 404 and JSON error.
- Inspect terminal logs and browser console for errors.
- Repeat these checks at the published URL.

## GitHub and Replit
1. Create a GitHub repository named MustafaPOC (or use your full name plus POC).
2. Upload the contents of the project folder, excluding node_modules.
   package.json must be at the repository root, not in a nested folder.
3. Import/connect that repository in Replit.
4. Install dependencies with npm install and run with npm start.
5. Publish the Node app using npm start as its start command.
6. Check the public homepage and /foods endpoint.

## Submission
Submit the project ZIP and the public deployment URL through Brightspace.
Exclude node_modules and .git from the ZIP. Include package-lock.json.
Local execution on your computer and public deployment must still be verified.

## Limitations
Data is temporary and stored in memory. Only GET /foods is implemented as a
food API route. No real ordering, payment or persistent database is provided.

## Disclaimer
This application is ONLY for demonstrating a student's web development skills.
It is not a real food ordering service.
