import {
  Campaigns,
  Cards,
  Categories,
  Favorites,
  Header,
  HeroSection,
  MobileApp,
  Footer,
  Info
} from "./components/index";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <div className="App">
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaigns />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
      <Info />
    </div>
  );
}

export default App;
