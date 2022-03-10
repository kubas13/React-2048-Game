import {useState} from "react";
import {FormInput} from "../../components/FormInput/FormInput";
import {StyledLoginForm, StyledLoginWrapper, StyledTitle} from "./LoginPage.styled";
import {StyledButton} from "../../components/Button/Button.styled";
import {Label} from "../../components/Label/Label";
import {useLogin} from '../../hooks/useLogin'

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()

        login(email, password)
    }

    return (<StyledLoginWrapper>
            <StyledTitle>Login</StyledTitle>
            <StyledLoginForm onSubmit={handleSubmit}>
                <Label text='email'>
                    <FormInput type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Label>
                <Label text='password'>
                    <FormInput type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Label>
                <StyledButton>Login</StyledButton>
            </StyledLoginForm>
        </StyledLoginWrapper>)
}