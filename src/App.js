import logo from './logo.svg';
import './App.css';

// Import Components
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import { pageBgColor } from "./components/color/Color.js";


function App() {
  return (
    <div className="App" style={{'backgroundColor': pageBgColor}}>
        <Header />
        <Footer />
    </div>
  );
}

export default App;
