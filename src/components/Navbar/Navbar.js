import {
    StyledWrapper,
    StyledSiteTitle,
    StyledMenuContainer,
    StyledToggleButton,
    StyledMenuLink,
    StyledLinkContainer, StyledLogoutButton
} from "./Navbar.styled";
import {useLogout} from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useState} from "react";
export const Navbar = () => {
    const [toggleMenu,setToggleMenu]= useState(true)
    const {user} = useAuthContext()
    const{logout} = useLogout()

    const handleLogout =()=> {
        logout()
    }

    return (
    <StyledWrapper>

        <StyledMenuContainer>
        <StyledSiteTitle to={'/'}>2048</StyledSiteTitle>
            <StyledLinkContainer toggleMenu={toggleMenu}>

                {!user && <StyledMenuLink to='/login'>Login</StyledMenuLink>}
                {!user && <StyledMenuLink to='/signup'>Signup</StyledMenuLink>}
                {user && <StyledMenuLink to='/'>Game</StyledMenuLink>}
                {user && <StyledMenuLink to='/profile'>Profile</StyledMenuLink>}
                {user && <StyledMenuLink to='/scores'>Scores</StyledMenuLink>}
                {user && <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>}
            </StyledLinkContainer>

        </StyledMenuContainer>
        <StyledToggleButton onClick={()=>setToggleMenu(!toggleMenu)}>
            {toggleMenu ? 'show' : 'hide'}
        </StyledToggleButton>
    </StyledWrapper>
    )
}