import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  })
  export const auth = getAuth();
  export const signInWithGooglePopup =()=>{
    return signInWithPopup(auth,googleProvider)
  }
  export  const signInWithGoogleRedirect = ()=>{return signInWithRedirect(auth,googleProvider)}

export const DB = getFirestore()


export const createUSerDocumentFromAuth =async(userAuth,additionalInformation={})=>{
  if(!userAuth){
    return
  }

    const userDocRef=doc(DB,'users',userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

   if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createAt = new Date()

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    }
    
    catch(error){
      alert('sdr')
    } 
   }

   else{
    return userDocRef
   }
}


export const createAuthUserWithEmailAndPassword =async(email,password)=>{
  if(!email || !password){
    return
  }
  
   return await createUserWithEmailAndPassword(auth,email,password)
}