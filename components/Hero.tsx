"use client";
import Button from "@/shared/button/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection>
        <HeroTitle>Find, book, rent a car—quick and super easy!</HeroTitle>
        <HeroDescription>
          Streamline your car rental experience with our effortless booking
          process.
        </HeroDescription>
        <Button aria-label="Explore available cars">Explore Cars</Button>
      </HeroSection>

      <HeroImageSection>
        <HeroImageWrapper>
          <Image
            src="/hero.png"
            alt="A car representing the hero section"
            fill={true} 
            style={{ objectFit: "contain" }}
            priority
          />
        </HeroImageWrapper>
        <HeroBg aria-hidden="true" />
      </HeroImageSection>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 0;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const HeroSection = styled.section`
  flex: 1;
  padding-top: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 640px) {
    padding-top: 9rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.2;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1280px) {
    font-size: 3.75rem;
  }
  @media (min-width: 1536px) {
    font-size: 4.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 27px;
  color: #5e6879;
  font-weight: 300;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const HeroImageSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;

  @media (min-width: 1280px) {
    flex: 1.5;
    justify-content: flex-end;
    height: 100vh;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 400px;
  z-index: 0;

  @media (min-width: 640px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 590px;
  }
  @media (min-width: 1280px) {
    width: 100%;
    height: 100%;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  right: 25%;
  top: auto;
  background-image: url("/hero-bg.png");
  background-repeat: round;
  z-index: -1;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (min-width: 640px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 590px;
  }
  @media (min-width: 1280px) {
    top: -6rem;
    right: -50%;
    height: 100vh;
  }
`;
