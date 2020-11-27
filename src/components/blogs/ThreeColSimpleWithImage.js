import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import Certificado1 from 'images/ciees.png';
import Certificado2 from 'images/cacei.jpg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/2`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-lg lg:max-h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg text-justify`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        Certificado1,
      category: "CIEES",
      title: "Los Comités Interinstitucionales para la Evaluación de la Educación Superior (CIEES) son el organismo de México que asegura la calidad de los programas educativos y de las instituciones de educación superior (IES)(CIEES, 2019). La carrera de Ingeniería en Energía obtuvo el Nivel 1 en este reconocimiento, lo que significa que es un programa de buena calidad, consolidado, que reúne todos o casi todos los requisitos establecidos en los marcos de referencia y que a juicio de los integrantes de la CPAE y de los miembros del comité respectivo es un buen programa (CIEES, 2018).",
      url:""
    },
    {
      imageSrc:
        Certificado2,
      category: "CACEI",
      title: "El Consejo de Acreditación de la Enseñanza de la Ingeniería, A. C., (CACEI) es una asociación cuyo objetivo primordial es, mediante la acreditación de los programas educativos en el área de las ingenierías, promover que las instituciones de educación superior (IES) ofrezcan educación de calidad a los estudiantes inscritos en programas de ingeniería (CACEI, 2015). El programa académico de Ingeniería en Energía obtuvo una acreditación de esta asociación, lo que indica que cumple con determinados criterios y parámetros de calidad, además de tener pertenencia social, es decir, que tiene como objetivo formar alumnos como factores de cambio en esta área (CACEI, 2015).",
      url: ""
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Certificación</HeadingTitle>
          
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link href={post.url}>Ver Certificado</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
