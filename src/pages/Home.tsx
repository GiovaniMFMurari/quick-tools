import { useState } from "react";
import reactLogo from '../assets/react.svg'
import AzureFnConfigConverter from "../components/azureFnConfigConverter/AzureFnConfigConverter";

export default function Home() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h1>Quick Tools</h1>
      <div className="card">
        <AzureFnConfigConverter></AzureFnConfigConverter>
      </div>
    </div>
  );
}
