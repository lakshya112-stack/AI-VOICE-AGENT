import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-voice-agent-d0628.firebaseapp.com",
  projectId: "ai-voice-agent-d0628",
  storageBucket: "ai-voice-agent-d0628.firebasestorage.app",
  messagingSenderId: "788974380879",
  appId: "1:788974380879:web:f6cc9abe13fc187e30873a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
