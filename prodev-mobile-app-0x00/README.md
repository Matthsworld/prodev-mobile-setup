# Mobile Development Setup with React Native, TypeScript, NativeWindCSS, and Expo

## Project Overview
This repository contains the setup for mobile development using React Native, TypeScript, NativeWindCSS, and Expo. The goal is to create cross-platform mobile applications efficiently.

## Prerequisites
Ensure you have the following installed before proceeding:

- Node.js LTS
- VS Code
- macOS, Linux, or Windows
- Expo Go installed on your physical device (Android or iOS)

## Setting Up Your First Mobile App

### Navigate to Your Project Directory
```sh
cd prodev-mobile-setup
```

### Initialize a New Expo Project
```sh
npx create-expo-app@latest .
```

### Modify the Home Screen
1. Open `app/(tabs)/index.tsx`.
2. Locate the default text `Welcome!`.
3. Change it to `**First App Created**`.

### Run and Test Your Application
Start the Expo development server:
```sh
npx expo start
```
- **For iOS Devices**: Scan the QR code in the terminal using your phone’s Camera app.
- **For Android Devices**: Scan the QR code using the Expo Go app.

---

## Resetting the Application

To reset the project and observe its effects, run:
```sh
npm run reset-project
```

### Observations After Running `npm run reset-project`
```sh
> prodev-mobile-app-0x00@1.0.0 reset-project
> node ./scripts/reset-project.js

Do you want to move existing files to /app-example instead of deleting them? (Y/n): Y
📁 /app-example directory created.
➡️ /app moved to /app-example/app.
➡️ /components moved to /app-example/components.
➡️ /hooks moved to /app-example/hooks.
➡️ /constants moved to /app-example/constants.
➡️ /scripts moved to /app-example/scripts.

📁 New /app directory created.
📄 app/index.tsx created.
📄 app/_layout.tsx created.

✅ Project reset complete. Next steps:
1. Run `npx expo start` to start a development server.
2. Edit app/index.tsx to edit the main screen.
3. Delete the /app-example directory when you're done referencing it.
```

### Web Output After Reset
After the reset, the following message was displayed on the web:
```
index
Edit app/index.tsx to edit this screen.
```

---

## Updated Repository Structure
After running `npm run reset-project`, the repo structure is as follows:

```
prodev-mobile-app-0x00/
├── app/
│   ├── index.tsx
│   ├── _layout.tsx
│
├── app-example/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── constants/
│   ├── scripts/
│
├── node_modules/
├── package.json
├── README.md
└── scripts/
```

---

## Next Steps
- Start the development server using `npx expo start`.
- Continue building out the mobile application using Expo, React Native, and NativeWindCSS.
- Delete `/app-example` once no longer needed.

🚀 **Happy Coding!**
