import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import{getFirestore, doc,getDoc,setDoc, Firestore}from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFREp9FV1od6r4jA5RkPuroAOjA1rOhik",
    authDomain: "crwnstore-9a69f.firebaseapp.com",
    projectId: "crwnstore-9a69f",
    storageBucket: "crwnstore-9a69f.appspot.com",
    messagingSenderId: "332458769185",
    appId: "1:332458769185:web:ba38a0a495e2fe476a1c60"
  };

 
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  })
  export const auth = getAuth();
  export const signInWithGooglePopup =()=>{
    return signInWithPopup(auth,provider)
  }
export const DB = getFirestore()

export const createUSerDocumentFromAuth =async(userAuth)=>{
    const userDocRef=doc(DB,'users',userAuth.uid)
    

    const userSnapshot = await getDoc(userDocRef)


   if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createAt = new Date()
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt
      })
    }
    catch(error){
      console.log(error.messege);
    } 
   }

   else{
    return userDocRef
   }
}