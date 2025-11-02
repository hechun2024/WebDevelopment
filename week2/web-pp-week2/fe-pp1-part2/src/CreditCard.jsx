import "./CreditCard.css";

export default function CreditCard(props) {
  let imgSrc;

  switch (props.type) {
    case "Visa":
      imgSrc = "./src/assets/images/visa.png";
      break;
    case "Master Card":
      imgSrc = "./src/assets/images/master.png";
      break;
  }

  const cardStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
  };

  return (
    <div className="CreditCard" style={cardStyle}>
      <img src={imgSrc} alt="Credit Card Logo" id="cardLogo" />
      <div id="cardNumber">
        ••••&emsp;••••&emsp;••••&emsp;{props.number.slice(-4)}
      </div>
      <div id="cardInfo">
        Expires {props.expirationMonth.toString().padStart(2, "0")}/
        {props.expirationYear % 100}&emsp;&emsp;{props.bank}
        <br />
        {props.owner}
      </div>
    </div>
  );
}
