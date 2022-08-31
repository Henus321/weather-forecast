import { Provider } from 'react-redux';
import { store } from './state';

import SearchBar from './components/search-bar/search-bar.component';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Hello!</h2>
        <SearchBar />
      </div>
    </Provider>
  );
}

export default App;
