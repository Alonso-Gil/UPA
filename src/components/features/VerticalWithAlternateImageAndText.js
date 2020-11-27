import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Evento1 from "images/Evento1.jpeg";
import Evento3 from "images/Evento2.jpeg";
import Evento2 from "images/Evento3.jpeg";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-justify max-w-xl`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center text-justify`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/2 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        Evento1,
      subtitle: "Eventos Académicos",
      title: "Conferencias y congresos",
      description:
        "Se mantiene un alto grado de compromiso con los alumnos, por ello se buscan distintos eventos en los que su asistencia pueda enriquecer el conocimiento de los temas relacionados con la carrera y sus innovaciones.",
      url: ""
    },

    {
      imageSrc:
         Evento2,
      subtitle: "",
      title: "Excursiones profesionales",
      description:
        "Es importante que el conocimiento no sólo sea teórico, por lo tanto además de implementar materias prácticas en el plan de estudios, se estimula a los alumnos mediante excursiones a industrias del sector energético o aquellas que implementan procesos térmicos o eléctricos de interés.",
      url: ""
    },

    {
      imageSrc:
        Evento3,
      subtitle: "",
      title: "Eventos recreativos",
      description:
        "Para este programa académico es realmente importante que además de formar profesionistas de excelencia en el ámbito académico, sean personas excepcionales con diferentes habilidades. Por este motivo, se organizan algunas actividades recreativas para fomentar la sana convivencia entre los alumnos al realizar actividades que fomenten trabajo en equipo, control de estrés, adaptación, entre otras.",
      url: ""
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Eventos</HeadingTitle>
          <HeadingDescription>
              Expoenergía es el nombre del evento que se tiene a fin de año en el mes de Diciembre por parte de la carrera de 
              Ingeniería en Energía,cuyo objetivo es aumentar la curiosidad y creatividad de los alumnos, impulsándolos a realizar diferentes tipos de proyectos para presentarlos en este festival de ciencia.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
