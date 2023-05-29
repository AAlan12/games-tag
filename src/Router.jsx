import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { FavoritesProvider } from "./contexts/Favorites"
import { Player } from "./pages/Player";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<Player />} />
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}
