import { Row } from "antd";

interface BenefitSectionProps {
  imagePath: string;
  whiteText: string;
  gradientText: string;
  subText?: string;
}

export default function AppScreenSection(props: BenefitSectionProps) {
  const spanTextStyle = {
    background: "linear-gradient(90deg, #8fffef 25%, #f9f490)",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  };
  const textStyle = {
    opacity: 1,
    fontSize: 40,
    margin: 10,
    tabSize: 4,
    fontWeight: "bold",
    color: "white",
    lineHeight: 1.2,
    
  };

  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        padding: "5% 10%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "55%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <p style={textStyle}>
          {props.whiteText} <span style={spanTextStyle}><br />{props.gradientText}</span>
        </p>
        {props.subText && (
          <p
            style={{
              ...textStyle,
              color: "#9ea7ae",
              fontSize: 20,
              fontWeight: "normal",
            }}
          >
            {props.subText}
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          width: "35%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={props.imagePath}
          style={{
            maxWidth: "100%"
          }}
        />
      </div>
    </Row>
  );
}
