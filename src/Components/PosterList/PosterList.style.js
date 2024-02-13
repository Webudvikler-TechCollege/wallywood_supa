import styled from "styled-components"
import { Reset } from "../../Styled/Mixins.style"

export const PosterListContainer = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      padding-bottom: 2rem;
      text-align: center;
      figure {
        ${Reset}

        img {
          max-width: 14rem;
          border: solid 1px ${(props) => props.theme.colors.senary};
        }
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.tertiary};
        font-size: 1rem;
        font-weight: bold;
      }

      p span {
        font-size: ${(props) => props.theme.fontsizes.xs};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`
