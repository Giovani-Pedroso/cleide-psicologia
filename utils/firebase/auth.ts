import {app} from './init'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



const loginGoogle = () =>{
  const auth = getAuth()
  const gooleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, gooleProvider);
}


export default {loginGoogle}
