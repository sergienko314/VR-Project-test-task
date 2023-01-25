
import { Img, Item, List, MainDiv, Text, Title } from "./Benefits.styled";
import { dataBenefits } from "./dataBenefits";
const Benefits = () => {
  return (
    <MainDiv>
          <List>{dataBenefits.map(({ title, text, img }) => <Item key={title}><Img img={img}></Img><Title>{title}</Title>
              <Text>{text}</Text></Item>)}</List>
    </MainDiv>
  );
};

export default Benefits;