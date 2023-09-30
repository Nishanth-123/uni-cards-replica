import { useState } from "react";
import "./HomePage.css";
import BannerSection from "../../components/bannerSection/BannerSection";
import Header from "../../components/header/Header";
import WhiteSection from "../../components/whiteSection/WhiteSection";
import BlackSection from "../../components/blackSection/BlackSection";

export default function HomePage() {
  const [footerVisible, setFooterVisible] = useState<boolean>(false);
  return (
    <div className="root">
      <div className="header">
            <Header />
        </div>
      <div className="body">
        <BannerSection />
        <WhiteSection />
        <BlackSection />
      </div>
      {footerVisible && <div className="footer"></div>}
    </div>
  );
}
