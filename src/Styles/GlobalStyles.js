import {createGlobalStyle} from "styled-components";
import {ResetCss} from "./ResetCss";

export const GlobalStyles = createGlobalStyle`
    ${ResetCss};
    body,html,*{
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
    }
`;