import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { NavLink, useNavigate } from "react-router-dom"
import { GenreListContainer } from "./GenreList.style"

export const GenreList = () => {
  const [genreData, setGenreData] = useState([])
  const { supabase } = useSupabase()
  const navigate = useNavigate()
  const [ selectedOption, setSelectedOption ] = useState("")

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
    const url = `/posters/${e.target.value}`
    navigate(url)
  }  

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
      <ul>
        <li><b>Vælg genre:</b></li>
        {genreData &&
          genreData.map((genre) => {
            return (
              <li key={genre.id}>
                <NavLink to={genre.slug}>{genre.title}</NavLink>
              </li>
            )
          })}
      </ul>
      <select value={selectedOption} onChange={handleSelectChange}>
        {genreData &&
          genreData.map((genre) => {
            return (
              <option key={genre.id} value={genre.slug}>
                {genre.title}
              </option>
            )
          })}
      </select>
    </GenreListContainer>
  )
}
