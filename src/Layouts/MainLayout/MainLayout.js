import {StyledContentContainer, StyledWrapper} from "./MainLayout.styled";
import {Navbar} from "../../components/Navbar/Navbar";
import {useAuthContext} from "../../hooks/useAuthContext";

export const MainLayout = ({children}) => {

    const state = useAuthContext()

    return (
        <StyledWrapper>
            <Navbar/>
            <StyledContentContainer>
            {children}
            </StyledContentContainer>
        </StyledWrapper>
    )
}