import "./BoxColor.css";

export default function BoxColor(props) {
  let bgColor =
    "#" +
    props.r.toString(16).padStart(2, "0") +
    props.g.toString(16).padStart(2, "0") +
    props.b.toString(16).padStart(2, "0");
  console.log(bgColor);
  const fontColor = props.fontColor

  const boxStyle = {
    backgroundColor: bgColor,
    color: fontColor,
  }

  return <div className="BoxColor" style={boxStyle}>
    rgb({props.r}, {props.g}, {props.b}) <br />
    {bgColor}
  </div>;
}
