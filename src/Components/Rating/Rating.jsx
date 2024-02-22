import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { RatingContainer } from "./Rating.style"
import { useAuth } from "../../Providers/AuthProvider"

export const Rating = ({ poster_id }) => {
  const { supabase } = useSupabase()
  const [userStars, setUserStars] = useState(0)
  const { loginData } = useAuth()
  const arrStars = [...Array(5)].map((_, index) => ({
    value: index + 1,
    selected: false,
  }))

  const handleMouseOver = (value) => {
    for (let i = 0; i < value; i++) {
      arrStars[i].selected = true
    }
    console.log(arrStars)
  }

  const getRatings = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .select("user_id, num_stars")
      .eq("poster_id", poster_id)
    if (error) {
      console.error("Error fetching ratings", error)
    } else {
      const userRating = data.find(
        (rating) => rating.user_id === loginData.user.id
      )
      if (userRating) {
        setUserStars(userRating.num_stars)
      }
    }
  }

  const addRating = async (num_stars) => {
    await deleteRating()

    const { data, error } = await supabase.from("ratings").insert([
      {
        poster_id: poster_id,
        num_stars: num_stars,
        user_id: loginData.user.id,
      },
    ])
    if (error) {
      console.error("Error creating rating", error)
    } else {
      console.log("Rating created", data)
      getRatings()
    }
  }

  const deleteRating = async () => {
    const { data, error } = await supabase
      .from("ratings")
      .delete()
      .eq("poster_id", poster_id)
      .eq("user_id", loginData.user.id)
    if (error) {
      console.error("Error deleting rating", error)
    } else {
      console.log("Rating deleted", data)
    }
  }

  useEffect(() => {
    getRatings()
  }, [loginData, setUserStars])

  return (
    <>
      {loginData && loginData.user && (
        <RatingContainer>
          {arrStars.map((item) => {
            const is_selected = item.value <= userStars
            return (
              <svg key={item.value} viewBox="0 0 117.34 111.59">
                <polygon
                  className={is_selected ? "selected" : ""}
                  data-placement={item.value}
                  onMouseOver={(e) => {
                    handleMouseOver(e.target.getAttribute("data-placement"))
                  }}
                  onClick={(e) => {
                    addRating(e.target.getAttribute("data-placement"))
                  }}
                  points="58.67 91.97 23.07 110.68 29.87 71.04 1.07 42.97 40.87 37.19 58.67 1.13 76.47 37.19 116.26 42.97 87.47 71.04 94.26 110.68 58.67 91.97"
                />
              </svg>
            )
          })}
        </RatingContainer>
      )}
    </>
  )
}
