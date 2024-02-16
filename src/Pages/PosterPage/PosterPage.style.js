import styled from "styled-components"

export const PosterPageContainer = styled.div`
  display: grid;
  grid-template-columns: 12fr;

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    grid-template-columns: 3fr 9fr;    
  }
`
