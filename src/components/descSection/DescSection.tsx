
import { Col } from "antd";
import downArrow from "../../assets/svgs/down_arrow.svg";

export default function DescSection(){

    const spanTextStyle = {
        color: "#9ea7ae"
    }
    const textStyle = {
        opacity:1,
        fontSize:40,
        margin: 10,
        tabSize: 4,
    }

    return (
        <div style={{
            width: "80%",
            paddingLeft:"10%",
            paddingRight:"10%",
            paddingTop: "100px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Col style={{
                minWidth:"100%",
                paddingBottom:"80px",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <p style={textStyle}><center>Earn 1% assured cashback <span style={spanTextStyle}>on your spends. Get</span> 5X</center></p>
                <p style={textStyle}><center>more value than cashback <span style={spanTextStyle}> at the Uni Store. Enjoy</span></center></p>
                <p style={textStyle}><center><span style={spanTextStyle}>round the clock </span>Whatsapp support. <span style={spanTextStyle}>And it's</span></center></p>
                <p style={textStyle}><center>lifetime free<span style={spanTextStyle}>; no joining fee, no annual charges.</span></center></p>
            </Col>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div style={{
                    background:"linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
                    width:"150px",
                    height:"150px",
                    display:"flex",
                    borderRadius:"50%",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                <img alt="down_arrow" src={downArrow} loading="lazy"/>
                </div>
            </div>
        </div>
    );
}