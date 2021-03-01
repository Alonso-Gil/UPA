import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Uni from "images/navbar/UPA.jpeg";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw` -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("${Uni}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href='#Plan'>
        Plan de estudios
      </NavLink>
      <NavLink href="#Eventos">
        Eventos
      </NavLink>
      <NavLink href="#Certificacion">
        Certificación
      </NavLink>
      <NavLink href="#Noticias">
        Noticias
      </NavLink>
      <NavLink href="#Mapa">
        Mapa
      </NavLink>
    </NavLinks>
  ];

  return (
    <Container>

      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
      </HeroContainer>

    </Container>
  );
};
