import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
`;
const Arrow = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: white;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  position: absolute;
  top: 50%;
`;

const Wrapper = styled.div`
  padding: 2rem;
  height: 100%;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: black; */
`;
const ImageContainer = styled.div`
  /* background-color: red; */
  height: 100%;
  border-radius: 1rem;
  flex: 1;
`;
const InfoContainer = styled.div`
  background-color: green;
  padding:3rem;
  flex: 1;
`;
const Image = styled.img`
 height: 100%;
`;



const Title = styled.h1`
font-size:10rem;
font-weight:bold;
`

const Desc = styled.p`
font-size:1rem;
`

const Button = styled.button`
height: 2rem;
width: 2rem;
border-radius: 1rem;
background-color:blue;
`

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></Image>
          </ImageContainer>
          <InfoContainer>
              <Title>Dress 1</Title>
              <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quo a. Qui impedit iure repudiandae facilis esse, quisquam aspernatur dicta similique error hic voluptas ex repellat adipisci enim nihil rerum!</Desc>
                <Button>Buy NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow style={{ left: "10px" }}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Arrow style={{ right: "10px" }}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
