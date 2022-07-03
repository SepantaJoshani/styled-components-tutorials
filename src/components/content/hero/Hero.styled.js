import styled from "styled-components";
import Banner from "../../../assets/images/banner.png";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const ImgContainer = styled.div`
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  aspect-ratio: 16 / 9;

  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    width: 50%;
    height: 30rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;

  h1 {
    color: ${(p) => p.theme.palette.text};
    font-weight: bolder;
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 1rem;

    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  p {
    color: ${(p) => p.theme.palette.text};
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 1rem 0;
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: 1.125rem;
      line-height: 1.75rem;
      margin: 2rem 0;
    }
  }
  p:last-of-type {
    color: #737373;
    font-size: 0.75rem;
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
