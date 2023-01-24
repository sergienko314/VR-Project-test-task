import styled from "styled-components";
import logo from "../../images/logo.svg";
import LogoText from "../../images/logo-text.svg";

export const Logo = styled.div`
  width: 100%;
  height: 100%;
`;

export const SvgLogo = styled.svg`
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
export const SvgText = styled.svg`
  background-image: url(${LogoText});
  background-repeat: no-repeat;
`;
export const NavStyled = styled.nav``;
