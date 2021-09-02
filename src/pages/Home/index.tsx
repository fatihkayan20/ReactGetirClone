import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginCard from "./components/LoginCard";
import MobileApp from "./components/MobileApp";
import Slider from "./components/Slider";

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <>
      <Header />
      {/* Small Device */}

      <div className="sm:hidden block bg-white">
        <Campaigns {...{ slideDelay: 5000 }} />
        <LoginCard />
        <Categories />
        <Favorites />
        <MobileApp />
        <Cards />
        <Footer />
      </div>

      {/* Medium Device */}
      <div className="sm:block hidden bg-gray-100">
        <Slider {...{ slideDelay: 5000 }} />
        <Categories />
        <Campaigns {...{ slideDelay: 5000 }} />
        <Favorites />
        <MobileApp />
        <Cards />
        <Footer />
      </div>
    </>
  );
}
