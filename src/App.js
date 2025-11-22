import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Header from './components/Header';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      {/* Future sections: About, Skills, Projects, Contact */}
    </div>
  );
}

export default App;
