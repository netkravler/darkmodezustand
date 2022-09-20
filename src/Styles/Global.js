import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{

  width: 80vw;
  max-width: 100vw;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.Background};
  color: ${({ theme }) => theme.colors.Onbackground};

  a{
    color: ${({ theme }) => theme.colors.Surface};
    &:hover{
      color: ${({ theme }) => theme.colors.Onbackground} 
    }
  }

}


`;
