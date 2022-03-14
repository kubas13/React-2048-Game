import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${ p=> p.theme.colors.burgundy};
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
  color: ${ p=> p.theme.colors.black};
  font-size: ${ p=> p.theme.fontSizes.L};
  font-weight: bold;
`;

export const StyledMenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${ p=> p.theme.colors.black};
  font-weight: bold;
  font-size: ${ p=> p.theme.fontSizes.S};
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.6s;


  &.active {
    background-color: ${p=> p.theme.colors.pink};
    color: ${p=> p.theme.colors.white};
  }

  :hover {
    background-color: ${ p=> p.theme.colors.burgundy};
    color: ${ p=> p.theme.colors.white};
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
    background-color: ${ p=> p.theme.colors.white};
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
  color: ${ p=> p.theme.colors.black};
  border: 1px solid ${ p=> p.theme.colors.pink};
  font-weight: ${ p=> p.theme.fontWeight.bold};
  font-size: ${ p=> p.theme.fontSizes.S};
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

// export const StyledThemeButton = styled.button`
//   background: ${p => p.theme.colors.pink};
//   color: ${p => p.theme.colors.black};
// `;