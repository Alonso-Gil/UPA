import React from "react"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import NavBar from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Mision from "components/features/TwoColWithButton.js";
import PlanEstudios from "components/faqs/TwoColumnPrimaryBackground";
import ExpoEnergia from "components/features/VerticalWithAlternateImageAndText.js";
import Certificacion from "components/blogs/ThreeColSimpleWithImage.js";
import CapEstudiantil from "components/blogs/ThreeColSimpleWithImage.js";
import Noticias from "components/testimonials/TwoColumnWithImage.js"; 
import Egresados from "components/features/Egresados.js"; 
import Movilidad from "components/features/Movilidad.js"; 
import Investigacion from "components/features/Investigacion.js"; 
import Mapa from "components/testimonials/SimplePrimaryBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Organigrama from "components/testimonials/Organigrama.js"
// import Header from "components/navbar/Header";
function App() {
  return (
    <AnimationRevealPage>

      <NavBar/>

      <Mision/>
      <PlanEstudios/>
      <ExpoEnergia />
      {/* <CapEstudiantil/> */}
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
