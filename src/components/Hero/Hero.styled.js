import { Link } from "react-scroll";
import styled from "styled-components";

import hero from "../../images/hero.png";

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 88px;
`;
export const ContentDiv = styled.div`
  margin-top: 48px;
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  margin-bottom: 36px;
  color: #ffffff;
`;
export const Span = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;

  background: linear-gradient(269deg, #c0b7e8 -3.72%, #8176af 82.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Text = styled.p`
  width: 450px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 51px;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 524px;
  height: 455px;

  background: rgba(0, 0, 0, 0.13);
  border-radius: 100px 100px 100px 240px;
`;

export const Img = styled.div`
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 100px 100px 100px 240px;
  width: 490px;
  height: 426px;
  /* margin: 14px 18px 15px 16px; */
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #343045;
  padding: 17px 40px;

  width: 214px;
  height: 48px;

  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border-radius: 40px;
`;
