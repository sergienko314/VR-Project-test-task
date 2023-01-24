import icons from "../../images/sprite.svg";
import { Div,Wraper, Icon, MainDiv, Span, Title, Text } from "./SectionArrow.styled";

const SectionArrow = ({ title, span, text }) => {
  return (
    <MainDiv>
     <Wraper><Title>{title}</Title>
      <Div>
        <Span>{span}</Span>
        <Icon>
          <use href={`${icons}#long-shape`}></use>
        </Icon>
      </Div></Wraper> 
      <Text>{text}</Text>
    </MainDiv>
  );
};

export default SectionArrow;
