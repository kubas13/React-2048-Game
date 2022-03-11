import React from "react";
import {StyledWrapper} from "./MainPage.styled";
import {Board} from "../../components/board/Board";

import {Link} from "react-router-dom";
export const MainPage = () => {
    return (
        <StyledWrapper>
            <Board/>
        </StyledWrapper>
    )
}