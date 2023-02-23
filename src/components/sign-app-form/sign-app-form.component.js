import {useState,useEffect} from 'react'
import { createAuthUserWithEmailAndPassword,createUSerDocumentFromAuth } from '../../utiles/firebase/firebase.utilis'
import FormInput from '../form-imput/form-imput.component'

const defaultformFields ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SingUpForm=()=>{

const [formField,setFormField]=useState(defaultformFields)
const{displayName,email,password,confirmPassword}=formField

const resetFormFields =()=>{
    setFormField(defaultformFields)
}

const handleSubmit =async(event)=>{
    event.preventDefault()
    if(password===confirmPassword){
       try{ 
        const {user} = await createAuthUserWithEmailAndPassword(email,password)
        await createUSerDocumentFromAuth(user,{displayName})
        resetFormFields()
         }
        catch(er){
            console.log(er);
        }
    }
    else{
        alert('your password dont match')
        return
    }
    
}
const handleChange=(event)=>{
    const {name,value}=event.target
    setFormField({...formField,[name]:value})
}

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
               <FormInput label ='Display name' type='text' required onChange={handleChange} name ='displayName' value ={displayName} /> 
               <FormInput label ='Email' type='email' required onChange={handleChange} name ='email' value ={email}/> 
               <FormInput label ='Password' required onChange={handleChange} name ='password' value ={password} /> 
               <FormInput label ='Confirm password' required onChange={handleChange} name ='confirmPassword' value ={confirmPassword}/> 
               <button type='submit'>Sing Up</button>
            </form>
        </div>
    )
}
export default SingUpForm