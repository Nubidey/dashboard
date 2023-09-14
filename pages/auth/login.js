import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile, getAuth, signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
export default function login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const LoginEmail = async() => {
    
    console.log(email,password)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      route.push('/dashboard');
    } 
    catch (error) {
      console.log(error);
    }
  };



  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const fbProvider = new FacebookAuthProvider();
  const FacebookProvider = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult( result);
      const token = credantial.accessToken;
      let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <section className=" flex items-center justify-center mx-10">
    <div className="bg-white shadow-xl mt-20 mx-5 p-10 text-gray-700 rounded-lg w-7/20 items-center ">
      <h2 className="text-center text-2xl font-medium text">LOGIN</h2>
      <div className= "input_group">
        {/* <form> */}
        <input 
        
        type="email"
        name="username"
        value={email}
        placeholder="username"
        className="p-2 mt-5 rounded-xl border w-full"
       onChange={(e) => setEmail(e.target.value)}
        />
        <div className="input_group">
        <input 
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="password"
        value={password}
        className="p-2 mt-5 rounded-xl border w-full"
        />
        <div className="input-button py-3 pl-0">
          <button type="submit" className="bg-blue-700 text-white py-1 rounded-2xl p-5 w-full" onClick={() => LoginEmail()}>
          Sign in
          </button>
      
      <div className="mx-auto mt-8 grid items-center grid-cols-3 text-gray-500">
        <hr className="border-gray-500"></hr>
          <p className="text-center">OR</p>
          <hr className="border-gray-500"></hr>
        <div className="col-start-2 flex flex-row">
          <button
            onClick={GoogleLogin}
            className="google_login text-center flex flex-row justify-center items-center text-white bg-white p-4 font-medium rounded-full align-center mt-2 border-2 border-black-800"
          >
            <FcGoogle className="text-2xl" />
           
          </button>
          <button
            className="text-black p-4 font-medium rounded-full align-center mt-2 border-2 border-black-900 bg-blue-900"
            onClick={FacebookProvider}
          >
            <AiFillFacebook className=" text-blue-300 text-2xl" />
          
          </button>
        </div>
      </div>
      </div>
      </div>
      {/* </form> */}
      </div>
    </div>
    </section>
  
  );
  }