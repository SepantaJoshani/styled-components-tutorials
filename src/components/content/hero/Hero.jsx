import React from "react";
import { Content, HeroContainer, ImgContainer } from "./Hero.styled";
import StyledButton from "../../common/StyledButton";

const Hero = () => {
  return (
    <HeroContainer>
      <ImgContainer />
      <Content>
        <h1>دوره های آموزشی اکادمی فرانت هوکس</h1>
        <p>برنامه نویسی را سریع، آسان و پروژه محور یاد بگیرید</p>
        <StyledButton>مشاهده دوره ها</StyledButton>
        <p>
          اگه هنوز برات سواله که چه دوره ای برات مفیده؟
          <a href="#">حتما مقاله نقشه راه فرانت اند رو بخون</a>
        </p>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
