# React Docker Tutorial
This repository demonstrates how to bootstrap a React app using `create-react-app` and add  Docker container and using ENV variables. This is the TL;DR version of normal trial and error to get Docker and ENV variables to work nicely in a React app. The goal is allowing you to package and deploy your app to any environment and adhere to 12-factor-app principles.

# Requirements
## NodeJS version 6 or later
You need NodeJS installed on your machine at least version 6, and a general understanding of NPM and how to install, configure, and start a Node app. You don't need experience with React to follow this tutorial, however it is preferred.

## Docker
In order to test the Docker container you need to be able to perform `docker` commands. Familiarity with building and running images is preferred.

# Setup
1. Bootstrap your application with `create-react-app`
```
npx create-react-app my-docker-react-app
```

2. Verify application runs
```
cd my-docker-react-app
npm install
npm start
```

Your browser will likely launch a window or tab for `http://localhost:3000` and you should see a React icon and welcome screen. If everything is running, then `CTRL + C` to stop the app and proceed. If it is not working, visit create-react-app's website for instructions and troubleshooting tips for your environment.

# Customize app to use ENV variables
## Using ENV variables
Bootstrapped React apps (using `create-react-app`) strip most environment variables with the exception of `NODE_ENV` and any variables that are prefixed with `REACT_APP_<your var>`. For this tutorial we will prefix all variables with `REACT_APP_` to work with the default install configuration.

1. Add local ENV variables
Add a `env.local` file with variables `REACT_APP_ENVIRONMENT` and `REACT_APP_TIMEZONE` and some values.

2. Add a `Config.js` file to centralize ENV variables for use in the application. For a larger application you may want to move this to a `lib/` folder.

3. Print variable values on default `App.js` screen to confirm the application is using them.



