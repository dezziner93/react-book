import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/style.css'

import { Button, Modal } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
