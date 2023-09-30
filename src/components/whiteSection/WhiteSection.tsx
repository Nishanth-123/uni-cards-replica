import DescSection from "../../components/descSection/DescSection";
import BenefitSection from "../../components/benefitSection/BenefitSection";
import cashbackLogo from "../../assets/svgs/one_percent_cashback.png";
import fiveXRewards from "../../assets/svgs/five_x_rewards.png";
import forexGlobe from "../../assets/svgs/forex_globe.png";

export default function WhiteSection() {
  return (
    <div style={{width:"100%", height:"auto", position:"relative", backgroundColor:"white"}}>
      <DescSection />
      <BenefitSection
        logoFirst={false}
        imagePath={cashbackLogo}
        darkText="1% assured cashback on your spends."
        greyText="The more you spend, the more you earn."
        subText="Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions."
      />
      <BenefitSection
        logoFirst={true}
        imagePath={fiveXRewards}
        darkText="5x more value than your cashback, "
        greyText="only at the Uni Store."
      />
      <BenefitSection
        logoFirst={false}
        imagePath={forexGlobe}
        darkText="Zero Forex Markup. "
        greyText="Go international, without any fees."
      />
      <p
        style={{
          display: "block",
          fontSize: 40,
          tabSize: 4,
          fontWeight: "bold",
          margin: 0,
          padding: 0,
        }}
      >
        <center>
          Lifetime{" "}
          <span
            style={{
              color: "#5ad6c4",
            }}
          >
            free.{" "}
          </span>
          No joining fee.
        </center>
      </p>
      <p
        style={{
          display: "block",
          fontSize: 40,
          tabSize: 4,
          fontWeight: "bold",
          margin: 0,
          paddingBottom: "100px",
        }}
      >
        <center>No annual charges.</center>
      </p>
    </div>
  );
}
