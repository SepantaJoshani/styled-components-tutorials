import { css } from "styled-components";

export const PaddingWrapper = css`
  padding: 1rem 1.5rem;
  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding: 1rem 3rem;
  }
  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    padding: 1rem 6rem;
  }
`;

export const MaxWidth = css`
  max-width: 1280px;
  margin: 0 auto;
`;
