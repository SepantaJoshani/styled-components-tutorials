import React from "react";
import styled from "styled-components";
import { Timer, Arrow } from "../../../assets/images/index";
import StyledButton from "../../common/StyledButton";
import {
  CardAction,
  CardContainer,
  ContentWrapper,
  CourseName,
  DurationContainer,
  ImageContainer,
  PriceWrapper,
  StyledImage,
  VisitContainer,
} from "./Course.styled";

const Course = ({ content, duration, price, image }) => {
  return (
    <CardContainer
      layout
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
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
