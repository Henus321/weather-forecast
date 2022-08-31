import Header from './components/header/header.component';
import Forecast from './components/forecast/forecast.component';
import Footer from './components/footer/footer.component';

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
