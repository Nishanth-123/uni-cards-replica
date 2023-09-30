import SBM from "../../assets/svgs/SBM.svg";

export default function ExperienceSection() {

  const spanTextStyle = {
    background: "linear-gradient(90deg, #8fffef 25%, #f9f490)",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  };
  const textStyle = {
    fontSize: "40px",
    color:"white"
  } 

  const descStyle = {
    fontSize: "25px",
    color: "#BFC9CC",
    margin:"0",
    padding:"0"
  }

  return (
    <div
      style={{
        padding: "5% 10%",
        display: "flex",
        flexDirection: "column",
        backgroundColor:"#222627"
      }}
    >
      <p style={textStyle}>
        <center>
          At Uni, we’re committed to <span style={spanTextStyle}>delivering an unmatched credit experience </span>for millions of Indians.
        </center>
      </p>
      <p style={descStyle}>
        <center>On this mission, we’ve partnered with some of</center>
      </p>
      <p style={descStyle}>
        <center> the best in the business.</center>
      </p>
      <div style={{
        padding:"10%",
        display: "flex", 
        justifyContent:"center",
        alignItems:"center"
      }}>
        <img src={SBM} style={{ transform: `scale(${1.5})` }}/>
      </div>
    </div>
  );
}
