import React from "react";
import styled from "styled-components";
import { Timer, Arrow } from "../../../assets/images/index";
import StyledButton from "../../common/StyledButton";

const Course = ({ content, duration, price, image }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage src={image} alt={content} />
      </ImageContainer>

      <ContentWrapper>
        <CourseName>{content}</CourseName>
        <DurationContainer>
          <img src={Timer} alt="timer" />
          <p>مدت {duration.toLocaleString("fa-IR")} ساعت</p>
        </DurationContainer>
        <VisitContainer>
          <a href="#">مشاهده دوره</a>
          <img src={Arrow} alt="arrow" />
        </VisitContainer>
        <CardAction>
          <StyledButton>ثبت نام دوره</StyledButton>
          <PriceWrapper>
            <span>{price.toLocaleString("fa-IR")}</span>
            <span>تومان</span>
          </PriceWrapper>
        </CardAction>
      </ContentWrapper>
    </CardContainer>
  );
};

export default Course;

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 1px 7px 11px -4px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  background: ${(p) => p.theme.palette.cardBg};
  p {
    color: ${(p) => p.theme.palette.text};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  padding: 0 1rem;
`;

const CourseName = styled.p`
  font-size: 1.175rem;
  margin-bottom: 2rem;
`;

const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1rem;
  color: gray;
`;
const VisitContainer = styled.div`
  display: block;
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  a {
    color: ${(p) => p.theme.palette.cardVisit};
  }
`;
const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const PriceWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  font-size: 1rem;

  span {
    color: ${(p) => p.theme.palette.text};
  }
`;
