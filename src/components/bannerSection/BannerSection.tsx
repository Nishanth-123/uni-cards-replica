import { Checkbox, Col, Row, Space } from "antd";
import nxtWaveHero from "../../assets/images/nx_wave_hero.png";
import starLogo from "../../assets/svgs/star.svg";
import SubscribeForm from "../SubscribeForm";
import { useState } from "react";

export default function BannerSection() {
  const [formEnabled, setFormEnabled] = useState<boolean>(false);
  return (
    <div style={{width:"100%", height:"100vh", position:"relative"}}>
      <Row
        style={{
          padding: "0px",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          zIndex: 5,
          position:"absolute"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 20,
              padding: "0px 20px",
            }}
          >
            <span>
              <strong>NX Wave.</strong> The next-gen credit card for those who
              love rewards.
            </span>
          </h1>
          <p style={{ padding: "0px 20px" }}>
            1% Cashback{" "}
            <span>
              <img src={starLogo} />
            </span>{" "}
            5x Rewards{" "}
            <span>
              <img src={starLogo} />
            </span>{" "}
            Zero Forex Markup
          </p>
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "inline",
              maxWidth:"400px",
              padding: "0px 20px"
            }}
          >
            <SubscribeForm enabled={formEnabled} />
            <Checkbox
              style={{fontSize: "10px"}}
              checked={formEnabled}
              onChange={(e) => setFormEnabled(e.target.checked)}
            >
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </Checkbox>
          </Space>
        </div>
        <div
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={nxtWaveHero}
            style={{
              width: "400px",
              height: "400px",
            }}
          />
        </div>
      </Row>
      <video
        autoPlay
        muted
        loop
        style={{ width:"100%", height:"100%", objectFit: "cover", position:"absolute", left:0, top:0}}
      >
        <source
          src={require('../../assets/videos/nxt_wave_bg.mp4')}
          type="video/mp4" />
      </video>
    </div>
  );
}
