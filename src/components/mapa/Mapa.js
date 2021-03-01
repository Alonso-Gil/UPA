//Este componente es el encargado de mostrar el titulo e imagen del mapa 
//En dado caso de querer cambiar la/las imagen/es , solo hacer la importacion como aparece abajo
//guardar la imagen en el apartado correspondiende y poner nombre de imagen junto con su correcta 
//extencion (png,jpeg,etc)
import React, {useState} from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import MapaUPA from 'images/mapa/MapaUPA.jpg';

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-blue-800 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;
// En este apratado es en dodnde si se desea se puede cambiar la imagen del mapa
const Image = styled.div(`background-image: url("${MapaUPA}");`,
tw`rounded flex-shrink-0 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8 justify-self-stretch `);
  

export default ({
  subheading = "",
  heading = "Mapa",
  description = "",
  imageSrc=MapaUPA
      
    
  
}) => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <PrimaryBackgroundContainer id='Mapa'>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
          <Image><img src={imageSrc}/></Image>
        </HeadingContainer>
       

      </ContentWithPaddingXl>
     
    </PrimaryBackgroundContainer>
   
  );
};
