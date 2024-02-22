import { CartListContainer } from "./CartList.style"
import { AiFillDelete } from "react-icons/ai"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useEffect, useState } from "react"
import { useAuth } from "../../Providers/AuthProvider"

export const CartList = () => {
  const { supabase } = useSupabase()
  const { loginData } = useAuth()
  const [ cartData, setCartData ] = useState([])

  const getData = async () => {
    if(supabase && loginData && loginData.user) {

      const { data, error } = await supabase
        .from("cart")
        .select("*, posters(name, price)")
		    .eq("user_id", loginData.user.id)
      if (error) {
        console.error("Error fetching cart", error)
      } else {
        setCartData(data)
      }
    }
  }

  let sum = cartData.reduce((prev, current) => {
    return prev + +current.posters.price * current.quantity
  }, 0)

  useEffect(() => {
    getData()
  }, [setCartData, supabase])

  const handleTrashClick = async (id) => {
    if (supabase) {
      const { error } = await supabase.from("cart").delete().eq("id", id)
      if (error) {
        console.error("Error deleting from cart", error)
      } else {
        getData()
      }
    }
  }

  return (
    <>
    {loginData && loginData.user ? (
      <CartListContainer>
      <div>
        <div>Produkt</div>
        <div>Antal</div>
        <div>Pris</div>
        <div>Handling</div>
      </div>
      {cartData &&
        cartData.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.posters.name}</div>
              <div>{item.quantity}</div>
              <div>{item.posters.price},00 DKK</div>
              <div>
                <AiFillDelete onClick={() => handleTrashClick(item.id)} />
              </div>
            </div>
          )
        })}
      <div>
        <div>Total</div>
        <div></div>
        <div>{sum},00 DKK</div>
      </div>
    </CartListContainer>

    ) : (
        <p>Log ind for at se indkøbskurv</p>
    )}
    </>
  )
}
