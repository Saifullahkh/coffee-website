import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Component/MyNavbar';
import Home from './page/Home';
import Product from './page/Product';
import Menu from './page/Menu';
import Place from './page/Place';
import Blog from './page/Blog';
import Footer from './page/Footer';
import Special from './page/Special';



function App() {
  return (
    <>
     <MyNavbar/>
     <Home />
     <Special />
     <Product />
     <Menu />
     <Place />
     <Blog />
     <Footer />
    </>
  );
}

export default App;
