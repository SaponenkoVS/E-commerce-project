import {signInWithGooglePopup,createUSerDocumentFromAuth} from '../../../../src/utiles/firebase/firebase.utilis'
import SingUpForm from '../../sign-app-form/sign-app-form.component';


const SingIn = () =>{
 const logGoogleUser =async()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef =await createUSerDocumentFromAuth(user)
 } 



    return(
        <div>
            <h1>this is SingnIn</h1>
            <button onClick={logGoogleUser}>Sing in with Google</button>
            <SingUpForm/>
        </div>
    )
}

export default SingIn