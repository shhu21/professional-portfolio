# Developer Notes
The following are personal deverloper's notes on the process and technologies used in the development of this application.  These are technical conceptual notes that include step-by-step tutorials on how to utilize certain technologies (i.e. gh-pages, React.js) that are relevant to the development of this application as well as personal side notes for the developer.

# Table of Contents
* [Initial Depoly to gh-pages](#initial-deploy-to-gh-pages)
* [Updating Deployment](#updating-deployment)
* [Development](#development)
    - [Setting Up a React App](#setting-up-a-react-app)
    - [Conditionals](#conditionals)
    - [Components](#components)

# Initial Deploy to gh-pages
1. `npm install -D gh-pages`
2. Add the following to the `package.json` file
    - `"homepage": "http://<username>.github.io/photo-port",`
    - `"scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build" }`
3. Create a `gh-pages` branch
    - `checkout -b gh-pages`
4. Push to the `gh-pages` branch
    - `git push -u origin gh-pages`
3. Deploy
    - `npm run build`
    - `npm run deploy`
    - Use this command to push any changes
    - Note: Make sure to switch to back to a working branch before commiting new changes

# Updating deployment
1. Be sure to commit any changes to the a working branch (not the `gh-pages` branch)
2. Checkout the `gh-pages` branch
    - `git checkout gh-pages`
3. Pull changes from the main branch
    - `git pull origin main`
4. Deploy
    - `npm run deploy`

# Development

## Setting Up a React App

## Conditionals

## Components

[Table of Content](#contents) --- [Back to Top](#developer-notes)