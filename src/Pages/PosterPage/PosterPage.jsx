import { Outlet } from "react-router-dom"
import { GenreList } from "../../Components/GenreList/GenreList"
import { PosterPageContainer } from "./PosterPage.style"

export const PosterPage = () => {
  return (
    <PosterPageContainer>
      <GenreList />
      <Outlet />
    </PosterPageContainer>
  )
}
