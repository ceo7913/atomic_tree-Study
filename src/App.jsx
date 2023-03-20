import Header from "./components/UI/molecules/Header";
import "./styles/style.min.css";
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Header/>
            <Router/>
       </BrowserRouter>
    </div>
  );
}

export default App;
