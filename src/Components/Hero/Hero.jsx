import { HeroContainer } from './Hero.style'
import Curtain from '../../Assets/images/curtain.jpg';

export const Hero = ({ area }) => {
  return (
	<HeroContainer $area={area}>
		<img src={Curtain} alt="Wallywood" />
	</HeroContainer>
  )
}
