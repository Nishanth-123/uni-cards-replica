export default function CompliantSection(){

    const textStyle = {
        fontSize: "25px",
        color:"#BFC9CC",
        margin:"0",
      } 

    return (
        <div style={{
            padding:"5% 10%",
            backgroundColor:"black"
        }}>
            <p style={textStyle}><center>Please note that to stay compliant with RBI guidelines, we have</center></p>
            <p style={textStyle}><center>discontinued Pay 1/3rd and Pay 1/2 cards for the time being.</center></p>
        </div>
    );
}