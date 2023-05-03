import { useState, useEffect } from 'react';
import Account from './Account';
import firebase, { signInWithGoogle } from '../../../services/firebase';

const Login = ({ persistedTasks }) => {
  let [loggedUser, setLoggedUser] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      
      if (user && (user !== loggedUser)) {    
        // Get user data from firestore
        setLoggedUser(user);
      } else setLoggedUser(null);
    
    });
  }, []);

  return (
    <div>
      {loggedUser === null ? 
        <button className='header-button' onClick={signInWithGoogle}>Login</button> :
        <Account pic={loggedUser.photoURL} name={loggedUser.displayName} />
      }
    </div>
  )
}

export default Login;