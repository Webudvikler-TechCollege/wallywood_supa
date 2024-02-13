import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { NavLink } from "react-router-dom"
import { GenreListContainer } from "./GenreList.style"

export const GenreList = () => {
  const [genreData, setGenreData] = useState([])
  const { supabase } = useSupabase()

  const getData = async () => {
    if (supabase) {
      const { data, error } = await supabase
        .from("genres")
        .select("title, slug, id")
        .order("title")
      if (error) {
        console.error("Error fetching genres", error)
      } else {
        setGenreData(data)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [setGenreData, supabase])

  return (
    <GenreListContainer>
      <h3>Vælg genre &raquo;</h3>
      <ul>
        {genreData &&
          genreData.map((genre) => {
            return (
              <li key={genre.id}>
                <NavLink to={genre.slug}>{genre.title}</NavLink>
              </li>
            )
          })}
      </ul>
    </GenreListContainer>
  )
}
