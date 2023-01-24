import {
  ImgDiv,
  MainDiv,
  Title,
  Img,
  ContentDiv,
  Span,
  Text,
  Button,
} from "./Hero.styled";

const Hero = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <Title>
          <Span>Dive</Span> Into The Depths
          <br />
          Of <Span>Virtual Reality</Span>
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae.
              </Text>
              <Button>BUILD YOUR WORLD</Button>
      </ContentDiv>
      <ImgDiv>
        <Img />
      </ImgDiv>
    </MainDiv>
  );
};

export default Hero;
