import { useState } from "react";
import { Input } from "antd";
import correct from "../assets/svgs/correct.svg";
import error from "../assets/svgs/error.svg";
import close from "../assets/svgs/close.svg";

interface SubscribeFormProps {
  enabled: boolean;
}

enum IconType {
  NONE,
  CORRECT,
  ERROR,
  CLOSE,
}

export default function SubscribeForm(props: SubscribeFormProps) {
  const [input, setInput] = useState<string>("");
  const [icon, setIcon] = useState<IconType>(IconType.NONE);
  const maxLength = 10;

  const onInputChange = (text: string) => {
    if (text.length < 1) {
      setIcon(IconType.NONE);
    } else if (text.length < maxLength) {
      setIcon(IconType.CLOSE);
    } else if (text.length == maxLength) {
      if (/[^0-9]/.test(text)) {
        setIcon(IconType.ERROR);
      } else {
        setIcon(IconType.CORRECT);
      }
    }
    setInput(text);
  };

  const getIconPath = (icon: IconType): string => {
    switch (icon) {
      case IconType.CLOSE:
        return close;
      case IconType.CORRECT:
        return correct;
      case IconType.ERROR:
        return error;
    }
    return "";
  };
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          padding: "5px",
          borderRadius: "12px",
        }}
      >
        <Input
          placeholder="Enter Phone Number"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          bordered={false}
          maxLength={10}
          color="white"
          size="small"
          style={{ color: "whitesmoke", fontSize:"24px", width:"250px" }}
        />
        <span style={{ width: "24px" }}>
          {icon !== IconType.NONE ? <img src={getIconPath(icon)} onClick={()=>{
            if(icon === IconType.CLOSE){
                setIcon(IconType.NONE);
                setInput("");
            }
          }}/> : null}
        </span>
        <button
          type="submit"
          style={{
            padding: "15px 12px",
            width: "110px",
            justifyContent:"center",
            alignContent:"center",
            borderRadius: "12px",
            backgroundColor: "yellow",
            display:"inline-flex",
            opacity: (props.enabled && (icon === IconType.CORRECT || input.length < 1)) ? 1 : 0.8,
            cursor: (props.enabled && (icon === IconType.CORRECT || input.length < 1)) ? "pointer" : "not-allowed"
          }}
        >
          <span>Apply Now</span>
        </button>
      </div>
    </form>
  );
}
