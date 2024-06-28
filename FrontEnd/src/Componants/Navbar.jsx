/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';
import LogoImg from '../Utils/Images/Logo.png'
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";

//   This is the css of the Navbar start 

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 34px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Correctly reference NavLink here
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const Mobileicons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const TextButton = styled.div`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

//   NavBar css end


function Navbar() {

const [isOpen, setisOpen] = useState(false);
  
  return (
    <Nav>
      <NavbarContainer>
      <MobileIcon onClick={() => setisOpen(!isOpen)}>
        <MenuRounded style={{ color:"inherit" }} />
      </MobileIcon>
        <NavLogo>
          <Logo src={LogoImg}/>
        </NavLogo>
        <NavItems>
          <Navlink to="/" >Home</Navlink>
          <Navlink to="/Shop" >Shop</Navlink>
          <Navlink to="/New_Arrivals" >New Arrivals</Navlink>
          <Navlink to="/Orders" >Orders</Navlink>
          <Navlink to="/Contact" >Contact</Navlink>
        </NavItems>
        {  isOpen && (
          <MobileMenu>
            <Navlink to='/' onClick={() => setisOpen(!isOpen)} >Home</Navlink>
            <Navlink to="/Shop" onClick={() => setisOpen(!isOpen)} >Shop</Navlink>
            <Navlink to="/New_Arrivals" onClick={() => setisOpen(!isOpen)} >New Arrivals</Navlink>
            <Navlink to="/Orders" onClick={() => setisOpen(!isOpen)} >Orders</Navlink>
            <Navlink to="/Contact" onClick={() => setisOpen(!isOpen)} >Contact</Navlink>
          </MobileMenu>
        )

        }
        <Mobileicons>
        <Navlink to="/search" >
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite" >
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/cart" >
          <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
        </Mobileicons>

        <ButtonContainer>
          <Navlink to="/search" >
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite" >
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Navlink to="/cart" >
          <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlink>
          <Button text="SignIn" small />
        </ButtonContainer>

      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
