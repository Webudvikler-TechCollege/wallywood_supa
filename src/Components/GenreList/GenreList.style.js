import styled from "styled-components"
import { ResetList } from "../../Styled/Mixins.style"

export const GenreListContainer = styled.div`

  ul {
    display: none;
    ${ResetList}
    
    @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
      display: block;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
    }
    .active {
      color: ${(props) => props.theme.colors.secondary};
      &::before {
        content: "» ";
      }
    }
  }

  select {
    width: 100%;
    padding: 0.4rem;
    margin: 0 auto;

    @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {      
      display: none;
      margin-bottom: 1rem;
    }
  }
`
