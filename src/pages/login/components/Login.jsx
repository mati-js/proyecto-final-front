import { useState, useEffect } from 'react';
import Account from './Account';
import firebase, { signInWithGoogle } from '../../../services/firebase';

const Login = () => {
  let [loggedUser, setLoggedUser] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      
      if (user && (user !== loggedUser)) {    
        setLoggedUser(user);
      } else setLoggedUser(null);
    
    });
  }, []);

  return (
    <div>
      {loggedUser === null ? 
        <a className='header-button' onClick={signInWithGoogle}>Login</a> :
        <Account pic={loggedUser.photoURL} name={loggedUser.displayName} />
      }
    </div>
  )
}

export default Login;