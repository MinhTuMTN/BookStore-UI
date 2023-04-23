import React from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Container = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 9%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff5ee;
`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 9%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff5ee;
`;

const SliderContent = styled.div`
  width: 80%;
`;

const Slider = () => {
  return (
    <Container>
      <LeftArrow>
        <ArrowBackIosNewOutlinedIcon />
      </LeftArrow>
      <SliderContent>
        <img
          width="100%"
          src="https://cdn0.fahasa.com/media/magentothem/banner7/MSAT_mainbanner-T4-840x320.jpg"
          alt=""
        />
      </SliderContent>
      <RightArrow>
        <ArrowForwardIosOutlinedIcon />
      </RightArrow>
    </Container>
  );
};

export default Slider;
