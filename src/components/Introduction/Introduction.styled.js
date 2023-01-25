import styled from "styled-components";
import about from "../../images/about.png";
import aboutBG from "../../images/about.svg";
export const MainDiv = styled.div`
  position: relative;
  display: flex;
  gap: 117px;
  margin-bottom: 111px;
  background-image: url(${aboutBG});
  background-size: contain;
  background-repeat: no-repeat;
  /* ::before {
    position: absolute;
    content: "";
  } */
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  border: none;
  width: 524px;
  height: 557px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${about});
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  margin-top: 54px;
`;
export const Span = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  color: rgba(255, 255, 255, 0.95);
`;
export const Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 630px;
  margin-top: 42px;
`;

export const Button = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #343045;
  justify-content: center;
  align-items: center;
  display: flex;

  width: 214px;
  height: 48px;
  margin-top: 48px;

  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border-radius: 40px;
`;
