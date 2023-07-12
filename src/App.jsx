import "./App.css";
import MyInterests from "./sections/MyInterests";
import Presentation from "./sections/Presentation";
import AcercaDe from "./sections/AcercaDe";
import Contacto from "./sections/Contacto";

function App() {
  return (
    <>
      <Presentation />
      <AcercaDe />
      <MyInterests id="carta"/>
      <Contacto />
    </>
  );
}

export default App;
