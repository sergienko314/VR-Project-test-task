import styled from "styled-components";
import { Link } from "react-scroll";
export const Navigation = styled.nav`
  display: flex;
  gap: 140px;
`;

export const ListNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 42px;
`;

export const ItemNav = styled.li`
  display: flex;
  list-style: none;
  position: relative;
`;

export const LinkItemNav = styled(Link)`
  display: inline-flex;

  align-items: center;
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  cursor: pointer;

  &.any {
    opacity: 1;
    font-weight: 800;
    ::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;

      display: block;

      width: 100%;
      height: 2px;
      background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
      border-radius: 50px;
      transition-property: opacity;
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
    }
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    opacity: 1;
    font-weight: 800;
  }
`;
export const ButtonsNav = styled.div`
  display: flex;
  gap: 38px;
  justify-content: baseline;
  align-items: center;
`;

export const ButtonNavLeft = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 40px;
  display: inline-flex;
  padding: 17px 37px;

  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;

  cursor: pointer;

  &.any {
    opacity: 1;
    font-weight: 800;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    font-weight: 800;
  }
`;

export const ButtonNavRight = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #343045;

  display: inline-flex;
  padding: 17px 37px;

  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border-radius: 40px;
  align-items: center;
  justify-content: center;

  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &.any {
    opacity: 1;
    font-weight: 800;
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    opacity: 1;
    font-weight: 800;
  }
`;
