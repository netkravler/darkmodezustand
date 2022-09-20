import styled from "styled-components";

const StyledSection = styled.section`
 
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Rows = (props) => {
  const { first, second, third, fourth } = props;
  return (
    <StyledSection>
      <article>{first}</article>
      <article>{third}</article>
      <article>{second}</article>
      <article>{fourth}</article>
    </StyledSection>
  );
};
