import Header from "./components/layouts/Header";
import Catalogue from "./components/pages/CATALOGUE";
import Fashion from "./components/pages/Fashion";
import Favourite from "./components/pages/Favourite";
import Home from "./components/pages/Home";
import Lifestyle from "./components/pages/Lifestyle";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Catalogue />
      <Fashion />
      <Favourite />
      <Lifestyle />
    </>
  );
}

export default App;
