"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// if you need to use the Firebase Admin SDK, uncomment the following:
// import * as admin from 'firebase-admin'
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!\n\n");
});
//# sourceMappingURL=index.js.map