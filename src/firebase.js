import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvRSoVavLsmRu9xqWBcRMHMh_z-qPhoZM",
  authDomain: "cloneapp-78c64.firebaseapp.com",
  projectId: "cloneapp-78c64",
  storageBucket: "cloneapp-78c64.appspot.com",
  messagingSenderId: "529894954529",
  appId: "1:529894954529:web:7fc4b05e076b4b4518f560"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {auth};
export default db; 