import circles from "../../assets/svgs/circles.png";
import screen1 from "../../assets/svgs/app_screen_1.webp";
import screen2 from "../../assets/svgs/app_screen_2.webp";
import AppScreenSection from "../appScreenSection/AppScreenSection";
import BubbleSection from "../bubbleSection/BubbleSection";
import ExperienceSection from "../experienceSection/ExperienceSection";
import CompliantSection from "../compliantSection/CompliantSection";
import DownloadSection from "../downloadSection/DownloadSection";

export default function BlackSection() {
  return (
    <div
      style={{
        background: "black",
        width: "100%",
        height: "auto",
        position:"relative"
      }}
    >
      <img
        src={circles}
        style={{ width: "70%", top: "0", position:"absolute"}}
      />
      <AppScreenSection
        imagePath={screen1}
        whiteText="We’ve all heard of instant groceries, now say hello to"
        gradientText="instant credit."
        subText="0% hassle, 100% paperless. Get your
    Uni Card instantly."
      />
      <AppScreenSection
        imagePath={screen2}
        whiteText="With Uni,"
        gradientText="you’re always in control."
        subText="Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app."
      />
      <BubbleSection />
      <ExperienceSection />
      <CompliantSection />
      <DownloadSection />
    </div>
  );
}
