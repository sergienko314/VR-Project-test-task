import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 11px;
`;

export const Item = styled.div`
  width: 310px;
  height: 511px;
  background: radial-gradient(50% 50% at 50% 50%, #433d60 0%, #211e2e 100%);
  border-radius: 40px;
`;
export const Title = styled.p``;
export const Text = styled.p``;
export const Img = styled.div`
  background-image: ${(props) => props.img};
  background-size: contain;

  width: 190.92px;
  height: 190.92px;
`;
