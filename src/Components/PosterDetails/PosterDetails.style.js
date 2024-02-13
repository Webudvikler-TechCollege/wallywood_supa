import styled from "styled-components"
import { Reset } from "../../Styled/Mixins.style"

export const PosterDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:last-of-type {
    margin-left: 1rem;
  }

  figure {
    ${Reset}

    img {
      width: 100%;
      max-width: 330px;
    }
  }

  p span {
			font-size: ${props => props.theme.fontsizes.xs};
      color: ${props => props.theme.colors.primary}
	}  
`
