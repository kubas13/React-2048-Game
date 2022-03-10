import React, {useState} from "react";
import {
    StyledSignupForm, StyledSignupWrapper, StyledTitle
} from "./SignupPage.styled";
import {FormInput} from "../../components/FormInput/FormInput";
import {StyledButton} from "../../components/Button/Button.styled";
import {Label} from "../../components/Label/Label";
import {useSignup} from "../../hooks/useSignup";
import {useAuthContext} from "../../hooks/useAuthContext";

export const SignupPage = () => {


    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signup}  = useSignup()


    const state = useAuthContext()
    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email,password,username)

    }
    

    return <StyledSignupWrapper>
        <StyledTitle>Signup</StyledTitle>
        <StyledSignupForm onSubmit={handleSubmit}>
            <Label text='email'>
                <FormInput type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </Label>
            <Label text='username'>
                <FormInput type='text' onChange={(e) => setUsername(e.target.value)} value={username}/>
            </Label>
            <Label text='password'>
                <FormInput type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            </Label>
            <StyledButton>Submit</StyledButton>
        </StyledSignupForm>
    </StyledSignupWrapper>
}