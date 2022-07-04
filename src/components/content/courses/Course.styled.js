import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.article)`
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: 1rem;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
`;

export const ContentWrapper = styled.div`
  padding: 0 1rem;
`;

export const CourseName = styled.p`
  font-size: 1.175rem;
  margin-bottom: 2rem;
`;

export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1rem;
  color: gray;
`;
export const VisitContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  column-gap: 1rem;
`;
export const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const PriceWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  font-size: 1rem;

  span {
    color: ${(p) => p.theme.palette.text};
  }
`;
