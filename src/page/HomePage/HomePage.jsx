import Contacts from "components/Contacts/Contacts";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Introduction from "components/Introduction/Introduction";
import SectionArrow from "components/SectionArrow/SectionArrow";
import { Container, Main, SectionFooter } from "./HomePage.styled";
 const DataText = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
const HomePage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <Contacts />
        <SectionArrow title='INTRODUCTION' span='TO HYDRA VR' text={DataText} ></SectionArrow>
        <Introduction/>
      </Main>
      <SectionFooter></SectionFooter>
    </Container>
  );
};

export default HomePage;
