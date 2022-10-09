import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CatCard from "./components/CatCard";
import Footer from "./components/Footer";
import { CatProvider } from "./context/CatProvider";
function App() {
  return (
    <CatProvider>
      <Header />
      <Navbar />
      <CatCard />
      <Footer />
    </CatProvider>
  );
}

export default App;
