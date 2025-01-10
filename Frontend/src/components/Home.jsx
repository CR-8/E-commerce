import Nav from "../homeComponents/Navbar";
import Tabs from "../homeComponents/TabBar"
import Slider from "../homeComponents/Slider";
import Prod_Section from "../homeComponents/ProductSection";
import Footer from "../homeComponents/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Tabs />
      <Slider/>
      <Prod_Section />
      <Footer />
    </div>
  );
}

export default Home;