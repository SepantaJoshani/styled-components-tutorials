import { motion } from "framer-motion";
import styled from "styled-components";

export const CoursesContainer = styled.section`
  margin-top: 1rem;
`;
export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1.5rem;
`;
export const FilterBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.5rem;
  background-color: ${(p) => p.theme.palette.link};
  border: 0;
  outline: 0;
  border-radius: 10px;
  color: #fff;
cursor: pointer;
  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
`;
export const CourseHeading = styled.div`
  display: flex;
  justify-content: center;

  div {
    position: relative;
    margin-bottom: 1.5rem;

    p {
      font-weight: 900;
      font-size: 1.25rem;
      z-index: 10;
      text-align: center;
      position: relative;
      white-space: nowrap;
      color: ${(p) => p.theme.palette.text};
    }

    span {
      position: absolute;
      width: 100%;
      height: 1rem;
      left: 0;
      bottom: -0.25rem;
      background-color: ${(p) => p.theme.palette.underline};
    }

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      font-size: 1.5rem;
      margin-bottom: 2rem;

      br {
        display: none;
      }
    }
  }
`;

export const CoursesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1;
  gap: 3rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
