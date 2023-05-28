
import { initializeApp , } from "firebase/app";
import { getFirestore ,collection } from "firebase/firestore";

import { getStorage} from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyAYxqsBoI-PIFOcRYaQCjRxYUN5aJEUE5E",
  authDomain: "d-printing-page.firebaseapp.com",
  projectId: "d-printing-page",
  storageBucket: "d-printing-page.appspot.com",
  messagingSenderId: "695567155035",
  appId: "1:695567155035:web:22852333f096afe851247e"
};
const app =initializeApp(firebaseConfig)

const database= getFirestore(app)

const refrence=collection(database,"modelData")

const storage = getStorage(app);

export {storage}

export default refrence 