import "./App.css";
import Content from "./Content/Content";
import{  useState } from "react";
import InputSearch from "./InputSearch/InputSearch";


export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <InputSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>       
      <Content searchQuery={searchQuery} />
    </div>
  );
}
