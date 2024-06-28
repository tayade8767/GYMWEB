/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { lightTheme } from './Utils/Themes'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import styled, { ThemeProvider } from'styled-components'
import Navbar from './Componants/Navbar';
import Home from './Pages/Home';
import ShopListing from './Pages/ShopListing'
import ProductsDetails from './Pages/ProductsDetails'
import Cart from './Pages/Cart'
import Favourite from './Pages/Favourite'



//   this is for the container that we are going to make

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.bg };
    color: ${({ theme }) => theme.text_primary });
    overflow-x: hidden;
    overflow-y: hidden;
    transition: all 0.2s ease;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='shop' exact element={ <ShopListing/> } />
          <Route path='/favourite' exact element={ <Favourite/> } />
          <Route path='/cart' exact element={ <Cart/> } />
          <Route path='/shop/:id' exact element={ <ProductsDetails/> } />
        </Routes>
          akash
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App