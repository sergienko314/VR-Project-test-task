import { Button, Span, Text, Title, MainDiv, Img, Div } from "./Introduction.styled";


const Introduction = () => {
    const introductionText = "Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor."
    return (
        <MainDiv>
            <Img />
            <Div>
                <Title>
                    ABOUT
                    <br />
                    <Span>HYDRA VR</Span>
                </Title>
                <Text>{introductionText}</Text>
                <Button>LET’S GET IN TOUCH</Button>
            </Div>
        </MainDiv>
    );
};

export default Introduction;
