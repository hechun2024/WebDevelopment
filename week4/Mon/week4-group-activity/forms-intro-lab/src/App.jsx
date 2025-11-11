import { useState } from "react";
import "./App.css";
import ContactUs from "./ContactUs.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <ContactUs />;
}

export default App;
