import { CartList } from '../../Components/CartList/CartList'
import { ContentWrapper } from '../../Components/ContentWrapper/ContentWrapper'

export const CartPage = () => {
  return (
    <ContentWrapper title="Indkøbskurv">
      <CartList />
    </ContentWrapper>
  )
}
