import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PosterDetailsContainer } from "./PosterDetails.style"
import { useForm } from "react-hook-form"
import { useSupabase } from "../../Providers/SupabaseProvider"

export const PosterDetails = () => {
  const { supabase } = useSupabase()
  const [ poster, setPoster ] = useState([])
  const { posterSlug } = useParams()
  const { register, handleSubmit, formState: { errors }} = useForm()

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("posters")
        .select("*")
        .eq("slug", posterSlug)
        .limit(1)
        .single()
      if (error) {
        console.error("Error fetching posters", error)
      } else {
        setPoster(data)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [posterSlug, supabase])

  const add2Cart = async data => {
    if (supabase) {

      const { data: { session: { user: { id: user_id }}}} = await supabase.auth.getSession()

      const { data: cart, error } = await supabase
        .from("cart")
        .insert([
          {
            user_id: user_id,
            poster_id: data.poster_id,
            quantity: data.quantity
          }
        ])
      if (error) {
        console.error("Error adding to cart", error)
      } else {
        console.log("Added to cart", cart)
      }
    }
  }

  if(!poster.id) {
    return <div>Loading...</div>
  }  

  return (
    <PosterDetailsContainer>
      <div>
        <figure>
          <img src={poster.image} alt={poster.name} />
        </figure>
      </div>
      <div>
        <h2>{poster.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: poster.description }}></p>
        <p>
          Mål: {poster.width} x {poster.height} cm
        </p>
        <p>Varenummer: {poster.id}</p>
        <p>Pris: {poster.price},00 DKK</p>
        <p>Antal på lager: {poster.stock} DKK</p>

        <form onSubmit={handleSubmit(add2Cart)}>
          <input type="hidden" defaultValue={poster.id} {...register('poster_id')} />
          <input type="number" {...register('quantity', { required: true })} />
          <button>Læg i kurv</button>
        </form>
      </div>
    </PosterDetailsContainer>
  )
}
