import { Row, Space } from "antd";

interface BenefitSectionProps {
  imagePath: string;
  darkText: string;
  greyText: string;
  logoFirst: boolean;
  subText?: string;
}

export default function BenefitSection(props: BenefitSectionProps) {
  const spanTextStyle = {
    color: "#9ea7ae",
  };
  const textStyle = {
    opacity: 1,
    fontSize: 40,
    margin: 10,
    tabSize: 4,
    fontWeight: "bold",
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
      {props.logoFirst && (
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
              width: "400px",
              height: "400px",
            }}
          />
        </div>
      )}
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
          {props.darkText} <span style={spanTextStyle}>{props.greyText}</span>
        </p>
        {
            props.subText && (
            <p style={{...textStyle, color: "#9ea7ae", fontSize: 20, fontWeight: "normal"}}>{props.subText}</p>
            )
        }
      </div>
      {!props.logoFirst && (
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
              width: "400px",
              height: "400px",
            }}
          />
        </div>
      )}
    </Row>
  );
}
