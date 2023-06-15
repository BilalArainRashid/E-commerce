import React, {useState, useEffect} from "react";
import NewArrival from "../body/newArrival/NewArrival";
import NewArrivalSlider from "../body/newArrival/NewArrivalSlider";
import ProductList from "../body/productList/ProductList";
import Stories from "../body/productList/Stories";
import SocialMedia from "../body/socialMedia/SocialMedia";
import Video from "../body/video/video";
import BottomFooter from "../footer/BottomFooter";
import MainFooter from "../footer/MainFooter";
import DirectLink from "../header/DirectLink";
import Header from "../header/Header";
import Navbar from "../navbar/mainNavbar/Navbar";
import Search from "../navbar/Search";
import Women from "../navbar/Women";
import Top from "../../common/Top";
import Slider from "../body/productList/Slider";
import MobileNavbar from "../navbar/mobileNavbar/MobileNavbar";


const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      {<div>
        <Header/>
        <Top/>
        <DirectLink />
        <NewArrival />
        <NewArrivalSlider/>
        <Slider />
        <ProductList />
        <Video/>
        <Stories />
        <SocialMedia />
        <MainFooter/>
        <BottomFooter/>


      </div>}
    </div>




  );
};

export default Homepage;
