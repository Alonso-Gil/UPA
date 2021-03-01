import React from "react"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage" // Componente para renderizar, todos los componentes tienen que estar dentro de el
import NavBar from "components/navbar/Navbar.js";
import Mision from "components/informacion/Mision.js";
import PlanEstudios from "components/plan/Plan";
import ExpoEnergia from "components/informacion/Expo.js";
import Certificacion from "components/certificacion/Certificacion.js";
import Noticias from "components/noticias/Noticias.js"; 
import Egresados from "components/informacion/Egresados.js"; 
import Movilidad from "components/informacion/Movilidad.js"; 
import Investigacion from "components/informacion/Investigacion.js"; 
import Mapa from "components/mapa/Mapa.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Organigrama from "components/organigrama/Organigrama.js"
// Componente principal donde estan acomodados en orden de presentacion los componentes para su renderizacion
function App() {
  return (
    <AnimationRevealPage>

      <NavBar/>
      <Mision/>
      <PlanEstudios/>
      <ExpoEnergia />
      <Certificacion />
      <Egresados/>
      <Movilidad/>
      <Investigacion/>
      <Noticias/>
      <Mapa/>
      <Organigrama/>
      <Footer/>
    
    </AnimationRevealPage>
  );
}

export default App;
