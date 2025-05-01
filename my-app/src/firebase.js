import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKpp1K-J_Km5ESaNu0gczwbm14CemfUvk",
    authDomain: "saras-98a22.firebaseapp.com",
    projectId: "saras-98a22",
    storageBucket: "saras-98a22.firebasestorage.app",
    messagingSenderId: "939610376166",
    appId: "1:939610376166:web:b1ffe987e5c8b974ccb827",
    measurementId: "G-TJEJ8QLFZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add email to waitlist
export const addToWaitlist = async (email) => {
  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding to waitlist: ", error);
    return { success: false, error };
  }
};

export { db };
