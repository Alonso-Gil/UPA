//En este aparatado se despliega la imagen del organigrama 
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
import Organigrama from 'images/organigrama/Organigrama.png';

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-white text-blue-700`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

//En este apartado es en donde se pone el nombre de la importacion realizada 
const Image = styled.div(`background-image: url("${Organigrama}");`,
tw`rounded flex-shrink-0 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8 justify-self-stretch `);
  // md:w-1/2 lg:w-5/12 xl:w-1/2 h-80 md:h-144

export default ({
  subheading = "",
  heading = "Organigrama",
  description = "",
  imageSrc=Organigrama
      
    
  
}) => {
  
  return (
    <PrimaryBackgroundContainer>
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
