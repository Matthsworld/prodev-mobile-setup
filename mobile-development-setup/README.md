# Mobile Development Setup

## Objective
Setting up a seamless mobile development environment using React Native, TypeScript, NativeWindCSS, and Expo.

## Prerequisites
Ensure you have the following installed:

- **Node.js LTS** (Download from [Node.js](https://nodejs.org/))
- **VS Code** (Download from [Visual Studio Code](https://code.visualstudio.com/))
- **Operating System:** Windows, macOS, or Linux
- **Expo CLI** (Install using `npm install -g expo-cli`)
- **Expo Go** (Install on your mobile device)

## Why Expo Go?
Mobile development requires emulators, which can be resource-intensive. Expo Go simplifies testing by allowing you to run React Native applications directly on your physical device.

## Steps to Install Expo Go
1. Visit the [Expo Go homepage](https://expo.dev/go).
2. Select the latest SDK version.
3. Install Expo Go on your device:
   - **Android:** Install from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - **iOS:** Install from the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).
4. Open the Expo Go app.
5. Create an Expo account or log in.

## Setting Up a New React Native Project
1. Open a terminal and run:
   ```sh
   npx create-expo-app MyApp
   cd MyApp
   ```
2. Start the development server:
   ```sh
   npx expo start
   ```
3. Scan the QR code in the Expo Go app to run your application on your physical device.

## Troubleshooting
If you encounter issues during setup:
- Ensure Node.js and Expo CLI are installed correctly.
- Restart your terminal and run `expo doctor` to check for errors.
- Reinstall Expo Go if necessary.

## Challenges Faced
Document any setup challenges and how you resolved them below:
- Example: "Had issues with Expo CLI installation due to permission errors. Resolved by running `sudo npm install -g expo-cli`."

## Repository Structure
```
mobile-development-setup/
│── README.md  # Documentation
│── MyApp/     # Your React Native project
```

## Next Steps
Now that your environment is set up, proceed with developing your React Native app using TypeScript, NativeWindCSS, and Expo!
