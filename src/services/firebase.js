import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdYwmOrL1EcELB1IvDlu96tffPnRFN1uw",
  authDomain: "proyecto-final-utn-5c5d4.firebaseapp.com",
  projectId: "proyecto-final-utn-5c5d4",
  storageBucket: "proyecto-final-utn-5c5d4.appspot.com",
  messagingSenderId: "834290670669",
  appId: "1:834290670669:web:d306de4b88657279325004"
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