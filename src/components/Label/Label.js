import {StyledWrapper} from "./Label.styled";
import {StyledText} from "./Label.styled";

export const Label = ({children, text}) => {
    return (
        <StyledWrapper>
            <StyledText>{text}</StyledText>
            {children}
        </StyledWrapper>
    )
}