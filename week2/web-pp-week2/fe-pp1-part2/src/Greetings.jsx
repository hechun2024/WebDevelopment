import "./Greetings.css";

export default function Greetings(props) {
  let greeting;
  switch (props.lang) {
    case "fi":
      greeting = "Moi";
      break;
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
  }

  return (
    <div className="Greetings" lang={props.lang}>
      {greeting} {props.children}
    </div>
  );
}
