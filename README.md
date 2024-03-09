# React Native and Expo Project

Welcome to our React Native project with Expo! This project uses Expo to create cross-platform native apps for Android, iOS, and the web using React and TypeScript.

## About project

This project is made of server-side and client-side. This is the client-side. The client-side was made using React Native, TypeScript and Expo. User can login from the app, see Reviews of other users and also post the new ones. Application also has a map where the user can see restaurants in radius of 1000 meters. Link to the server-side: 

## What is Expo?

Expo is an open-source platform for making universal native apps with React. It provides a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

## Installation

First, you'll need to install the Expo CLI:

```bash
npm install -g expo-cli
```

Or using Yarn:

```bash
yarn global add expo-cli
```

## Creating a New Project

To create a new React Native project with Expo, run:
```bash
expo init MyNewProject
```

## Navigate into your new project directory:
```bash
cd MyNewProject
```

## Running the Project

To start the project, run:
```bash
npx expo start
```

This will start the Expo development server and open a page in your web browser with a QR code for you to scan using the Expo app on your mobile device.

## Building Your App

To build your app for production, you can use the following commands:
```bash
expo build:android
```
```bash
expo build:ios
```

Please note that as of my last update, Expo has transitioned to using Expo Application Services (EAS) for building apps which provides more flexibility and options for CI/CD workflows.

## Publishing Your App

To publish your app to Expo's servers, run:
```bash
expo publish
```

## Ejecting from Expo

If you need to add custom native code to your project, you can eject from Expo by running:
```bash
expo eject
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

LinkedIn - https://www.linkedin.com/in/ognjen-rodi%C4%87-4595241b3/

Project Link: https://github.com/ognjenr02/my-restaurant-app

## Acknowledgements

    Expo Documentation
    React Native Documentation
