import { CartListContainer } from "./CartList.style"
import { AiFillDelete } from "react-icons/ai"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useEffect, useState } from "react"

export const CartList = () => {
  const { supabase } = useSupabase()
  const [cartData, setCartData] = useState([])

  const getData = async () => {
    if (supabase) {
      const {
        data: {
          session: {
            user: { id: user_id },
          },
        },
      } = await supabase.auth.getSession()

      const { data, error } = await supabase
        .from("cart")
        .select("*, posters(name, price)")
		    .eq("user_id", user_id)
      if (error) {
        console.error("Error fetching cart", error)
      } else {
        console.log(data)
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
  )
}
