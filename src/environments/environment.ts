// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBdK8ijZ_5GnIhq0ZfM_gSD3ziuIJxkUX8",
    authDomain: "cordova-chat-app.firebaseapp.com",
    databaseURL: "https://cordova-chat-app.firebaseio.com",
    projectId: "cordova-chat-app",
    storageBucket: "cordova-chat-app.appspot.com",
    messagingSenderId: "1069770143251"
  }
};
