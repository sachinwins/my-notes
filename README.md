# my-notes

React-Redux Notes with Login

## Prerequisite

- node@12.14.1
- npm@6.13.4

## Tech Stacks

- @reduxjs/toolkit
- React@16
- @testing-library
- react-redux
- react-router-dom
- react-script
- @material-ui
- husky

### Local Setup

- After cloning this repository, set node and npm versions, run `npm install` in the project directory.
- run `npm start`
- It will Run the app in the development mode. [http://localhost:3000](http://localhost:3000)<br />
- Defult Username is "guest" and password is "password". Sign In button will be only enable if both value matches. If you cahnge any of default value "Sign In" button will become disable.
- On login it will store username and password in local storage & display username in Notes page.
- After login you will redirect to Notes page, in top yoou will find a button to logout
- On clicking "Add Note" button another section will become visible, that will allow you to add title and content. After filling detail, click on "Add Note" button below to add note in saved notes section
- You will be able to see list of notes added in left hand side section.
  By clicking any of the note, detaisl will be appear in right side section, where you can update/delete note
- You can delete any note from left hand side NoteLists section by clickking on "x" icon
- Any URL that is not defined will redirect to "page not found" component

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
