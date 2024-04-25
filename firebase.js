const admin = require('firebase-admin');

// Initialize Firebase Admin with environment variables
// const serviceAccount = {
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // Correctly format private key
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// };

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };