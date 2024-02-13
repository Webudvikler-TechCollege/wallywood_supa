import { Routes, Route } from "react-router-dom"
import { HomePage } from "../../Pages/HomePage/HomePage"
import { PosterPage } from "../../Pages/PosterPage/PosterPage"
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage"
import { PosterList } from "../PosterList/PosterList"
import { PosterDetails } from "../PosterDetails/PosterDetails"
import { LoginPage } from "../../Pages/LoginPage/LoginPage"
import { CartPage } from "../../Pages/CartPage/CartPage"
import { ContactPage } from "../../Pages/ContactPage/ContactPage"

export const AppRouter = () => {
  return (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/posters" element={<PosterPage />}>
			<Route path=":genreSlug" element={<PosterList />} />
			<Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
		</Route>	
		<Route path="/contact" element={<ContactPage />} />
		<Route path="/cart" element={<CartPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="*" element={<NotFoundPage />} />
	</Routes>
  )
}
