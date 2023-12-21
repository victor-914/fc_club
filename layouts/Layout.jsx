import CartMenu from "../scenes/global/CartMenu";
import Footer from "../scenes/global/Footer";
import Navbar from "../scenes/global/Navbar";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import WishList from "../scenes/global/WishList";
import HeroHistory from "../components/heroHIstory/HeroHistory";

export default function Layout({ children }) {
  return (
    <>
      <CartMenu />
      <WishList />
      <MobileMenu />
      <Navbar />
      <main>{children}</main>
      <HeroHistory />
      <Footer />
    </>
  );
}
