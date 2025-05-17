"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/shared/button/Button";
import styled from "styled-components";

const Navbar: React.FC = () => (
  <HeaderContainer role="banner">
    <StyledNav aria-label="Main navigation">
      <LogoLink href="/">
        <Image
          src="/model-icon.png"
          alt="Brand Logo"
          width={50}
          height={50}
          priority
        />
        <BrandTitle>Car Hub</BrandTitle>
      </LogoLink>
      <Button variant="secondary" aria-label="Login Button">
        Sign In
      </Button>
    </StyledNav>
  </HeaderContainer>
);

export default Navbar;

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const StyledNav = styled.nav`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: transparent;

  @media (min-width: 640px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  font-family: "Segoe UI", "Arial", sans-serif;
  letter-spacing: 2px;
  color: #5e6879;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.07);

  @media (min-width: 640px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;
