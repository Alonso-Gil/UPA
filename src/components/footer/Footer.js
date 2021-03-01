import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/UPA.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-logo.svg";

const Container = tw(ContainerBase)`bg-white text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`
const fecha = new Date().getFullYear();
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 text-black border-transparent hocus:text-blue-700 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-black  transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link href="#Plan">Plan de estudios</Link>
            <Link href="#Eventos">Eventos</Link>
            <Link href="#Certificacion">Certificación</Link>
            <Link href="#Noticias">Noticias</Link>
            <Link href="#Mapa">Mapa</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/jonhf.aguirresamano">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020 - {fecha}, UPA Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
