import styled from "styled-components";
import logo from "../../../images/logo.svg";
import LogoText from "../../../images/logo-text.svg";

export const LogoDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  height: 103px;
`;

export const SvgLogo = styled.svg`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 103px;
  height: 103px;
`;
export const SvgText = styled.svg`
  background-image: url(${LogoText});
  background-repeat: no-repeat;
  background-size: contain;

  width: 80px;
  height: 103px;
  margin-top: 25%;
`;
