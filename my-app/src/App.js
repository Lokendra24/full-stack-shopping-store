import Header from './Component/Header';
import Herosection from './Component/Herosection';
import Categories from './Component/Categories';
import Popular from './Component/Popular';
import NewsLetter from './Component/NewsLetter';
import Footer from './Component/Footer';
import ProductDetails from './Component/ProductDetails';
import SingleCategory from './Component/SingleCategory';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ContextApi from './Context/ContextApi';

function App() {

  return (
  <BrowserRouter>
    <ContextApi >
     <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<><Herosection /><Categories  /><Popular /></>} />
          <Route path='/details/:query' element={<ProductDetails />} />
          <Route path='/category/:query' element={<SingleCategory />} />
        </Routes>
       <NewsLetter />
      <Footer />
     </div>
    </ContextApi>
  </BrowserRouter>  
  );
}

export default App;


// 0660ec1d81a3309f428c97d1ac9f906b8116b93255b66844cd3dad9e6e16097c821219f454d7c064971f0759b41b2b9ec8f9faa652033df87453e14090f3e81e57fd60766a2453d819566c22e795b6f510b19856477f67b42e8fcb0f46009897257c9f43ccc22248c2b9f26b17ffc5124f927e5f93c8dc5ed3eaa72f8e9b9c67