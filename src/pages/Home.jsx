import React from 'react';
import Footer from '../components/Footer/Footer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          < ItemListContainer/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

