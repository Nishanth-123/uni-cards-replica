import { Row, Col } from "antd";
import whatsappBubbe from "../../assets/svgs/whatsapp_bubble.webp";
import antivirusBubble from "../../assets/svgs/antivirus_bubble.webp";
import rupeeBubble from "../../assets/svgs/rupee_bubble.webp";
import dssCert from "../../assets/svgs/pcidss_cert.svg";

interface BubbleItemProps {
  imagePath: string;
  text: string;
  desc?: string;
  descImagePath?: string;
}

export function BubbleItem(props: BubbleItemProps) {
  const textStyle = {
    color: "white",
    fontSize:"25px",
    maxWidth: "300px",

  };
  const descStyle = {
    color: "#8E9393",
    fontSize: "18px",
    maxWidth: "300px"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <img
          src={props.imagePath}
          style={{
            maxWidth: "100%",
            height: "150px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={textStyle}>{props.text}</p>
        {props.desc && <p style={descStyle}>{props.text}</p>}
        {props.descImagePath && (
          <img
            src={props.descImagePath}
            style={{
              maxWidth: "100%",
              width: "25%",
              height: "25%",
              paddingTop:"10px"
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function BubbleSection() {
  return (
    <Row
      justify="space-between"
      align="top"
      style={{
        padding: "5% 10%",
        width: "100%",
      }}
    >
      <BubbleItem
        imagePath={whatsappBubbe}
        text="Help, just a WhatsApp away. Anytime, Anyday."
        desc="During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime."
      />
      <BubbleItem
        imagePath={rupeeBubble}
        text="No hidden charges, no last minute surprises."
        desc="100% money back guarantee if a charge is applied without your knowledge."
      />
      <BubbleItem
        imagePath={antivirusBubble}
        text="Super secure. Because we care about your money."
        descImagePath={dssCert}
      />
    </Row>
  );
}
