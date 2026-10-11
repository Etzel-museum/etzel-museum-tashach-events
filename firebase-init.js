import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDurfN-hS59t_rOEXJLnJD_2yQ6VTRoitQ",
  authDomain: "etzel-museum-tashach-events.firebaseapp.com",
  projectId: "etzel-museum-tashach-events",
  storageBucket: "etzel-museum-tashach-events.firebasestorage.app",
  messagingSenderId: "45535724113",
  appId: "1:45535724113:web:d819896ac605db720e6e70"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
