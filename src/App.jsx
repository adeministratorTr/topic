import Home from 'pages/Home';
import Header from 'components/Header';

import './App.css';

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
