import admin from "firebase-admin";
// import serviceAccount from "./serviceAccountKey.json"; 

// Ensure the environment variable is set
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.');
}

// Parse the JSON string from the environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const db = admin.firestore();
export { db };
