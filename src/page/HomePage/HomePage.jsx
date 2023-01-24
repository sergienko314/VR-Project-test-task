import Contacts from "components/Contacts/Contacts";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Introduction from "components/Introduction/Introduction";
import { Container, Main, SectionFooter } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <Contacts />
        <Introduction/>
      </Main>
      <SectionFooter></SectionFooter>
    </Container>
  );
};

export default HomePage;
