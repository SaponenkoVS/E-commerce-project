import {signInWithGooglePopup,createUSerDocumentFromAuth} from '../../../../src/utiles/firebase/firebase.utilis'

const SingIn=()=>{
 const logGoogleUser =async()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef =await createUSerDocumentFromAuth(user)
 } 


    return(
        <div>
            <h1>this is SingnIn</h1>
            <button onClick={logGoogleUser}>Sing in with Google</button>
        </div>
    )
}

export default SingIn