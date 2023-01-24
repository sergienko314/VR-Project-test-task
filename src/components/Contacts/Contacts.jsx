import { Item, List,Icon, MainDiv, Div, Text, Title } from "./Contacts.styled";
import icons from '../../images/sprite.svg'
const Contacts = () => {
  const data = [
    {
      title: "Pay Us a Visit",
      text: "Union St, Seattle, WA 98101, United States",
      icon: "#Location-Icon",
    },
    { title: "Give Us a Call", text: "(110) 1111-1010", icon: "#phone-call" },
    {
      title: "Send Us a Message",
      text: "Contact@HydraVTech.com",
      icon: "#mail",
    },
  ];
  return (
    <MainDiv>
      <List>
        {data.map(({ title, text, icon }) => 
          <Item>
            <Icon>
              <use href={`${icons}${icon}`}></use>
            </Icon>
            <Div>
              <Title>{title}</Title>
              <Text>{text}</Text>
            </Div>
          </Item>
        )}
      </List>
    </MainDiv>
  );
};

export default Contacts;
