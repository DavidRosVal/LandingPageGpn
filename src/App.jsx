import "./App.css";
import MyInterests from "./sections/MyInterests";
import Presentation from "./sections/Presentation";
import AcercaDe from "./sections/AcercaDe";
import Contacto from "./sections/Contacto";

function App() {
  return (
    <>
      <Presentation id="presentacion"/>
      <AcercaDe id="acercade"/>
      <MyInterests id="carta"/>
      <Contacto id="contacto"/>
    </>
  );
}

export default App;
