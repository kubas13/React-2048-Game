import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #E8485580;
  position: relative;




`;

export const StyledMenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    position: relative;

  }


`;

export const StyledSiteTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 40px;
  font-weight: bold;
`;

export const StyledMenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 22px;
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.6s;


  &.active {
    background-color: #E84855;
    color: white;
  }

  :hover {
    background-color: #E8485580;
    color: white;
  }

  @media (max-width: 800px) {
    border-radius: 0;
    width:100%;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  gap: 0 30px;

  @media (max-width: 800px) {
    width: 100%;
    display: ${({toggleMenu}) => toggleMenu ? 'none' : ''};
    left: 0;
    background-color: #fafafa;
    top: 100%;
    position: absolute;
    z-index: 10;
    flex-direction: column;
    gap:20px 0;


  }


`;

export const StyledLogoutButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  text-decoration: none;
  color: black;
  border: 1px solid #E84855;
  font-weight: bold;
  font-size: 22px;
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.6s;
`

export const StyledToggleButton = styled.div`

  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);



  @media (min-width: 800px) {
    display: none;


  }
`