# JATE - Just Another Text Editor

## Description

**JATE** is a Progressive Web Application (PWA) that provides a basic text editor. The app can be used both online and offline, leveraging IndexedDB for local data storage. It also includes a service worker for offline access and can be installed directly onto your device.

The app is built using Webpack for bundling assets, Workbox for service worker integration, and IndexedDB for persistent data storage. Users can create, edit, and save text even when not connected to the internet.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jameswhatcott/pwa-text-editor.git

2. Navigate to the project directory:
   ```bash
   cd jate

3. Install both backend and frontend dependencies:
   ```bash
   npm install
   cd client
   npm install

4. Build the application:
   ```bash
   npm run build

5. Start the application (use concurrently to run client and server):
    ```bash
    npm run start:dev

6. The app will be running on http://localhost:3000.


# Usage

1. Open the App: Once the app is running, open it in your browser at http://localhost:3000.
2. Install as a PWA: You can install the app directly on your device by clicking the "Install" button when prompted, or via the browser menu.
3. Edit Text: Use the in-browser text editor to create and edit content.
4. Offline Mode: Your text is saved locally via IndexedDB, so you can access and modify your text even when offline.
5. Data Persistence: When you come back online, your data will still be available.


## Technologies Used

Express.js: For building the backend server.
Webpack: For bundling JavaScript, CSS, and images.
Workbox: For generating the service worker and managing offline capabilities.
IndexedDB: For storing text data locally on the user's device.
PWA (Progressive Web App): The app is installable and works offline using service workers.


## Features Used

Offline Mode: Works even when there's no internet connection, thanks to IndexedDB and service workers.
PWA Installable: Can be installed directly onto your desktop or mobile device.
Data Persistence: Saves text content locally and persists it across sessions, even offline.
Syntax Highlighting: Uses CodeMirror to provide syntax highlighting in the text editor.
Responsive Design: Works across multiple devices and screen sizes.


## Live Site

https://pwa-text-editor-4eal.onrender.com
