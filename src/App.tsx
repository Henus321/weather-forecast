import Header from './components/header/Header';
import Forecast from './components/forecast/Forecast';
import Footer from './components/footer/Footer';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
