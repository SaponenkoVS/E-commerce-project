import {signInWithGooglePopup,createUSerDocumentFromAuth} from '../../../../src/utiles/firebase/firebase.utilis'
import SingUpForm from '../../sign-app-form/sign-app-form.component';
import Button from '../../Button/button.component';

const SingIn = () =>{
 const logGoogleUser =async()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef =await createUSerDocumentFromAuth(user)
 } 



    return(
        <div>
            <h1>this is SingnIn</h1>
            <Button buttonType='google' onClick={logGoogleUser}>Sing in with Google</Button>
            <SingUpForm/>
        </div>
    )
}

export default SingIn