import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  /*
    Acá pongo un try/catch y un catch en la promise porque puede que haya dos tipos de errores:
    1) Problema inicializando el popup: Lo agarra el catch
    2) Problema con el logeo: Lo agarra el catch de la promise
  */
  try {
    // try to sign in with google
    auth.signInWithPopup(provider)
      .catch(() => {
        // no hago nada, si no te logueas podés usar la app igual
      });
  } catch (error) {
    // no hago nada, si no te logueas podés usar la app igual
  }
};