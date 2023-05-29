import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function writeUserData(taskName) {
  const tasksRef = ref(db, 'tasks');
  const newTaskRef = push(tasksRef);
  const newTaskKey = newTaskRef.key;
  const uniqueIdentifier = `task${newTaskKey}`;

  set(ref(db, `tasks/${uniqueIdentifier}`), taskName)

  return uniqueIdentifier;
}

export function getUsersTasks() {
  return new Promise((resolve, reject) => {
    const userTasks = ref(db, 'tasks');

    onValue(userTasks, (snapshot) => {
      const tasks = snapshot.val();
      const tasksArray = tasks ? Object.values(tasks) : [];
      resolve(tasksArray);
    }, (error) => {
      reject(error);
    });
  });
}

// export default writeUserData;

