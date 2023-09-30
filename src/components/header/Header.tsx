import { Row } from "antd";
import logo from "../../assets/svgs/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <Row justify="space-between" align="middle">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <a
        href="https://paychek.uni.club/"
        className="paycheck"
        >
        Uni Paycheck
      </a>
    </Row>
  );
}
