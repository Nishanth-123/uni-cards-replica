import { Row } from "antd";
import appStore from "../../assets/svgs/app_store.svg";
import playStore from "../../assets/svgs/play_store.svg";

interface DownloadBtnProps{
  logoPath: string,
  text: string
}
function DownloadBtn(props: DownloadBtnProps){
  
  return <a style={{
    padding:"16px 20px",
    color: "black",
    fontSize:"20px",
    borderRadius:"10px",
    border:"2px solid black",
    backgroundColor:"transparent"
  }}><span><img src={props.logoPath}/></span> {props.text}</a>
}
export default function DownloadSection() {

  const textStyle = {
    fontSize:"40px"
  }


  return (
    <Row
      justify="space-between"
      align="middle"
      style={{
        padding: "5% 10%",
        width: "100%",
        background:"linear-gradient(158deg, #5AD6C4, #FDEF78)",
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
        <p style={textStyle}>Download now to get started</p>
        
      </div>
      <div
        style={{
          display: "flex",
          width: "35%",
          height:"100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "middle",
        }}
      >
        
        <DownloadBtn logoPath={playStore} text="Google Play"/>
        <DownloadBtn logoPath={appStore} text="App Store"/>
      </div>
    </Row>
  );
}
