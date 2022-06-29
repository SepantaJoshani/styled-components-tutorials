import styled from "styled-components";

 const StyledButton = styled.button`
  background-image: ${(p) => p.theme.palette.gradient};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  outline: none;
  border: 0;
  cursor: pointer;
`;

export default StyledButton