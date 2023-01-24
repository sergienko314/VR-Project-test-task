import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 26px 39px;
  margin-bottom: 94px;

  background: radial-gradient(
      50% 2900.76% at 50% 53.89%,
      rgba(58, 52, 86, 0.95) 0%,
      #211e2e 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
  border-radius: 90px;
`;
export const ContentDiv = styled.div``;
export const List = styled.ul`
  list-style: none;
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :nth-child(2n) {
    border-left: 1px solid rgba(192, 183, 232, 0.33);
    border-right: 1px solid rgba(192, 183, 232, 0.33);
    padding: 0px 66px;
    margin: 0 50px 0 42px;
  }
  :first-child {
    svg {
      use {
        stroke: none;
        fill: #c0b7e8;
      }
    }
  }
`;
export const Div = styled.div`
  margin-left: 17px;
`;
export const Icon = styled.svg`
  height: 70px;
  width: 70px;

  use {
    stroke: #c0b7e8;
    fill: none;
  }
`;
export const Title = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
export const Text = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;
