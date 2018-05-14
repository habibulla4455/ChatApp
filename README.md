

# Dark Messenger

Mobile app school project in COE184P. Angular Chat application wrapped in Cordova. Built using Angular, Angular Material2, Angularfire2 and Cordova

## Features

1. Anonymous sign in
1. Login page
1. Form validations
1. Registration page
1. Anonymous feature
1. Online users
1. Display of chat rooms
1. Create chat room
1. Limit number of participants in a room
1. Join chat room
1. Leave chat room
1. Public chat room
1. See room details
1. See room participants
1. Chat
1. Message timestamps
1. Profile page
1. Change display name
1. Change email
1. Change password
1. Change avatar
1. Material design
1. Offline mode
1. (SPA) Single Page Application


## Getting started

### Firebase setup

1. Create Firebase account
1. Go to console
1. Create new project
1. Select **Database** > **Cloud Firestore**
1. Go to **RULES  **, and paste this code
    ```
      service cloud.firestore {
        match /databases/{database}/documents {
          match /{document=**} {
            allow read, write: if request.auth != null;
          }
          match /metadata/{metadata} {
            allow read, write;
          }
        }
      }
    ```
1. Go to **Storage** > **RULES** and paste this code
    ```
      service firebase.storage {
        match /b/{bucket}/o {
          match /{allPaths=**} {
            allow read, write: if request.auth != null;
          }
        }
      }
    ```
1. In your project root folder create go to src/environment
1. In environment folder create  `environment.prod.ts` and `environment.ts`
1. Go to firebase console and select your project
1. Go to **Authentication** and click **WEB SETUP**
1. Copy and paste **apiKey**, **authDomain**, **databaseURL**, **projectId** and **storageBucket** in environment
    ```
    // Do the same in environment.prod.ts copy and paste firebaseConfig

    // environment.ts
    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: "******************************************",
        authDomain: "**************************************",
        databaseURL: "*************************************",
        projectId: "***************************************",
        storageBucket: "***********************************"
      }
    };
    ```
1. In **Authentication** go to **SIGN-IN METHOD** and enable ***Email/Password*** and ***Anonymous***


### Mobile environment setup

If you are already building apps using NativeScript, React Native or in Native please continue to  **Installing app apk**.

1. Install Node.js LTS version
1. Install the Cordova CLI `npm i -g cordova`
1. Setup mobile development follow the steps in this [link][1] (Windows).
  * For MacOS [link][2]
  * For Linux [link][3]


### Installing app apk

1. Open terminal in root and run `npm run build`
1. Copy the files in dist folder
1. Paste files in `./mobile/www`
1. Open terminal in www folder and run `cordova run android`

### Running in browser

Press `F12` followed by `Ctrl + Shift + M`

#### Note:
The app is designed to run in mobile. If you have problems running the application in the browser, refresh (F5) the application in `/dashboard` route

## License

MIT

 [1]: https://docs.nativescript.org/start/ns-setup-win
 [2]: https://docs.nativescript.org/start/ns-setup-os-x
 [3]: https://docs.nativescript.org/start/ns-setup-linux
