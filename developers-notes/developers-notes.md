# Deploying to gh-pages
1. `npm install -D gh-pages`
2. Add the following to the `package.json` file
    - "homepage": "http://<username>.github.io/photo-port",
    - "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build }
3. `npm run deploy`
    - Use this command to push any changes