import './App.css';
import Rutas from './routes/Rutas';
import GlobalProvider from './Context/GlobalContext';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <CartProvider>
          <Rutas />
        </CartProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
